[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / findDeployedContract

# Function: findDeployedContract()

배포된 컨트랙트의 주소와 기존 프라이빗 상태가 저장된 선택적 프라이빗 상태 ID를 사용하여 [FoundContract](../type-aliases/FoundContract.md) 인스턴스를 생성합니다. 프라이빗 상태 ID가 제공되면, 해당 ID의 현재 값이 반환되는 `FoundContract`의 `finalizedDeployTxData` 속성에서 `initialPrivateState` 값으로 사용됩니다.

## Param

트랜잭션 수명 주기를 관리하는 데 사용되는 프로바이더입니다.

## Param

설정입니다.

## Throws

Error `privateStateId`와 `initialPrivateState` 설정이 올바르지 않은 경우.

## Throws

Error `contractAddress`에서 컨트랙트 상태를 찾을 수 없는 경우.

## Throws

TypeError `contractAddress`가 올바른 컨트랙트 주소 형식이 아닌 경우.

## Throws

ContractTypeError `contract`에 정의된 서킷 중 하나 이상이 `contractAddress`에서 찾은
                          컨트랙트 상태에 정의되지 않았거나 검증자 키가 일치하지 않는 경우.

## Throws

IncompleteFindContractPrivateStateConfig `initialPrivateState`가 제공되었지만
                                                 이를 저장할 `privateStateId`가 제공되지 않은 경우.

## Call Signature

> **findDeployedContract**\<`C`\>(`providers`, `options`): `Promise`\<[`FoundContract`](../type-aliases/FoundContract.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`, `ProvableCircuitId`\<`C`\>, `unknown`\>

#### options

[`FindDeployedContractOptionsBase`](../type-aliases/FindDeployedContractOptionsBase.md)\<`C`\>

### Returns

`Promise`\<[`FoundContract`](../type-aliases/FoundContract.md)\<`C`\>\>

## Call Signature

> **findDeployedContract**\<`C`\>(`providers`, `options`): `Promise`\<[`FoundContract`](../type-aliases/FoundContract.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

#### options

[`FindDeployedContractOptionsExistingPrivateState`](../type-aliases/FindDeployedContractOptionsExistingPrivateState.md)\<`C`\>

### Returns

`Promise`\<[`FoundContract`](../type-aliases/FoundContract.md)\<`C`\>\>

## Call Signature

> **findDeployedContract**\<`C`\>(`providers`, `options`): `Promise`\<[`FoundContract`](../type-aliases/FoundContract.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

### Parameters

#### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

#### options

[`FindDeployedContractOptionsStorePrivateState`](../type-aliases/FindDeployedContractOptionsStorePrivateState.md)\<`C`\>

### Returns

`Promise`\<[`FoundContract`](../type-aliases/FoundContract.md)\<`C`\>\>
