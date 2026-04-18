[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / ContractCallPrototype

# Class: ContractCallPrototype

아직 조립 중인 [ContractCall](ContractCall.md)입니다.

## Constructors

### Constructor

```ts
new ContractCallPrototype(
   address, 
   entry_point, 
   op, 
   guaranteed_public_transcript, 
   fallible_public_transcript, 
   private_transcript_outputs, 
   input, 
   output, 
   communication_commitment_rand, 
   key_location): ContractCallPrototype;
```

#### Parameters

##### address

`string`

호출 대상 주소입니다.

##### entry\_point

호출 대상 진입점입니다.

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### op

[`ContractOperation`](ContractOperation.md)

이 진입점에서 예상되는 연산입니다.

##### guaranteed\_public\_transcript

이 호출에 대해 계산된 guaranteed
트랜스크립트입니다.

`undefined` | [`Transcript`](../type-aliases/Transcript.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>

##### fallible\_public\_transcript

이 호출에 대해 계산된 fallible
트랜스크립트입니다.

`undefined` | [`Transcript`](../type-aliases/Transcript.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>

##### private\_transcript\_outputs

[`AlignedValue`](../type-aliases/AlignedValue.md)[]

이 호출에 대해 기록된 프라이빗
트랜스크립트입니다.

##### input

[`AlignedValue`](../type-aliases/AlignedValue.md)

이 호출에 제공된 입력입니다.

##### output

[`AlignedValue`](../type-aliases/AlignedValue.md)

이 호출에서 계산된 출력입니다.

##### communication\_commitment\_rand

`string`

이 호출에 사용된 커뮤니케이션
랜덤값입니다.

##### key\_location

`string`

이 호출의 키를 조회하기 위한
식별자입니다.

#### Returns

`ContractCallPrototype`

## Methods

### intoCall()

```ts
intoCall(parentBinding): ContractCall<PreProof>;
```

#### Parameters

##### parentBinding

[`PreBinding`](PreBinding.md)

#### Returns

[`ContractCall`](ContractCall.md)\<[`PreProof`](PreProof.md)\>

***

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`
