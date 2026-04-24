[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallOptionsProviderDataDependencies

# Type Alias: CallOptionsProviderDataDependencies

> **CallOptionsProviderDataDependencies** = `object`

호출 옵션에 포함해야 하는 프로바이더를 통해 조회된 데이터입니다.

## Properties

### coinPublicKey

> `readonly` **coinPublicKey**: `CoinPublicKey`

현재 사용자의 Zswap 공개 키입니다.

***

### initialContractState

> `readonly` **initialContractState**: `ContractState`

서킷을 실행할 컨트랙트의 초기 퍼블릭 상태입니다.

***

### initialZswapChainState

> `readonly` **initialZswapChainState**: `ZswapChainState`

서킷을 실행할 컨트랙트의 초기 퍼블릭 Zswap 상태입니다.

***

### ledgerParameters

> `readonly` **ledgerParameters**: `LedgerParameters`

서킷 실행 시 사용할 원장 매개변수입니다.
