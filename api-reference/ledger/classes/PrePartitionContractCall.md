[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / PrePartitionContractCall

# Class: PrePartitionContractCall

[Transaction.addCalls](Transaction.md#addcalls)에서 사용하기 위해 guaranteed와 fallible 부분으로 분할되기 전의 [ContractCall](ContractCall.md)입니다.

[partitionTranscripts](../functions/partitionTranscripts.md)가 이미 사용되었다고 가정하는 [ContractCall](ContractCall.md)과 유사하지만 동일하지는 않습니다. [Transaction.addCalls](Transaction.md#addcalls)는 Zswap 구성 요소도 처리하고 필요 시 관련 인텐트를 생성하는 대체 방법입니다.

## Constructors

### Constructor

```ts
new PrePartitionContractCall(
   address, 
   entry_point, 
   op, 
   pre_transcript, 
   private_transcript_outputs, 
   input, 
   output, 
   communication_commitment_rand, 
   key_location): PrePartitionContractCall;
```

#### Parameters

##### address

`string`

##### entry\_point

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### op

[`ContractOperation`](ContractOperation.md)

##### pre\_transcript

[`PreTranscript`](PreTranscript.md)

##### private\_transcript\_outputs

[`AlignedValue`](../type-aliases/AlignedValue.md)[]

##### input

[`AlignedValue`](../type-aliases/AlignedValue.md)

##### output

[`AlignedValue`](../type-aliases/AlignedValue.md)

##### communication\_commitment\_rand

`string`

##### key\_location

`string`

#### Returns

`PrePartitionContractCall`

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
