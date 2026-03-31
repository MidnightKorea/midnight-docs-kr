# Detailed API reference

## Structs

### `Maybe`

값이 있을 수도 없을 수도 있는 경우를 표현합니다. `isSome`이 `false`이면 `value`는 관례상 `default<T>`여야 합니다.

```compact
struct Maybe<T> {
  isSome: Boolean;
  value: T;
}
```

### `Either`

`A`와 `B`의 분리합집합입니다. `isLeft`가 `true`이면 `left`만 유효하고, 그렇지 않으면 `right`만 유효합니다. 유효하지 않은 쪽은 관례상 `default< >`여야 합니다.

```compact
struct Either<A, B> {
  isLeft: Boolean;
  left: A;
  right: B;
}
```

### `NativePoint`

proof 시스템의 내장 곡선 위의 점으로, 아핀 좌표로 표현됩니다.

타원 곡선 연산의 출력만 실제로 곡선 위에 있음이 보장됩니다.

```compact
struct NativePoint {
  x: Field;
  y: Field;
}
```

### `MerkleTreeDigest`

단일 `Field`로 표현되는 Merkle 트리의 루트 해시입니다.

```compact
struct MerkleTreeDigest { field: Field; }
```

### `MerkleTreePathEntry`

Merkle 트리 경로의 항목으로, 경로가 왼쪽으로 가는지 오른쪽으로 가는지를 나타내며 형제 노드의 루트를 포함합니다. 주로 [`MerkleTreePath`](#merkletreepath)에서 사용됩니다.

```compact
struct MerkleTreePathEntry {
  sibling: MerkleTreeDigest;
  goesLeft: Boolean;
}
```

### `MerkleTreePath`

깊이 `n`인 Merkle 트리에서 타입 `T`의 리프로 이어지는 경로입니다.
주로 [`merkleTreePathRoot`](#merkletreepathroot)에 사용됩니다.

컴파일러 출력의 `findPathForLeaf` 및 `pathForLeaf` 함수를 사용하는 `witness`에서 생성할 수 있습니다.

```compact
struct MerkleTreePath<#n, T> {
  leaf: T;
  path: Vector<n, MerkleTreePathEntry>;
}
```

### `ContractAddress`

컨트랙트의 주소로, [`sendShielded`](#sendshielded), [`sendImmediateShielded`](#sendimmediateshielded), [`createZswapOutput`](#createzswapoutput) 및 [`mintShieldedToken`](#mintshieldedtoken)에서 수신자로 사용됩니다.

```compact
struct ContractAddress { bytes: Bytes<32>; }
```

### `ShieldedCoinInfo`

새로 생성된 차폐 코인의 설명으로, 차폐 코인 출력 또는 현재 트랜잭션에서 생성된 차폐 코인의 지출/수신에 사용됩니다.

`nonce`는 [`evolveNonce`](#evolvenonce)로 결정론적으로 유도할 수 있습니다.

사용처:
- [`receiveShielded`](#receiveshielded)
- [`sendImmediateShielded`](#sendimmediateshielded)
- [`mergeCoin`](#mergecoin)
- [`mergeCoinImmediate`](#mergecoinimmediate)
- [`createZswapOutput`](#createzswapoutput)

```compact
struct ShieldedCoinInfo {
  nonce: Bytes<32>;
  color: Bytes<32>;
  value: Uint<128>;
}
```

### `QualifiedShieldedCoinInfo`

ledger에 존재하는 차폐 코인의 설명으로, 지출 준비가 된 상태입니다.

사용처:
- [`sendShielded`](#sendshielded)
- [`mergeCoin`](#mergecoin)
- [`mergeCoinImmediate`](#mergecoinimmediate)
- [`createZswapInput`](#createzswapinput)

```compact
struct QualifiedShieldedCoinInfo {
  nonce: Bytes<32>;
  color: Bytes<32>;
  value: Uint<128>;
  mtIndex: Uint<64>;
}
```

### `ZswapCoinPublicKey`

[`ShieldedCoinInfo`](#shieldedcoininfo)를 사용자에게 출력하는 데 사용되는 공개 키로, [`sendShielded`](#sendshielded), [`sendImmediateShielded`](#sendimmediateshielded) 및 [`createZswapOutput`](#createzswapoutput)에서 수신자로 사용됩니다.

```compact
struct ZswapCoinPublicKey { bytes: Bytes<32>; }
```

### `ShieldedSendResult`

[`sendShielded`](#sendshielded) 및 [`sendImmediateShielded`](#sendimmediateshielded)의 출력으로, 생성된 차폐 코인과 입력 지출에 따른 잔돈(해당하는 경우)을 상세히 설명합니다.

```compact
struct ShieldedSendResult {
  change: Maybe<ShieldedCoinInfo>;
  sent: ShieldedCoinInfo;
}
```

### `UserAddress`

사용자의 공개 키로, [`sendUnshielded`](#sendunshielded) 및 [`mintUnshieldedToken`](#mintunshieldedtoken)에서 수신자로 사용됩니다.

```compact
struct UserAddress { bytes: Bytes<32>; }
```

## Circuit

### `some`

타입 `T`의 요소를 포함하는 [`Maybe<T>`](#maybe)를 생성합니다.

```compact
circuit some<T>(value: T): Maybe<T>;
```

### `none`

아무것도 포함하지 않는 [`Maybe<T>`](#maybe)를 생성합니다.

```compact
circuit none<T>(): Maybe<T>;
```

### `left`

분리합집합의 `A` 항목을 포함하는 [`Either<A, B>`](#either)를 생성합니다.

```compact
circuit left<A, B>(value: A): Either<A, B>;
```

### `right`

분리합집합의 `B` 항목을 포함하는 [`Either<A, B>`](#either)를 생성합니다.

```compact
circuit right<A, B>(value: B): Either<A, B>;
```

### `transientHash`

내장 임시 해시 압축 함수

임의의 값을 필드 요소로 변환하는 circuit 효율적 압축 함수입니다. 업그레이드 간 지속이 보장되지 않으므로 상태 데이터 도출에는 사용하지 말고 일관성 검사에만 사용해야 합니다.

입력의 해시를 반환하지만, 입력을 공개로부터 보호하기에 충분하다고 간주되지 않습니다.
입력에 witness 반환 값이 포함된 경우, 결과가 공개 ledger에 저장되거나 export된 circuit에서 반환되거나 크로스 컨트랙트 호출로 다른 컨트랙트에 전달될 수 있다면 `disclose` 래퍼를 통해 공개를 승인해야 합니다.

```compact
circuit transientHash<T>(value: T): Field;
```

### `transientCommit`

내장 임시 커밋먼트 함수

임의 타입에 대한 circuit 효율적 커밋먼트 함수로, 필드 요소 개방에서 필드 요소로 변환합니다. 업그레이드 간 지속이 보장되지 않으므로 상태 데이터 도출에는 사용하지 말고 일관성 검사에만 사용해야 합니다.

`transientHash`와 달리, `rand` 인수가 충분히 무작위적이라면 입력을 공개로부터 보호하기에 충분합니다.
따라서 입력에 witness 반환 값이 포함되어 있더라도, 결과가 공개 ledger에 저장되거나 export된 circuit에서 반환되거나 크로스 컨트랙트 호출로 전달되는 경우 `disclose` 래퍼를 통한 공개 승인이 필요 없습니다.

```compact
circuit transientCommit<T>(value: T, rand: Field): Field;
```

### `persistentHash` {#persistenthash}

내장 영구 해시 압축 함수

임의의 값을 256비트 바이트 문자열로 변환하는 비 circuit 최적화 압축 함수입니다. 업그레이드 간 지속이 보장되며 SHA-256 알고리즘을 일관되게 사용합니다. 상태 데이터 도출에 사용*해야 하며*, 가능하면 일관성 검사에는 사용하지 않아야 합니다.

`transientHash`의 공개 관련 참고 사항이 이 함수에도 적용됩니다.

```compact
circuit persistentHash<T>(value: T): Bytes<32>;
```

### `persistentCommit` {#persistentcommit}

내장 영구 커밋먼트 함수

Compact에서 표현 가능한 임의의 값과 256비트 바이트 문자열 개방을 받아 256비트 바이트 문자열을 반환하는 비 circuit 최적화 커밋먼트 함수입니다. 업그레이드 간 지속이 보장되며 SHA-256 알고리즘을 사용합니다. 상태 데이터 도출에 사용*해야 하며*, 가능하면 일관성 검사에는 사용하지 않아야 합니다.

`transientCommit`의 공개 관련 참고 사항이 이 함수에도 적용됩니다.

```compact
circuit persistentCommit<T>(value: T, rand: Bytes<32>): Bytes<32>;
```

### `degradeToTransient`

이 함수는 [`persistentHash`](#persistenthash) 또는 [`persistentCommit`](#persistentcommit)의 출력을 필드 요소로 "다운그레이드"하여 [`transientHash`](#transienthash) 또는 [`transientCommit`](#transientcommit)에서 사용할 수 있게 합니다.

```compact
circuit degradeToTransient(x: Bytes<32>) : Field;
```

### `upgradeFromTransient`
이 함수는 필드 요소를 [`persistentHash`](#persistenthash) 또는 [`persistentCommit`](#persistentcommit)의 출력으로 "업그레이드"합니다.

```compact
circuit upgradeFromTransient(x: Field): Bytes<32>;

```

### `ecAdd`

이 함수는 두 개의 타원 [`NativePoint`](#nativepoint)를 더합니다(곱셈 표기법).

```compact
circuit ecAdd(a: NativePoint, b: NativePoint): NativePoint;
```

### `ecMul`

이 함수는 타원 [`NativePoint`](#nativepoint)에 스칼라를 곱합니다(곱셈 표기법).

```compact
circuit ecMul(a: NativePoint, b: Field): NativePoint;
```

### `ecMulGenerator`

이 함수는 내장 곡선의 주요 그룹 생성자에 스칼라를 곱합니다(곱셈 표기법).

```compact
circuit ecMulGenerator(b: Field): NativePoint;
```

### `hashToCurve`

이 함수는 임의의 타입을 [`NativePoint`](#nativepoint)로 매핑합니다.

출력은 그룹 베이스 및 다른 출력에 대해 알려지지 않은 이산 로그를 가짐이 보장되지만, 고유함이 보장되지는 않습니다(주어진 입력이 여러 출력에 대해 올바른 것으로 증명될 수 있습니다).

다른 타입 `T`의 입력이 동일한 필드 정렬 이진 표현을 가지는 경우 동일한 출력을 가질 수 있습니다.

```compact
circuit hashToCurve<T>(value: T): NativePoint;
```

### `merkleTreePathRoot` {#merkletreepathroot}

[`MerkleTreePath`](#merkletreepath)의 Merkle 트리 루트를 유도하며, 이 경로가 유래한 트리의 루트와 일치해야 합니다.

```compact
circuit merkleTreePathRoot<#n, T>(path: MerkleTreePath<n, T>): MerkleTreeDigest;
```

### `merkleTreePathRootNoLeafHash`

[`MerkleTreePath`](#merkletreepath)의 Merkle 트리 루트를 유도하며, 이 경로가 유래한 트리의 루트와 일치해야 합니다. [`merkleTreePathRoot`](#merkletreepathroot)와 달리, 이 변형은 트리 리프가 이미 외부에서 해시되었다고 가정합니다.

```compact
circuit merkleTreePathRootNoLeafHash<#n>(path: MerkleTreePath<n, Bytes<32>>): MerkleTreeDigest;
```

### `nativeToken`

네이티브 토큰의 토큰 타입을 반환합니다.

```compact
circuit nativeToken(): Bytes<32>;
```

### `tokenType`

컨트랙트의 도메인 구분자를 전역 네임스페이스의 토큰 타입으로 변환합니다. 컨트랙트는 자체 도메인 구분자로 토큰을 발행하여 새 토큰을 생성할 수 있지만, 해시 충돌 저항성 덕분에 다른 컨트랙트의 토큰 타입에 대한 토큰은 발행할 수 없습니다. [`ShieldedCoinInfo`](#shieldedcoininfo)의 `color` 필드와 [`sendUnshielded`](#sendunshielded), [`receiveUnshielded`](#receiveunshielded) 등 함수의 인수로 사용됩니다.

```compact
circuit tokenType(domainSep: Bytes<32>, contract: ContractAddress): Bytes<32>;
```

### `mintShieldedToken`

이 컨트랙트가 발행한 새 차폐 코인을 생성하여 지정된 수신자에게 전송하고, 해당하는 [`ShieldedCoinInfo`](#shieldedcoininfo)를 반환합니다. 안전한 작동을 위해 고유한 nonce가 필요하며, nonce 생성 방법은 사용자가 결정합니다. 현재 컨트랙트에 차폐 토큰을 발행하려면 `recipient`로 `right<ZswapCoinPublicKey, ContractAddress>(kernel.self())`를 전달하세요.

```compact
circuit mintShieldedToken(
  domainSep: Bytes<32>,
  value: Uint<64>,
  nonce: Bytes<32>,
  recipient: Either<ZswapCoinPublicKey, ContractAddress>
): ShieldedCoinInfo;
```

### `evolveNonce`

카운터 인덱스와 이전 nonce에서 [`ShieldedCoinInfo`](#shieldedcoininfo) nonce를 결정론적으로 유도합니다.

```compact
circuit evolveNonce(
  index: Uint<128>,
  nonce: Bytes<32>
): Bytes<32>;
```

### `shieldedBurnAddress`

전송된 차폐 코인이 소각됨을 보장하는 지불 주소를 반환합니다.

```compact
circuit shieldedBurnAddress(): Either<ZswapCoinPublicKey, ContractAddress>;
```

### `receiveShielded`

차폐 코인을 수신하며, 이 코인이 이 컨트랙트에 주소가 지정된 출력으로 존재해야 하고 다른 호출에 의해 수신되지 않았어야 한다는 검증 조건을 추가합니다.

```compact
circuit receiveShielded(coin: ShieldedCoinInfo): [];
```

### `sendShielded`

컨트랙트가 보유한 차폐 코인에서 지정된 금액을 수신자에게 전송합니다. 잔돈이 반환되며 컨트랙트에서 관리해야 합니다.

현재 이 함수는 코인 암호문을 생성하지 않으므로, 현재 사용자가 아닌 다른 사용자의 공개 키로 전송하면 수신자가 전송된 코인에 대한 알림을 받지 못합니다. 현재 컨트랙트에 차폐 토큰을 전송하려면 `recipient`로 `right<ZswapCoinPublicKey, ContractAddress>(kernel.self())`를 전달하세요.

```compact
circuit sendShielded(input: QualifiedShieldedCoinInfo, recipient: Either<ZswapCoinPublicKey, ContractAddress>, value: Uint<128>): ShieldedSendResult;
```

### `sendImmediateShielded` {#sendimmediateshielded}

[`sendShielded`](#sendshielded)와 동일하지만, 이 트랜잭션 내에서 생성된 코인에 대해 사용합니다.

```compact
circuit sendImmediateShielded(input: ShieldedCoinInfo, target: Either<ZswapCoinPublicKey, ContractAddress>, value: Uint<128>): ShieldedSendResult;
```

### `mergeCoin` {#mergecoin}

ledger에 저장된 두 개의 코인을 가져와 하나로 합칩니다.

```compact
circuit mergeCoin(a: QualifiedCoinInfo, b: QualifiedCoinInfo): CoinInfo;
```

### `mergeCoinImmediate`

ledger에 저장된 코인 하나와 이 트랜잭션 내에서 생성된 코인 하나를 가져와 하나로 합칩니다.

```compact
circuit mergeCoinImmediate(a: QualifiedCoinInfo, b: CoinInfo): CoinInfo;
```

### `ownPublicKey`

이 트랜잭션을 생성하는 최종 사용자의 [`ZswapCoinPublicKey`](#zswapcoinpublickey)를 반환합니다.

```compact
circuit ownPublicKey(): ZswapCoinPublicKey;
```

### `createZswapInput`

이 호출에서 시작되는 새로운 Zswap 입력을 생성하도록 컨텍스트에 알립니다.
일반적으로 수동으로 호출해서는 안 되며, 대신 [`sendShielded`](#sendshielded) 및 [`sendImmediateShielded`](#sendimmediateshielded)를 사용하세요.

`transientHash`의 공개 관련 참고 사항이 이 함수에도 적용됩니다.

```compact
circuit createZswapInput(coin: QualifiedShieldedCoinInfo): [];
```

### `createZswapOutput`

이 호출에서 시작되는 새로운 Zswap 출력을 생성하도록 컨텍스트에 알립니다.
일반적으로 수동으로 호출해서는 안 되며, 대신 [`sendShielded`](#sendshielded), [`sendImmediateShielded`](#sendimmediateshielded) 및 [`receiveShielded`](#receiveshielded)를 사용하세요.

`transientHash`의 공개 관련 참고 사항이 이 함수에도 적용됩니다.

```compact
circuit createZswapOutput(coin: ShieldedCoinInfo, recipient: Either<ZswapCoinPublicKey, ContractAddress>): [];
```

### `mintUnshieldedToken`

이 컨트랙트가 발행한 새로운 비차폐 코인을 생성하고 주어진 수신자에게 전송합니다. 해당하는 코인 색상을 반환합니다. 현재 컨트랙트에 비차폐 토큰을 발행하려면 `recipient`로 `left<ContractAddress, UserAddress>(kernel.self())`를 전달하세요.

```compact
export circuit mintUnshieldedToken(
  domainSep: Bytes<32>,
  value: Uint<64>,
  recipient: Either<ContractAddress, UserAddress>
): Bytes<32>;
```

### `sendUnshielded`

주어진 비차폐 토큰(색상으로 식별)의 주어진 금액을 주어진 수신자에게 전송합니다. 이 함수에서는 잔돈이 반환되지 않습니다. 현재 컨트랙트에 비차폐 토큰을 전송하려면 `recipient`로 `left<ContractAddress, UserAddress>(kernel.self())`를 전달하세요.

```compact
export circuit sendUnshielded(color: Bytes<32>, amount: Uint<128>, recipient: Either<ContractAddress, UserAddress>): [];
```

### `receiveUnshielded`

색상으로 식별되는 비차폐 토큰의 주어진 금액을 수신합니다.

```compact
circuit receiveUnshielded(color: Bytes<32>, amount: Uint<128>): [];
```

### `unshieldedBalance`

지정된 타입의 비차폐 토큰에 대한 컨트랙트 잔액을 반환합니다. 이 잔액은 컨트랙트 실행 중 비차폐 전송/수신에 의해 업데이트되지 않으며 항상 실행 시작 시점의 값으로 고정됩니다. 또한 이 함수를 사용하면 트랜잭션 구성 시점과 적용 시점의 토큰 잔액이 정확히 일치해야 하며, 그렇지 않으면 트랜잭션이 실패합니다. 이 제약이 필요 없다면 잔액 비교 함수 [`unshieldedBalanceLt`](#unshieldedbalancelt), [`unshieldedBalanceGte`](#unshieldedbalancegte), [`unshieldedBalanceGt`](#unshieldedbalancegt), [`unshieldedBalanceLte`](#unshieldedbalancelte)를 사용하세요.

```compact
circuit unshieldedBalance(color: Bytes<32>): Uint<128>;
```

### `unshieldedBalanceLt`

주어진 토큰 타입에 대한 컨트랙트의 비차폐 잔액이 주어진 값보다 작으면 true를 반환합니다.

```compact
circuit unshieldedBalanceLt(color: Bytes<32>, amount: Uint<128>): Boolean;
```

### `unshieldedBalanceGte`

주어진 토큰 타입에 대한 컨트랙트의 비차폐 잔액이 주어진 값보다 크거나 같으면 true를 반환합니다.

```compact
circuit unshieldedBalanceGte(color: Bytes<32>, amount: Uint<128>): Boolean;
```

### `unshieldedBalanceGt`

주어진 토큰 타입에 대한 컨트랙트의 비차폐 잔액이 주어진 값보다 크면 true를 반환합니다.

```compact
circuit unshieldedBalanceGt(color: Bytes<32>, amount: Uint<128>): Boolean
```

### `unshieldedBalanceLte`

주어진 토큰 타입에 대한 컨트랙트의 비차폐 잔액이 주어진 값보다 작거나 같으면 true를 반환합니다.

```compact
circuit unshieldedBalanceLte(color: Bytes<32>, amount: Uint<128>): Boolean;
```


### `blockTimeLt`

현재 블록 시간이 주어진 값보다 작으면 true를 반환합니다.

```compact
circuit blockTimeLt(time: Uint<64>): Boolean;
```

### `blockTimeGte`

현재 블록 시간이 주어진 값보다 크거나 같으면 true를 반환합니다.

```compact
circuit blockTimeGte(time: Uint<64>): Boolean;
```

### `blockTimeGt`

현재 블록 시간이 주어진 값보다 크면 true를 반환합니다.

```compact
circuit blockTimeGt(time: Uint<64>): Boolean;
```

### `blockTimeLte`

현재 블록 시간이 주어진 값보다 작거나 같으면 true를 반환합니다.

```compact
circuit blockTimeLte(time: Uint<64>): Boolean;
```
