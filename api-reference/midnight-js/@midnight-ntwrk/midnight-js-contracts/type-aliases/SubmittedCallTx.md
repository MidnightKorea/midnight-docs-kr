[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / SubmittedCallTx

# Type Alias: SubmittedCallTx\<C, PCK\>

> **SubmittedCallTx**\<`C`, `PCK`\> = `object`

비동기 호출 트랜잭션 제출에서 반환된 데이터입니다.
확정을 기다리지 않고 트랜잭션 ID와 호출 트랜잭션 데이터를 포함합니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>

## Properties

### callTxData

> `readonly` **callTxData**: [`UnsubmittedCallTxData`](UnsubmittedCallTxData.md)\<`C`, `PCK`\>

프라이빗 상태를 포함하는 미증명 호출 트랜잭션 데이터입니다.

***

### txId

> `readonly` **txId**: `string`

제출에서 반환된 트랜잭션 ID입니다.
