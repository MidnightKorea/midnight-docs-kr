[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / ProofErasedInput

# Class: ProofErasedInput

A [Input](Input.md), with all proof information erased

주로 테스트 또는 올바른 것으로 알려진 데이터 처리에 사용됩니다.
external information

## Properties

### contractAddress

```ts
readonly contractAddress: undefined | string;
```

발신자가 컨트랙트인 경우 입력을 수신하는 컨트랙트 주소입니다.

***

### nullifier

```ts
readonly nullifier: string;
```

입력의 널리파이어입니다.

## Methods

### serialize()

```ts
serialize(netid): Uint8Array<ArrayBufferLike>
```

#### Parameters

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`

***

### deserialize()

```ts
static deserialize(raw, netid): ProofErasedInput
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ProofErasedInput`](ProofErasedInput.md)
