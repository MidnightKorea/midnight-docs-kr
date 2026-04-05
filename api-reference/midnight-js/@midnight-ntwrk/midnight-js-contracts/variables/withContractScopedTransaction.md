[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / withContractScopedTransaction

# Variable: withContractScopedTransaction

> `const` **withContractScopedTransaction**: \<`C`, `PCK`\>(`providers`, `fn`, `options?`) => `Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

컨트랙트 스코프 트랜잭션의 컨텍스트 내에서 함수를 실행합니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\> = `Contract.ProvableCircuitId`\<`C`\>

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`, `PCK`\>

트랜잭션 내에서 사용할 컨트랙트 프로바이더입니다.

### fn

(`txCtx`) => `Promise`\<`void`\>

트랜잭션 컨텍스트 내에서 실행할 함수입니다.

### options?

[`ScopedTransactionOptions`](../type-aliases/ScopedTransactionOptions.md)

선택적 트랜잭션 스코프 옵션입니다.

## Returns

`Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

`fn` 내에서 수행된 모든 서킷 호출에 대해 생성된 단일 트랜잭션의 확정 데이터로 이행되는 `Promise`입니다.

## Remarks

`fn`이 서킷 호출을 수행하면, 함수가 성공적으로 완료될 때 이들이 일괄 처리되어 단일 트랜잭션으로 제출됩니다. `fn`이 오류를 발생시키면 미제출된 서킷 호출은 모두 폐기됩니다.
