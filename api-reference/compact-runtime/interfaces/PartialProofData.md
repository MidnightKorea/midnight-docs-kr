[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / PartialProofData

# Interface: PartialProofData

회로 출력을 제외하고 영지식 증명을 생성하는 데 필요한 데이터를 캡슐화합니다

## Extended by

- [`ProofData`](ProofData.md)

## Properties

### input

```ts
input: AlignedValue;
```

회로의 입력

***

### privateTranscriptOutputs

```ts
privateTranscriptOutputs: AlignedValue[];
```

위트니스 호출 출력의 트랜스크립트

***

### publicTranscript

```ts
publicTranscript: Op<AlignedValue>[];
```

연산의 공개 트랜스크립트
