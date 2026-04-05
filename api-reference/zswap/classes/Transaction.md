[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / Transaction

# Class: Transaction

guaranteed 및 fallible [Offer](Offer.md)와 이 API에서 숨겨진 컨트랙트 호출 정보로 구성된 Midnight 트랜잭션입니다.

guaranteed 섹션이 먼저 실행되며, 이 과정에서 수수료가 지불됩니다. 성공하면 fallible 섹션도 실행되며, 실패 시 원자적으로 롤백됩니다.

## Properties

### fallibleCoins

```ts
readonly fallibleCoins: undefined | Offer;
```

fallible Zswap 오퍼입니다.

***

### guaranteedCoins

```ts
readonly guaranteedCoins: undefined | Offer;
```

guaranteed Zswap 오퍼입니다.

***

### mint

```ts
readonly mint: undefined | AuthorizedMint;
```

이 트랜잭션이 나타내는 민트입니다 (해당하는 경우).

## Methods

### eraseProofs()

```ts
eraseProofs(): ProofErasedTransaction
```

이 트랜잭션에 포함된 증명을 삭제합니다.

#### Returns

[`ProofErasedTransaction`](ProofErasedTransaction.md)

***

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
merge(other): Transaction
```

이 트랜잭션을 다른 트랜잭션과 병합합니다.

#### Parameters

##### other

[`Transaction`](Transaction.md)

#### Returns

[`Transaction`](Transaction.md)

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

### transactionHash()

```ts
transactionHash(): string
```

이 트랜잭션과 연결된 해시를 반환합니다. 트랜잭션 병합이 가능하므로, 특정 트랜잭션을 감시하는 데 사용해서는 안 됩니다.

#### Returns

`string`

***

### deserialize()

```ts
static deserialize(raw, netid): Transaction
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`Transaction`](Transaction.md)

***

### fromUnproven()

```ts
static fromUnproven(prove, unproven): Promise<Transaction>
```

증명 서버 등 외부 증명 함수를 사용해야 한다는 타입 힌트입니다.

#### Parameters

##### prove

(`unproven`) => `Promise`\<[`Transaction`](Transaction.md)\>

##### unproven

[`UnprovenTransaction`](UnprovenTransaction.md)

#### Returns

`Promise`\<[`Transaction`](Transaction.md)\>
