[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / ProofErasedTransaction

# Class: ProofErasedTransaction

[Transaction](Transaction.md), with all proof information erased

주로 테스트 또는 올바른 것으로 알려진 데이터 처리에 사용됩니다.
external information

## Properties

### fallibleCoins

```ts
readonly fallibleCoins: undefined | ProofErasedOffer;
```

fallible Zswap 오퍼입니다.

***

### guaranteedCoins

```ts
readonly guaranteedCoins: undefined | ProofErasedOffer;
```

guaranteed Zswap 오퍼입니다.

***

### mint

```ts
readonly mint: undefined | ProofErasedAuthorizedMint;
```

이 트랜잭션이 나타내는 민트입니다 (해당하는 경우).

## Methods

### fees()

```ts
fees(params): bigint
```

기본 토큰의 최소 단위로 표현된 이 트랜잭션의 비용입니다.

#### Parameters

##### params

[`LedgerParameters`](LedgerParameters.md)

#### Returns

`bigint`

***

### identifiers()

```ts
identifiers(): string[]
```

이 트랜잭션에 포함된 식별자 집합을 반환합니다. 이 중 어느 것이든 특정 트랜잭션을 감시하는 데 사용할 수 *있습니다*.

#### Returns

`string`[]

***

### imbalances()

```ts
imbalances(guaranteed, fees?): Map<string, bigint>
```

주어진 수수료와 주어진 섹션(guaranteed/fallible)에서 이 트랜잭션의 각 토큰 유형별 초과분 또는 부족분입니다.

#### Parameters

##### guaranteed

`boolean`

##### fees?

`bigint`

#### Returns

`Map`\<`string`, `bigint`\>

***

### merge()

```ts
merge(other): ProofErasedTransaction
```

이 트랜잭션을 다른 트랜잭션과 병합합니다.

#### Parameters

##### other

[`ProofErasedTransaction`](ProofErasedTransaction.md)

#### Returns

[`ProofErasedTransaction`](ProofErasedTransaction.md)

#### Throws

두 트랜잭션 모두 컨트랙트 상호작용이 있거나 같은 코인을 소비하는 경우

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

### deserialize()

```ts
static deserialize(raw, netid): ProofErasedTransaction
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ProofErasedTransaction`](ProofErasedTransaction.md)
