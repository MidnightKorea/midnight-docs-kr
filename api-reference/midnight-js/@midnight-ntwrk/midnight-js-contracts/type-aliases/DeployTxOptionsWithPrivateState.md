[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / DeployTxOptionsWithPrivateState

# Type Alias: DeployTxOptionsWithPrivateState\<C\>

> **DeployTxOptionsWithPrivateState**\<`C`\> = [`DeployTxOptionsBase`](DeployTxOptionsBase.md)\<`C`\> & `object`

Configuration for creating deploy transactions for contracts with private state. This
configuration used as a base type for the [DeployTxOptionsWithPrivateStateId](DeployTxOptionsWithPrivateStateId.md) configuration.
It is also used directly as parameter to [createUnprovenDeployTx](../functions/createUnprovenDeployTx.md) which doesn't need
to save private state (and therefore doesn't need a private state ID) but does need to supply an
initial private state to run the contract constructor against.

## Type Declaration

### initialPrivateState

> `readonly` **initialPrivateState**: `Contract.PrivateState`\<`C`\>

컨트랙트 생성자를 실행할 프라이빗 상태입니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`
