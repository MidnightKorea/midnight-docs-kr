[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / queryLedgerState

# Function: queryLedgerState()

```ts
function queryLedgerState(
   circuitContext, 
   partialProofData, 
   program): 
  | AlignedValue
  | GatherResult[];
```

주어진 회로 컨텍스트에서 현재 원장 상태에 대해 프로그램(쿼리)을 실행합니다.
주어진 부분 증명 데이터에 트랜스크립트를 기록합니다.

## Parameters

### circuitContext

[`CircuitContext`](../interfaces/CircuitContext.md)

현재 실행 중인 회로의 컨텍스트입니다.

### partialProofData

[`PartialProofData`](../interfaces/PartialProofData.md)

쿼리 결과를 삽입할 부분 증명 데이터입니다.

### program

[`Op`](../type-aliases/Op.md)\<`null`\>[]

실행할 쿼리입니다.

## Returns

  \| [`AlignedValue`](../type-aliases/AlignedValue.md)
  \| [`GatherResult`](../type-aliases/GatherResult.md)[]
