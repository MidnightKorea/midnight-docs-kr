[**@midnight-ntwrk/dapp-connector-api v4.0.1**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / APIError

# Type Alias: APIError

> **APIError** = `Error` & `object`

DApp Connector가 발생시키는 오류 타입의 선언입니다.

기본 `Error` 타입을 확장하는 클래스가 아닙니다. 클래스로 만들면 `instanceof APIError`가 정상 동작하도록 구현하기 어렵기 때문입니다.
대신 `error.type === 'DAppConnectorAPIError'`와 같은 방식으로 검사해야 합니다.

## Type Declaration

### code

> **code**: [`ErrorCode`](ErrorCode.md)

발생한 오류의 코드

### reason

> **reason**: `string`

오류가 발생한 이유

### type

> **type**: `"DAppConnectorAPIError"`

DApp Connector 오류임을 나타냅니다
