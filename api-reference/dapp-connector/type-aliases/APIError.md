[**@midnight-ntwrk/dapp-connector-api v4.0.1**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / APIError

# Type Alias: APIError

> **APIError** = `Error` & `object`

DApp Connector가 발생시키는 오류 타입의 선언입니다.

It is not a class extending the base `Error` type, because
it would make it difficult to implement in a way where `instanceof APIError` would work.
Instead a check like `error.type === 'DAppConnectorAPIError'` should be used.

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
