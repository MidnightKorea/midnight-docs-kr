[**@midnight-ntwrk/testkit-js v4.0.2**](../README.md)

***

A proof server that is currently running on a specific port.
Used for connecting to an existing proof server instance.

## Implements

- [`ProofServerContainer`](../interfaces/ProofServerContainer.md)

## Constructors

### Constructor

> **new StaticProofServerContainer**(`port?`): `StaticProofServerContainer`

Creates a new StaticProofServerContainer instance.

#### Parameters

##### port?

`number` = `6300`

The port number where the proof server is running (default: 6300)

#### Returns

`StaticProofServerContainer`

## Properties

### port

> **port**: `number`

The port number where the proof server is running

## Methods

### getUrl()

> **getUrl**(): `string`

증명 서버에 접근할 수 있는 URL을 가져옵니다.

#### Returns

`string`

증명 서버의 URL

#### Implementation of

[`ProofServerContainer`](../interfaces/ProofServerContainer.md).[`getUrl`](../interfaces/ProofServerContainer.md#geturl)

***

### stop()

> **stop**(): `Promise`\<`void`\>

No-op stop method since this represents an external proof server.

#### Returns

`Promise`\<`void`\>

resolve된 Promise

#### Implementation of

[`ProofServerContainer`](../interfaces/ProofServerContainer.md).[`stop`](../interfaces/ProofServerContainer.md#stop)
