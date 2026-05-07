[**@midnight-ntwrk/testkit-js v4.0.4**](../README.md)

***

## Constructors

### Constructor

> **new IndexerClient**(`indexerUrl`, `logger`): `IndexerClient`

IndexerClient 인스턴스를 생성합니다.

#### Parameters

##### indexerUrl

`string`

인덱서 서비스의 URL입니다.

##### logger

`Logger`

정보 로깅을 위한 Logger 인스턴스입니다.

#### Returns

`IndexerClient`

## Properties

### indexerUrl

> `readonly` **indexerUrl**: `string`

## Methods

### health()

> **health**(): `Promise`\<`AxiosResponse`\<`any`, `any`, \{ \}\>\>

Checks the health status of the indexer service.
Makes a GET request to the status endpoint of the indexer service.

#### Returns

`Promise`\<`AxiosResponse`\<`any`, `any`, \{ \}\>\>

A promise that resolves to the response of the health check or logs an error if the request fails.
