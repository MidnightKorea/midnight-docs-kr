[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / proofDataIntoSerializedPreimage

# Function: proofDataIntoSerializedPreimage()

```ts
function proofDataIntoSerializedPreimage(
   input, 
   output, 
   public_transcript, 
   private_transcript_outputs, 
   key_location?): Uint8Array;
```

입력, 출력, 트랜스크립트 정보를 증명 프리이미지로 변환합니다.
suitable to pass to a `ProvingProvider`.

The `key_location` parameter is a string used to identify the circuit by
proving machinery, for backwards-compatibility, if unset it defaults to
`'dummy'`.

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
