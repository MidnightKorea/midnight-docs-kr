[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createCircuitMaintenanceTxInterfaces

# Function: createCircuitMaintenanceTxInterfaces()

> **createCircuitMaintenanceTxInterfaces**\<`C`\>(`providers`, `compiledContract`, `contractAddress`): [`CircuitMaintenanceTxInterfaces`](../type-aliases/CircuitMaintenanceTxInterfaces.md)\<`C`\>

[CircuitMaintenanceTxInterfaces](../type-aliases/CircuitMaintenanceTxInterfaces.md)를 생성합니다.

## Type Parameters

### C

`C` *extends* `Any`

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`\>

트랜잭션을 빌드하는 데 사용할 프로바이더입니다.

### compiledContract

`CompiledContract`\<`C`, `any`\>

서킷을 실행하는 데 사용할 컨트랙트입니다.

### contractAddress

`string`

컨트랙트의 원장 주소입니다.

## Returns

[`CircuitMaintenanceTxInterfaces`](../type-aliases/CircuitMaintenanceTxInterfaces.md)\<`C`\>
