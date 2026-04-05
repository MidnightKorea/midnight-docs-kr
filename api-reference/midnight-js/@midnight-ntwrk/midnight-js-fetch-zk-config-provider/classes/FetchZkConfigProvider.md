[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-fetch-zk-config-provider](../README.md) / FetchZkConfigProvider

# Class: FetchZkConfigProvider\<K\>

원격 소스에서 ZK 아티팩트를 조회합니다.

## Extends

- [`ZKConfigProvider`](#)\<`K`\>

## Type Parameters

### K

`K` *extends* `string`

## Constructors

### Constructor

> **new FetchZkConfigProvider**\<`K`\>(`baseURL`, `fetchFunc?`): `FetchZkConfigProvider`\<`K`\>

#### Parameters

##### baseURL

`string`

ZK 아티팩트를 조회할 엔드포인트입니다.

##### fetchFunc?

\{(`input`, `init?`): `Promise`\<`Response`\>; (`input`, `init?`): `Promise`\<`Response`\>; \}

쿼리를 실행하는 데 사용할 함수입니다.

#### Returns

`FetchZkConfigProvider`\<`K`\>

#### Overrides

`ZKConfigProvider<K>.constructor`

## Properties

### baseURL

> `readonly` **baseURL**: `string`

ZK 아티팩트를 조회할 엔드포인트입니다.

## Methods

### asKeyMaterialProvider()

> **asKeyMaterialProvider**(): `KeyMaterialProvider`

#### Returns

`KeyMaterialProvider`

#### Inherited from

`ZKConfigProvider.asKeyMaterialProvider`

***

### get()

> **get**(`circuitId`): `Promise`\<`ZKConfig`\<`K`\>\>

Retrieves all zero-knowledge artifacts produced by `compactc` compiler for the given circuit.

#### Parameters

##### circuitId

`K`

조회할 아티팩트의 서킷 ID입니다.

#### Returns

`Promise`\<`ZKConfig`\<`K`\>\>

#### Inherited from

`ZKConfigProvider.get`

***

### getProverKey()

> **getProverKey**(`circuitId`): `Promise`\<`ProverKey`\>

Retrieves the prover key produced by `compactc` compiler for the given circuit.

#### Parameters

##### circuitId

`K`

The circuit ID of the prover key to retrieve.

#### Returns

`Promise`\<`ProverKey`\>

#### Overrides

`ZKConfigProvider.getProverKey`

***

### getVerifierKey()

> **getVerifierKey**(`circuitId`): `Promise`\<`VerifierKey`\>

Retrieves the verifier key produced by `compactc` compiler for the given circuit.

#### Parameters

##### circuitId

`K`

The circuit ID of the verifier key to retrieve.

#### Returns

`Promise`\<`VerifierKey`\>

#### Overrides

`ZKConfigProvider.getVerifierKey`

***

### getVerifierKeys()

> **getVerifierKeys**(`circuitIds`): `Promise`\<\[`K`, `VerifierKey`\][]\>

Retrieves the verifier keys produced by `compactc` compiler for the given circuits.

#### Parameters

##### circuitIds

`K`[]

The circuit IDs of the verifier keys to retrieve.

#### Returns

`Promise`\<\[`K`, `VerifierKey`\][]\>

#### Inherited from

`ZKConfigProvider.getVerifierKeys`

***

### getZKIR()

> **getZKIR**(`circuitId`): `Promise`\<`ZKIR`\>

Retrieves the zero-knowledge intermediate representation produced by `compactc` compiler for the given circuit.

#### Parameters

##### circuitId

`K`

The circuit ID of the ZKIR to retrieve.

#### Returns

`Promise`\<`ZKIR`\>

#### Overrides

`ZKConfigProvider.getZKIR`
