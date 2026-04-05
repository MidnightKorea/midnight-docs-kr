[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / ProofErasedOffer

# Class: ProofErasedOffer

모든 증명 정보가 삭제된 [Offer](Offer.md)입니다.

주로 테스트 또는 올바른 것으로 알려진 데이터 처리에 사용됩니다.
external information

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
readonly inputs: ProofErasedInput[];
```

이 오퍼를 구성하는 입력입니다.

***

### outputs

```ts
readonly outputs: ProofErasedOutput[];
```

이 오퍼를 구성하는 출력입니다.

***

### transient

```ts
readonly transient: ProofErasedTransient[];
```

이 오퍼를 구성하는 트랜지언트입니다.

## Methods

### merge()

```ts
merge(other): ProofErasedOffer
```

#### Parameters

##### other

[`ProofErasedOffer`](ProofErasedOffer.md)

#### Returns

[`ProofErasedOffer`](ProofErasedOffer.md)

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
static deserialize(raw, netid): ProofErasedOffer
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ProofErasedOffer`](ProofErasedOffer.md)
