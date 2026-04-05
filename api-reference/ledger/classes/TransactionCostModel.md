[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / TransactionCostModel

# Class: TransactionCostModel

## Properties

### baselineCost

```ts
readonly baselineCost: RunningCost;
```

시작 기준 비용입니다.

***

### inputFeeOverhead

```ts
readonly inputFeeOverhead: bigint;
```

트랜잭션에 새 입력을 추가할 때 예상되는 수수료 증가분입니다.

***

### outputFeeOverhead

```ts
readonly outputFeeOverhead: bigint;
```

트랜잭션에 새 출력을 추가할 때 예상되는 수수료 증가분입니다.

***

### runtimeCostModel

```ts
readonly runtimeCostModel: CostModel;
```

트랜잭션 수수료를 계산하기 위한 비용 모델입니다.

## Methods

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

### deserialize()

```ts
static deserialize(raw): TransactionCostModel;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`TransactionCostModel`

***

### initialTransactionCostModel()

```ts
static initialTransactionCostModel(): TransactionCostModel;
```

Midnight의 초기 비용 모델입니다.

#### Returns

`TransactionCostModel`
