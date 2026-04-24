[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / getStates

# Function: getStates()

> **getStates**\<`PS`\>(`publicDataProvider`, `privateStateProvider`, `contractAddress`, `privateStateId`): `Promise`\<[`ContractStates`](../type-aliases/ContractStates.md)\<`PS`\>\>

주어진 프로바이더를 사용하여 해당 식별자에 대응하는 컨트랙트의 Zswap, 원장, 프라이빗 상태를 조회합니다.

## Type Parameters

### PS

`PS`

## Parameters

### publicDataProvider

[`PublicDataProvider`](#)

블록체인에서 퍼블릭 상태(Zswap 및 원장)를 가져오는 데 사용할 프로바이더입니다.

### privateStateProvider

[`PrivateStateProvider`](#)\<`string`, `PS`\>

프라이빗 상태를 가져오는 데 사용할 프로바이더입니다.

### contractAddress

`string`

컨트랙트의 원장 주소입니다.

### privateStateId

`string`

컨트랙트 프라이빗 상태의 식별자입니다.

## Returns

`Promise`\<[`ContractStates`](../type-aliases/ContractStates.md)\<`PS`\>\>
