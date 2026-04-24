[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CircuitMaintenanceTxInterface

# Type Alias: CircuitMaintenanceTxInterface

> **CircuitMaintenanceTxInterface** = `object`

An interface for creating maintenance transactions for a specific circuit defined in a
given contract.

## Methods

### insertVerifierKey()

> **insertVerifierKey**(`newVk`): `Promise`\<`FinalizedTxData`\>

Constructs and submits a transaction that adds a new verifier key to the
blockchain for this circuit at this contract's address.

#### Parameters

##### newVk

`VerifierKey`

이 서킷에 추가할 새 검증자 키입니다.

#### Returns

`Promise`\<`FinalizedTxData`\>

***

### removeVerifierKey()

> **removeVerifierKey**(): `Promise`\<`FinalizedTxData`\>

Constructs and submits a transaction that removes the current verifier key stored
on the blockchain for this circuit at this contract's address.

#### Returns

`Promise`\<`FinalizedTxData`\>
