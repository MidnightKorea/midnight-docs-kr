[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / ProofErasedOutput

# Class: ProofErasedOutput

모든 증명 정보가 삭제된 [Output](Output.md)입니다.

주로 테스트 또는 올바른 것으로 알려진 데이터 처리에 사용됩니다.
external information

## Properties

### commitment

```ts
readonly commitment: string;
```

출력의 커밋먼트입니다.

***

### contractAddress

```ts
readonly contractAddress: undefined | string;
```

수신자가 컨트랙트인 경우 출력을 수신하는 컨트랙트 주소입니다.

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
static deserialize(raw, netid): ProofErasedOutput
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ProofErasedOutput`](ProofErasedOutput.md)
