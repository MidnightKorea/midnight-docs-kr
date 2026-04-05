[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallOptionsBase

# Type Alias: CallOptionsBase\<C, PCK\>

> **CallOptionsBase**\<`C`, `PCK`\> = `object`

서킷 호출의 대상을 설명합니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>

## Properties

### circuitId

> `readonly` **circuitId**: `PCK`

호출할 서킷의 식별자입니다.

***

### compiledContract

> `readonly` **compiledContract**: `CompiledContract.CompiledContract`\<`C`, `any`\>

호출할 서킷을 정의하는 컨트랙트입니다.

***

### contractAddress

> `readonly` **contractAddress**: [`ContractAddress`](#)

실행 중인 컨트랙트의 주소입니다.
