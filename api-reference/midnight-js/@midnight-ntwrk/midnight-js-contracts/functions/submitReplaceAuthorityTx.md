[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitReplaceAuthorityTx

# Function: submitReplaceAuthorityTx()

> **submitReplaceAuthorityTx**\<`C`\>(`providers`, `compiledContract`, `contractAddress`): (`newAuthority`) => `Promise`\<`FinalizedTxData`\>

이 컨트랙트에 대해 블록체인에 저장된 유지보수 권한을 교체하는 트랜잭션을 구성하고 제출합니다. 트랜잭션이 확정된 후, 주어진 프라이빗 상태 프로바이더에 저장된 현재 서명 키가 새로운 권한 키로 덮어씁니다.

## Transaction Execution Phases

Midnight 트랜잭션은 두 단계로 실행됩니다:
1. **보장 단계**: 실패 시 트랜잭션이 블록체인에 포함되지 않습니다
2. **실패 허용 단계**: 실패 시 트랜잭션이 부분 성공으로 온체인에 기록됩니다

## Failure Behavior

**보장 단계 실패:**
- 트랜잭션이 거부되어 블록체인에 포함되지 않습니다
- 트랜잭션 데이터가 포함된 `ReplaceMaintenanceAuthorityTxFailedError`가 발생합니다
- 프라이빗 상태 프로바이더의 서명 키가 업데이트되지 않습니다 (현재 권한 유지)
- 온체인 컨트랙트 권한이 변경되지 않습니다

**실패 허용 단계 실패:**
- `SucceedEntirely`가 아닌 상태로 트랜잭션이 온체인에 기록됩니다
- 트랜잭션 데이터가 포함된 `ReplaceMaintenanceAuthorityTxFailedError`가 발생합니다
- 프라이빗 상태 프로바이더의 서명 키가 업데이트되지 않습니다 (현재 권한 유지)
- 온체인 컨트랙트 권한이 부분적으로 업데이트되었으나 일관되지 않을 수 있습니다
- 트랜잭션이 부분 성공으로 블록체인 이력에 나타납니다

## Type Parameters

### C

`C` *extends* `Any`

## Parameters

### providers

[`ContractProviders`](../type-aliases/ContractProviders.md)

트랜잭션 수명 주기를 관리하는 데 사용할 프로바이더입니다.

### compiledContract

`CompiledContract`\<`C`, `any`\>

유지보수 권한을 업데이트할 컴파일된 컨트랙트입니다.

### contractAddress

`string`

유지보수 권한을 업데이트할 컨트랙트의 주소입니다.

TODO: 향후 지원해야 할 옵션이 최소 세 가지 있습니다:
      1. 권한 교체 및 키 유지 (현재 방식).
      2. 권한 교체 및 키 미유지.
      3. 추가 권한 부여 및 기존 키 유지.

## Returns

> (`newAuthority`): `Promise`\<`FinalizedTxData`\>

### Parameters

#### newAuthority

`string`

새 컨트랙트 유지보수 권한의 서명 키입니다.

### Returns

`Promise`\<`FinalizedTxData`\>

확정된 트랜잭션 데이터로 이행되거나, 중간에 오류가 발생하면 거부되는 프로미스입니다.

### Throws

보장 단계 또는 실패 허용 단계에서 트랜잭션이 실패한 경우.
        오류에는 디버깅을 위한 확정된 트랜잭션 데이터가 포함됩니다.
