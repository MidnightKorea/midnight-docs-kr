[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitTxAsync

# Function: submitTxAsync()

> **submitTxAsync**\<`C`, `PCK`\>(`providers`, `options`): `Promise`\<`string`\>

주어진 프로바이더를 사용하여 지정된 옵션에 따라 미증명 배포 또는 호출 트랜잭션을 증명, 밸런싱, 제출합니다. [submitTx](submitTx.md)와 달리 이 함수는 확정을 기다리지 않고 제출 직후 즉시 반환합니다.

## Type Parameters

### C

`C` *extends* `Any`

### PCK

`PCK` *extends* `string`

## Parameters

### providers

[`SubmitTxProviders`](../type-aliases/SubmitTxProviders.md)\<`C`, `PCK`\>

트랜잭션 수명 주기를 관리하는 데 사용되는 프로바이더입니다.

### options

[`SubmitTxOptions`](../type-aliases/SubmitTxOptions.md)\<`PCK`\>

설정입니다.

## Returns

`Promise`\<`string`\>

제출 직후 트랜잭션 ID로 이행되거나, 준비 또는 제출 중 오류가 발생하면 거부되는 프로미스입니다.
         확정을 감시하려면 providers.publicDataProvider.watchForTxData(txId)를 사용하세요.
