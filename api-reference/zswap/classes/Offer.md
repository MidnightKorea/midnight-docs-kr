[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / Offer

# Class: Offer

트랜잭션의 Zswap 부분인 완전한 Zswap 오퍼입니다.

[Input](Input.md), [Output](Output.md), [Transient](Transient.md) 집합과 트랜잭션 값의 [deltas](Offer.md#deltas) 벡터로 구성됩니다.

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
readonly inputs: Input[];
```

이 오퍼를 구성하는 입력입니다.

***

### outputs

```ts
readonly outputs: Output[];
```

이 오퍼를 구성하는 출력입니다.

***

### transient

```ts
readonly transient: Transient[];
```

이 오퍼를 구성하는 트랜지언트입니다.

## Methods

### merge()

```ts
merge(other): Offer
```

이 오퍼를 다른 오퍼와 결합합니다.

#### Parameters

##### other

[`Offer`](Offer.md)

#### Returns

[`Offer`](Offer.md)

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
static deserialize(raw, netid): Offer
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`Offer`](Offer.md)
