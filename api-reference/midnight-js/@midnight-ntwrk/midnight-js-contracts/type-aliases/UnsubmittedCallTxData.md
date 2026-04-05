[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / UnsubmittedCallTxData

# Type Alias: UnsubmittedCallTxData\<C, PCK\>

> **UnsubmittedCallTxData**\<`C`, `PCK`\> = [`CallResult`](CallResult.md)\<`C`, `PCK`\> & `object`

미제출 호출 트랜잭션의 데이터입니다.

## Type Declaration

### private

> `readonly` **private**: [`UnsubmittedTxData`](UnsubmittedTxData.md)

이 호출 트랜잭션과 관련된 프라이빗 데이터입니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>
