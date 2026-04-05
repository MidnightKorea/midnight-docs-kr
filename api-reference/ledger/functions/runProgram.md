[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / runProgram

# Function: runProgram()

```ts
function runProgram(
   initial, 
   ops, 
   cost_model, 
   gas_limit?): VmResults;
```

초기 스택에서 선택적 가스 한도와 함께 VM 프로그램을 실행합니다.

## Parameters

### initial

[`VmStack`](../classes/VmStack.md)

### ops

[`Op`](../type-aliases/Op.md)\<`null`\>[]

### cost\_model

[`CostModel`](../classes/CostModel.md)

### gas\_limit?

[`RunningCost`](../type-aliases/RunningCost.md)

## Returns

[`VmResults`](../classes/VmResults.md)
