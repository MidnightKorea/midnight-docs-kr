[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / QueryResults

# Class: QueryResults

특정 상태 또는 컨텍스트에 대한 쿼리 결과입니다.

## Properties

### context

```ts
readonly context: QueryContext;
```

쿼리 실행 후 컨텍스트 상태입니다. 추가 쿼리를 실행하는 데 사용할 수 있습니다.

***

### events

```ts
readonly events: GatherResult[];
```

쿼리 중 또는 쿼리로부터 발생한 이벤트/결과입니다.

***

### gasCost

```ts
readonly gasCost: RunningCost;
```

쿼리 실행의 측정된 비용입니다.

## Methods

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`
