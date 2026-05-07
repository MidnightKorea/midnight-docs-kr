[**@midnight-ntwrk/testkit-js v4.0.4**](../README.md)

***

Configuration class for local test environment implementing EnvironmentConfiguration

## Implements

- [`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

## Constructors

### Constructor

> **new LocalTestConfiguration**(`ports`): `LocalTestConfiguration`

Creates a new LocalTestConfiguration instance

#### Parameters

##### ports

[`ComponentPortsConfiguration`](../type-aliases/ComponentPortsConfiguration.md)

Object containing port numbers for each component

#### Returns

`LocalTestConfiguration`

## Properties

### faucet

> `readonly` **faucet**: `string` \| `undefined`

Optional URL for the faucet service to obtain test tokens

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`faucet`](../interfaces/EnvironmentConfiguration.md#faucet)

***

### indexer

> `readonly` **indexer**: `string`

인덱서 HTTP 엔드포인트의 URL

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`indexer`](../interfaces/EnvironmentConfiguration.md#indexer)

***

### indexerWS

> `readonly` **indexerWS**: `string`

WebSocket URL for the indexer service

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`indexerWS`](../interfaces/EnvironmentConfiguration.md#indexerws)

***

### networkId

> `readonly` **networkId**: `string`

네트워크 식별자

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`networkId`](../interfaces/EnvironmentConfiguration.md#networkid)

***

### node

> `readonly` **node**: `string`

블록체인 노드의 URL

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`node`](../interfaces/EnvironmentConfiguration.md#node)

***

### nodeWS

> `readonly` **nodeWS**: `string`

WebSocket URL for the blockchain node

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`nodeWS`](../interfaces/EnvironmentConfiguration.md#nodews)

***

### proofServer

> `readonly` **proofServer**: `string`

증명 생성 서버의 URL

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`proofServer`](../interfaces/EnvironmentConfiguration.md#proofserver)

***

### walletNetworkId

> `readonly` **walletNetworkId**: `string`

Wallet 네트워크 식별자

#### Implementation of

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md).[`walletNetworkId`](../interfaces/EnvironmentConfiguration.md#walletnetworkid)
