[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / createProvingPayload

# Function: createProvingPayload()

```ts
function createProvingPayload(
   serializedPreimage, 
   overwriteBindingInput, 
   keyMaterial?): Uint8Array;
```

증명 서버를 통해 특정 증명을 수행하기 위한 페이로드를 생성합니다.

## Parameters

### serializedPreimage

`Uint8Array`

### overwriteBindingInput

`undefined` | `bigint`

### keyMaterial?

[`ProvingKeyMaterial`](../type-aliases/ProvingKeyMaterial.md)

## Returns

`Uint8Array`
