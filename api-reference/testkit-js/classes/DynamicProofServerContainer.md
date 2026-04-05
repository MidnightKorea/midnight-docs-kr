[**@midnight-ntwrk/testkit-js v4.0.2**](../README.md)

***

테스트 스위트에 의해 랜덤 포트에서 동적으로 시작 및 중지되는 증명 서버 컨테이너입니다.

## Implements

- [`ProofServerContainer`](../interfaces/ProofServerContainer.md)

## Properties

### dockerEnv

> **dockerEnv**: `StartedDockerComposeEnvironment`

컨테이너를 실행하는 Docker Compose 환경

## Methods

### getMappedPort()

> **getMappedPort**(): `number`

컨테이너의 매핑된 포트 번호를 가져옵니다.

#### Returns

`number`

매핑된 포트 번호

***

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

증명 서버 컨테이너를 중지합니다.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the container is stopped

#### Implementation of

[`ProofServerContainer`](../interfaces/ProofServerContainer.md).[`stop`](../interfaces/ProofServerContainer.md#stop)

***

### start()

> `static` **start**(`logger`, `maybeUID?`, `maybeNetworkId?`): `Promise`\<`DynamicProofServerContainer`\>

Starts a new proof server container.

#### Parameters

##### logger

`Logger`

작업 기록용 Logger 인스턴스

##### maybeUID?

`string`

Optional unique identifier for the container

##### maybeNetworkId?

`string`

Optional network ID for the container

#### Returns

`Promise`\<`DynamicProofServerContainer`\>

A promise that resolves to the new container instance
