[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitDeployTx

# Function: submitDeployTx()

주어진 컨트랙트에 대한 배포 트랜잭션을 생성하고 제출합니다.

## Transaction Execution Phases

Midnight 트랜잭션은 두 단계로 실행됩니다:
1. **보장 단계**: 실패 시 트랜잭션이 블록체인에 포함되지 않습니다
2. **실패 허용 단계**: 실패 시 트랜잭션이 부분 성공으로 온체인에 기록됩니다

## Failure Behavior

**보장 단계 실패:**
- 트랜잭션이 거부되어 블록체인에 포함되지 않습니다
- 트랜잭션 데이터가 포함된 `DeployTxFailedError`가 발생합니다
- 프라이빗 상태(`privateStateId` 제공 시)가 저장되지 않습니다
- 컨트랙트 서명 키가 프라이빗 상태 프로바이더에 저장되지 않습니다
- 컨트랙트가 배포되지 않습니다

**실패 허용 단계 실패:**
- `SucceedEntirely`가 아닌 상태로 트랜잭션이 온체인에 기록됩니다
- 트랜잭션 데이터가 포함된 `DeployTxFailedError`가 발생합니다
- 프라이빗 상태(`privateStateId` 제공 시)가 저장되지 않습니다
- 컨트랙트 서명 키가 프라이빗 상태 프로바이더에 저장되지 않습니다
- 트랜잭션이 부분 성공으로 블록체인 이력에 나타납니다
- 컨트랙트가 부분적으로 배포되었으나 작동하지 않을 수 있습니다

## Param

배포 수명 주기를 관리하는 데 사용되는 프로바이더입니다.

## Param

설정입니다.

## Throws

보장 단계 또는 실패 허용 단계에서 트랜잭션이 실패한 경우.
        오류에는 디버깅을 위한 확정된 트랜잭션 데이터가 포함됩니다.

## Call Signature

> **submitDeployTx**\<`C`\>(`providers`, `options`): `Promise`\<[`FinalizedDeployTxData`](../type-aliases/FinalizedDeployTxData.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`, `ProvableCircuitId`\<`C`\>, `unknown`\>

#### options

[`DeployTxOptionsBase`](../type-aliases/DeployTxOptionsBase.md)\<`C`\>

### Returns

`Promise`\<[`FinalizedDeployTxData`](../type-aliases/FinalizedDeployTxData.md)\<`C`\>\>

## Call Signature

> **submitDeployTx**\<`C`\>(`providers`, `options`): `Promise`\<[`FinalizedDeployTxData`](../type-aliases/FinalizedDeployTxData.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

#### options

[`DeployTxOptionsWithPrivateStateId`](../type-aliases/DeployTxOptionsWithPrivateStateId.md)\<`C`\>

### Returns

`Promise`\<[`FinalizedDeployTxData`](../type-aliases/FinalizedDeployTxData.md)\<`C`\>\>
