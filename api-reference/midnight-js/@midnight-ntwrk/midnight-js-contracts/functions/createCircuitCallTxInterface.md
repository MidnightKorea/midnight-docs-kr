[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createCircuitCallTxInterface

# Function: createCircuitCallTxInterface()

> **createCircuitCallTxInterface**\<`C`\>(`providers`, `compiledContract`, `contractAddress`, `privateStateId`): [`CircuitCallTxInterface`](../type-aliases/CircuitCallTxInterface.md)\<`C`\>

컨트랙트의 서킷 호출 트랜잭션 인터페이스를 생성합니다.

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

### privateStateId

`string` \| `undefined`

컨트랙트 위트니스 상태의 식별자입니다.

## Returns

[`CircuitCallTxInterface`](../type-aliases/CircuitCallTxInterface.md)\<`C`\>
