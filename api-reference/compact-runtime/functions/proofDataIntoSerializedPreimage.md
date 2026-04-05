[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / proofDataIntoSerializedPreimage

# Function: proofDataIntoSerializedPreimage()

```ts
function proofDataIntoSerializedPreimage(
   input, 
   output, 
   public_transcript, 
   private_transcript_outputs, 
   key_location?): Uint8Array;
```

입력, 출력, 트랜스크립트 정보를 `ProvingProvider`에 전달하기 적합한
증명 프리이미지로 변환합니다.

`key_location` 매개변수는 증명 기계에서 회로를 식별하는 데 사용되는
문자열이며, 하위 호환성을 위해 설정하지 않으면 `'dummy'`가 기본값입니다.

## Parameters

### input

[`AlignedValue`](../type-aliases/AlignedValue.md)

### output

[`AlignedValue`](../type-aliases/AlignedValue.md)

### public\_transcript

[`Op`](../type-aliases/Op.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>[]

### private\_transcript\_outputs

[`AlignedValue`](../type-aliases/AlignedValue.md)[]

### key\_location?

`string`

## Returns

`Uint8Array`
