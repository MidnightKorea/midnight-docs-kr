[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / LedgerParameters

# Class: LedgerParameters

트랜잭션 수수료 및 한도를 포함하여 Midnight 원장에서 사용하는 매개변수입니다.

## Properties

### transactionCostModel

```ts
readonly transactionCostModel: TransactionCostModel;
```

이 매개변수에 포함된 트랜잭션 수수료에 사용되는 비용 모델입니다.

## Methods

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
static deserialize(raw, netid): LedgerParameters
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`LedgerParameters`](LedgerParameters.md)

***

### dummyParameters()

```ts
static dummyParameters(): LedgerParameters
```

A dummy set of testing parameters

#### Returns

[`LedgerParameters`](LedgerParameters.md)
