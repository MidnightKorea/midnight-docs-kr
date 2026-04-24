[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / submitTx

# Function: submitTx()

> **submitTx**\<`C`, `PCK`\>(`providers`, `options`): `Promise`\<`FinalizedTxData`\>

주어진 프로바이더를 사용하여 지정된 옵션에 따라 미증명 배포 또는 호출 트랜잭션을 증명, 밸런싱, 제출합니다.

## Blocking Behavior

이 메서드는 `providers.publicDataProvider.watchForTxData(txId)`를 통해 트랜잭션이 블록체인에 나타날 때까지 **무기한 대기**합니다. 다음 상황이 될 때까지 반환되지 않습니다:
- 트랜잭션이 블록체인에 성공적으로 포함되거나
- 증명, 밸런싱 또는 제출 중에 오류가 발생

## Conditions When Transaction May Not Appear

제출된 트랜잭션이 온체인에 나타나지 않을 수 있는 경우:
- 로컬 검증에서 감지되지 않은 방식으로 트랜잭션이 유효하지 않은 경우
- 네트워크 문제로 검증자에게 전파되지 않은 경우
- 검증자 합의에 의해 트랜잭션이 거부된 경우
- 수수료 또는 리소스가 부족한 경우
- 컨트랙트 상태가 변경되어 트랜잭션이 유효하지 않게 된 경우

## Implications of Aborting This Method

이 메서드가 반환되기 전에 애플리케이션이 종료하면:
- 트랜잭션이 여전히 온체인에서 대기/처리 중일 수 있습니다
- 트랜잭션이 나중에 온체인에서 성공하더라도 **프라이빗 상태 업데이트가 저장되지 않습니다**
- **서명 키가 업데이트되지 않습니다** (배포/권한 교체 트랜잭션의 경우)
- 애플리케이션 상태가 블록체인 상태와 동기화되지 않습니다
- 상태를 일치시키기 위해 수동 복구가 필요할 수 있습니다

**권장 사항**: 논블로킹 제출과 수동 확정 처리 및 타임아웃 제어가 필요하면 [submitTxAsync](submitTxAsync.md)를 사용하세요.

## Type Parameters

### C

`C` *extends* `Any`

### PCK

`PCK` *extends* `string`

## Parameters

### providers

[`SubmitTxProviders`](../type-aliases/SubmitTxProviders.md)\<`C`, `PCK`\>

트랜잭션 수명 주기를 관리하는 데 사용되는 프로바이더입니다.

### options

[`SubmitTxOptions`](../type-aliases/SubmitTxOptions.md)\<`PCK`\>

설정입니다.

## Returns

`Promise`\<`FinalizedTxData`\>

호출에 대한 확정된 트랜잭션 데이터로 이행되거나, 중간에 오류가 발생하면 거부되는 프로미스입니다.
