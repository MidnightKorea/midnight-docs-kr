[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / ContractConstructorResult

# Type Alias: ContractConstructorResult\<C\>

> **ContractConstructorResult**\<`C`\> = `object`

컨트랙트 생성자 실행 결과로 업데이트된 상태입니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`

## Properties

### nextContractState

> `readonly` **nextContractState**: `ContractState`

컨트랙트 생성자 실행 결과로 생성된 퍼블릭 상태입니다.

***

### nextPrivateState

> `readonly` **nextPrivateState**: `Contract.PrivateState`\<`C`\>

컨트랙트 생성자 실행 결과로 생성된 프라이빗 상태입니다.

***

### nextZswapLocalState

> `readonly` **nextZswapLocalState**: `ZswapLocalState`

컨트랙트 생성자 실행 결과로 생성된 Zswap 로컬 상태입니다.
