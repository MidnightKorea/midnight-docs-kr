[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallOptionsWithPrivateState

# Type Alias: CallOptionsWithPrivateState\<C, PCK\>

> **CallOptionsWithPrivateState**\<`C`, `PCK`\> = [`CallOptionsWithProviderDataDependencies`](CallOptionsWithProviderDataDependencies.md)\<`C`, `PCK`\> & `object`

프라이빗 상태를 가진 컨트랙트의 호출 옵션입니다.

## Type Declaration

### initialPrivateState

> `readonly` **initialPrivateState**: `Contract.PrivateState`\<`C`\>

서킷을 실행할 프라이빗 상태입니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>
