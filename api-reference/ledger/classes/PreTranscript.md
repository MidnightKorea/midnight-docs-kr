[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / PreTranscript

# Class: PreTranscript

분할 전 트랜스크립트로, 실행 컨텍스트, 트랜스크립트를 구성할 프로그램, 그리고 선택적으로 호출을 묶는 커뮤니케이션 커밋먼트로 구성됩니다.

## Constructors

### Constructor

```ts
new PreTranscript(
   context, 
   program, 
   comm_comm?): PreTranscript;
```

#### Parameters

##### context

[`QueryContext`](QueryContext.md)

##### program

[`Op`](../type-aliases/Op.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>[]

##### comm\_comm?

`string`

#### Returns

`PreTranscript`

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
