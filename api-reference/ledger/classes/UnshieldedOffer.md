[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / UnshieldedOffer

# Class: UnshieldedOffer\<S\>

비차폐 오퍼는 입력, 출력, 그리고 입력을 승인하는 서명으로 구성됩니다. 서명이 서명하는 데이터는 [Intent.signatureData](Intent.md#signaturedata)에서 제공됩니다.

## Type Parameters

### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

## Properties

### inputs

```ts
readonly inputs: UtxoSpend[];
```

***

### outputs

```ts
readonly outputs: UtxoOutput[];
```

***

### signatures

```ts
readonly signatures: string[];
```

## Methods

### addSignatures()

```ts
addSignatures(signatures): UnshieldedOffer<S>;
```

#### Parameters

##### signatures

`string`[]

#### Returns

`UnshieldedOffer`\<`S`\>

***

### eraseSignatures()

```ts
eraseSignatures(): UnshieldedOffer<SignatureErased>;
```

#### Returns

`UnshieldedOffer`\<[`SignatureErased`](SignatureErased.md)\>

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

***

### new()

```ts
static new(
   inputs, 
   outputs, 
signatures): UnshieldedOffer<SignatureEnabled>;
```

#### Parameters

##### inputs

[`UtxoSpend`](../type-aliases/UtxoSpend.md)[]

##### outputs

[`UtxoOutput`](../type-aliases/UtxoOutput.md)[]

##### signatures

`string`[]

#### Returns

`UnshieldedOffer`\<[`SignatureEnabled`](SignatureEnabled.md)\>
