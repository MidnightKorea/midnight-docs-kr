[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitInsertVerifierKeyTx

# Function: submitInsertVerifierKeyTx()

> **submitInsertVerifierKeyTx**\<`C`\>(`providers`, `compiledContract`, `contractAddress`, `circuitId`, `newVk`): `Promise`\<`FinalizedTxData`\>

주어진 컨트랙트 주소의 지정된 서킷 ID에 새 검증자 키를 추가하는 트랜잭션을 구성하고 블록체인에 제출합니다.

## Transaction Execution Phases

Midnight 트랜잭션은 두 단계로 실행됩니다:
1. **보장 단계**: 실패 시 트랜잭션이 블록체인에 포함되지 않습니다
2. **실패 허용 단계**: 실패 시 트랜잭션이 부분 성공으로 온체인에 기록됩니다

## Failure Behavior

**보장 단계 실패:**
- 트랜잭션이 거부되어 블록체인에 포함되지 않습니다
- 트랜잭션 데이터가 포함된 `InsertVerifierKeyTxFailedError`가 발생합니다
- 검증자 키가 컨트랙트에 추가되지 않습니다
- 실패한 트랜잭션의 온체인 기록이 없습니다

**실패 허용 단계 실패:**
- `SucceedEntirely`가 아닌 상태로 트랜잭션이 온체인에 기록됩니다
- 트랜잭션 데이터가 포함된 `InsertVerifierKeyTxFailedError`가 발생합니다
- 검증자 키가 부분적으로 추가되었으나 사용 불가능할 수 있습니다
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

검증자 키를 삽입할 서킷이 포함된 컨트랙트의 주소입니다.

### circuitId

`ProvableCircuitId`\<`C`\>

검증자 키를 삽입할 서킷입니다.

### newVk

`VerifierKey`

해당 서킷의 새 검증자 키입니다.

## Returns

`Promise`\<`FinalizedTxData`\>

확정된 트랜잭션 데이터로 이행되거나, 중간에 오류가 발생하면 거부되는 프로미스입니다.

## Throws

보장 단계 또는 실패 허용 단계에서 트랜잭션이 실패한 경우.
        오류에는 디버깅을 위한 확정된 트랜잭션 데이터가 포함됩니다.

TODO: 향후 이 함수에서 검증자 키가 자동으로 교체되도록 ZKConfigProvider 프로바이더를
      수정할 가능성이 있습니다. ZKConfigProvider에 키와 함께 키 버전을 저장하는 방식이
      될 것입니다. 기본적으로 최신 버전의 아티팩트가 트랜잭션 빌드에 사용됩니다.
