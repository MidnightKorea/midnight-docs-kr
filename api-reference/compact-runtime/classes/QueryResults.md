[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / QueryResults

# Class: QueryResults

특정 상태 또는 컨텍스트에 대한 쿼리 결과

## Properties

### context

```ts
readonly context: QueryContext;
```

쿼리 실행 후의 컨텍스트 상태입니다. 추가 쿼리 실행에 사용할 수 있습니다

***

### events

```ts
readonly events: GatherResult[];
```

쿼리 중 또는 쿼리로부터 발생한 이벤트/결과

***

### gasCost

```ts
readonly gasCost: RunningCost;
```

쿼리 실행의 측정된 비용

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
