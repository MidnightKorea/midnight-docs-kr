[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitCallTxAsync

# Function: submitCallTxAsync()

> **submitCallTxAsync**\<`C`, `PCK`\>(`providers`, `options`): `Promise`\<[`SubmittedCallTx`](../type-aliases/SubmittedCallTx.md)\<`C`, `PCK`\>\>

주어진 컨트랙트에서 서킷 호출을 위한 트랜잭션을 생성하고 제출하며, 확정을 기다리지 않고 제출 직후 즉시 반환합니다.

[submitCallTx](submitCallTx.md)와 달리 이 함수는 트랜잭션 확정을 기다리거나, 트랜잭션 상태를 확인하거나, 프라이빗 상태를 업데이트하지 않습니다. 호출자가 이러한 단계를 직접 처리해야 합니다.

## Transaction Execution Phases

Midnight 트랜잭션은 두 단계로 실행됩니다:
1. **보장 단계**: 실패 시 트랜잭션이 블록체인에 포함되지 않습니다
2. **실패 허용 단계**: 실패 시 트랜잭션이 부분 성공으로 온체인에 기록됩니다

## Manual Post-Submission Steps

이 함수를 호출한 후 다음 단계를 직접 수행해야 합니다:
1. `providers.publicDataProvider.watchForTxData(txId)`를 사용하여 트랜잭션 확정을 감시합니다
2. 트랜잭션 상태를 확인합니다 (`SucceedEntirely`와 비교)
3. 실패를 적절히 처리합니다 (오류 발생, 로깅 등)
4. 트랜잭션이 성공하고 `privateStateId`가 제공된 경우 프라이빗 상태를 업데이트합니다

## Failure Behavior (Manual Handling Required)

**보장 단계 실패:**
- 트랜잭션이 거부되어 블록체인에 포함되지 않습니다
- `watchForTxData`가 거부되거나 오류 상태를 반환할 수 있습니다
- 프라이빗 상태 업데이트를 저장하면 안 됩니다

**실패 허용 단계 실패:**
- `SucceedEntirely`가 아닌 상태로 트랜잭션이 온체인에 기록됩니다
- `watchForTxData`가 실패 상태의 트랜잭션 데이터를 반환합니다
- 프라이빗 상태 업데이트를 저장하면 안 됩니다
- 트랜잭션이 부분 성공으로 블록체인 이력에 나타납니다

## Type Parameters

### C

`C` *extends* `Any`

### PCK

`PCK` *extends* `string`

## Parameters

### providers

`SubmitCallTxProviders`\<`C`, `PCK`\>

호출 수명 주기를 관리하는 데 사용되는 프로바이더입니다.

### options

[`CallTxOptions`](../type-aliases/CallTxOptions.md)\<`C`, `PCK`\>

설정입니다.

## Returns

`Promise`\<[`SubmittedCallTx`](../type-aliases/SubmittedCallTx.md)\<`C`, `PCK`\>\>

제출 직후 트랜잭션 ID와 호출 트랜잭션 데이터로 이행되는 `Promise`입니다.
        제출이 실패하면 오류와 함께 거부됩니다.

## Example

```typescript
// 1. Submit
const { txId, callTxData } = await submitCallTxAsync(providers, options);

// 2. Watch (when ready)
const finalizedData = await providers.publicDataProvider.watchForTxData(txId);

// 3. Check status
if (finalizedData.status !== SucceedEntirely) {
  throw new CallTxFailedError(finalizedData, options.circuitId);
}

// 4. Update private state manually if needed
if (options.privateStateId) {
  await providers.privateStateProvider.set(
    privateStateId,
    callTxData.private.nextPrivateState
  );
}
```
