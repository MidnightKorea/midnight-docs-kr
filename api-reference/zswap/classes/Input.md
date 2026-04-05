[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / Input

# Class: Input

차폐 트랜잭션 입력입니다.

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
static deserialize(raw, netid): Input
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`Input`](Input.md)
