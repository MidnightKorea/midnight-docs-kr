[**@midnight-ntwrk/testkit-js v4.0.2**](../README.md)

***

Base class for remote test environments that connect to external network services.
Provides functionality for managing walletProviders and a proof server container.

## Extends

- [`TestEnvironment`](TestEnvironment.md)

## Extended by

- [`EnvVarRemoteTestEnvironment`](EnvVarRemoteTestEnvironment.md)
- [`PreprodTestEnvironment`](PreprodTestEnvironment.md)
- [`PreviewTestEnvironment`](PreviewTestEnvironment.md)
- [`QanetTestEnvironment`](QanetTestEnvironment.md)

## Constructors

### Constructor

> **new RemoteTestEnvironment**(`logger`): `RemoteTestEnvironment`

새 TestEnvironment 인스턴스를 생성합니다.

#### Parameters

##### logger

`Logger`

작업 기록용 Logger 인스턴스

#### Returns

`RemoteTestEnvironment`

#### Inherited from

[`TestEnvironment`](TestEnvironment.md).[`constructor`](TestEnvironment.md#constructor)

## Methods

### getEnvironmentConfiguration()

> `abstract` **getEnvironmentConfiguration**(): [`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Abstract method that must be implemented by subclasses to provide environment configuration.

#### Returns

[`EnvironmentConfiguration`](../interfaces/EnvironmentConfiguration.md)

Configuration object containing service URLs and endpoints

#### Overrides

[`TestEnvironment`](TestEnvironment.md).[`getEnvironmentConfiguration`](TestEnvironment.md#getenvironmentconfiguration)

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

[`TestEnvironment`](TestEnvironment.md).[`getMidnightWalletProvider`](TestEnvironment.md#getmidnightwalletprovider)

***

### healthCheck()

> **healthCheck**(): `Promise`\<`void`\>

Performs a health check for the environment.
Checks the health of the node, indexer, and optionally the faucet services.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the health check is complete.

***

### shutdown()

> **shutdown**(`saveWalletState?`): `Promise`\<`void`\>

Shuts down the test environment by closing all walletProviders and stopping the proof server.

#### Parameters

##### saveWalletState?

`boolean`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`TestEnvironment`](TestEnvironment.md).[`shutdown`](TestEnvironment.md#shutdown)

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

#### Overrides

[`TestEnvironment`](TestEnvironment.md).[`start`](TestEnvironment.md#start)

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

#### Overrides

[`TestEnvironment`](TestEnvironment.md).[`startMidnightWalletProviders`](TestEnvironment.md#startmidnightwalletproviders)
