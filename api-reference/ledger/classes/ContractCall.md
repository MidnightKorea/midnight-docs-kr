[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / ContractCall

# Class: ContractCall\<P\>

단일 컨트랙트 호출 세그먼트입니다.

## Type Parameters

### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

## Properties

### address

```ts
readonly address: string;
```

호출 대상 주소입니다.

***

### communicationCommitment

```ts
readonly communicationCommitment: string;
```

이 호출의 커뮤니케이션 커밋먼트입니다.

***

### entryPoint

```ts
readonly entryPoint: string | Uint8Array<ArrayBufferLike>;
```

호출 대상 진입점입니다.

***

### fallibleTranscript

```ts
readonly fallibleTranscript: 
  | undefined
| Transcript<AlignedValue>;
```

fallible 실행 단계 트랜스크립트입니다.

***

### guaranteedTranscript

```ts
readonly guaranteedTranscript: 
  | undefined
| Transcript<AlignedValue>;
```

guaranteed 실행 단계 트랜스크립트입니다.

***

### proof

```ts
readonly proof: P;
```

이 호출에 첨부된 증명입니다.

## Methods

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`
