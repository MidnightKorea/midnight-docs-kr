[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / RemoveVerifierKeyTxFailedError

# Class: RemoveVerifierKeyTxFailedError

검증자 키 제거 트랜잭션이 실패했음을 나타내는 오류입니다.

## Extends

- [`TxFailedError`](TxFailedError.md)

## Constructors

### Constructor

> **new RemoveVerifierKeyTxFailedError**(`finalizedTxData`): `RemoveVerifierKeyTxFailedError`

#### Parameters

##### finalizedTxData

`FinalizedTxData`

#### Returns

`RemoveVerifierKeyTxFailedError`

#### Overrides

[`TxFailedError`](TxFailedError.md).[`constructor`](TxFailedError.md#constructor)

## Properties

### circuitId?

> `readonly` `optional` **circuitId?**: `string` \| `string`[]

실패한 호출 트랜잭션을 생성하기 위해 호출된 서킷의 이름입니다.
                 호출 트랜잭션이 실패한 경우에만 정의됩니다.

#### Inherited from

[`TxFailedError`](TxFailedError.md).[`circuitId`](TxFailedError.md#circuitid)

***

### finalizedTxData

> `readonly` **finalizedTxData**: `FinalizedTxData`

실패한 트랜잭션의 확정 데이터입니다.

#### Inherited from

[`TxFailedError`](TxFailedError.md).[`finalizedTxData`](TxFailedError.md#finalizedtxdata)
