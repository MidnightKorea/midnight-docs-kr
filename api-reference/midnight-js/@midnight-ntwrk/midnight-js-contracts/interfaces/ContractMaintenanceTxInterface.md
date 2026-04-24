[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / ContractMaintenanceTxInterface

# Interface: ContractMaintenanceTxInterface

배포된 컨트랙트의 유지보수 트랜잭션을 생성하기 위한 인터페이스입니다.

## Methods

### replaceAuthority()

> **replaceAuthority**(`newAuthority`): `Promise`\<`FinalizedTxData`\>

이 컨트랙트에 대해 블록체인에 저장된 유지보수 권한을 교체하는 트랜잭션을 구성하고 제출합니다.

#### Parameters

##### newAuthority

`string`

이 컨트랙트의 새 유지보수 권한입니다.

#### Returns

`Promise`\<`FinalizedTxData`\>
