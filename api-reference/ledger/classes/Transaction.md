[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / Transaction

# Class: Transaction\<S, P, B\>

[ContractAction](../type-aliases/ContractAction.md) 섹션과 guaranteed 및 fallible [ZswapOffer](ZswapOffer.md)로 구성된 Midnight 트랜잭션입니다.

guaranteed 섹션이 먼저 실행되며, 이 과정에서 수수료가 지불됩니다. 성공하면 fallible 섹션도 실행되며, 실패 시 원자적으로 롤백됩니다.

## Type Parameters

### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

### B

`B` *extends* [`Bindingish`](../type-aliases/Bindingish.md)

## Properties

### bindingRandomness

```ts
readonly bindingRandomness: bigint;
```

이 트랜잭션에 연결된 바인딩 랜덤값입니다.

***

### fallibleOffer

```ts
fallibleOffer: undefined | Map<number, ZswapOffer<P>>;
```

fallible Zswap 오퍼입니다.

이 값에 쓰기를 하면 트랜잭션이 바인딩되지 않았고 *또한* 증명되지 않은 경우에만 바인딩 정보가 재계산됩니다. 그렇지 않으면 오퍼 구성 요소를 생성하거나 제거할 때 바인딩 오류가 발생할 수 있습니다.

#### Throws

On writing if `B` is [Binding](Binding.md) or this is not a standard
transaction

***

### guaranteedOffer

```ts
guaranteedOffer: undefined | ZswapOffer<P>;
```

guaranteed Zswap 오퍼입니다.

이 값에 쓰기를 하면 트랜잭션이 바인딩되지 않았고 *또한* 증명되지 않은 경우에만 바인딩 정보가 재계산됩니다. 그렇지 않으면 오퍼 구성 요소를 생성하거나 제거할 때 바인딩 오류가 발생할 수 있습니다.

#### Throws

On writing if `B` is [Binding](Binding.md) or this is not a standard
transaction

***

### intents

```ts
intents: undefined | Map<number, Intent<S, P, B>>;
```

이 트랜잭션에 포함된 인텐트입니다.

이 값에 쓰기를 하면 트랜잭션이 바인딩되지 않았고 *또한* 증명되지 않은 경우에만 바인딩 정보가 재계산됩니다. 그렇지 않으면 인텐트를 생성하거나 제거할 때 바인딩 오류가 발생할 수 있지만, 기존 인텐트를 수정하는 것은 성공합니다.

#### Throws

On writing if `B` is [Binding](Binding.md) or this is not a standard
transaction

***

### rewards

```ts
readonly rewards: 
  | undefined
| ClaimRewardsTransaction<S>;
```

이 트랜잭션이 나타내는 보상입니다 (해당하는 경우).

## Methods

### addCalls()

```ts
addCalls(
   segment, 
   calls, 
   params, 
   ttl, 
   zswapInputs?, 
   zswapOutputs?, 
zswapTransient?): Transaction<S, P, B>;
```

트랜잭션에 새 호출 집합을 추가합니다.

[Intent.addCall](Intent.md#addcall)과 달리, 트랜스크립트 분할([partitionTranscripts](../functions/partitionTranscripts.md)) *이전*의 호출을 받아 필요한 곳에 대상 인텐트를 생성하고, 관련 Zswap 부분이 컨트랙트 상호작용과 같은 섹션에 배치되도록 합니다.

#### Parameters

##### segment

[`SegmentSpecifier`](../type-aliases/SegmentSpecifier.md)

##### calls

[`PrePartitionContractCall`](PrePartitionContractCall.md)[]

##### params

[`LedgerParameters`](LedgerParameters.md)

##### ttl

`Date`

##### zswapInputs?

[`ZswapInput`](ZswapInput.md)\<[`PreProof`](PreProof.md)\>[]

##### zswapOutputs?

[`ZswapOutput`](ZswapOutput.md)\<[`PreProof`](PreProof.md)\>[]

##### zswapTransient?

[`ZswapTransient`](ZswapTransient.md)\<[`PreProof`](PreProof.md)\>[]

#### Returns

`Transaction`\<`S`, `P`, `B`\>

#### Throws

바인딩된, 증명된, 또는 증명이 삭제된 트랜잭션에서 호출한 경우

***

### bind()

```ts
bind(): Transaction<S, P, Binding>;
```

이 트랜잭션에 바인딩을 강제합니다. 되돌릴 수 없습니다.

#### Returns

`Transaction`\<`S`, `P`, [`Binding`](Binding.md)\>

***

### cost()

```ts
cost(params, enforceTimeToDismiss?): SyntheticCost;
```

이 트랜잭션의 기본 리소스 비용입니다.

#### Parameters

##### params

[`LedgerParameters`](LedgerParameters.md)

##### enforceTimeToDismiss?

`boolean`

#### Returns

[`SyntheticCost`](../type-aliases/SyntheticCost.md)

***

### eraseProofs()

```ts
eraseProofs(): Transaction<S, NoProof, NoBinding>;
```

이 트랜잭션에 포함된 증명을 삭제합니다.

#### Returns

`Transaction`\<`S`, [`NoProof`](NoProof.md), [`NoBinding`](NoBinding.md)\>

***

### eraseSignatures()

```ts
eraseSignatures(): Transaction<SignatureErased, P, B>;
```

이 트랜잭션에서 서명을 제거합니다.

#### Returns

`Transaction`\<[`SignatureErased`](SignatureErased.md), `P`, `B`\>

***

### fees()

```ts
fees(params, enforceTimeToDismiss?): bigint;
```

이 트랜잭션의 비용(SPECK 단위)입니다.

증명된 트랜잭션에서 호출할 때*만* 정확합니다.

#### Parameters

##### params

[`LedgerParameters`](LedgerParameters.md)

##### enforceTimeToDismiss?

`boolean`

#### Returns

`bigint`

***

### feesWithMargin()

```ts
feesWithMargin(params, margin): bigint;
```

`n` 블록의 안전 마진이 적용된 이 트랜잭션의 비용(SPECK 단위)입니다.

[fees](#fees)와 마찬가지로, 증명된 트랜잭션에서만 정확합니다.

경고: `n`은 음이 아닌 정수여야 하며, 지수로 사용되므로 비합리적인 마진이 나오기 쉽습니다!

#### Parameters

##### params

[`LedgerParameters`](LedgerParameters.md)

##### margin

`number`

#### Returns

`bigint`

***

### identifiers()

```ts
identifiers(): string[];
```

이 트랜잭션에 포함된 식별자 집합을 반환합니다. 이 중 어느 것이든 특정 트랜잭션을 감시하는 데 사용할 수 *있습니다*.

#### Returns

`string`[]

***

### imbalances()

```ts
imbalances(segment, fees?): Map<TokenType, bigint>;
```

주어진 수수료와 주어진 섹션(guaranteed/fallible)에서 이 트랜잭션의 각 토큰 유형별 초과분 또는 부족분입니다.

#### Parameters

##### segment

`number`

##### fees?

`bigint`

#### Returns

`Map`\<[`TokenType`](../type-aliases/TokenType.md), `bigint`\>

#### Throws

If `segment` is not a valid segment ID

***

### merge()

```ts
merge(other): Transaction<S, P, B>;
```

이 트랜잭션을 다른 트랜잭션과 병합합니다.

#### Parameters

##### other

`Transaction`\<`S`, `P`, `B`\>

#### Returns

`Transaction`\<`S`, `P`, `B`\>

#### Throws

두 트랜잭션 모두 컨트랙트 상호작용이 있거나 같은 코인을 소비하는 경우

***

### mockProve()

```ts
mockProve(): Transaction<S, Proof, Binding>;
```

증명을 모의 수행하여 검증되지는 *않지만* 수수료 계산 목적으로는 정확한 '증명된' 트랜잭션을 생성합니다.

증명 크기의 가변성으로 인해, 미증명 컨트랙트 호출을 포함하지 않는 트랜잭션에서*만* 작동합니다.

#### Returns

`Transaction`\<`S`, [`Proof`](Proof.md), [`Binding`](Binding.md)\>

#### Throws

If called on bound, proven, or proof-erased transactions, or if the
transaction contains unproven contract calls.

***

### prove()

```ts
prove(provider, cost_model): Promise<Transaction<S, Proof, B>>;
```

저수준 증명 제공자에 접근하여 트랜잭션을 증명합니다.
`P = PreProof`인 경우에*만* 호출할 수 있습니다.

#### Parameters

##### provider

[`ProvingProvider`](../type-aliases/ProvingProvider.md)

##### cost\_model

[`CostModel`](CostModel.md)

#### Returns

`Promise`\<`Transaction`\<`S`, [`Proof`](Proof.md), `B`\>\>

#### Throws

If called on bound, proven, or proof-erased transactions.

***

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`

***

### transactionHash()

```ts
transactionHash(): string;
```

이 트랜잭션과 연결된 해시를 반환합니다. 트랜잭션 병합이 가능하므로, 특정 트랜잭션을 감시하는 데 사용해서는 안 됩니다.

#### Returns

`string`

***

### wellFormed()

```ts
wellFormed(
   ref_state, 
   strictness, 
   tblock): VerifiedTransaction;
```

올바른 형식 기준을 테스트하며, 선택적으로 트랜잭션 균형도 포함합니다.

#### Parameters

##### ref\_state

[`LedgerState`](LedgerState.md)

##### strictness

[`WellFormedStrictness`](WellFormedStrictness.md)

##### tblock

`Date`

#### Returns

[`VerifiedTransaction`](VerifiedTransaction.md)

#### Throws

어떤 이유로든 트랜잭션이 올바른 형식이 아닌 경우

***

### deserialize()

```ts
static deserialize<S, P, B>(
   markerS, 
   markerP, 
   markerB, 
raw): Transaction<S, P, B>;
```

#### Type Parameters

##### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

##### B

`B` *extends* [`Bindingish`](../type-aliases/Bindingish.md)

#### Parameters

##### markerS

`S`\[`"instance"`\]

##### markerP

`P`\[`"instance"`\]

##### markerB

`B`\[`"instance"`\]

##### raw

`Uint8Array`

#### Returns

`Transaction`\<`S`, `P`, `B`\>

***

### fromParts()

```ts
static fromParts(
   network_id, 
   guaranteed?, 
   fallible?, 
   intent?): UnprovenTransaction;
```

구성 요소로부터 트랜잭션을 생성합니다.

#### Parameters

##### network\_id

`string`

##### guaranteed?

[`UnprovenOffer`](../type-aliases/UnprovenOffer.md)

##### fallible?

[`UnprovenOffer`](../type-aliases/UnprovenOffer.md)

##### intent?

[`UnprovenIntent`](../type-aliases/UnprovenIntent.md)

#### Returns

[`UnprovenTransaction`](../type-aliases/UnprovenTransaction.md)

***

### fromPartsRandomized()

```ts
static fromPartsRandomized(
   network_id, 
   guaranteed?, 
   fallible?, 
   intent?): UnprovenTransaction;
```

구성 요소로부터 트랜잭션을 생성하며, 병합을 용이하게 하기 위해 세그먼트 ID를 무작위로 지정합니다.

#### Parameters

##### network\_id

`string`

##### guaranteed?

[`UnprovenOffer`](../type-aliases/UnprovenOffer.md)

##### fallible?

[`UnprovenOffer`](../type-aliases/UnprovenOffer.md)

##### intent?

[`UnprovenIntent`](../type-aliases/UnprovenIntent.md)

#### Returns

[`UnprovenTransaction`](../type-aliases/UnprovenTransaction.md)

***

### fromRewards()

```ts
static fromRewards<S>(rewards): Transaction<S, PreProof, Binding>;
```

보상 청구 트랜잭션을 생성합니다. 청구하는 자금은 이전에 정당하게 보상된 것이어야 합니다.

#### Type Parameters

##### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

#### Parameters

##### rewards

[`ClaimRewardsTransaction`](ClaimRewardsTransaction.md)\<`S`\>

#### Returns

`Transaction`\<`S`, [`PreProof`](PreProof.md), [`Binding`](Binding.md)\>
