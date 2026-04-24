[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / CallResultPublic

# Type Alias: CallResultPublic

> **CallResultPublic** = `object`

호출 결과의 퍼블릭 부분입니다.

## Properties

### nextContractState

> `readonly` **nextContractState**: `StateValue`

서킷 실행 결과로 생성된 퍼블릭 상태입니다.

***

### partitionedTranscript

> `readonly` **partitionedTranscript**: `PartitionedTranscript`

A [publicTranscript](#publictranscript) partitioned into guaranteed and fallible sections.
The guaranteed section of a public transcript must succeed for the corresponding
transaction to be considered valid. The fallible section of a public transcript
can fail without invalidating the transaction, as long as the guaranteed section succeeds.

***

### publicTranscript

> `readonly` **publicTranscript**: `Op`\<`AlignedValue`\>[]

서킷 실행 결과로 생성된 퍼블릭 트랜스크립트입니다.
