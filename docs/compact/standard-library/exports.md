# Detailed API reference

## Top-level exports and native types and functions

컨트랙트의 최상위에서 타입이나 circuit을 export하면 그 정의가 컨트랙트의
TypeScript API에서 보이고 사용 가능해집니다. 컨트랙트의 최상위에서 circuit을 export하면
추가로 그 circuit이 온체인 트랜잭션을 위한 컨트랙트의 진입점 중 하나가 됩니다.

표준 라이브러리에 정의된 타입과 함수 중 상당수는 **네이티브** 타입과
함수입니다. 이들은 Compact 컴파일러에서 어떤 식으로든 특별하게 처리되는
것들입니다. 이 특별한 처리의 결과로, 현재 이들은 컨트랙트의 최상위에서 export할 수
없습니다.

이러한 타입과 함수를 export하려는 시도는 컴파일러 오류입니다.

다만 네이티브 타입에 대한 타입 별칭을 export하고, 네이티브 함수를 감싸는
circuit을 export할 수는 있습니다. 예를 들어:

```compact
import { JubjubPoint as nativeJubjubPoint, ecAdd as nativeEcAdd } from CompactStandardLibrary;

export type JubjubPoint = nativeJubjubPoint;

export pure circuit ecAdd(a: JubjubPoint, b: JubjubPoint): JubjubPoint {
  return nativeEcAdd(a, b);
}
```

생성된 TypeScript API에는 `JubjubPoint`와 `ecAdd`에 대한 정의가 포함됩니다.
표준 라이브러리의 `ecAdd`는 다형적이지만(Jubjub 외의 다른 곡선 타입에서도
동작) export된 버전은 `JubjubPoint`에 대해서만 동작한다는 점에 유의하세요.

## Structure types

### `Maybe`

값이 있을 수도 없을 수도 있는 경우를 표현합니다. `is_some`이 `false`이면 `value`는 관례상 `default<T>`여야 합니다.

```compact
struct Maybe<T> {
  is_some: Boolean;
  value: T;
}
```

### `Either`

`A`와 `B`의 분리합집합입니다. `is_left`가 `true`이면 `left`만 유효하고, 그렇지 않으면 `right`만 유효합니다. 유효하지 않은 쪽은 관례상 `default< >`여야 합니다.

```compact
struct Either<A, B> {
  is_left: Boolean;
  left: A;
  right: B;
}
```

### `JubjubSchnorrSignature`

