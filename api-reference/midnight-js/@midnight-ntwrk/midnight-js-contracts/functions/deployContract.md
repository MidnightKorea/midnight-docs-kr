[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / deployContract

# Function: deployContract()

컨트랙트 배포 트랜잭션을 생성하고 제출합니다. 이 함수는 트랜잭션 구성 워크플로의 진입점이며 [DeployedContract](../type-aliases/DeployedContract.md) 인스턴스를 생성하는 데 사용됩니다.

## Param

트랜잭션 수명 주기를 관리하는 데 사용되는 프로바이더입니다.

## Param

설정입니다.

## Throws

DeployTxFailedError 트랜잭션이 성공적으로 제출되었지만 노드에서 실행 시
                            오류가 발생한 경우.

## Call Signature

> **deployContract**\<`C`\>(`providers`, `options`): `Promise`\<[`DeployedContract`](../type-aliases/DeployedContract.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`, `ProvableCircuitId`\<`C`\>, `unknown`\>

#### options

[`DeployContractOptionsBase`](../type-aliases/DeployContractOptionsBase.md)\<`C`\>

### Returns

`Promise`\<[`DeployedContract`](../type-aliases/DeployedContract.md)\<`C`\>\>

## Call Signature

> **deployContract**\<`C`\>(`providers`, `options`): `Promise`\<[`DeployedContract`](../type-aliases/DeployedContract.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

#### options

[`DeployContractOptionsWithPrivateState`](../type-aliases/DeployContractOptionsWithPrivateState.md)\<`C`\>

### Returns

`Promise`\<[`DeployedContract`](../type-aliases/DeployedContract.md)\<`C`\>\>
