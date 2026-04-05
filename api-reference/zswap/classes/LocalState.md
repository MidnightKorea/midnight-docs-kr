[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / LocalState

# Class: LocalState

미사용 코인 집합으로 구성된 사용자/지갑의 로컬 상태입니다.
of unspent coins

It also keeps track of coins that are in-flight, either expecting to spend
or expecting to receive, and a local copy of the global coin commitment
Merkle tree to generate proofs against.

## Constructors

### new LocalState()

```ts
new LocalState(): LocalState
```

새로운 빈 상태를 생성합니다.

#### Returns

[`LocalState`](LocalState.md)

## Properties

### coins

```ts
readonly coins: Set<QualifiedCoinInfo>;
```

이 지갑의 *소비 가능한* 코인 집합입니다.

***

### firstFree

```ts
readonly firstFree: bigint;
```

내부 코인 커밋먼트 머클 트리의 첫 번째 빈 인덱스입니다.
This may be used to identify which merkle tree updates are necessary.

***

### pendingOutputs

```ts
readonly pendingOutputs: Map<string, CoinInfo>;
```

이 지갑이 향후 수신할 것으로 예상하는 출력입니다.

***

### pendingSpends

```ts
readonly pendingSpends: Map<string, QualifiedCoinInfo>;
```

이 지갑이 향후 온체인에서 확정될 것으로 예상하는 소비입니다.
future

## Methods

### apply()

```ts
apply(secretKeys, offer): LocalState
```

현재 상태에 오퍼를 로컬로 적용하고 업데이트된 상태를 반환합니다.

#### Parameters

##### secretKeys

[`SecretKeys`](SecretKeys.md)

##### offer

[`Offer`](Offer.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyCollapsedUpdate()

```ts
applyCollapsedUpdate(update): LocalState
```

압축된 머클 트리 업데이트를 현재 로컬 상태에 적용하고 빠르게
forwarding through the indices included in it, if it is a correct update.

The general flow for usage if Alice is in state A, and wants to ask Bob how to reach the new state B, is:
 - Find where she left off – what's her firstFree?
 - Find out where she's going – ask for Bob's firstFree.
 - Find what contents she does care about – ask Bob for the filtered
   entries she want to include proper in her tree.
 - In order, of Merkle tree indices:
   - Insert (with `apply` offers Alice cares about).
   - Skip (with this method) sections Alice does not care about, obtaining
     the collapsed update covering the gap from Bob.
Note that `firstFree` is not included in the tree itself, and both ends of
updates *are* included.

#### Parameters

##### update

[`MerkleTreeCollapsedUpdate`](MerkleTreeCollapsedUpdate.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyFailed()

```ts
applyFailed(offer): LocalState
```

오퍼를 실패로 로컬 표시하여 사용된 입력을
spendable once more.

#### Parameters

##### offer

[`Offer`](Offer.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyFailedProofErased()

```ts
applyFailedProofErased(offer): LocalState
```

증명이 삭제된 오퍼를 실패로 로컬 표시하여 사용된 입력을
to be spendable once more.

#### Parameters

##### offer

[`ProofErasedOffer`](ProofErasedOffer.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyProofErased()

```ts
applyProofErased(secretKeys, offer): LocalState
```

현재 상태에 증명이 삭제된 오퍼를 로컬로 적용하고
updated state

#### Parameters

##### secretKeys

[`SecretKeys`](SecretKeys.md)

##### offer

[`ProofErasedOffer`](ProofErasedOffer.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyProofErasedTx()

```ts
applyProofErasedTx(
   secretKeys, 
   tx, 
   res): LocalState
```

현재 상태에 증명이 삭제된 트랜잭션을 로컬로 적용하고
the updated state

#### Parameters

##### secretKeys

[`SecretKeys`](SecretKeys.md)

##### tx

[`ProofErasedTransaction`](ProofErasedTransaction.md)

##### res

이 트랜잭션을 적용한 결과 타입입니다.
ledger state

`"success"` | `"partialSuccess"` | `"failure"`

#### Returns

[`LocalState`](LocalState.md)

***

### applySystemTx()

```ts
applySystemTx(secretKeys, tx): LocalState
```

현재 상태에 시스템 트랜잭션을 로컬로 적용하고
updated state

#### Parameters

##### secretKeys

[`SecretKeys`](SecretKeys.md)

##### tx

[`SystemTransaction`](SystemTransaction.md)

#### Returns

[`LocalState`](LocalState.md)

***

### applyTx()

```ts
applyTx(
   secretKeys, 
   tx, 
   res): LocalState
```

현재 상태에 트랜잭션을 로컬로 적용하고 업데이트된
state

#### Parameters

##### secretKeys

[`SecretKeys`](SecretKeys.md)

##### tx

[`Transaction`](Transaction.md)

##### res

The result type of applying this transaction against the
ledger state

`"success"` | `"partialSuccess"` | `"failure"`

#### Returns

[`LocalState`](LocalState.md)

***

### serialize()

```ts
serialize(netid): Uint8Array<ArrayBufferLike>
```

#### Parameters

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### spend()

```ts
spend(
   secretKeys, 
   coin, 
   segment): [LocalState, UnprovenInput]
```

특정 코인의 새 소비를 시작하고 해당하는
[UnprovenInput](UnprovenInput.md), and the updated state marking this coin as
in-flight.

#### Parameters

##### secretKeys

[`SecretKeys`](SecretKeys.md)

##### coin

[`QualifiedCoinInfo`](../type-aliases/QualifiedCoinInfo.md)

##### segment

`number`

#### Returns

[[`LocalState`](LocalState.md), [`UnprovenInput`](UnprovenInput.md)]

***

### spendFromOutput()

```ts
spendFromOutput(
   secretKeys, 
   coin, 
   segment, 
   output): [LocalState, UnprovenTransient]
```

아직 수신되지 않은 새 출력의 소비를 시작하고
corresponding [UnprovenTransient](UnprovenTransient.md), and the updated state marking
this coin as in-flight.

#### Parameters

##### secretKeys

[`SecretKeys`](SecretKeys.md)

##### coin

[`QualifiedCoinInfo`](../type-aliases/QualifiedCoinInfo.md)

##### segment

`number`

##### output

[`UnprovenOutput`](UnprovenOutput.md)

#### Returns

[[`LocalState`](LocalState.md), [`UnprovenTransient`](UnprovenTransient.md)]

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`

***

### watchFor()

```ts
watchFor(coinPublicKey, coin): LocalState
```

수신 예정 코인 목록에 코인을 추가합니다.

이 지갑을 위한 코인을 생성하는 출력이
does not contain a ciphertext to detect it. In this case, the wallet must
know the commitment ahead of time to notice the receipt.

#### Parameters

##### coinPublicKey

`string`

##### coin

[`CoinInfo`](../type-aliases/CoinInfo.md)

#### Returns

[`LocalState`](LocalState.md)

***

### deserialize()

```ts
static deserialize(raw, netid): LocalState
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`LocalState`](LocalState.md)
