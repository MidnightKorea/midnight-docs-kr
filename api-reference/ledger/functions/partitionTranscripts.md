[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / partitionTranscripts

# Function: partitionTranscripts()

```ts
function partitionTranscripts(calls, params): PartitionedTranscript[];
```

초기 컨텍스트에서 프로그램 집합을 완결하여, 최적으로 할당되고 가스 수수료가 휴리스틱으로 충당된 guaranteed 및 fallible [Transcript](../type-aliases/Transcript.md)를 생성합니다.

## Parameters

### calls

[`PreTranscript`](../classes/PreTranscript.md)[]

### params

[`LedgerParameters`](../classes/LedgerParameters.md)

## Returns

[`PartitionedTranscript`](../type-aliases/PartitionedTranscript.md)[]
