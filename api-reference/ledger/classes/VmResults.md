[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / VmResults

# Class: VmResults

VM 호출 결과를 나타냅니다.

## Properties

### events

```ts
readonly events: GatherResult[];
```

이 VM 호출에서 발생한 이벤트입니다.

***

### gasCost

```ts
readonly gasCost: RunningCost;
```

이 VM 호출 실행의 계산된 가스 비용입니다.

***

### stack

```ts
readonly stack: VmStack;
```

VM 호출 종료 시점의 VM 스택입니다.

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
