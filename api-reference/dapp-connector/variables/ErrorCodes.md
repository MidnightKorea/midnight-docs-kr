[**@midnight-ntwrk/dapp-connector-api v4.0.1**](../README.md)

***

[@midnight-ntwrk/dapp-connector-api](../globals.md) / ErrorCodes

# Variable: ErrorCodes

> `const` **ErrorCodes**: `object`

모든 가능한 오류 코드를 하나의 객체에 모은 것입니다.

## Type Declaration

### Disconnected

> `readonly` **Disconnected**: `"Disconnected"` = `'Disconnected'`

지갑과의 연결이 끊어졌습니다

### InternalError

> `readonly` **InternalError**: `"InternalError"` = `'InternalError'`

DApp Connector가 요청을 처리할 수 없었습니다

### InvalidRequest

> `readonly` **InvalidRequest**: `"InvalidRequest"` = `'InvalidRequest'`

다양한 상황에서 발생할 수 있으며, 예를 들어 잘못된 형식의 트랜잭션이 해당합니다

### PermissionRejected

> `readonly` **PermissionRejected**: `"PermissionRejected"` = `'PermissionRejected'`

작업 수행 권한이 거부되었습니다.

### Rejected

> `readonly` **Rejected**: `"Rejected"` = `'Rejected'`

사용자가 요청을 거부했습니다
