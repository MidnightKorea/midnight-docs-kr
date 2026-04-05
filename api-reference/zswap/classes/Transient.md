[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / Transient

# Class: Transient

A shielded "transient"; an output that is immediately spent within the same
transaction

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
static deserialize(raw, netid): Transient
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`Transient`](Transient.md)
