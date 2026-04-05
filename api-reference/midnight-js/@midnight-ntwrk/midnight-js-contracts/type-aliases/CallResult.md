[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallResult

# Type Alias: CallResult\<C, PCK\>

> **CallResult**\<`C`, `PCK`\> = `object`

서킷 실행 결과의 모든 정보를 포함합니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>

## Properties

### private

> `readonly` **private**: [`CallResultPrivate`](CallResultPrivate.md)\<`C`, `PCK`\>

서킷 실행으로 생성된 프라이빗/민감 데이터입니다.

***

### public

> `readonly` **public**: [`CallResultPublic`](CallResultPublic.md)

서킷 실행으로 생성된 퍼블릭/비민감 데이터입니다.
