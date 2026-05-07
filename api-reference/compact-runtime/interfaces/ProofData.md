[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ProofData

# Interface: ProofData

영지식 증명을 생성하는 데 필요한 데이터를 캡슐화합니다

## Extends

- [`PartialProofData`](PartialProofData.md)

## Properties

### input

```ts
input: AlignedValue;
```

회로의 입력

#### Inherited from

[`PartialProofData`](PartialProofData.md).[`input`](PartialProofData.md#input)

***

### output

```ts
output: AlignedValue;
```

회로의 출력

***

### privateTranscriptOutputs

```ts
privateTranscriptOutputs: AlignedValue[];
```

위트니스 호출 출력의 트랜스크립트

#### Inherited from

[`PartialProofData`](PartialProofData.md).[`privateTranscriptOutputs`](PartialProofData.md#privatetranscriptoutputs)

***

### publicTranscript

```ts
publicTranscript: Op<AlignedValue>[];
```

연산의 공개 트랜스크립트

#### Inherited from

[`PartialProofData`](PartialProofData.md).[`publicTranscript`](PartialProofData.md#publictranscript)
