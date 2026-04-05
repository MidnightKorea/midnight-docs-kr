[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / ProofErasedTransient

# Class: ProofErasedTransient

A [Transient](Transient.md), with all proof information erased

주로 테스트 또는 올바른 것으로 알려진 데이터 처리에 사용됩니다.
external information

## Properties

### commitment

```ts
readonly commitment: string;
```

트랜지언트의 커밋먼트입니다.

***

### contractAddress

```ts
readonly contractAddress: undefined | string;
```

해당하는 경우, 트랜지언트를 생성하는 컨트랙트 주소입니다.

***

### nullifier

```ts
readonly nullifier: string;
```

트랜지언트의 널리파이어입니다.

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
static deserialize(raw, netid): ProofErasedTransient
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ProofErasedTransient`](ProofErasedTransient.md)
