[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / ZswapOffer

# Class: ZswapOffer\<P\>

트랜잭션의 Zswap 부분인 완전한 Zswap 오퍼입니다.

[ZswapInput](ZswapInput.md), [ZswapOutput](ZswapOutput.md), [ZswapTransient](ZswapTransient.md) 집합과 트랜잭션 값의 [deltas](#deltas) 벡터로 구성됩니다.

## Type Parameters

### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

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
readonly inputs: ZswapInput<P>[];
```

이 오퍼를 구성하는 입력입니다.

***

### outputs

```ts
readonly outputs: ZswapOutput<P>[];
```

이 오퍼를 구성하는 출력입니다.

***

### transients

```ts
readonly transients: ZswapTransient<P>[];
```

이 오퍼를 구성하는 트랜지언트입니다.

## Methods

### merge()

```ts
merge(other): ZswapOffer<P>;
```

이 오퍼를 다른 오퍼와 결합합니다.

#### Parameters

##### other

`ZswapOffer`\<`P`\>

#### Returns

`ZswapOffer`\<`P`\>

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
static deserialize<P>(markerP, raw): ZswapOffer<P>;
```

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### markerP

`P`\[`"instance"`\]

##### raw

`Uint8Array`

#### Returns

`ZswapOffer`\<`P`\>

***

### fromInput()

```ts
static fromInput<P>(
   input, 
   type_?, 
value?): ZswapOffer<P>;
```

Creates a singleton offer, from an [ZswapInput](ZswapInput.md) and its value
vector

The `type_` and `value` parameters are deprecated and will be ignored.

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### input

[`ZswapInput`](ZswapInput.md)\<`P`\>

##### type\_?

`string`

##### value?

`bigint`

#### Returns

`ZswapOffer`\<`P`\>

***

### fromOutput()

```ts
static fromOutput<P>(
   output, 
   type_?, 
value?): ZswapOffer<P>;
```

Creates a singleton offer, from an [ZswapOutput](ZswapOutput.md) and its value
vector

The `type_` and `value` parameters are deprecated and will be ignored.

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### output

[`ZswapOutput`](ZswapOutput.md)\<`P`\>

##### type\_?

`string`

##### value?

`bigint`

#### Returns

`ZswapOffer`\<`P`\>

***

### fromTransient()

```ts
static fromTransient<P>(transient): ZswapOffer<P>;
```

Creates a singleton offer, from a [ZswapTransient](ZswapTransient.md)

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### transient

[`ZswapTransient`](ZswapTransient.md)\<`P`\>

#### Returns

`ZswapOffer`\<`P`\>
