# Midnight DApp connector API

**@midnight-ntwrk/dapp-connector-api v4.0.1**

***

이 API는 탈중앙화 애플리케이션(DApp)을 Midnight 지갑에 연결하기 위한 종합 인터페이스를 제공합니다. DApp이 지갑 정보를 요청하고, 트랜잭션을 생성하며, Midnight Network와 상호작용할 수 있도록 메서드, 데이터 구조, 연산을 정의합니다.

## Installation

Midnight DApp connector API는 `@midnight-ntwrk/dapp-connector-api` 네임스페이스의 NPM 패키지로 제공됩니다. Yarn 등 어떤 노드 패키지 매니저로든 설치할 수 있습니다. Yarn으로 설치하려면 다음 명령을 실행하세요:

```bash
yarn add @midnight-ntwrk/dapp-connector-api
```

## Package usage

이 패키지는 [문서](type-aliases/InitialAPI.md)에서 설명하는 타입 선언을 제공합니다.

DApp connector API는 다음과 같이 전역 변수를 통해 노출해야 합니다:

```ts
window.midnight.{someWalletIdString}
```

이렇게 하면 여러 지갑이 충돌 없이 API를 주입할 수 있고, DApp은 사용자에게 어떤 지갑에 연결할지 선택하도록 요청할 수 있습니다.

## Initial API data and methods

| Name | Description |
|------|-------------|
| **name** | 사용자에게 표시할 지갑 이름입니다. |
| **icon** | 지갑 아이콘의 URL로, 호스팅된 리소스 참조 또는 base64 인코딩된 데이터 URL입니다. |
| **apiVersion** | 이 API 인스턴스가 구현한 API 버전입니다. 예를 들어 버전 3.1.5를 구현한 지갑은 apiVersion 값으로 '3.1.5'를 제공합니다. 이 값을 통해 DApp은 API 버전별로 구분하여 각 버전에 맞는 로직을 구현하거나 특정 버전을 사용하지 않을 수 있습니다. |
| **connect** | 원하는 네트워크 ID를 매개변수로 전달하여 지갑에 연결합니다. 연결에 성공하면 [ConnectedAPI](type-aliases/ConnectedAPI.md)를 포함한 프로미스를 반환합니다. |

## Connect to a wallet

DApp은 연결하려는 지갑을 선택하고 `connect(networkId)` 메서드를 호출한 뒤 반환된 프로미스를 대기해야 합니다. 대부분의 지갑은 사용자에게 승인을 요청하는 대화상자를 표시하므로, 프로미스가 상당한 지연 후에 이행될 수 있습니다.

```ts
try {
  const desiredNetworkId = 'mainnet'
  const api = await window.midnight.{selectedWalletId}.connect('mainnet');

  // api is available here
} catch (error) {
  console.log('an error occurred', error);
}
```

## Retrieve wallet details before connection

연결을 설정하기 전에 지갑 이름, 아이콘, API 버전 등 기본 지갑 정보에 접근할 수 있습니다.

### Name and icon

지갑의 이름과 아이콘을 가져오려면 구현된 DApp connector API의 `name` 및 `icon` 프로퍼티를 사용하세요:

```ts
const name = window.midnight.{walletName}.name;
const iconURL = window.midnight.{walletName}.icon;

console.log('Wallet name', name);
console.log('Wallet icon URL', iconURL);
```

두 필드 모두 사용자의 지갑 선택을 돕기 위해 표시하는 용도입니다. XSS 취약점을 방지하려면 DApp에서 적절한 이스케이프 처리를 해야 합니다. 예를 들어, 아이콘은 `img` 태그로만 표시하고 이름은 `Text` 노드로 표시하세요.

### Get API version

API 버전을 가져오려면 다음과 같이 `apiVersion` 프로퍼티를 사용하세요:

```ts
const apiVersion = window.midnight.{walletName}.apiVersion;

console.log('API version', apiVersion);
```

DApp은 지갑이 보고한 버전이 DApp의 기대와 일치하는지 확인해야 합니다. 호환성 검증에는 semver 검사를 사용하세요.

## Query wallet state and initiate transactions

연결이 완료되면 DApp은 [ConnectedAPI](type-aliases/ConnectedAPI.md) 타입에 정의된 다양한 요청을 지갑에 보낼 수 있습니다.

가장 중요한 연산은 다음과 같습니다:

- 잔액이나 주소 등 지갑 정보를 조회합니다.
- DApp이 동일한 Indexer, Midnight Node, Proof Server 인스턴스에 연결할 수 있도록 지갑 설정을 조회합니다.
- 지갑에 전송, 트랜잭션 밸런싱, 미밸런싱 인텐트(예: 스왑 용도) 생성, 데이터 서명을 요청합니다.
- 지갑에 트랜잭션 제출을 요청합니다.

### Get the configuration

