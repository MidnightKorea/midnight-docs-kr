[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / DeployTxOptionsWithPrivateStateId

# Type Alias: DeployTxOptionsWithPrivateStateId\<C\>

> **DeployTxOptionsWithPrivateStateId**\<`C`\> = [`DeployTxOptionsWithPrivateState`](DeployTxOptionsWithPrivateState.md)\<`C`\> & `object`

Configuration for creating deploy transactions for contracts with private state. This
configuration is used when a deployment transaction is created and an initial private
state needs to be stored, as is the case in [submitDeployTx](../functions/submitDeployTx.md).

## Type Declaration

### privateStateId

> `readonly` **privateStateId**: `PrivateStateId`

컨트랙트 프라이빗 상태의 식별자입니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`
