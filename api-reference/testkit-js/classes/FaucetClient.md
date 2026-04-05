[**@midnight-ntwrk/testkit-js v4.0.2**](../README.md)

***

Midnight 파우셋 서비스와 상호작용하기 위한 클라이언트입니다.
지갑 주소에 테스트 토큰을 요청하는 기능을 제공합니다.

## Constructors

### Constructor

> **new FaucetClient**(`faucetUrl`, `logger`): `FaucetClient`

새 FaucetClient 인스턴스를 생성합니다.

#### Parameters

##### faucetUrl

`string`

파우셋 서비스 엔드포인트의 URL

##### logger

`Logger`

작업 기록용 Logger 인스턴스

#### Returns

`FaucetClient`

## Properties

### faucetUrl

> `readonly` **faucetUrl**: `string`

## Methods

### health()

> **health**(): `Promise`\<`void` \| `AxiosResponse`\<`any`, `any`, \{ \}\>\>

파우셋 서비스의 상태를 확인합니다.
파우셋 서비스의 health 엔드포인트에 GET 요청을 보냅니다.

#### Returns

`Promise`\<`void` \| `AxiosResponse`\<`any`, `any`, \{ \}\>\>

상태 확인 응답으로 이행되는 프로미스를 반환하며, 요청 실패 시 오류를 로깅합니다

***

### requestTokens()

> **requestTokens**(`walletAddress`): `Promise`\<`void`\>

지정된 지갑 주소에 파우셋으로부터 테스트 토큰을 요청합니다.
지갑 주소를 포함하여 파우셋 서비스에 POST 요청을 보냅니다.

#### Parameters

##### walletAddress

`string`

테스트 토큰을 수신할 주소

#### Returns

`Promise`\<`void`\>

요청이 완료되면 이행되는 프로미스

#### Throws

요청 실패 시 예외를 발생시키지 않고 로깅만 합니다
