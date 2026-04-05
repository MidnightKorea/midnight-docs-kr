[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / FinalizedCallTxData

# Type Alias: FinalizedCallTxData\<C, PCK\>

> **FinalizedCallTxData**\<`C`, `PCK`\> = [`UnsubmittedCallTxData`](UnsubmittedCallTxData.md)\<`C`, `PCK`\> & `object`

제출 및 확정된 호출 트랜잭션의 데이터입니다.

## Type Declaration

### public

> `readonly` **public**: `FinalizedTxData`

이 호출 트랜잭션과 관련된 퍼블릭 데이터입니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>
