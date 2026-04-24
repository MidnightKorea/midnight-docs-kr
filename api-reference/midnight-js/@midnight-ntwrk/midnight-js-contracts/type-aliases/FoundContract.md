[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / FoundContract

# Type Alias: FoundContract\<C\>

> **FoundContract**\<`C`\> = `object`

블록체인에서 발견된 배포 컨트랙트의 기본 타입입니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`

## Properties

### callTx

> `readonly` **callTx**: [`CircuitCallTxInterface`](CircuitCallTxInterface.md)\<`C`\>

컨트랙트의 호출 트랜잭션을 생성하기 위한 인터페이스입니다.

***

### circuitMaintenanceTx

> `readonly` **circuitMaintenanceTx**: [`CircuitMaintenanceTxInterfaces`](CircuitMaintenanceTxInterfaces.md)\<`C`\>

An interface for creating maintenance transactions for circuits defined in the
contract that was deployed.

***

### contractMaintenanceTx

> `readonly` **contractMaintenanceTx**: [`ContractMaintenanceTxInterface`](../interfaces/ContractMaintenanceTxInterface.md)

Interface for creating maintenance transactions for the contract that was
deployed.

***

### deployTxData

> `readonly` **deployTxData**: [`FinalizedDeployTxDataBase`](FinalizedDeployTxDataBase.md)\<`C`\>

이 컨트랙트에 대응하는 확정 배포 트랜잭션의 데이터입니다.
