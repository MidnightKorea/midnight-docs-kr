[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallResultPrivate

# Type Alias: CallResultPrivate\<C, PCK\>

> **CallResultPrivate**\<`C`, `PCK`\> = `object`

호출 결과의 프라이빗(민감) 부분입니다.

## Type Parameters

### C

`C` *extends* `Contract.Any`

### PCK

`PCK` *extends* `Contract.ProvableCircuitId`\<`C`\>

## Properties

### input

> `readonly` **input**: `AlignedValue`

ZK representation of the circuit arguments.

***

### nextPrivateState

> `readonly` **nextPrivateState**: `Contract.PrivateState`\<`C`\>

서킷 실행 결과로 생성된 프라이빗 상태입니다.

***

### nextZswapLocalState

> `readonly` **nextZswapLocalState**: `ZswapLocalState`

서킷 실행 결과로 생성된 Zswap 로컬 상태입니다.

***

### output

> `readonly` **output**: `AlignedValue`

ZK representation of the circuit result.

***

### privateTranscriptOutputs

> `readonly` **privateTranscriptOutputs**: `AlignedValue`[]

ZK representation of the circuit witness call results.

***

### result

> `readonly` **result**: `Contract.CircuitReturnType`\<`C`, `PCK`\>

서킷 입력의 JS 표현입니다.
