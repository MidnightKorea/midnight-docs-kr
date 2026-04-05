[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createContractMaintenanceTxInterface

# Function: createContractMaintenanceTxInterface()

> **createContractMaintenanceTxInterface**\<`C`\>(`providers`, `compiledContract`, `contractAddress`): [`ContractMaintenanceTxInterface`](../interfaces/ContractMaintenanceTxInterface.md)

[ContractMaintenanceTxInterface](../interfaces/ContractMaintenanceTxInterface.md)를 생성합니다.

## Type Parameters

### C

`C` *extends* `Any`

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)

트랜잭션을 빌드하는 데 사용할 프로바이더입니다.

### compiledContract

`CompiledContract`\<`C`, `any`\>

### contractAddress

`string`

컨트랙트의 원장 주소입니다.

## Returns

[`ContractMaintenanceTxInterface`](../interfaces/ContractMaintenanceTxInterface.md)
