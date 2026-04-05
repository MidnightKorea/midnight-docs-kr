[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createCircuitMaintenanceTxInterface

# Function: createCircuitMaintenanceTxInterface()

> **createCircuitMaintenanceTxInterface**\<`C`, `PCK`\>(`providers`, `circuitId`, `compiledContract`, `contractAddress`): [`CircuitMaintenanceTxInterface`](../type-aliases/CircuitMaintenanceTxInterface.md)

[CircuitMaintenanceTxInterface](../type-aliases/CircuitMaintenanceTxInterface.md)를 생성합니다.

## Type Parameters

### C

`C` *extends* `Any`

### PCK

`PCK` *extends* `string`

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)\<`C`, `PCK`\>

트랜잭션을 생성하고 제출하는 데 사용할 프로바이더입니다.

### circuitId

`PCK`

이 인터페이스가 대상으로 하는 서킷 ID입니다.

### compiledContract

`CompiledContract`\<`C`, `any`\>

### contractAddress

`string`

이 인터페이스를 생성할 배포된 컨트랙트의 주소입니다.

## Returns

[`CircuitMaintenanceTxInterface`](../type-aliases/CircuitMaintenanceTxInterface.md)
