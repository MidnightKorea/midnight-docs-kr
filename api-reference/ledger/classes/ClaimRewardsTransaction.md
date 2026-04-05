[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / ClaimRewardsTransaction

# Class: ClaimRewardsTransaction\<S\>

보상 수령인이 승인한 보상 할당 요청입니다.

## Type Parameters

### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

## Constructors

### Constructor

```ts
new ClaimRewardsTransaction<S>(
   markerS, 
   network_id, 
   value, 
   owner, 
   nonce, 
   signature, 
kind?): ClaimRewardsTransaction<S>;
```

#### Parameters

##### markerS

`S`\[`"instance"`\]

##### network\_id

`string`

##### value

`bigint`

##### owner

`string`

##### nonce

`string`

##### signature

`S`

##### kind?

[`ClaimKind`](../type-aliases/ClaimKind.md)

#### Returns

`ClaimRewardsTransaction`\<`S`\>

## Properties

### dataToSign

```ts
readonly dataToSign: Uint8Array;
```

이 트랜잭션을 승인하기 위해 유효한 서명이 서명해야 하는 원시 데이터입니다.

***

### kind

```ts
readonly kind: ClaimKind;
```

청구 유형으로, `Reward` 또는 `CardanoBridge` 중 하나입니다.

***

### nonce

```ts
readonly nonce: string;
```

보상 코인의 랜덤값으로, 다른 코인과의 충돌을 방지합니다.

***

### owner

```ts
readonly owner: string;
```

이 코인을 소유한 서명 키입니다.

***

### signature

```ts
readonly signature: S;
```

이 요청에 대한 서명입니다.

***

### value

```ts
readonly value: bigint;
```

통화에 따른 최소 단위로 표현된 보상 코인의 값입니다.

음이 아닌 64비트 정수로 제한됩니다.

## Methods

### addSignature()

```ts
addSignature(signature): ClaimRewardsTransaction<SignatureEnabled>;
```

#### Parameters

##### signature

`string`

#### Returns

`ClaimRewardsTransaction`\<[`SignatureEnabled`](SignatureEnabled.md)\>

***

### eraseSignatures()

```ts
eraseSignatures(): ClaimRewardsTransaction<SignatureErased>;
```

#### Returns

`ClaimRewardsTransaction`\<[`SignatureErased`](SignatureErased.md)\>

***

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

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

### deserialize()

```ts
static deserialize<S>(markerS, raw): ClaimRewardsTransaction<S>;
```

#### Type Parameters

##### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

#### Parameters

##### markerS

`S`\[`"instance"`\]

##### raw

`Uint8Array`

#### Returns

`ClaimRewardsTransaction`\<`S`\>

***

### new()

```ts
static new(
   network_id, 
   value, 
   owner, 
   nonce, 
kind): ClaimRewardsTransaction<SignatureErased>;
```

#### Parameters

##### network\_id

`string`

##### value

`bigint`

##### owner

`string`

##### nonce

`string`

##### kind

[`ClaimKind`](../type-aliases/ClaimKind.md)

#### Returns

`ClaimRewardsTransaction`\<[`SignatureErased`](SignatureErased.md)\>
