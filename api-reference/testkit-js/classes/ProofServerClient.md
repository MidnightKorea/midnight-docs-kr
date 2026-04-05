[**@midnight-ntwrk/testkit-js v4.0.2**](../README.md)

***

## Constructors

### Constructor

> **new ProofServerClient**(`proofServer`, `logger`): `ProofServerClient`

ProofServerClient 인스턴스를 생성합니다.

#### Parameters

##### proofServer

`string`

증명 서버의 URL service.

##### logger

`Logger`

정보 로깅을 위한 Logger 인스턴스입니다.

#### Returns

`ProofServerClient`

## Properties

### proofServer

> `readonly` **proofServer**: `string`

## Methods

### health()

> **health**(): `Promise`\<`void` \| `AxiosResponse`\<`any`, `any`, \{ \}\>\>

Checks the health status of the indexer service.
Makes a GET request to the status endpoint of the indexer service.

#### Returns

`Promise`\<`void` \| `AxiosResponse`\<`any`, `any`, \{ \}\>\>

A promise that resolves to the response of the health check or logs an error if the request fails.

***

### proveTx()

> **proveTx**(`data?`, `config?`): `Promise`\<`void` \| `AxiosResponse`\<`any`, `any`, \{ \}\>\>

Proves a transaction by sending a POST request to the proof server.

#### Parameters

##### data?

`ArrayBuffer`

직렬화된 트랜잭션 데이터

##### config?

`AxiosRequestConfig` = `...`

Axios 요청 구성

#### Returns

`Promise`\<`void` \| `AxiosResponse`\<`any`, `any`, \{ \}\>\>
