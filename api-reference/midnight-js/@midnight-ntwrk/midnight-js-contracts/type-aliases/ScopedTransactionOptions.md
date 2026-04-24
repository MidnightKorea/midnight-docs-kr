[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / ScopedTransactionOptions

# Type Alias: ScopedTransactionOptions

> **ScopedTransactionOptions** = `object`

스코프 트랜잭션 생성 시 사용할 옵션입니다.

## Properties

### additionalCoinEncPublicKeyMappings?

> `readonly` `optional` **additionalCoinEncPublicKeyMappings?**: `ReadonlyMap`\<`CoinPublicKey`, `EncPublicKey`\>

An optional mapping of CoinPublicKey to EncPublicKey that can be used to resolve encryption
keys for coins created during circuit execution.

***

### scopeName?

> `readonly` `optional` **scopeName?**: `string`

트랜잭션 스코프의 선택적 이름입니다.
