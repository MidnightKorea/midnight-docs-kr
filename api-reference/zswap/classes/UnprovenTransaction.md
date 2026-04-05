[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / UnprovenTransaction

# Class: UnprovenTransaction

[Transaction](Transaction.md), prior to being proven

이 단계에서 트랜잭션의 모든 "차폐" 정보를 추출할 수 있습니다.
stage!

## Constructors

### new UnprovenTransaction()

```ts
new UnprovenTransaction(guaranteed, fallible?): UnprovenTransaction
```

guaranteed/fallible [UnprovenOffer](UnprovenOffer.md)로 트랜잭션을 생성합니다.

#### Parameters

##### guaranteed

[`UnprovenOffer`](UnprovenOffer.md)

##### fallible?

[`UnprovenOffer`](UnprovenOffer.md)

#### Returns

[`UnprovenTransaction`](UnprovenTransaction.md)

## Properties

### fallibleCoins

```ts
readonly fallibleCoins: undefined | UnprovenOffer;
```

fallible Zswap 오퍼입니다.

***

### guaranteedCoins

```ts
readonly guaranteedCoins: undefined | UnprovenOffer;
```

guaranteed Zswap 오퍼입니다.

***

### mint

```ts
readonly mint: undefined | UnprovenAuthorizedMint;
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

### identifiers()

```ts
identifiers(): string[]
```

이 트랜잭션에 포함된 식별자 집합을 반환합니다. 이 중 어느 것이든 특정 트랜잭션을 감시하는 데 사용할 수 *있습니다*.

#### Returns

`string`[]

***

### merge()

```ts
merge(other): UnprovenTransaction
```

이 트랜잭션을 다른 트랜잭션과 병합합니다.

#### Parameters

##### other

[`UnprovenTransaction`](UnprovenTransaction.md)

#### Returns

[`UnprovenTransaction`](UnprovenTransaction.md)

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
static deserialize(raw, netid): UnprovenTransaction
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`UnprovenTransaction`](UnprovenTransaction.md)

***

### fromMint()

```ts
static fromMint(mint): UnprovenTransaction
```

민팅 청구 트랜잭션을 생성합니다. 청구하는 자금은
legitimately minted previously.

#### Parameters

##### mint

[`UnprovenAuthorizedMint`](UnprovenAuthorizedMint.md)

#### Returns

[`UnprovenTransaction`](UnprovenTransaction.md)
