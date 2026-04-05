[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / runProgram

# Function: runProgram()

```ts
function runProgram(
   initial, 
   ops, 
   cost_model, 
   gas_limit?): VmResults;
```

초기 스택에 대해 VM 프로그램을 실행하며, 선택적 가스 한도를 지정할 수 있습니다

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
