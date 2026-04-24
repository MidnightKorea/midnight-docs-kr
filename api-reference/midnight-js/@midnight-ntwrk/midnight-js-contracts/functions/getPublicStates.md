[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / getPublicStates

# Function: getPublicStates()

> **getPublicStates**(`publicDataProvider`, `contractAddress`): `Promise`\<[`PublicContractStates`](../type-aliases/PublicContractStates.md)\>

컨트랙트의 공개적으로 조회 가능한 상태(Zswap 및 원장)만 가져옵니다.

## Parameters

### publicDataProvider

[`PublicDataProvider`](#)

블록체인에서 퍼블릭 상태(Zswap 및 원장)를 가져오는 데 사용할 프로바이더입니다.

### contractAddress

`string`

컨트랙트의 원장 주소입니다.

## Returns

`Promise`\<[`PublicContractStates`](../type-aliases/PublicContractStates.md)\>