Midnight 지갑 사용자는 지갑 설정에서 노드, 인덱서, 증명 서버 URI를 구성할 수 있습니다. DApp은 사용자의 환경설정을 존중하여 이 설정을 따라야 합니다. 이는 프라이버시 관점에서 중요합니다.

반환되는 객체의 프로퍼티는 다음과 같습니다:

| Name | Description |
|------|-------------|
| **indexerUri** | Indexer HTTP URI |
| **indexerWsUri** | Indexer WebSocket URI |
| **proverServerUri** | Prover Server URI |
| **substrateNodeUri** | Substrate URI |
| **networkId** | 연결된 네트워크 ID입니다. 주로 완결성을 위해 포함되며, DApp이 원하는 네트워크에 연결되었는지 검증할 수 있습니다. |

서비스 URI 설정을 가져오려면 다음과 같이 API를 사용하세요:

```ts
try {
  const connected = await window.midnight.{selectedWalletId}.connect();
  const serviceUriConfig = await connected.getConfiguration();

  console.log('serviceUriConfig', serviceUriConfig);
} catch (error) {
  console.log('an error occurred', error);
}
```

### Read wallet information 

지갑 상태를 조회할 수 있는 여러 메서드가 있습니다. 가장 중요한 것은 `getShieldedBalances`, `getUnshieldedBalances`, `getDustBalance`, `getShieldedAddresses`, `getUnshieldedAddress`, `getDustAddress`입니다.

키와 주소는 Bech32m 형식으로 제공됩니다. 차폐 잔액과 비차폐 잔액은 토큰 타입을 키로 하는 레코드를 반환합니다.

```ts
try {
  const connected = await window.midnight.{selectedWalletId}.connect();
  const addressesAndBalances = {
    shieldedBalances: await connected.getShieldedBalances(),
    unshieldedBalances: await connected.getUnshieldedBalances(),
    dustBalance: await connected.getDustBalance(),
    shieldedAddresses: await connected.getShieldedAddresses(),
    unshieldedAddress: await connected.getUnshieldedAddress(),
    dustAddress: await connected.getDustAddress(),
  }

  console.log('addressesAndBalances', addressesAndBalances);
} catch (error) {
  console.log('an error occurred', error);
}
```

### Initiate a payment

DApp에서 결제를 시작해야 하는 경우 `makeTransfer` 메서드를 사용하면 됩니다. 이 메서드는 최종 트랜잭션에 포함되어야 할 출력 배열을 받습니다.

자세한 내용은 [InitActions 타입 문서](type-aliases/InitActions.md)를 참조하세요.

```ts
import {nativeToken} from '@midnight-ntwrk/ledger-v8'

try {
  const connected = await window.midnight.{selectedWalletId}.connect();
  const transaction = await connected.makeTransfer([{
    kind: 'unshielded',
    tokenType: nativeToken().raw,
    value: 10n**6n,
    recipient: 'mn_addr1abcdef.....'
  }]);
} catch (error) {
  console.log('an error occurred', error);
}
```

### Balance a transaction

트랜잭션을 밸런싱하려면 먼저 DApp에서 트랜잭션을 생성하세요. 트랜잭션 생성에 대해서는 [Wallet Developer Guide](/sdks/official/wallet-developer-guide)를 참조하세요.

이 메서드는 컨트랙트를 호출하는 DApp에 특히 유용합니다. DApp에서 네이티브 토큰을 사용하거나 사용자가 컨트랙트 호출 수수료를 지불하도록 하는 가장 좋은 방법입니다.

사용 사례와 밸런싱할 트랜잭션의 상태에 따라 `balanceSealedTransaction`과 `balanceUnsealedTransaction` 두 가지 메서드를 사용할 수 있습니다. 각각 지갑이 트랜잭션을 역직렬화하고 밸런싱하는 데 사용하는 방식이 다릅니다.

컨트랙트 호출 결과로 생성된 트랜잭션은 대부분 `balanceUnsealedTransaction` 호출이 필요합니다. 스왑을 완료하려면(예: `makeIntent` 호출로 시작된 경우) `balanceSealedTransaction` 호출이 필요합니다.

```ts
try {
  // assuming we have a transaction at hand here
  const transaction;

  const result = await connected.balanceUnsealedTransaction(transaction);
  const resultTransaction = result.tx;
} catch (error) {
  console.log('an error occurred', error);
}
```

### Submit a transaction

위에서 밸런싱 및 증명이 완료된 트랜잭션을 이제 제출할 수 있습니다.

```ts
try {
  const submittedTransaction = await connected.submitTransaction(resultTransaction);
} catch (error) {
  console.log('an error occurred', error);
}
```

## Examples

다음 예제들은 DApp connector API의 일반적인 사용 패턴을 보여줍니다.

### Connect

이 예제는 특정 네트워크에서 호환되는 지갑에 연결하는 방법을 보여줍니다. API 버전으로 지갑을 필터링하고, 사용자에게 선택을 요청한 뒤 연결을 설정합니다.

