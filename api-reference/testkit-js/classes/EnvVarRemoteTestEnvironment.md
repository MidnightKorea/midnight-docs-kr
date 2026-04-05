[**@midnight-ntwrk/testkit-js v4.0.2**](../README.md)

***

Test environment that configures services using environment variables.
Allows specifying custom endpoints through environment variables.

## Extends

- [`RemoteTestEnvironment`](RemoteTestEnvironment.md)

## Constructors

### Constructor

> **new EnvVarRemoteTestEnvironment**(`logger`): `EnvVarRemoteTestEnvironment`

새 TestEnvironment 인스턴스를 생성합니다.

#### Parameters

##### logger

`Logger`

작업 기록용 Logger 인스턴스

#### Returns

`EnvVarRemoteTestEnvironment`

#### Inherited from

[`RemoteTestEnvironment`](RemoteTestEnvironment.md).[`constructor`](RemoteTestEnvironment.md#constructor)

## Methods

### getEnvironmentConfiguration()

> **getEnvironmentConfiguration**(): [`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Returns the configuration for environment services based on environment variables.
Required environment variables:
- MN_TEST_NETWORK_ID: 네트워크 식별자 (e.g., 'testnet', 'devnet')
- MN_TEST_INDEXER: GraphQL API endpoint for the indexer
- MN_TEST_INDEXER_WS: WebSocket endpoint for the indexer
- MN_TEST_NODE: RPC endpoint for the blockchain node
Optional environment variables:
- MN_TEST_FAUCET: API endpoint for requesting test tokens

#### Returns

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Object containing service URLs from environment variables

#### Throws

If any required environment variable is not set

#### Overrides

[`RemoteTestEnvironment`](RemoteTestEnvironment.md).[`getEnvironmentConfiguration`](RemoteTestEnvironment.md#getenvironmentconfiguration)

***

### getMidnightWalletProvider()

> **getMidnightWalletProvider**(): `Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)\>

단일 지갑 인스턴스를 시작합니다.

#### Returns

`Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)\>

A promise that resolves to the started wallet

#### Throws

If no wallet could be started

#### Inherited from

[`RemoteTestEnvironment`](RemoteTestEnvironment.md).[`getMidnightWalletProvider`](RemoteTestEnvironment.md#getmidnightwalletprovider)

***

### healthCheck()

> **healthCheck**(): `Promise`\<`void`\>

Performs a health check for the environment.
Checks the health of the node, indexer, and optionally the faucet services.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the health check is complete.

#### Inherited from

[`RemoteTestEnvironment`](RemoteTestEnvironment.md).[`healthCheck`](RemoteTestEnvironment.md#healthcheck)

***

### shutdown()

> **shutdown**(`saveWalletState?`): `Promise`\<`void`\>

Shuts down the test environment by closing all walletProviders and stopping the proof server.

#### Parameters

##### saveWalletState?

`boolean`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`RemoteTestEnvironment`](RemoteTestEnvironment.md).[`shutdown`](RemoteTestEnvironment.md#shutdown)

***

### start()

> **start**(`maybeProofServerContainer?`): `Promise`\<[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)\>

Starts the test environment by initializing the proof server and environment configuration.

#### Parameters

##### maybeProofServerContainer?

[`ProofServerContainer`](../interfaces/ProofServerContainer.md)

Optional proof server container to use instead of creating a new one

#### Returns

`Promise`\<[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)\>

환경 구성

#### Inherited from

[`RemoteTestEnvironment`](RemoteTestEnvironment.md).[`start`](RemoteTestEnvironment.md#start)

***

### startMidnightWalletProviders()

> **startMidnightWalletProviders**(`amount?`, `seeds?`): `Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)[]\>

Creates and starts the specified number of wallet providers.

#### Parameters

##### amount?

`number` = `1`

##### seeds?

`string`[] \| `undefined`

#### Returns

`Promise`\<[`MidnightWalletProvider`](MidnightWalletProvider.md)[]\>

시작된 지갑 프로바이더 배열

#### Inherited from

[`RemoteTestEnvironment`](RemoteTestEnvironment.md).[`startMidnightWalletProviders`](RemoteTestEnvironment.md#startmidnightwalletproviders)
