[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / UnprovenTransient

# Class: UnprovenTransient

A [Transient](Transient.md), before being proven

이 단계에서 트랜지언트의 모든 "차폐" 정보를 추출할 수 있습니다.
stage!

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
static deserialize(raw, netid): UnprovenTransient
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`UnprovenTransient`](UnprovenTransient.md)

***

### newFromContractOwnedOutput()

```ts
static newFromContractOwnedOutput(
   coin, 
   segment, 
   output): UnprovenTransient
```

주어진 출력과 코인으로 컨트랙트 소유의 새 트랜지언트를 생성합니다.

The [QualifiedCoinInfo](../type-aliases/QualifiedCoinInfo.md) should have an `mt_index` of `0`

#### Parameters

##### coin

[`QualifiedCoinInfo`](../type-aliases/QualifiedCoinInfo.md)

##### segment

`number`

##### output

[`UnprovenOutput`](UnprovenOutput.md)

#### Returns

[`UnprovenTransient`](UnprovenTransient.md)
