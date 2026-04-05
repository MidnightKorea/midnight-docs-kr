[**@midnight-ntwrk/onchain-runtime v3.0.0**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / VmResults

# Class: VmResults

VM 호출의 결과를 나타냅니다

## Properties

### events

```ts
readonly events: GatherResult[];
```

이 VM 호출에서 발생한 이벤트

***

### gasCost

```ts
readonly gasCost: RunningCost;
```

이 VM 호출 실행의 계산된 가스 비용

***

### stack

```ts
readonly stack: VmStack;
```

VM 호출 종료 시의 VM 스택

## Methods

### toString()

```ts
toString(compact?): string
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`
