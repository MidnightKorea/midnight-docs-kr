[**@midnight-ntwrk/testkit-js v4.0.2**](../README.md)

***

Client for interacting with a Midnight node's JSON-RPC API

## Constructors

### Constructor

> **new NodeClient**(`nodeURL`, `logger`): `NodeClient`

새 NodeClient 인스턴스를 생성합니다

#### Parameters

##### nodeURL

`string`

Midnight 노드의 URL

##### logger

`Logger`

작업 기록용 Logger 인스턴스

#### Returns

`NodeClient`

## Properties

### nodeURL

> `readonly` **nodeURL**: `string`

## Methods

### contractState()

> **contractState**(`contractAddress`): `Promise`\<`ContractState` \| `null`\>

컨트랙트의 상태를 조회합니다

#### Parameters

##### contractAddress

`string`

컨트랙트의 주소

#### Returns

`Promise`\<`ContractState` \| `null`\>

컨트랙트 상태(찾을 수 없으면 null)

***

### health()

> **health**(): `Promise`\<`void` \| `AxiosResponse`\<`any`, `any`, \{ \}\>\>

Checks the health status of the node.
Makes a GET request to the health endpoint of the node.

#### Returns

`Promise`\<`void` \| `AxiosResponse`\<`any`, `any`, \{ \}\>\>

A promise that resolves to the response of the health check or logs an error if the request fails.

***

### ledgerState()

> **ledgerState**(`blockHash`): `Promise`\<`LedgerState`\>

지정된 블록의 원장 상태를 조회합니다

#### Parameters

##### blockHash

`string`

블록의 해시

#### Returns

`Promise`\<`LedgerState`\>

Ledger state

***

### ledgerStateBlob()

> **ledgerStateBlob**(`blockHash`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

지정된 블록의 원시 원장 상태 blob을 조회합니다

#### Parameters

##### blockHash

`string`

블록의 해시

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

원시 원장 상태 데이터

#### Throws

If no ledger state is found

***

### ledgerVersion()

> **ledgerVersion**(`blockHash`): `Promise`\<`string`\>

지정된 블록의 원장 버전을 조회합니다

#### Parameters

##### blockHash

`string`

블록의 해시

#### Returns

`Promise`\<`string`\>

Ledger version

#### Throws

If no ledger version is found
