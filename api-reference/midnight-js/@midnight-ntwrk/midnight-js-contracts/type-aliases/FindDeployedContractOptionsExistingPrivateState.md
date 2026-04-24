[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / FindDeployedContractOptionsExistingPrivateState

# Type Alias: FindDeployedContractOptionsExistingPrivateState\<C\>

> **FindDeployedContractOptionsExistingPrivateState**\<`C`\> = [`FindDeployedContractOptionsBase`](FindDeployedContractOptionsBase.md)\<`C`\> & `object`

[findDeployedContract](../functions/findDeployedContract.md) base configuration that includes an initial private
state to store and the private state ID at which to store it. Only used if
the intention is to overwrite the private state currently stored at the given
private state ID.

## Type Declaration

### privateStateId

> `readonly` **privateStateId**: `PrivateStateId`

검색 중인 컨트랙트의 프라이빗 상태에 대한 식별자입니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`
