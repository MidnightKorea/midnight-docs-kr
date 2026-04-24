[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-node-zk-config-provider](../README.md) / NodeZkConfigProvider

# Class: NodeZkConfigProvider\<K\>

Implementation of [ZKConfigProvider](#) that reads the keys and zkIR from the local filesystem.

## Extends

- [`ZKConfigProvider`](#)\<`K`\>

## Type Parameters

### K

`K` *extends* `string`

프로바이더가 사용하는 서킷 ID의 타입입니다.

## Constructors

### Constructor

> **new NodeZkConfigProvider**\<`K`\>(`directory`): `NodeZkConfigProvider`\<`K`\>

#### Parameters

##### directory

`string`

The path to the base directory containing the key and ZKIR subdirectories.

#### Returns

`NodeZkConfigProvider`\<`K`\>

#### Overrides

`ZKConfigProvider<K>.constructor`

## Properties

### directory

> `readonly` **directory**: `string`

The path to the base directory containing the key and ZKIR subdirectories.

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

[ZKConfigProvider.getProverKey](#)

#### Parameters

##### circuitId

`K`

#### Returns

`Promise`\<`ProverKey`\>

#### Overrides

`ZKConfigProvider.getProverKey`

***

### getVerifierKey()

> **getVerifierKey**(`circuitId`): `Promise`\<`VerifierKey`\>

[ZKConfigProvider.getVerifierKey](#)

#### Parameters

##### circuitId

`K`

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

[ZKConfigProvider.getZKIR](#)

#### Parameters

##### circuitId

`K`

#### Returns

`Promise`\<`ZKIR`\>

#### Overrides

`ZKConfigProvider.getZKIR`