JubJub 내장 곡선 위의 Schnorr 서명입니다. announcement 점과 scalar response를 담으며, [`jubjubSchnorrVerify`](#jubjubschnorrverify)와 함께 사용합니다.

```compact
struct JubjubSchnorrSignature {
  announcement: JubjubPoint;
  response: Field;
}
```

### `Secp256k1EcdsaSignature`

secp256k1 곡선 위의 ECDSA 서명으로, [`secp256k1EcdsaVerify`](#secp256k1ecdsaverify)와 함께 사용합니다. `r`과 `s` 구성 요소는 `Secp256k1Scalar`입니다.

```compact
struct Secp256k1EcdsaSignature {
  r: Secp256k1Scalar;
  s: Secp256k1Scalar;
}
```

### `Secp256r1EcdsaSignature`

secp256r1(P256이라고도 함) 곡선 위의 ECDSA 서명으로, [`secp256r1EcdsaVerify`](#secp256r1ecdsaverify)와 함께 사용합니다. `r`과 `s` 구성 요소는 `Secp256r1Scalar`입니다.

```compact
struct Secp256r1EcdsaSignature {
  r: Secp256r1Scalar;
  s: Secp256r1Scalar;
}
```

### `Ed25519Signature`

Ed25519 서명으로, [`ed25519Verify`](#ed25519verify)와 함께 사용합니다. commitment 점 `r`([`Curve25519Point`](#curve25519point))과 response 스칼라 `s`([`Curve25519Scalar`](#curve25519scalar))로 구성됩니다.

표준 64바이트 Ed25519 서명은 `r`의 32바이트 인코딩 뒤에 `s`를 32바이트 리틀 엔디언 정수로 이어 붙인 것입니다(RFC 8032 5.1.6절).

공개 키는 `r`과 같은 방식으로 그 32바이트에서 디코딩됩니다.

```compact
struct Ed25519Signature {
  r: Curve25519Point;
  s: Curve25519Scalar;
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
  goes_left: Boolean;
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

새로 생성된 shielded 코인의 설명으로, shielded 코인 출력 또는 현재 트랜잭션에서 생성된 shielded 코인의 지출/수신에 사용됩니다.

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

ledger에 존재하는 shielded 코인의 설명으로, 지출 준비가 된 상태입니다.

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
  mt_index: Uint<64>;
}
```

### `ZswapCoinPublicKey`

[`ShieldedCoinInfo`](#shieldedcoininfo)를 사용자에게 출력하는 데 사용되는 공개 키로, [`sendShielded`](#sendshielded), [`sendImmediateShielded`](#sendimmediateshielded) 및 [`createZswapOutput`](#createzswapoutput)에서 수신자로 사용됩니다.

```compact
struct ZswapCoinPublicKey { bytes: Bytes<32>; }
```

### `ShieldedSendResult`

[`sendShielded`](#sendshielded) 및 [`sendImmediateShielded`](#sendimmediateshielded)의 출력으로, 생성된 shielded 코인과 입력 지출에 따른 잔돈(해당하는 경우)을 상세히 설명합니다.

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

## Type aliases

### `PublicAddress`

컨트랙트의 주소이거나 사용자의 주소입니다. unshielded 토큰 연산에서 사용하는 수신자 타입입니다.

```compact
type PublicAddress = Either<ContractAddress, UserAddress>;
```

## Ledger fields

### `kernel`

표준 라이브러리는 내장 `Kernel` ledger ADT의 ledger 필드 `kernel` 하나를 export합니다. 이는 컨트랙트에 체인에 대한 뷰를 제공합니다. 즉 자신의 주소, 호출자, unshielded 잔액, 현재 블록 시간, 그리고 Zswap 및 unshielded 효과를 청구하는 연산입니다. 연산은 [Ledger 데이터 타입](../../ledger-adt.mdx)에 문서화되어 있습니다.

```compact
export ledger kernel: Kernel;
```

아래의 여러 circuit은 이 필드를 기준으로 정의됩니다. 예를 들어 현재 컨트랙트를 수신자로 지정하려면 `right<ZswapCoinPublicKey, ContractAddress>(kernel.self())`를 사용합니다.

## Events

이벤트는 `emit` 연산으로 발행할 수 있는 struct 타입입니다.

### `ShieldedSpend`

shielded 코인이 소비되고 사용자 수신자를 위한 새 코인이 생성됩니다.

직렬화 크기는 32입니다.

```compact
struct ShieldedSpend {
  nullifier: Bytes<32> // indexed
}
```

### `ShieldedReceive`

컨트랙트가 들어오는 shielded 코인을 수락합니다.

`contractAddress`는 컨트랙트가 수신할 때 설정되고, 사용자 수신자의 경우 없습니다.

직렬화 크기는 578입니다.

```compact
struct ShieldedReceive {
  commitment: Bytes<32>, // indexed
  ciphertext: Maybe<Bytes<512>>,
  contractAddress: Maybe<Bytes<32>>
}
```

### `ShieldedMint`

새 shielded 토큰이 생성됩니다.

`tokenType`은 소비자가 `domainSep` + `ContractLog.address`에서 유도합니다.

직렬화 크기는 81입니다.

```compact
struct ShieldedMint {
  commitment: Bytes<32>, // indexed
  domainSep: Bytes<32>, // indexed
  amount: Maybe<Uint<128>>
}
```

### `ShieldedBurn`

shielded 코인이 소각 주소로 전송됩니다.

공급량 추적 — 토큰이 유통에서 영구히 제거됩니다.

직렬화 크기는 49입니다.

```compact
struct ShieldedBurn {
  nullifier: Bytes<32>, // indexed
  amount: Maybe<Uint<128>>
}
```

### `UnshieldedSpend`

공개 토큰이 송신자로부터 전송됩니다.

직렬화 크기는 145입니다.

```compact
struct UnshieldedSpend {
  sender: Either<ZswapCoinPublicKey, ContractAddress>, // indexed
  domainSep: Bytes<32>, // indexed
  tokenType: Bytes<32>, // indexed
  amount: Uint<128>
}
```

### `UnshieldedReceive`

공개 토큰이 수신자에게 전송됩니다.

직렬화 크기는 145입니다.

```compact
struct UnshieldedReceive {
  recipient: Either<ZswapCoinPublicKey, ContractAddress>, // indexed
  domainSep: Bytes<32>, // indexed
  tokenType: Bytes<32>, // indexed
  amount: Uint<128>
}
```

### `UnshieldedMint`

새 unshielded 토큰이 생성됩니다.

직렬화 크기는 80입니다.

```compact
struct UnshieldedMint {
  domainSep: Bytes<32>, // indexed
  tokenType: Bytes<32>, // indexed
  amount: Uint<128>
}
```

### `UnshieldedBurn`

unshielded 코인이 소각 주소로 전송됩니다.

직렬화 크기는 113입니다.

```compact
struct UnshieldedBurn {
  sender: Either<ZswapCoinPublicKey, ContractAddress>, // indexed
  tokenType: Bytes<32>, // indexed
  amount: Uint<128>
}
```

### `Paused`

컨트랙트 연산이 중단됩니다.

직렬화 크기는 0입니다.

```compact
struct Paused {}
```

### `Unpaused`

컨트랙트 연산이 재개됩니다.

직렬화 크기는 0입니다.

```compact
struct Unpaused {}
```

### `Misc`

기타 이벤트 타입입니다.

직렬화 크기는 288입니다.

```compact
struct Misc {
  name: Bytes<32>,
  payload: Bytes<256>
}
```

## Circuits and native types

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

내장 임시 commitment 함수

임의 타입에 대한 circuit 효율적 commitment 함수로, 필드 요소 개방에서 필드 요소로 변환합니다. 업그레이드 간 지속이 보장되지 않으므로 상태 데이터 도출에는 사용하지 말고 일관성 검사에만 사용해야 합니다.

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

내장 영구 commitment 함수

Compact에서 표현 가능한 임의의 값과 256비트 바이트 문자열 개방을 받아 256비트 바이트 문자열을 반환하는 비 circuit 최적화 commitment 함수입니다. 업그레이드 간 지속이 보장되며 SHA-256 알고리즘을 사용합니다. 상태 데이터 도출에 사용*해야 하며*, 가능하면 일관성 검사에는 사용하지 않아야 합니다.

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

### `keccak256`

이 함수는 입력을 Keccak-256 알고리즘으로 해시합니다. 32바이트 다이제스트를 반환합니다.

```compact
circuit keccak256<T>(value: T): Bytes<32>;
```

### `sha512`

이 함수는 입력을 SHA-512 알고리즘으로 해시합니다. 64바이트 다이제스트를 반환합니다.

```compact
circuit sha512<T>(value: T): Bytes<64>;
```

### `JubjubPoint`

네이티브 타입입니다.

내장 타원 곡선 위의 점 타입입니다. 아핀 x 좌표와 y 좌표의 쌍을 나타냅니다. 좌표는 네이티브 `Field`(BLS12-381) 값입니다.

### `JubjubScalar`

네이티브 타입입니다.

0(포함)과 Jubjub 내장 타원 곡선의 소수 차수 부분군의 차수(미포함) 사이의 숫자 값 타입입니다. Jubjub 곡선 점을 곱하는 데 사용하는 스칼라의 타입입니다.

최대값(필드 차수보다 1 작음)은 (10진수)
6554484396890773809930967563523245729705921265872317281365359162392183254198이고
(16진수)
0xe7db4ea6533afa906673b0101343b00a6682093ccc81082d0970e5ed6f72cb6입니다.

### `constructJubjubPoint`

네이티브 circuit입니다.

이 함수는 x 좌표와 y 좌표에서 [`JubjubPoint`](#jubjubpoint)를 구성합니다. 표준 라이브러리도, Compact JavaScript 런타임 패키지도 구성된 점이 실제로 Jubjub 곡선 위에 있는지는 검증하지 않습니다. 유효하지 않은 Jubjub 곡선 점을 구성하거나 그에 대해 연산하는 동작은 정의되지 않습니다. 일반적으로 유효하지 않은 Jubjub 곡선 점이 관련된 증명은 생성할 수 없습니다.

```compact
circuit constructJubjubPoint(x: Field, y: Field): JubjubPoint;
```

### `jubjubPointX`

네이티브 circuit입니다.

이 함수는 [`JubjubPoint`](#jubjubpoint)에서 x 좌표를 추출합니다.

```compact
circuit jubjubPointX(pt: JubjubPoint): Field;
```

### `jubjubPointY`

네이티브 circuit입니다.

이 함수는 [`JubjubPoint`](#jubjubpoint)에서 y 좌표를 추출합니다.

```compact
circuit jubjubPointY(pt: JubjubPoint): Field;
```

### `Secp256k1Point`

네이티브 타입입니다.

secp256k1 타원 곡선 위의 점 타입입니다. 아핀 x 좌표와 y 좌표의 쌍을 나타냅니다. 좌표는 `Secp256k1Base` 값입니다. secp256k1 점은 Compact에서 생성할 수 없지만, circuit 인수로 전달하고 witness 함수에서 반환할 수 있습니다. 유효하지 않은 secp256k1 곡선 점에 대해 연산하는 동작은 정의되지 않습니다. 일반적으로 유효하지 않은 secp256k1 곡선 점이 관련된 증명은 생성할 수 없습니다.

(가법) 항등점은 좌표 쌍으로 표현되지 않습니다. Compact에서는 `default<Secp256k1Point>`로 표현됩니다.

### `Secp256k1Base`

네이티브 타입입니다.

0(포함)과 secp256k1 타원 곡선의 기반 필드 차수(미포함) 사이의 값 타입입니다. 해당 곡선 위 점의 아핀 좌표의 타입입니다.

최대값(필드 차수보다 1 작음)은 (10진수)
115792089237316195423570985008687907853269984665640564039457584007908834671662이고
(16진수)
0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2e입니다.

### `Secp256k1Scalar`

네이티브 타입입니다.

0(포함)과 secp256k1 그룹의 차수(미포함) 사이의 숫자 값 타입입니다. secp256k1 곡선 점을 곱하는 데 사용하는 스칼라의 타입입니다.

최대값(필드 차수보다 1 작음)은 (10진수)
115792089237316195423570985008687907852837564279074904382605163141518161494336이고
(16진수)
0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140입니다.

### `secp256k1PointX`

네이티브 circuit입니다.

이 함수는 [`Secp256k1Point`](#secp256k1point)에서 아핀 x 좌표를 추출합니다.

```compact
circuit secp256k1PointX(pt: Secp256k1Point): Secp256k1Base;
```

### `secp256k1PointY`

네이티브 circuit입니다.

이 함수는 [`Secp256k1Point`](#secp256k1point)에서 아핀 y 좌표를 추출합니다.

```compact
circuit secp256k1PointY(pt: Secp256k1Point): Secp256k1Base;
```

### `Secp256r1Point`

네이티브 타입입니다.

secp256r1 타원 곡선 위의 점 타입입니다. 아핀 x 좌표와 y 좌표의 쌍을 나타냅니다. 좌표는 `Secp256r1Base` 값입니다. secp256r1 점은 Compact에서 생성할 수 없지만, circuit 인수로 전달하고 witness 함수에서 반환할 수 있습니다. 유효하지 않은 secp256r1 곡선 점에 대해 연산하는 동작은 정의되지 않습니다. 일반적으로 유효하지 않은 secp256r1 곡선 점이 관련된 증명은 생성할 수 없습니다.

(가법) 항등점은 좌표 쌍으로 표현되지 않습니다. Compact에서는 `default<Secp256r1Point>`로 표현됩니다.

### `Secp256r1Base`

네이티브 타입입니다.

0(포함)과 secp256r1 타원 곡선의 기반 필드 차수(미포함) 사이의 값 타입입니다. 해당 곡선 위 점의 아핀 좌표의 타입입니다.

최대값(필드 차수보다 1 작음)은 (10진수)
115792089210356248762697446949407573530086143415290314195533631308867097853950이고
(16진수)
0xffffffff00000001000000000000000000000000fffffffffffffffffffffffe입니다.

### `Secp256r1Scalar`

네이티브 타입입니다.

0(포함)과 secp256r1 그룹의 차수(미포함) 사이의 숫자 값 타입입니다. secp256r1 곡선 점을 곱하는 데 사용하는 스칼라의 타입입니다.

최대값(필드 차수보다 1 작음)은 (10진수)
115792089210356248762697446949407573529996955224135760342422259061068512044368이고
(16진수)
0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632550입니다.

### `secp256r1PointX`

네이티브 circuit입니다.

이 함수는 [`Secp256r1Point`](#secp256r1point)에서 아핀 x 좌표를 추출합니다.

```compact
circuit secp256r1PointX(pt: Secp256r1Point): Secp256r1Base;
```

### `secp256r1PointY`

네이티브 circuit입니다.

이 함수는 [`Secp256r1Point`](#secp256r1point)에서 아핀 y 좌표를 추출합니다.

```compact
circuit secp256r1PointY(pt: Secp256r1Point): Secp256r1Base;
```

### `Curve25519Point`

네이티브 타입입니다.

비틀린 에드워즈 형식(Ed25519의 곡선)의 Curve25519 위의 점 타입입니다. 아핀 x 좌표와 y 좌표의 쌍을 나타냅니다. 좌표는 `Curve25519Base` 값입니다. Curve25519 점은 Compact에서 생성할 수 없지만, circuit 인수로 전달하고 witness 함수에서 반환할 수 있습니다. 유효하지 않은 Curve25519 점에 대해 연산하는 동작은 정의되지 않습니다. 일반적으로 유효하지 않은 Curve25519 점이나 소수 차수 부분군 밖의 점이 관련된 증명은 생성할 수 없습니다.

(가법) 항등점은 `(0, 1)`입니다.

### `Curve25519Base`

네이티브 타입입니다.

0(포함)과 Curve25519의 기반 필드 차수 2^255 - 19(미포함) 사이의 값 타입입니다. 해당 곡선 위 점의 아핀 좌표의 타입입니다.

최대값(필드 차수보다 1 작음)은 (10진수)
57896044618658097711785492504343953926634992332820282019728792003956564819948이고
(16진수)
0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec입니다.

### `Curve25519Scalar`

네이티브 타입입니다.

0(포함)과 Curve25519의 소수 차수 부분군의 차수(미포함) 사이의 숫자 값 타입입니다. Curve25519 점을 곱하는 데 사용하는 스칼라의 타입입니다.

최대값(부분군 차수보다 1 작음)은 (10진수)
7237005577332262213973186563042994240857116359379907606001950938285454250988이고
(16진수)
0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ec입니다.

### `curve25519PointX`

네이티브 circuit입니다.

이 함수는 [`Curve25519Point`](#curve25519point)에서 아핀 x 좌표를 추출합니다.

```compact
circuit curve25519PointX(pt: Curve25519Point): Curve25519Base;
```

### `curve25519PointY`

네이티브 circuit입니다.

이 함수는 [`Curve25519Point`](#curve25519point)에서 아핀 y 좌표를 추출합니다.

```compact
circuit curve25519PointY(pt: Curve25519Point): Curve25519Base;
```

### `ecAdd`

이 함수는 두 타원 곡선 점을 더합니다. 다음 타입에 대해 다형적입니다:
* [`JubjubPoint`](#jubjubpoint)
* [`Secp256k1Point`](#secp256k1point)
* [`Secp256r1Point`](#secp256r1point)
* [`Curve25519Point`](#curve25519point)

```compact
circuit ecAdd(a: JubjubPoint, b: JubjubPoint): JubjubPoint;
circuit ecAdd(a: Secp256k1Point, b: Secp256k1Point): Secp256k1Point;
circuit ecAdd(a: Secp256r1Point, b: Secp256r1Point): Secp256r1Point;
circuit ecAdd(a: Curve25519Point, b: Curve25519Point): Curve25519Point;
```

### `ecNeg`

이 함수는 타원 [`JubjubPoint`](#jubjubpoint)를 부정합니다. JubJub 비틀린 에드워즈 곡선에서 `(x, y)`의 부정은 `(-x, y)`입니다.

```compact
circuit ecNeg(a: JubjubPoint): JubjubPoint;
```

### `ecMul`

이 함수는 타원 곡선 점에 스칼라를 곱합니다. 다음 타입에 대해 다형적입니다:
* [`JubjubPoint`](#jubjubpoint)
* [`Secp256k1Point`](#secp256k1point)
* [`Secp256r1Point`](#secp256r1point)
* [`Curve25519Point`](#curve25519point)

```compact
circuit ecMul(a: JubjubPoint, b: JubjubScalar): JubjubPoint;
circuit ecMul(a: Secp256k1Point, b: Secp256k1Scalar): Secp256k1Point;
circuit ecMul(a: Secp256r1Point, b: Secp256r1Scalar): Secp256r1Point;
circuit ecMul(a: Curve25519Point, b: Curve25519Scalar): Curve25519Point;
```

### `ecMulGenerator`

이 함수는 곡선의 주요 그룹 생성자에 스칼라를 곱합니다. 다음 타입에 대해 다형적입니다:
* [`JubjubPoint`](#jubjubpoint)
* [`Secp256k1Point`](#secp256k1point)
* [`Secp256r1Point`](#secp256r1point)
* [`Curve25519Point`](#curve25519point)

```compact
circuit ecMulGenerator(b: JubjubScalar): JubjubPoint;
circuit ecMulGenerator(b: Secp256k1Scalar): Secp256k1Point;
circuit ecMulGenerator(b: Secp256r1Scalar): Secp256r1Point;
circuit ecMulGenerator(b: Curve25519Scalar): Curve25519Point;
```

### `neg`

필드 요소를 부정합니다. 즉 `add(x, y)`가 필드에서 `0`이 되는 값 `y`를 반환합니다. 다음 타입에 대해 동작하는 다형 함수입니다:
* `Secp256k1Base`
* `Secp256k1Scalar`
* `Secp256r1Base`
* `Secp256r1Scalar`
* `Curve25519Base`
* `Curve25519Scalar`

```compact
circuit neg(s: Secp256k1Base): Secp256k1Base;
circuit neg(s: Secp256k1Scalar): Secp256k1Scalar;
circuit neg(s: Secp256r1Base): Secp256r1Base;
circuit neg(s: Secp256r1Scalar): Secp256r1Scalar;
circuit neg(s: Curve25519Base): Curve25519Base;
circuit neg(s: Curve25519Scalar): Curve25519Scalar;
```

### `inv`

필드 요소의 곱셈 역원, 즉 `mul(x, y)`가 필드에서 `1`이 되는 값 `y`를 반환합니다. 다음 타입에 대해 동작하는 다형 함수입니다:
* `Secp256k1Base`
* `Secp256k1Scalar`
* `Secp256r1Base`
* `Secp256r1Scalar`
* `Curve25519Base`
* `Curve25519Scalar`

```compact
circuit inv(s: Secp256k1Base): Secp256k1Base;
circuit inv(s: Secp256k1Scalar): Secp256k1Scalar;
circuit inv(s: Secp256r1Base): Secp256r1Base;
circuit inv(s: Secp256r1Scalar): Secp256r1Scalar;
circuit inv(s: Curve25519Base): Curve25519Base;
circuit inv(s: Curve25519Scalar): Curve25519Scalar;
```

### `hashToCurve`

이 함수는 임의의 타입을 [`JubjubPoint`](#jubjubpoint)로 매핑합니다.

출력은 그룹 베이스 및 다른 출력에 대해 알려지지 않은 이산 로그를 가짐이 보장되지만, 고유함이 보장되지는 않습니다(주어진 입력이 여러 출력에 대해 올바른 것으로 증명될 수 있습니다).

다른 타입 `T`의 입력이 동일한 필드 정렬 이진 표현을 가지는 경우 동일한 출력을 가질 수 있습니다.

```compact
circuit hashToCurve<T>(value: T): JubjubPoint;
```

### `jubjubSchnorrVerify`

JubJub 내장 곡선 위의 Schnorr 서명을 검증합니다. `N`개의 필드 요소로 이루어진 벡터 형태의 메시지, [`JubjubSchnorrSignature`](#jubjubschnorrsignature), 공개 키(내장 곡선 위의 [`JubjubPoint`](#jubjubpoint))를 받습니다. 공개 키가 항등(기본) JubjubPoint가 아님을 assert하는데, 이는 검증을 메시지와 무관하게 만들기 때문에 허용되지 않습니다. 서명이 유효하면 true, 아니면 false를 반환합니다.

Compact circuit에서 서명이 유효함을 실제로 강제하려면 결과가 true라는 `assert`를 사용하세요.

```compact
circuit jubjubSchnorrVerify<#N>(
          msg: Vector<N, Field>,
          signature: JubjubSchnorrSignature,
          pk: JubjubPoint
          ): Boolean;
```

### `secp256k1EcdsaVerify`

secp256k1 곡선 위의 ECDSA 서명을 검증합니다. 32바이트 메시지 해시, [`Secp256k1EcdsaSignature`](#secp256k1ecdsasignature), 공개 키([`Secp256k1Point`](#secp256k1point))를 받습니다. 공개 키가 항등(기본) Secp256k1Point가 아님을 assert하는데, 이는 검증을 메시지 해시와 무관하게 만들기 때문에 허용되지 않습니다. 서명이 유효하면 true, 아니면 false를 반환합니다.

circuit은 `msgHash`를 주어진 대로 받으며 어떤 메시지에도 제약하지 않습니다. 호출자는 해당 메시지를 in-circuit으로 해싱하여(예: 이더리움 방식 서명에는 [`keccak256`](#keccak256), 비트코인 방식에는 [`persistentHash`](#persistenthash)) 실제 메시지에 바인딩해야 합니다.

더 넓은 다이제스트(SHA-512, SHA3-512 등)는 선행 32바이트 `slice<32>(digest, 0)`을 전달하여 검증합니다. 이는 그룹 차수보다 넓은 다이제스트에 대해 FIPS 186-5 6.4.2절이 규정하는 절단이자 서명자가 사용하는 방식입니다.

Compact circuit에서 서명이 유효함을 실제로 강제하려면 결과가 true라는 `assert`를 사용하세요.

```compact
circuit secp256k1EcdsaVerify(msgHash: Bytes<32>, sig: Secp256k1EcdsaSignature, pk: Secp256k1Point): Boolean;
```

### `secp256k1EthereumAddress`

secp256k1 공개 키의 20바이트 이더리움 방식 주소, 즉 [`Secp256k1Point`](#secp256k1point)의 Keccak-256 해시 하위 20바이트를 유도합니다.

```compact
circuit secp256k1EthereumAddress(pk: Secp256k1Point): Bytes<20>;
```

### `secp256r1EcdsaVerify`

secp256r1(P256이라고도 함) 곡선 위의 ECDSA 서명을 검증합니다. 32바이트 메시지 해시, [`Secp256r1EcdsaSignature`](#secp256r1ecdsasignature), 공개 키([`Secp256r1Point`](#secp256r1point))를 받습니다. 공개 키가 항등(기본) Secp256r1Point가 아님을 assert합니다. 서명이 유효하면 true, 아니면 false를 반환합니다.

[`secp256k1EcdsaVerify`](#secp256k1ecdsaverify)와 마찬가지로, circuit은 `msgHash`를 주어진 대로 받으며 어떤 메시지에도 제약하지 않고, 더 넓은 다이제스트는 선행 32바이트를 전달하여 검증합니다.

Compact circuit에서 서명이 유효함을 실제로 강제하려면 결과가 true라는 `assert`를 사용하세요.

```compact
circuit secp256r1EcdsaVerify(msgHash: Bytes<32>, sig: Secp256r1EcdsaSignature, pk: Secp256r1Point): Boolean;
```

### `ed25519Verify`

`n`바이트 메시지에 대한 Ed25519 서명(RFC 8032)을 검증합니다. 메시지, [`Ed25519Signature`](#ed25519signature), 공개 키([`Curve25519Point`](#curve25519point))를 받습니다. 메시지는 표준이 규정하는 대로 in-circuit에서 SHA-512로 해싱됩니다. 순수 Ed25519만 해당하며, RFC 8032의 Ed25519ctx 또는 Ed25519ph(사전 해시) 변형으로 만든 서명은 검증되지 않습니다. 공개 키가 항등 Curve25519Point가 아님을 assert합니다. 서명이 유효하면 true, 아니면 false를 반환합니다.

Compact circuit에서 서명이 유효함을 실제로 강제하려면 결과가 true라는 `assert`를 사용하세요.

```compact
circuit ed25519Verify<#n>(msg: Bytes<n>, sig: Ed25519Signature, pk: Curve25519Point): Boolean;
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
circuit tokenType(
  domain_sep: Bytes<32>,
  contractAddress: ContractAddress
): Bytes<32>;
```

### `mintShieldedToken`

이 컨트랙트가 발행한 새 shielded 코인을 생성하여 지정된 수신자에게 전송하고, 해당하는 [`ShieldedCoinInfo`](#shieldedcoininfo)를 반환합니다. 안전한 작동을 위해 고유한 nonce가 필요하며, nonce 생성 방법은 사용자가 결정합니다. 현재 컨트랙트에 shielded 토큰을 발행하려면 `recipient`로 `right<ZswapCoinPublicKey, ContractAddress>(kernel.self())`를 전달하세요.

```compact
circuit mintShieldedToken(
  domain_sep: Bytes<32>,
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

전송된 shielded 코인이 소각됨을 보장하는 지불 주소를 반환합니다.

```compact
circuit shieldedBurnAddress(): Either<ZswapCoinPublicKey, ContractAddress>;
```

### `receiveShielded`

shielded 코인을 수신하며, 이 코인이 이 컨트랙트에 주소가 지정된 출력으로 존재해야 하고 다른 호출이 수신하지 않았어야 한다는 검증 조건을 추가합니다.

```compact
circuit receiveShielded(coin: ShieldedCoinInfo): [];
```

### `sendShielded`

컨트랙트가 보유한 shielded 코인에서 지정된 금액을 수신자에게 전송합니다. 잔돈이 반환되며 컨트랙트에서 관리해야 합니다.

현재 이 함수는 코인 암호문을 생성하지 않으므로, 현재 사용자가 아닌 다른 사용자의 공개 키로 전송하면 수신자가 전송된 코인에 대한 알림을 받지 못합니다. 현재 컨트랙트에 shielded 토큰을 전송하려면 `recipient`로 `right<ZswapCoinPublicKey, ContractAddress>(kernel.self())`를 전달하세요.

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
circuit mergeCoin(
  a: QualifiedShieldedCoinInfo,
  b: QualifiedShieldedCoinInfo
): ShieldedCoinInfo;
```

### `mergeCoinImmediate`

ledger에 저장된 코인 하나와 이 트랜잭션 내에서 생성된 코인 하나를 가져와 하나로 합칩니다.

```compact
circuit mergeCoinImmediate(
  a: QualifiedShieldedCoinInfo,
  b: ShieldedCoinInfo
): ShieldedCoinInfo;
```

### `ownPublicKey`

이 트랜잭션을 생성하는 최종 사용자의 [`ZswapCoinPublicKey`](#zswapcoinpublickey)를 반환합니다.

```compact
witness ownPublicKey(): ZswapCoinPublicKey;
```

### `createZswapInput`

이 호출에서 시작되는 새로운 Zswap 입력을 생성하도록 컨텍스트에 알립니다.
일반적으로 수동으로 호출해서는 안 되며, 대신 [`sendShielded`](#sendshielded) 및 [`sendImmediateShielded`](#sendimmediateshielded)를 사용하세요.

`transientCommit`과 마찬가지로, 이 함수는 인수를 그 자체로 공개하지 않으므로, witness에서 유도한 데이터를 전달해도 `disclose` 래퍼가 필요 없습니다.

```compact
witness createZswapInput(coin: QualifiedShieldedCoinInfo): [];
```

### `createZswapOutput`

이 호출에서 시작되는 새로운 Zswap 출력을 생성하도록 컨텍스트에 알립니다.
일반적으로 수동으로 호출해서는 안 되며, 대신 [`sendShielded`](#sendshielded), [`sendImmediateShielded`](#sendimmediateshielded) 및 [`receiveShielded`](#receiveshielded)를 사용하세요.

`transientCommit`과 마찬가지로, 이 함수는 인수를 그 자체로 공개하지 않으므로, witness에서 유도한 데이터를 전달해도 `disclose` 래퍼가 필요 없습니다.

```compact
witness createZswapOutput(coin: ShieldedCoinInfo, recipient: Either<ZswapCoinPublicKey, ContractAddress>): [];
```

### `mintUnshieldedToken`

이 컨트랙트가 발행한 새로운 unshielded 코인을 생성하고 주어진 수신자에게 전송합니다. 해당하는 코인 색상을 반환합니다. 현재 컨트랙트에 unshielded 토큰을 발행하려면 `recipient`로 `left<ContractAddress, UserAddress>(kernel.self())`를 전달하세요.

```compact
circuit mintUnshieldedToken(
  domainSep: Bytes<32>,
  amount: Uint<64>,
  recipient: Either<ContractAddress, UserAddress>
): Bytes<32>;
```

### `sendUnshielded`

주어진 unshielded 토큰(색상으로 식별)의 주어진 금액을 주어진 수신자에게 전송합니다. 이 함수에서는 잔돈이 반환되지 않습니다. 현재 컨트랙트에 unshielded 토큰을 전송하려면 `recipient`로 `left<ContractAddress, UserAddress>(kernel.self())`를 전달하세요.

```compact
circuit sendUnshielded(color: Bytes<32>, amount: Uint<128>, recipient: Either<ContractAddress, UserAddress>): [];
```

### `receiveUnshielded`

색상으로 식별되는 unshielded 토큰의 주어진 금액을 수신합니다.

```compact
circuit receiveUnshielded(color: Bytes<32>, amount: Uint<128>): [];
```

### `unshieldedBalance`

지정된 타입의 unshielded 토큰에 대한 컨트랙트 잔액을 반환합니다. 이 잔액은 컨트랙트 실행 중 unshielded 전송/수신으로는 업데이트되지 않으며 항상 실행 시작 시점의 값으로 고정됩니다. 또한 이 함수를 사용하면 트랜잭션 구성 시점과 적용 시점의 토큰 잔액이 정확히 일치해야 하며, 그렇지 않으면 트랜잭션이 실패합니다. 이 제약이 필요 없다면 잔액 비교 함수 [`unshieldedBalanceLt`](#unshieldedbalancelt), [`unshieldedBalanceGte`](#unshieldedbalancegte), [`unshieldedBalanceGt`](#unshieldedbalancegt), [`unshieldedBalanceLte`](#unshieldedbalancelte)를 사용하세요.

```compact
circuit unshieldedBalance(color: Bytes<32>): Uint<128>;
```

### `unshieldedBalanceLt`

주어진 토큰 타입에 대한 컨트랙트의 unshielded 잔액이 주어진 값보다 작으면 true를 반환합니다.

```compact
circuit unshieldedBalanceLt(color: Bytes<32>, amount: Uint<128>): Boolean;
```

### `unshieldedBalanceGte`

주어진 토큰 타입에 대한 컨트랙트의 unshielded 잔액이 주어진 값보다 크거나 같으면 true를 반환합니다.

```compact
circuit unshieldedBalanceGte(color: Bytes<32>, amount: Uint<128>): Boolean;
```

### `unshieldedBalanceGt`

주어진 토큰 타입에 대한 컨트랙트의 unshielded 잔액이 주어진 값보다 크면 true를 반환합니다.

```compact
circuit unshieldedBalanceGt(color: Bytes<32>, amount: Uint<128>): Boolean;
```

### `unshieldedBalanceLte`

주어진 토큰 타입에 대한 컨트랙트의 unshielded 잔액이 주어진 값보다 작거나 같으면 true를 반환합니다.

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

### `serialize<T, #n>`

주어진 이벤트 타입 값의 canonical 바이트 인코딩을 반환합니다. `serialize`는 이벤트 타입과 그 canonical 직렬화 크기에 대해서만 인스턴스화할 수 있다는 점에 유의하세요.

```compact
circuit serialize<T, #n> (x: T): Bytes<n>;
```

### `deserialize<T, #n>`

이벤트 타입의 값을 그 canonical 바이트 인코딩에서 재구성합니다. `deserialize`는 이벤트 타입과 그 canonical 직렬화 크기에 대해서만 인스턴스화할 수 있다는 점에 유의하세요.

```compact
circuit deserialize<T, #n> (x: Bytes<n>): T;
```
