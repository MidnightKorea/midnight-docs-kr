[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / TransactionContext

# Interface: TransactionContext\<C, PCK\>

스코프 컨트랙트 트랜잭션을 관리하기 위한 컨텍스트를 캡슐화합니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\> = `Contract.ProvableCircuitId`\<`C`\>

## Properties

### \[CacheStates\]

> `readonly` **\[CacheStates\]**: (`states`, `identity`) => `void`

#### Parameters

##### states

[`PublicContractStates`](../type-aliases/PublicContractStates.md) \| [`ContractStates`](../type-aliases/ContractStates.md)\<`PrivateState`\<`C`\>\>

##### identity

`CachedStateIdentity`

#### Returns

`void`

***

### \[GetCurrentStatesForIdentity\]

> `readonly` **\[GetCurrentStatesForIdentity\]**: (`identity`) => [`PublicContractStates`](../type-aliases/PublicContractStates.md) \| [`ContractStates`](../type-aliases/ContractStates.md)\<`PrivateState`\<`C`\>\> \| `undefined`

#### Parameters

##### identity

`CachedStateIdentity`

#### Returns

[`PublicContractStates`](../type-aliases/PublicContractStates.md) \| [`ContractStates`](../type-aliases/ContractStates.md)\<`PrivateState`\<`C`\>\> \| `undefined`

***

### \[MergeUnsubmittedCallTxData\]

> `readonly` **\[MergeUnsubmittedCallTxData\]**: (`circuitId`, `callData`, `privateStateId?`) => `void`

#### Parameters

##### circuitId

`PCK`

##### callData

[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>

##### privateStateId?

`string`

#### Returns

`void`

***

### \[Submit\]

> `readonly` **\[Submit\]**: () => `Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

#### Returns

`Promise`\<[`FinalizedCallTxData`](../type-aliases/FinalizedCallTxData.md)\<`C`, `PCK`\>\>

***

### \[TypeId\]

> `readonly` **\[TypeId\]**: *typeof* `TypeId`

## Methods

### getCurrentStates()

> **getCurrentStates**(): [`PublicContractStates`](../type-aliases/PublicContractStates.md) \| [`ContractStates`](../type-aliases/ContractStates.md)\<`PrivateState`\<`C`\>\> \| `undefined`

트랜잭션 컨텍스트 내에서 현재 캐시된 컨트랙트 상태를 가져옵니다.

#### Returns

[`PublicContractStates`](../type-aliases/PublicContractStates.md) \| [`ContractStates`](../type-aliases/ContractStates.md)\<`PrivateState`\<`C`\>\> \| `undefined`

캐시된 [ContractStates](../type-aliases/ContractStates.md) 인스턴스이거나, 아직 서킷 호출이 이루어지지 않은 경우 `undefined`입니다.

#### Remarks

반환된 상태는 트랜잭션 컨텍스트 내에서 컨트랙트의 미제출 _진행 중_ 상태를 나타내며, 트랜잭션 스코프 동안 컨트랙트에 대해 수행된 미제출 서킷 호출을 반영합니다.

***

### getLastUnsubmittedCallTxDataToTransact()

> **getLastUnsubmittedCallTxDataToTransact**(): \[[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>, `string`?\] \| `undefined`

마지막 미제출 호출 트랜잭션 데이터를 가져옵니다.

#### Returns

\[[`UnsubmittedCallTxData`](../type-aliases/UnsubmittedCallTxData.md)\<`C`, `PCK`\>, `string`?\] \| `undefined`

[UnsubmittedCallTxData](../type-aliases/UnsubmittedCallTxData.md) 인스턴스와 선택적 프라이빗 상태 ID를 포함하는 튜플이거나, 아직 서킷 호출이 이루어지지 않은 경우 `undefined`입니다.
