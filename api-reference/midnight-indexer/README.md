# Midnight Indexer API v4

Midnight Indexer API는 GraphQL API를 제공하여 블록, 트랜잭션, 컨트랙트, DUST 생성, 차폐/비차폐 트랜잭션 이벤트 등 Midnight 블록체인에서 인덱싱된 데이터를 조회하고 구독할 수 있게 합니다. 과거 데이터 조회와 실시간 모니터링을 모두 지원합니다.

## Version information
- **Current API version**: v4.

:::warning Disclaimer
여기에 제공된 예시는 설명을 위한 것이며, API가 변경되면 업데이트가 필요할 수 있습니다. 항상 [`indexer-api/graphql/schema-v4.graphql`](https://github.com/midnightntwrk/midnight-indexer/blob/v4.0.1/indexer-api/graphql/schema-v4.graphql)을 최신 정보의 기준으로 참고하세요. 최신 스키마에 맞게 쿼리를 적절히 수정하세요.
:::

## GraphQL schema

GraphQL 스키마는 [`indexer-api/graphql/schema-v4.graphql`](https://github.com/midnightntwrk/midnight-indexer/blob/v4.0.1/indexer-api/graphql/schema-v4.graphql)에 정의되어 있습니다. 모든 쿼리, 뮤테이션, 구독과 해당 타입, 인수 및 반환 구조를 명시합니다.

## Overview of operations

- **Queries**: 블록, 트랜잭션, 컨트랙트 액션, DUST 생성 상태를 조회합니다.
  예시:
    - 최신 블록 또는 해시나 높이로 특정 블록을 조회합니다.
    - 해시나 식별자로 트랜잭션을 조회합니다.
    - 특정 블록이나 트랜잭션 offset에서 컨트랙트 액션의 현재 상태를 확인합니다.
    - 컨트랙트가 보유한 비차폐 토큰 잔고를 조회합니다.
    - Cardano 스테이크 키의 DUST 생성 상태를 조회합니다.

- **Mutations**: 지갑 세션을 관리합니다.
    - `connect(viewingKey: ViewingKey!)`: 뷰잉 키와 연결된 세션을 생성합니다.
    - `disconnect(sessionId: HexEncoded!)`: 기존에 설정된 세션을 종료합니다.

- **Subscriptions**: 실시간 업데이트를 수신합니다.
    - `blocks`: 새로 인덱싱된 블록을 스트리밍합니다.
    - `contractActions(address, offset)`: 컨트랙트 액션을 스트리밍합니다.
    - `shieldedTransactions(sessionId, ...)`: 관련 트랜잭션과 선택적 진행 상태 업데이트를 포함한 차폐 트랜잭션 업데이트를 스트리밍합니다.
    - `unshieldedTransactions(address)`: 특정 주소의 비차폐 트랜잭션 이벤트를 스트리밍합니다.
    - `dustLedgerEvents(id)`: DUST 원장 이벤트를 스트리밍합니다.
    - `zswapLedgerEvents(id)`: Zswap 원장 이벤트를 스트리밍합니다.

## API endpoints

Midnight Indexer API는 용도에 따라 두 가지 유형의 엔드포인트를 제공합니다.

### HTTP endpoint (queries and mutations)

일회성 쿼리와 뮤테이션에는 HTTP 엔드포인트를 사용합니다. 이 엔드포인트는 데이터 조회를 위한 표준 GraphQL 쿼리와 지갑 세션 관리를 위한 뮤테이션을 지원합니다.

```shell
POST https://<host>:<port>/api/v4/graphql
Content-Type: application/json
```

### WebSocket endpoint (subscriptions)

실시간 데이터 스트리밍에는 WebSocket 엔드포인트를 사용합니다. 이 엔드포인트를 통해 블록체인에서 발생하는 블록, 트랜잭션 및 기타 이벤트를 구독할 수 있습니다.

```shell
wss://<host>:<port>/api/v4/graphql/ws
Sec-WebSocket-Protocol: graphql-transport-ws
```

## Core scalars

API는 블록체인 전용 데이터 형식을 표현하기 위해 커스텀 스칼라 타입을 사용합니다. 쿼리를 작성하고 응답을 해석하려면 이러한 타입을 이해하는 것이 중요합니다.

- `HexEncoded`: 해시, 주소, 세션 ID에 사용되는 16진수 인코딩 바이트입니다.
- `ViewingKey`: 지갑 세션용 16진수 또는 Bech32 형식의 뷰잉 키입니다.
- `Unit`: 데이터를 반환하지 않는 뮤테이션의 빈 반환 타입입니다.
- `UnshieldedAddress`: `mn_addr_test1...`과 같은 Bech32m 형식의 비차폐 주소입니다. 비차폐 토큰 작업에 사용됩니다.

## Input types

다음 입력 타입은 블록, 트랜잭션, 컨트랙트 액션의 쿼리 파라미터를 지정하는 데 사용됩니다.

### BlockOffset (oneOf)

해시 또는 높이로 블록을 지정합니다:

- `hash`: HexEncoded - 블록 해시
- `height`: Int - 블록 높이

### TransactionOffset (oneOf)

해시 또는 식별자로 트랜잭션을 지정합니다:

- `hash`: HexEncoded - 트랜잭션 해시
- `identifier`: HexEncoded - 트랜잭션 식별자

### ContractActionOffset (oneOf)

컨트랙트 액션 위치를 지정합니다:

- `blockOffset`: BlockOffset - 블록(해시 또는 높이)으로 조회
- `transactionOffset`: TransactionOffset - 트랜잭션(해시 또는 식별자)으로 조회

## Example queries and mutations

:::note
이 예시는 참고용입니다. 정확한 필드 이름과 구조는 [스키마 파일](https://github.com/midnightntwrk/midnight-indexer/blob/release/3.0.0/indexer-api/graphql/schema-v3.graphql)에서 확인하세요.
:::

### block(offset: BlockOffset): Block

offset으로 블록을 조회합니다. offset을 지정하지 않으면 최신 블록을 반환합니다.

#### Query by height

```graphql
query {
  block(offset: { height: 3 }) {
    hash
    height
    protocolVersion
    timestamp
    author
    parent {
      hash
    }
    transactions {
      id
      hash
      transactionResult {
        status
        segments {
          id
          success
        }
      }
    }
  }
}
```

### transactions(offset: TransactionOffset!): [Transaction!]!

해시 또는 식별자로 트랜잭션을 조회합니다. 조건에 맞는 트랜잭션 배열을 반환합니다.

:::note
트랜잭션에서 `fees` 필드를 사용할 수 있으며, `paidFees`와 `estimatedFees` 정보를 제공합니다.
:::

#### Example: Query transactions by hash

`hash` offset 파라미터를 사용하여 특정 트랜잭션 해시부터 트랜잭션을 조회하는 예시입니다.

```graphql
query {
  transactions(offset: { hash: "3031323..." }) {
    id
    hash
    protocolVersion
    merkleTreeRoot
    block {
      height
      hash
    }
    identifiers
    raw
    contractActions {
      __typename
      ... on ContractDeploy {
        address
        state
        zswapState
        unshieldedBalances {
          tokenType
          amount
        }
      }
      ... on ContractCall {
        address
        state
        entryPoint
        zswapState
        unshieldedBalances {
          tokenType
          amount
        }
      }
      ... on ContractUpdate {
        address
        state
        zswapState
        unshieldedBalances {
          tokenType
          amount
        }
      }
    }
    fees {
      paidFees
      estimatedFees
    }
    transactionResult {
      status
      segments {
        id
        success
      }
    }
    unshieldedCreatedOutputs {
      owner
      value
      tokenType
      intentHash
      outputIndex
    }
    unshieldedSpentOutputs {
      owner
      value
      tokenType
      intentHash
      outputIndex
    }
  }
}
```

#### Example: Query transactions by identifier

특정 식별자를 사용하여 트랜잭션을 필터링하고, 생성된 비차폐 출력과 소비된 비차폐 출력을 모두 조회하는 예시입니다.

```graphql
query {
  transactions(offset: { identifier: "abc123..." }) {
    id
    hash
    unshieldedCreatedOutputs {
      owner
      value
      tokenType
    }
    unshieldedSpentOutputs {
      owner
      value
      tokenType
    }
  }
}
```


### contractAction(address: HexEncoded!, offset: ContractActionOffset): ContractAction

주어진 offset(블록 또는 트랜잭션)에서 가장 최근에 알려진 컨트랙트 액션을 조회합니다. offset을 지정하지 않으면 최신 상태를 반환합니다.

#### Example: Query latest contract action

offset을 지정하지 않고 특정 주소의 가장 최근 컨트랙트 액션을 조회하여 최신 상태를 반환하는 예시입니다.

```graphql
query {
  contractAction(address: "3031323...") {
    __typename
    ... on ContractDeploy {
      address
      state
      zswapState
      unshieldedBalances {
        tokenType
        amount
      }
    }
    ... on ContractCall {
      address
      state
      zswapState
      entryPoint
      unshieldedBalances {
        tokenType
        amount
      }
    }
    ... on ContractUpdate {
      address
      state
      zswapState
      unshieldedBalances {
        tokenType
        amount
      }
    }
  }
}
```

#### Example: Query contract action by block height

`blockOffset` 파라미터를 사용하여 특정 블록 높이에서 컨트랙트 액션을 조회하는 예시입니다.

```graphql
query {
  contractAction(
    address: "3031323...",
    offset: { blockOffset: { height: 10 } }
  ) {
    __typename
    ... on ContractDeploy {
      address
      state
      zswapState
      unshieldedBalances {
        tokenType
        amount
      }
    }
    ... on ContractCall {
      address
      state
      zswapState
      entryPoint
      unshieldedBalances {
        tokenType
        amount
      }
    }
    ... on ContractUpdate {
      address
      state
      zswapState
      unshieldedBalances {
        tokenType
        amount
      }
    }
  }
}
```

### dustGenerationStatus(cardanoRewardAddresses: [CardanoRewardAddress!]!): [DustGenerationStatus!]!

하나 이상의 Cardano 스테이크 키에 대한 DUST 생성 상태를 조회합니다.

#### Example: Query DUST generation status

Cardano 스테이크 키의 DUST 생성 상태를 확인하는 예시로, 등록 상태, Night 잔고, 생성률, 현재 용량을 포함합니다.

```graphql
query {
  dustGenerationStatus(
    cardanoRewardAddresses: [
      "stake_test1uqtgpdz0chm6jnxx7erfd7rhqfud7t4ajazx8es8xk8x3ts06psdv"
    ]
  ) {
    cardanoRewardAddress
    dustAddress
    registered
    nightBalance
    generationRate
    currentCapacity
  }
}
```

응답에는 DUST 생성 상태 및 용량에 관한 여러 필드가 포함됩니다.

#### DUST generation parameters

- 생성률: Star당 초당 8,267 Specks.
- 최대 용량: NIGHT당 5 DUST.
- `registered` 필드는 스테이크 키가 NativeTokenObservation 팔레트를 통해 등록되었는지 나타냅니다.
- 등록 데이터는 브릿지를 통해 Cardano 메인넷에서 가져옵니다.

:::tip `currentCapacity`에 대한 중요 사항

`currentCapacity` 필드는 Night UTXO 잔고와 경과 시간을 기반으로 한 최대 DUST 생성 용량을 나타냅니다. 이 값은:
- 첫 DUST 수수료 납부 전까지 정확합니다
- 수수료 납부 후에는 실제 잔고보다 높을 수 있습니다
- 수수료 납부가 차폐 트랜잭션이므로 소비된 DUST를 추적할 수 없습니다
:::

수수료 납부 후 정확한 DUST 잔고는 wallet SDK 또는 DApp Connector API를 통해 연결된 지갑에서 직접 조회하세요. 지갑 연결이 불가능한 경우 `currentCapacity`를 근사값으로 사용하세요.

## Contract action types

컨트랙트 액션은 트랜잭션 내에서 스마트 컨트랙트에 수행된 작업을 나타냅니다. 모든 ContractAction 타입은 공통 인터페이스를 구현하고 여러 필드를 공유합니다.

### Common fields

모든 ContractAction 타입(ContractDeploy, ContractCall, ContractUpdate)은 다음 공통 필드를 가진 ContractAction 인터페이스를 구현합니다:
- `address`: 컨트랙트 주소 (HexEncoded)
- `state`: 컨트랙트 상태 (HexEncoded)
- `zswapState`: 이 액션 시점의 컨트랙트별 zswap 상태 (HexEncoded)
- `transaction`: 이 액션을 포함하는 트랜잭션

### Action types

컨트랙트 액션은 다음 세 가지 타입 중 하나입니다:
- **ContractDeploy**: 최초 컨트랙트 배포
- **ContractCall**: 컨트랙트 엔트리 포인트 호출
- **ContractUpdate**: 기존 컨트랙트의 상태 업데이트

각 타입은 ContractAction 인터페이스를 구현하지만, 추가 필드가 있을 수 있습니다. 예를 들어, ContractCall은 `entryPoint` 필드와 연관된 `deploy`에 대한 참조를 포함합니다.

### Unshielded balances

모든 컨트랙트 액션 타입에는 컨트랙트가 보유한 토큰 잔고를 반환하는 `unshieldedBalances` 필드가 포함됩니다:

- **ContractDeploy**: 컨트랙트는 잔고 0으로 배포되므로 항상 빈 잔고를 반환합니다.
- **ContractCall**: 호출 실행 후 잔고를 반환합니다. 호출 중 `unshielded_inputs` 또는 `unshielded_outputs`에 의해 잔고가 변경될 수 있습니다.
- **ContractUpdate**: 유지보수 업데이트 적용 후 잔고를 반환합니다.

#### ContractBalance type

ContractBalance 타입은 컨트랙트의 토큰 보유량을 나타냅니다:

```graphql
type ContractBalance {
  tokenType: HexEncoded!  # Token type identifier
  amount: String!         # Balance amount (supports u128 values)
}
```

## Block type

Block 타입은 블록체인 블록을 나타냅니다:
- `hash`: 블록 해시 (HexEncoded)
- `height`: 블록 높이 (Int!)
- `protocolVersion`: 프로토콜 버전 (Int!)
- `timestamp`: UNIX 타임스탬프 (Int!)
- `author`: 블록 작성자 (HexEncoded, 선택적)
- `parent`: 부모 블록 참조 (Block, 선택적)
- `transactions`: 이 블록에 포함된 트랜잭션 배열 ([Transaction!]!)

## Transaction type

Transaction 타입은 블록체인 트랜잭션과 관련 데이터를 나타냅니다:
- `id`: 트랜잭션 ID (Int!)
- `hash`: 트랜잭션 해시 (HexEncoded)
- `protocolVersion`: 프로토콜 버전 (Int!)
- `transactionResult`: 트랜잭션을 원장 상태에 적용한 결과
- `fees`: 실제 납부 수수료와 예상 수수료를 포함한 수수료 정보
- `identifiers`: 트랜잭션 식별자 배열 ([HexEncoded!]!)
- `raw`: 원시 트랜잭션 내용 (HexEncoded)
- `merkleTreeRoot`: 머클 트리 루트 (HexEncoded)
- `block`: 이 트랜잭션을 포함하는 블록 참조
- `contractActions`: 이 트랜잭션 내 컨트랙트 액션 배열
- `unshieldedCreatedOutputs`: 이 트랜잭션으로 생성된 UTXO
- `unshieldedSpentOutputs`: 이 트랜잭션으로 소비된 UTXO

### TransactionResult type

트랜잭션을 원장 상태에 적용한 결과입니다:
- `status`: TransactionResultStatus (SUCCESS, PARTIAL_SUCCESS, 또는 FAILURE)
- `segments`: 부분 성공 시 세그먼트 결과의 선택적 배열

### TransactionFees type

트랜잭션의 수수료 정보입니다:
- `paidFees`: 이 트랜잭션에 대해 DUST로 실제 납부한 수수료 (String)
- `estimatedFees`: 이 트랜잭션에 대해 DUST로 산출된 예상 수수료 (String)

## Unshielded token types

비차폐 토큰은 온체인에서 공개적으로 확인 가능한 자산으로, 추적 및 조회가 가능합니다. 다음 타입은 비차폐 UTXO와 관련 데이터를 나타냅니다.

### UnshieldedUtxo

비차폐 UTXO(Unspent Transaction Output)를 나타냅니다:
- `owner`: Bech32m 형식의 소유자 주소
- `intentHash`: 이 출력을 생성한 인텐트의 해시 (HexEncoded)
- `value`: UTXO 값을 문자열로 표현 (u128 지원)
- `tokenType`: 토큰 타입 식별자 (HexEncoded)
- `outputIndex`: 생성 트랜잭션 내에서 이 출력의 인덱스
- `createdAtTransaction`: 이 UTXO를 생성한 트랜잭션 참조
- `spentAtTransaction`: 이 UTXO를 소비한 트랜잭션 참조 (미소비 시 null)

## DUST generation types

다음 타입은 DUST 생성 상태, 용량 및 관련 원장 이벤트에 관한 정보를 제공합니다.

### DustGenerationStatus

Cardano 스테이크 키의 DUST 생성 상태입니다:
- `cardanoRewardAddress`: `stake_test1...` 또는 `stake1...`과 같은 Bech32 인코딩 Cardano 스테이크 주소
- `dustAddress`: 등록된 경우 관련 DUST 주소 (HexEncoded, 선택적)
- `registered`: 이 스테이크 키의 등록 여부 (Boolean!)
- `nightBalance`: 생성을 뒷받침하는 NIGHT 잔고 (String)
- `generationRate`: 초당 Specks 단위의 생성률 (String)
- `currentCapacity`: 현재 DUST 생성 용량(Specks 단위) - 최대 가능 잔고를 나타내며, 수수료 납부 후에는 실제 잔고보다 높을 수 있음 (String)

### DustLedgerEvent

DUST 원장 이벤트는 DUST 생성 시스템의 변경 사항을 추적합니다. DUST UTXO가 생성되거나, 생성 파라미터가 업데이트되거나, 소비가 처리될 때 이벤트가 발생합니다.

다음 이벤트 타입을 사용할 수 있습니다:
- `DustInitialUtxo`: 초기 DUST UTXO 생성 이벤트
- `DustGenerationDtimeUpdate`: DUST 생성 감쇠 시간 업데이트
- `DustSpendProcessed`: DUST 소비 처리 이벤트
- `ParamChange`: DUST 파라미터 변경 이벤트

모든 DUST 원장 이벤트 타입은 다음 공통 필드를 공유합니다:
- `id`: 이벤트 ID (Int!)
- `raw`: 원시 이벤트 데이터 (HexEncoded)
- `maxId`: 전체 DUST 이벤트의 최대 ID (Int!)

## Mutations

뮤테이션을 통해 클라이언트가 지갑을 연결(세션 설정)하거나 연결을 해제할 수 있습니다.

### connect(viewingKey: ViewingKey!): HexEncoded!

지정한 지갑 뷰잉 키로 세션을 설정합니다. 차폐 트랜잭션 구독에 사용할 수 있는 세션 ID를 반환합니다.

#### Viewing key format support

뷰잉 키는 다음 두 형식 중 하나로 제공할 수 있습니다:
- **Bech32m** (권장): 사람이 읽을 수 있는 접두사가 포함된 base-32 인코딩 형식입니다. 예: `mn_shield-esk_dev1...`.
- **Hex** (대안): 키 바이트를 나타내는 16진수 인코딩 문자열입니다.

#### Example: Connect with viewing key

Bech32m 형식의 뷰잉 키로 연결하여 세션을 설정하는 예시입니다. 서버가 이후 쿼리에서 사용할 세션 ID를 반환합니다.

```graphql
mutation {
  # Provide the bech32m format:
  connect(viewingKey: "mn_shield-esk1abcdef...")
}
```

**Response**:

```json
{
  "data": {
    "connect": "sessionIdHere"
  }
}
```

이 `sessionId`를 차폐 트랜잭션 구독에 사용하세요.

### disconnect(sessionId: HexEncoded!): Unit!

기존 세션을 종료합니다. 특정 지갑의 차폐 트랜잭션을 더 이상 모니터링할 필요가 없을 때 이 메서드를 호출하세요.

#### Example: Disconnect session

connect 뮤테이션에서 반환된 세션 ID를 사용하여 활성 세션을 종료하는 예시입니다.

```graphql
mutation {
  disconnect(sessionId: "sessionIdHere")
}
```

## Subscriptions: Real-time updates

구독은 [GraphQL over WebSocket](https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md) 프로토콜에 따라 WebSocket 연결을 사용합니다. 연결 후 `connection_init` 메시지를 보내면 클라이언트가 구독 작업을 시작할 수 있습니다.

### Blocks subscription

`blocks(offset: BlockOffset): Block!`

새 블록을 구독합니다. `offset` 파라미터로 특정 블록(높이 또는 해시)부터 수신을 시작할 수 있습니다. 생략하면 최신 블록부터 시작합니다.

#### Example: Subscribe to blocks

블록 높이 10부터 새 블록을 구독하여 인덱싱되는 새 블록의 실시간 업데이트를 수신하는 예시입니다.

```json
{
  "id": "1",
  "type": "start",
  "payload": {
    "query": "subscription { blocks(offset: { height: 10 }) { hash height protocolVersion timestamp author parent { hash } transactions { id hash } } }"
  }
}
```

새 블록이 인덱싱되면 클라이언트가 `next` 메시지를 수신합니다.

### Contract actions subscription

`contractActions(address: HexEncoded!, offset: BlockOffset): ContractAction!`

특정 주소의 컨트랙트 액션을 구독하여 스마트 컨트랙트 활동을 모니터링합니다. 새 컨트랙트 액션(호출, 업데이트)이 발생하면 푸시됩니다.

#### Example: Subscribe to contract actions

특정 주소의 컨트랙트 액션을 구독하여 배포, 호출, 업데이트에 대한 실시간 알림을 수신하는 예시입니다.

```json
{
  "id": "2",
  "type": "start",
  "payload": {
    "query": "subscription { contractActions(address:\"3031323...\", offset: { height: 1 }) { __typename ... on ContractDeploy { address state zswapState unshieldedBalances { tokenType amount } } ... on ContractCall { address state zswapState entryPoint unshieldedBalances { tokenType amount } } ... on ContractUpdate { address state zswapState unshieldedBalances { tokenType amount } } } }"
  }
}
```

### Shielded transactions subscription

`shieldedTransactions(sessionId: HexEncoded!, index: Int, sendProgressUpdates: Boolean): ShieldedTransactionsEvent!`

차폐 트랜잭션 업데이트를 구독합니다. 관련 트랜잭션과 머클 트리 업데이트, `sendProgressUpdates`가 `true`(기본값)인 경우 `ShieldedTransactionsProgress` 이벤트를 포함합니다. `index` 파라미터를 사용하여 특정 시점부터 재개할 수 있습니다.

필요에 따라 `index`와 `offset` 인수를 조정하세요.

#### Example: Subscribe to shielded transactions

특정 세션의 차폐 트랜잭션을 인덱스 100부터 구독하여 트랜잭션 업데이트와 진행 상태 알림을 모두 수신하는 예시입니다.

```json
{
  "id": "3",
  "type": "start",
  "payload": {
    "query": "subscription { shieldedTransactions(sessionId: \"1CYq6ZsLmn\", index: 100) { __typename ... on ViewingUpdate { index update { __typename ... on MerkleTreeCollapsedUpdate { start end update protocolVersion } ... on RelevantTransaction { start end transaction { id hash } } } } ... on ShieldedTransactionsProgress { highestIndex highestRelevantIndex highestRelevantWalletIndex } } }"
  }
}
```

구독은 이벤트가 발생할 때마다 반환하며, 다양한 이벤트 타입이 트랜잭션 데이터와 진행 상태 업데이트를 제공합니다.

#### Event types

`ShieldedTransactionsEvent` union 타입은 다음 중 하나입니다:

**ViewingUpdate**: 관련 트랜잭션 및/또는 축소된 머클 트리 업데이트를 포함합니다.
- `index`: zswap 상태의 다음 시작 인덱스 (Int!)
- `update`: ZswapChainStateUpdate 항목 배열 ([ZswapChainStateUpdate!]!)
  - `MerkleTreeCollapsedUpdate`: 머클 트리 업데이트
    - `start`: 시작 인덱스 (Int!)
    - `end`: 종료 인덱스 (Int!)
    - `update`: 16진수 인코딩 머클 트리 축소 업데이트 (HexEncoded)
    - `protocolVersion`: 프로토콜 버전 (Int!)
  - `RelevantTransaction`: 지갑에 관련된 트랜잭션
    - `start`: 시작 인덱스 (Int!)
    - `end`: 종료 인덱스 (Int!)
    - `transaction`: 관련 트랜잭션 (Transaction!)

**ShieldedTransactionsProgress**: 동기화 진행 상태 정보입니다.
- `highestIndex`: 현재 알려진 전체 트랜잭션의 최대 종료 인덱스 (Int!)
- `highestRelevantIndex`: 현재 알려진 관련 트랜잭션의 최대 종료 인덱스 (Int!)
- `highestRelevantWalletIndex`: 이 특정 지갑의 최대 종료 인덱스 (Int!)

### Unshielded transactions subscription

`unshieldedTransactions(address: UnshieldedAddress!, transactionId: Int): UnshieldedTransactionsEvent!`

특정 주소의 비차폐 트랜잭션 이벤트를 구독합니다. 주어진 주소의 비차폐 UTXO와 관련된 트랜잭션이 발생할 때마다 이벤트를 발생시킵니다.

#### Parameters

- `address`: 모니터링할 비차폐 주소 (Bech32m 형식).
- `transactionId`: 선택적. 시작 트랜잭션 ID (기본값: 0).

#### Example: Subscribe to unshielded transactions

특정 주소의 비차폐 트랜잭션을 구독하여 생성 및 소비된 UTXO에 대한 알림과 진행 상태 업데이트를 수신하는 예시입니다.

```json
{
  "id": "4",
  "type": "start",
  "payload": {
    "query": "subscription { unshieldedTransactions(address: \"mn_addr_test1...\") { __typename ... on UnshieldedTransaction { transaction { hash block { height } } createdUtxos { owner value tokenType intentHash outputIndex } spentUtxos { owner value tokenType intentHash outputIndex } } ... on UnshieldedTransactionsProgress { highestTransactionId } } }"
  }
}
```

#### Event types

- **UnshieldedTransaction**: UTXO가 생성되거나 소비될 때, 트랜잭션 세부 정보와 영향 받은 UTXO를 포함합니다
- **UnshieldedTransactionsProgress**: 주기적 동기화 진행 상태 업데이트

#### UnshieldedTransactionsEvent

비차폐 트랜잭션 구독의 이벤트 페이로드입니다:
- `UnshieldedTransaction`: 트랜잭션 세부 정보와 생성/소비된 UTXO를 포함합니다
  - `transaction`: UTXO를 생성 및/또는 소비한 트랜잭션
  - `createdUtxos`: 구독 주소에 대해 이 트랜잭션에서 생성된 UTXO
  - `spentUtxos`: 구독 주소에 대해 이 트랜잭션에서 소비된 UTXO
- `UnshieldedTransactionsProgress`: 진행 상태 정보
  - `highestTransactionId`: 구독 주소의 현재 알려진 전체 트랜잭션 중 최대 트랜잭션 ID

### DUST ledger events subscription

`dustLedgerEvents(id: Int): DustLedgerEvent!`

DUST 원장 이벤트를 구독합니다. `id` 파라미터로 특정 이벤트부터 재개할 수 있습니다.

#### Example: Subscribe to DUST ledger events

DUST 원장 이벤트를 구독하여 블록체인의 DUST 관련 작업에 대한 실시간 업데이트를 수신하는 예시입니다.

```json
{
  "id": "5",
  "type": "start",
  "payload": {
    "query": "subscription { dustLedgerEvents { id __typename ... on DustInitialUtxo { output { nonce } } raw maxId } }"
  }
}
```

### Zswap ledger events subscription

`zswapLedgerEvents(id: Int): ZswapLedgerEvent!`

Zswap 원장 이벤트를 구독합니다. `id` 파라미터로 특정 이벤트부터 재개할 수 있습니다.

#### Example: Subscribe to Zswap ledger events

Zswap 원장 이벤트를 구독하여 차폐 풀 작업 및 상태 변경에 대한 업데이트를 수신하는 예시입니다.

```json
{
  "id": "6",
  "type": "start",
  "payload": {
    "query": "subscription { zswapLedgerEvents { id raw maxId } }"
  }
}
```

## Query limits configuration

서버에서 쿼리에 제한을 적용할 수 있습니다(예: `max-depth`, `max-fields`, `timeout`, 복잡도 비용). 이 제한을 초과하는 요청은 사유(필드 초과, 깊이 초과, 비용 초과, 시간 초과)를 나타내는 오류를 반환합니다.

### Example error

```json
{
  "data": null,
  "errors": [
    {
      "message": "Query has too many fields: 20. Max fields: 10."
    }
  ]
}
```

## Authentication

차폐 트랜잭션 구독에는 `connect` 뮤테이션에서 받은 `sessionId`가 필요합니다.

## Regenerate the schema

Indexer API를 사용하면서 GraphQL 스키마를 정의하는 코드를 수정한 경우, 스키마 파일을 다시 생성해야 합니다.

다음 명령어를 실행하세요:

```bash
just generate-indexer-api-schema
```

이렇게 하면 스키마 파일이 코드 변경 사항과 동기화됩니다.

## Migrate from v1

API v1에서 마이그레이션하는 경우 다음 단계를 따르세요:

1. 엔드포인트 URL을 `/v1/graphql`에서 `/v4/graphql`로 업데이트합니다(v1은 자동으로 리다이렉트됨).
2. 필드 이름 변경 사항을 확인합니다(예: 컨트랙트 액션에서 `chainState` → `zswapState`).
3. 일부 응답 구조가 변경되었을 수 있으므로 철저히 테스트합니다.