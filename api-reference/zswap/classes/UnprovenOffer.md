[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / UnprovenOffer

# Class: UnprovenOffer

A [Offer](Offer.md), prior to being proven

이 단계에서 오퍼의 모든 "차폐" 정보를 추출할 수 있습니다.
stage!

## Constructors

### new UnprovenOffer()

```ts
new UnprovenOffer(): UnprovenOffer
```

#### Returns

[`UnprovenOffer`](UnprovenOffer.md)

## Properties

### deltas

```ts
readonly deltas: Map<string, bigint>;
```

각 토큰 유형별 이 오퍼의 값입니다. 음수일 수 있습니다.

값 벡터에서 입력 코인 값 - 출력 코인 값입니다.

***

### inputs

```ts
readonly inputs: UnprovenInput[];
```

이 오퍼를 구성하는 입력입니다.

***

### outputs

```ts
readonly outputs: UnprovenOutput[];
```

이 오퍼를 구성하는 출력입니다.

***

### transient

```ts
readonly transient: UnprovenTransient[];
```

이 오퍼를 구성하는 트랜지언트입니다.

## Methods

### merge()

```ts
merge(other): UnprovenOffer
```

이 오퍼를 다른 오퍼와 결합합니다.

#### Parameters

##### other

[`UnprovenOffer`](UnprovenOffer.md)

#### Returns

[`UnprovenOffer`](UnprovenOffer.md)

***

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
static deserialize(raw, netid): UnprovenOffer
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`UnprovenOffer`](UnprovenOffer.md)

***

### fromInput()

```ts
static fromInput(
   input, 
   type_, 
   value): UnprovenOffer
```

[UnprovenInput](UnprovenInput.md)과 해당 값으로 단일 오퍼를 생성합니다.
vector

#### Parameters

##### input

[`UnprovenInput`](UnprovenInput.md)

##### type\_

`string`

##### value

`bigint`

#### Returns

[`UnprovenOffer`](UnprovenOffer.md)

***

### fromOutput()

```ts
static fromOutput(
   output, 
   type_, 
   value): UnprovenOffer
```

[UnprovenOutput](UnprovenOutput.md)과 해당 값으로 단일 오퍼를 생성합니다.
vector

#### Parameters

##### output

[`UnprovenOutput`](UnprovenOutput.md)

##### type\_

`string`

##### value

`bigint`

#### Returns

[`UnprovenOffer`](UnprovenOffer.md)

***

### fromTransient()

```ts
static fromTransient(transient): UnprovenOffer
```

[UnprovenTransient](UnprovenTransient.md)로 단일 오퍼를 생성합니다.

#### Parameters

##### transient

[`UnprovenTransient`](UnprovenTransient.md)

#### Returns

[`UnprovenOffer`](UnprovenOffer.md)
