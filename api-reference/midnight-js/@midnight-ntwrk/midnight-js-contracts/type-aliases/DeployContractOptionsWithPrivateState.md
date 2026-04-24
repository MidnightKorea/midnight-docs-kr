[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / DeployContractOptionsWithPrivateState

# Type Alias: DeployContractOptionsWithPrivateState\<C\>

> **DeployContractOptionsWithPrivateState**\<`C`\> = [`DeployContractOptionsBase`](DeployContractOptionsBase.md)\<`C`\> & `object`

[deployContract](../functions/deployContract.md) base options with information needed to store private states;
only used if the contract being deployed has a private state.

## Type Declaration

### initialPrivateState

> `readonly` **initialPrivateState**: `Contract.PrivateState`\<`C`\>

서킷을 실행할 프라이빗 상태입니다.

### privateStateId

> `readonly` **privateStateId**: `PrivateStateId`

검색 중인 컨트랙트의 프라이빗 상태에 대한 식별자입니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`
