[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / UnsubmittedDeployTxData

# Type Alias: UnsubmittedDeployTxData\<C\>

> **UnsubmittedDeployTxData**\<`C`\> = [`UnsubmittedDeployTxDataBase`](UnsubmittedDeployTxDataBase.md)\<`C`\> & `object`

미제출 배포 트랜잭션의 데이터입니다.

## Type Declaration

### private

> `readonly` **private**: [`UnsubmittedTxData`](UnsubmittedTxData.md) & `object`

사용자 기기에서만 조회 가능한 이 트랜잭션의 데이터입니다.

#### Type Declaration

##### initialZswapState

> `readonly` **initialZswapState**: `ZswapLocalState`

The Zswap state produced as a result of running the contract constructor. Useful for when
inputs or outputs are created in the contract constructor.

## Type Parameters

### C

`C` *extends* `Contract.Any`
