[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / DeployedContract

# Type Alias: DeployedContract\<C\>

> **DeployedContract**\<`C`\> = [`FoundContract`](FoundContract.md)\<`C`\> & `object`

블록체인에 배포된 컨트랙트의 인터페이스입니다.

## Type Declaration

### deployTxData

> `readonly` **deployTxData**: [`FinalizedDeployTxData`](FinalizedDeployTxData.md)\<`C`\>

Data resulting from the deployment transaction that created this contract. The information in a
deployTxData contains additional private information that does not
exist in [FoundContract.deployTxData](FoundContract.md#deploytxdata) because certain private data is only available to
the deployer of a contract.

## Type Parameters

### C

`C` *extends* `Contract.Any`
