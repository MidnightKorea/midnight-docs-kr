[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / ContractTypeError

# Class: ContractTypeError

주어진 컨트랙트 타입과 해당 컨트랙트 주소에 배포된 초기 상태 간에 타입이 일치하지 않을 때 발생하는 오류입니다.

## Remarks

이 오류는 일반적으로 [findDeployedContract](../functions/findDeployedContract.md) 호출 시 제공된 컨트랙트 주소가 주어진 컨트랙트 타입과 다른 타입의 컨트랙트를 나타낼 때 발생합니다.

## Extends

- `TypeError`

## Constructors

### Constructor

> **new ContractTypeError**(`contractState`, `circuitIds`): `ContractTypeError`

새 ContractTypeError를 초기화합니다.

#### Parameters

##### contractState

`ContractState`

초기 배포된 컨트랙트 상태입니다.

##### circuitIds

`string`[]

정의되지 않았거나, `contractState`에 있는 키와 검증자 키가 일치하지 않는
                  서킷 목록입니다.

#### Returns

`ContractTypeError`

#### Overrides

`TypeError.constructor`

## Properties

### circuitIds

> `readonly` **circuitIds**: `string`[]

정의되지 않았거나, `contractState`에 있는 키와 검증자 키가 일치하지 않는
                  서킷 목록입니다.

***

### contractState

> `readonly` **contractState**: `ContractState`

초기 배포된 컨트랙트 상태입니다.
