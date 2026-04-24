[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createUnprovenCallTxFromInitialStates

# Function: createUnprovenCallTxFromInitialStates()

제공된 초기 `states`를 사용하여 서킷을 호출하고, 밸런싱되지 않은 미증명 미제출 호출 트랜잭션을 생성합니다.

## Param

## Param

설정입니다.

## Param

## Call Signature

> **createUnprovenCallTxFromInitialStates**\<`C`, `PCK`\>(`zkConfigProvider`, `options`, `walletEncryptionPublicKey`): `Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

#### PCK

`PCK` *extends* `string`

### Parameters

#### zkConfigProvider

[`ZKConfigProvider`](#)\<`string`\>

#### options

[`CallOptionsWithProviderDataDependencies`](../type-aliases/CallOptionsWithProviderDataDependencies.md)\<`C`, `PCK`\>

#### walletEncryptionPublicKey

`string`

### Returns

`Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>\>

## Call Signature

> **createUnprovenCallTxFromInitialStates**\<`C`, `PCK`\>(`zkConfigProvider`, `options`, `walletEncryptionPublicKey`): `Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

#### PCK

`PCK` *extends* `string`

### Parameters

#### zkConfigProvider

[`ZKConfigProvider`](#)\<`string`\>

#### options

[`CallOptionsWithPrivateState`](../type-aliases/CallOptionsWithPrivateState.md)\<`C`, `PCK`\>

#### walletEncryptionPublicKey

`string`

### Returns

`Promise`\<[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>\>
