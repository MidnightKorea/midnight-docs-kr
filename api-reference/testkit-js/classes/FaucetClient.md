[**@midnight-ntwrk/testkit-js v4.0.2**](../README.md)

***

Client for interacting with the Midnight faucet service.
Provides functionality to request test tokens for wallet addresses.

## Constructors

### Constructor

> **new FaucetClient**(`faucetUrl`, `logger`): `FaucetClient`

새 FaucetClient 인스턴스를 생성합니다.

#### Parameters

##### faucetUrl

`string`

파우셋 서비스 엔드포인트의 URL

##### logger

`Logger`

작업 기록용 Logger 인스턴스

#### Returns

`FaucetClient`

## Properties

### faucetUrl

> `readonly` **faucetUrl**: `string`

## Methods

### health()

> **health**(): `Promise`\<`void` \| `AxiosResponse`\<`any`, `any`, \{ \}\>\>

Checks the health status of the faucet service.
Makes a GET request to the health endpoint of the faucet service.

#### Returns

`Promise`\<`void` \| `AxiosResponse`\<`any`, `any`, \{ \}\>\>

A promise that resolves to the response of the health check or logs an error if the request fails

***

### requestTokens()

> **requestTokens**(`walletAddress`): `Promise`\<`void`\>

Requests test tokens from the faucet for a specified wallet address.
Makes a POST request to the faucet service with the wallet address.

#### Parameters

##### walletAddress

`string`

테스트 토큰을 수신할 주소

#### Returns

`Promise`\<`void`\>

A promise that resolves when the request is complete

#### Throws

Will log but not throw if the request fails
