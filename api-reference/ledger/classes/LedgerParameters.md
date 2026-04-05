[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / LedgerParameters

# Class: LedgerParameters

트랜잭션 수수료 및 한도를 포함하여 Midnight 원장에서 사용하는 매개변수입니다.

## Properties

### dust

```ts
readonly dust: DustParameters;
```

DUST에 관련된 매개변수입니다.

***

### feePrices

```ts
readonly feePrices: FeePrices;
```

트랜잭션 수수료 가격입니다.

***

### transactionCostModel

```ts
readonly transactionCostModel: TransactionCostModel;
```

이 매개변수에 포함된 트랜잭션 수수료에 사용되는 비용 모델입니다.

## Methods

### maxPriceAdjustment()

```ts
maxPriceAdjustment(): number;
```

현재 매개변수 기준으로 블록당 최대 가격 조정치를 곱셈 인수로 반환합니다 (예: 1.1은 10% 조정). 항상 양의 (>1) 조정 인수를 반환합니다. 음의 조정은 곱셈이 아닌 덧셈의 역으로 적용됩니다 (1.1에 대응하는 하향 조정은 0.9).

#### Returns

`number`

***

### normalizeFullness()

```ts
normalizeFullness(fullness): NormalizedCost;
```

상세 블록 충만도 비용을 블록 한도에 맞게 정규화합니다.

#### Parameters

##### fullness

[`SyntheticCost`](../type-aliases/SyntheticCost.md)

#### Returns

[`NormalizedCost`](../type-aliases/NormalizedCost.md)

#### Throws

블록 한도 중 하나라도 초과한 경우

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

### deserialize()

```ts
static deserialize(raw): LedgerParameters;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`LedgerParameters`

***

### initialParameters()

```ts
static initialParameters(): LedgerParameters;
```

Midnight의 초기 매개변수입니다.

#### Returns

`LedgerParameters`
