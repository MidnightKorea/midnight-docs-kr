[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / getUnshieldedBalances

# Function: getUnshieldedBalances()

> **getUnshieldedBalances**(`publicDataProvider`, `contractAddress`): `Promise`\<`UnshieldedBalances`\>

특정 컨트랙트 주소에 연결된 비차폐 잔액을 가져옵니다.

## Parameters

### publicDataProvider

[`PublicDataProvider`](#)

블록체인에서 비차폐 잔액을 가져오는 데 사용할 프로바이더입니다.

### contractAddress

`string`

컨트랙트의 원장 주소입니다.

## Returns

`Promise`\<`UnshieldedBalances`\>
