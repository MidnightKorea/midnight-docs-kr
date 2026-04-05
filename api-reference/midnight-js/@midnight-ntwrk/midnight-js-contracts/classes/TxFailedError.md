[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / TxFailedError

# Class: TxFailedError

합의 노드에 제출된 트랜잭션이 실패했음을 나타내는 오류입니다.

## Extends

- `Error`

## Extended by

- [`CallTxFailedError`](CallTxFailedError.md)
- [`DeployTxFailedError`](DeployTxFailedError.md)
- [`InsertVerifierKeyTxFailedError`](InsertVerifierKeyTxFailedError.md)
- [`RemoveVerifierKeyTxFailedError`](RemoveVerifierKeyTxFailedError.md)
- [`ReplaceMaintenanceAuthorityTxFailedError`](ReplaceMaintenanceAuthorityTxFailedError.md)

## Constructors

### Constructor

> **new TxFailedError**(`finalizedTxData`, `circuitId?`): `TxFailedError`

#### Parameters

##### finalizedTxData

`FinalizedTxData`

실패한 트랜잭션의 확정 데이터입니다.

##### circuitId?

`string` \| `string`[]

실패한 호출 트랜잭션을 생성하기 위해 호출된 서킷의 이름입니다.
                 호출 트랜잭션이 실패한 경우에만 정의됩니다.

#### Returns

`TxFailedError`

#### Overrides

`Error.constructor`

## Properties

### circuitId?

> `readonly` `optional` **circuitId?**: `string` \| `string`[]

실패한 호출 트랜잭션을 생성하기 위해 호출된 서킷의 이름입니다.
                 호출 트랜잭션이 실패한 경우에만 정의됩니다.

***

### finalizedTxData

> `readonly` **finalizedTxData**: `FinalizedTxData`

실패한 트랜잭션의 확정 데이터입니다.
