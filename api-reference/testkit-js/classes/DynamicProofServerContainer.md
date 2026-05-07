[**@midnight-ntwrk/testkit-js v4.0.4**](../README.md)

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

컨테이너가 중지되면 이행되는 프로미스

#### Implementation of

[`ProofServerContainer`](../interfaces/ProofServerContainer.md).[`stop`](../interfaces/ProofServerContainer.md#stop)

***

### start()

> `static` **start**(`logger`, `maybeUID?`, `maybeNetworkId?`): `Promise`\<`DynamicProofServerContainer`\>

새 증명 서버 컨테이너를 시작합니다.

#### Parameters

##### logger

`Logger`

작업 기록용 Logger 인스턴스

##### maybeUID?

`string`

컨테이너의 고유 식별자 (선택사항)

##### maybeNetworkId?

`string`

컨테이너의 네트워크 ID (선택사항)

#### Returns

`Promise`\<`DynamicProofServerContainer`\>

새 컨테이너 인스턴스로 이행되는 프로미스
