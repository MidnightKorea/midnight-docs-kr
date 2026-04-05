[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitCallTx

# Function: submitCallTx()

주어진 컨트랙트에서 서킷 호출을 위한 트랜잭션을 생성하고 제출합니다.

## Transaction Execution Phases

Midnight 트랜잭션은 두 단계로 실행됩니다:
1. **보장 단계**: 실패 시 트랜잭션이 블록체인에 포함되지 않습니다
2. **실패 허용 단계**: 실패 시 트랜잭션이 부분 성공으로 온체인에 기록됩니다

## Failure Behavior

**보장 단계 실패:**
- 트랜잭션이 거부되어 블록체인에 포함되지 않습니다
- 트랜잭션 데이터와 서킷 ID가 포함된 `CallTxFailedError`가 발생합니다
- 프라이빗 상태 업데이트가 저장되지 않습니다 (상태 변경 없음)
- 실패한 트랜잭션의 온체인 기록이 없습니다

**실패 허용 단계 실패:**
- `SucceedEntirely`가 아닌 상태로 트랜잭션이 온체인에 기록됩니다
- 트랜잭션 데이터와 서킷 ID가 포함된 `CallTxFailedError`가 발생합니다
- 프라이빗 상태 업데이트가 저장되지 않습니다 (상태 변경 없음)
- 트랜잭션이 부분 성공으로 블록체인 이력에 나타납니다

## Param

호출 수명 주기를 관리하는 데 사용되는 프로바이더입니다.

## Param

설정입니다.

## Param

기존 트랜잭션 스코프에 참여하기 위한 선택적 스코프 트랜잭션 컨텍스트입니다.

## Throws

보장 단계 또는 실패 허용 단계에서 트랜잭션이 실패한 경우.
        오류에는 디버깅을 위한 확정된 트랜잭션 데이터와 서킷 ID가 포함됩니다.

## Call Signature

> **submitCallTx**\<`C`, `PCK`\>(`providers`, `options`): `Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

#### PCK

`PCK` *extends* `string`

### Parameters

#### providers

[`SubmitTxProviders`](../type-aliases/SubmitTxProviders.md)\<`C`, `PCK`\>

#### options

[`CallTxOptionsBase`](../type-aliases/CallTxOptionsBase.md)\<`C`, `PCK`\>

### Returns

`Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

## Call Signature

> **submitCallTx**\<`C`, `PCK`\>(`providers`, `options`): `Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

#### PCK

`PCK` *extends* `string`

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

#### options

[`CallTxOptionsWithPrivateStateId`](../type-aliases/CallTxOptionsWithPrivateStateId.md)\<`C`, `PCK`\>

### Returns

`Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

## Call Signature

> **submitCallTx**\<`C`, `PCK`\>(`providers`, `options`, `transactionContext`): `Promise`\<[`CallResult`](../type-aliases/CallResult.md)\<`C`, `PCK`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

#### PCK

`PCK` *extends* `string`

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

#### options

[`CallTxOptionsWithPrivateStateId`](../type-aliases/CallTxOptionsWithPrivateStateId.md)\<`C`, `PCK`\>

#### transactionContext

[`TransactionContext`](../interfaces/TransactionContext.md)\<`C`, `PCK`\>

### Returns

`Promise`\<[`CallResult`](../type-aliases/CallResult.md)\<`C`, `PCK`\>\>

## Call Signature

> **submitCallTx**\<`C`, `PCK`\>(`providers`, `options`, `transactionContext`): `Promise`\<[`CallResult`](../type-aliases/CallResult.md)\<`C`, `PCK`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

#### PCK

`PCK` *extends* `string`

### Parameters

#### providers

[`SubmitTxProviders`](../type-aliases/SubmitTxProviders.md)\<`C`, `PCK`\>

#### options

[`CallTxOptionsBase`](../type-aliases/CallTxOptionsBase.md)\<`C`, `PCK`\>

#### transactionContext

[`TransactionContext`](../interfaces/TransactionContext.md)\<`C`, `PCK`\>

### Returns

`Promise`\<[`CallResult`](../type-aliases/CallResult.md)\<`C`, `PCK`\>\>
