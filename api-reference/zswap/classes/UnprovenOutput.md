[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / UnprovenOutput

# Class: UnprovenOutput

증명되기 전의 [Output](Output.md)입니다.

이 단계에서 출력의 모든 "차폐" 정보를 추출할 수 있습니다.
stage!

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
static deserialize(raw, netid): UnprovenOutput
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`UnprovenOutput`](UnprovenOutput.md)

***

### new()

```ts
static new(
   coin, 
   segment, 
   target_cpk, 
   target_epk): UnprovenOutput
```

사용자의 코인 공개 키를 대상으로 새 출력을 생성합니다.

선택적으로 사용자의 암호화 공개 키로 암호화된 암호문을 포함합니다.
encryption public key, which may be omitted *only* if the [CoinInfo](../type-aliases/CoinInfo.md)
is transferred to the recipient another way

#### Parameters

##### coin

[`CoinInfo`](../type-aliases/CoinInfo.md)

##### segment

`number`

##### target\_cpk

`string`

##### target\_epk

`string`

#### Returns

[`UnprovenOutput`](UnprovenOutput.md)

***

### newContractOwned()

```ts
static newContractOwned(
   coin, 
   segment, 
   contract): UnprovenOutput
```

스마트 컨트랙트를 대상으로 새 출력을 생성합니다.

A contract must *also* explicitly receive a coin created in this way for
the output to be valid

#### Parameters

##### coin

[`CoinInfo`](../type-aliases/CoinInfo.md)

##### segment

`number`

##### contract

`string`

#### Returns

[`UnprovenOutput`](UnprovenOutput.md)