```ts
import { NetworkId } from '@midnight-ntwrk/midnight-js-network-id';

declare function semverMatch(version, expectedRange);
declare function askUserToSelect(wallets: InitialAPI[]): Promise<InitialAPI>;

async function connect(): Promise<ConnectedAPI> {
  const networkId = NetworkId('preprod');

  const compatibleWallets = Object.values(window.midnight ?? {})
    .filter((wallet) => semverMatch(wallet.apiVersion, '^1.0'));

  const selectedWallet = await askUserToSelect(compatibleWallets);
  const connectedWallet = await selectedWallet.connect(networkId);
  const connectionStatus = await connectedWallet.getConnectionStatus();
  assert(connectionStatus.networkId === networkId);
  return connectedWallet;
}
```

### Initiate a Night payment to an address

이 예제는 특정 비차폐 주소로 10 Night 토큰을 전송하는 방법을 보여줍니다. `makeTransfer`로 트랜잭션을 생성한 뒤 네트워크에 제출합니다.

```ts
import { nativeToken } from '@midnight-ntwrk/ledger-v8';

const connectedWallet = await connect();
const tx = await connectedWallet.makeTransfer([{
  kind: "unshielded",
  type: nativeToken().raw,
  value: 10_000_000, //10 Night
  recipient: "mn_addr1asujt0dayj4pelgq97wv75hjhscqv9epmzzpapkf8sy8c87jhh9s6e0fs3"
}]);
await connectedWallet.submitTransaction(tx);

```

### Initiate and complement a swap of Night into a shielded token

이 예제는 양자 스왑을 보여줍니다. Party #1이 10 Night 토큰을 제공하는 미밸런싱 트랜잭션을 생성하고, Party #2가 50,000 Foo 토큰을 제공하여 스왑을 완료합니다. 밸런싱 및 제출은 Party #2가 수행합니다.

```ts
// Party #1
import { nativeToken } from '@midnight-ntwrk/ledger-v8';

declare function getFooTokenType(): TokenType;

const connectedWallet = await connect();
const shieldedAddress = (await connectedWallet.getShieldedAddresses()).shieldedAddress;
// 이 호출은 다음과 같이 입력과 출력이 구성된 트랜잭션을 생성합니다:
// - 10 Night 잉여 (입력이 10 Night를 충당하며, Night 거스름돈 출력이 생성될 수 있음)
// - 50,000 Foo 토큰 부족 (50,000 Foo 토큰 출력은 있지만 입력이 없음)
const tx = await connectedWallet.makeIntent([{
  kind: "unshielded",
  type: nativeToken().raw,
  value: 10_000_000, //10 Night
}], [{
  kind: "shielded",
  type: getFooTokenType(),
  value: 50_000,
  recipient: shieldedAddress
}]);
// 여기서 `tx`를 서비스에 제출하면 상대방이 이용할 수 있게 됩니다

// Party #2
const tx = await fetchTransactionToMatch();
const connectedWallet = await connect();
// Party #2가 50,000 Foo 토큰을 제공하고 잉여 10 Night에 대한 자기 출력을 생성합니다
const balancedTx = await connectedWallet.balanceSealedTransaction(tx);
await connectedWallet.submitTransaction(balancedTx);
```

### Delegate proving

이 예제는 영지식(ZK) 증명 생성을 지갑의 증명 프로바이더에 위임하는 방법을 보여줍니다. 미증명 트랜잭션을 준비하고, 증명을 생성한 뒤, 트랜잭션을 밸런싱하여 제출합니다.

```ts
import { FetchZkConfigProvider } from '@midnight-ntwrk/midnight-js-fetch-zk-config-provider';
import { Transaction } from '@midnight-ntwrk/ledger-v8';

const keyMaterialProvider = new FetchZkConfigProvider('https://example.com');

const connectedAPI = await connect();
const provingProvider = connectedAPI.getProvingProvider(keyMaterialProvider);

// 트랜잭션과 입력을 준비합니다
const costModel = await fetchCostModel(); // For example, from Indexer, using `Block.ledgerParameters`: https://github.com/midnightntwrk/midnight-indexer/blob/main/indexer-api/graphql/schema-v3.graphql#L36
const unprovedTx = prepareUnprovenTransaction(costModel); // For example, make a contract call

// 이제 증명을 수행합니다:
const provenTx = await unprovenTx.prove(provingProvider, costModel);

// 이제 트랜잭션을 밸런싱(수수료 지불)하고 제출할 수 있습니다:
const finalTx = await connectedAPI.balanceUnsealedTransaction(provenTx);
await connectedAPI.submitTransaction(finalTx);
```

## Reference

DApp Connector API의 전체 기술 명세는 GitHub의 [DApp Connector API Specification](https://github.com/midnightntwrk/midnight-dapp-connector-api/blob/main/docs/api/_media/SPECIFICATION.md)을 참조하세요.
