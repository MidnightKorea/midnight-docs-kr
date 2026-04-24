[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / verifyContractState

# Function: verifyContractState()

> **verifyContractState**(`verifierKeys`, `contractState`): `void`

주어진 `contractState`에 지정된 `verifierKeys`가 포함되어 있는지 확인합니다.

## Parameters

### verifierKeys

\[`string`, `VerifierKey`\][]

확인 대상 배포된 컨트랙트에 대해 클라이언트가 보유한 검증자 키입니다.

### contractState

`ContractState`

검증자 키를 포함하는 (일반적으로 이미 배포된) 컨트랙트 상태입니다.

## Returns

`void`

## Throws

ContractTypeError 로컬과 배포된 검증자 키 중 하나 이상이 일치하지 않을 때.
