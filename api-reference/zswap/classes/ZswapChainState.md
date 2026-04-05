[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / ZswapChainState

# Class: ZswapChainState

The on-chain state of Zswap, consisting of a Merkle tree of coin
commitments, a set of nullifiers, an index into the Merkle tree, and a set
of valid past Merkle tree roots

## Constructors

### new ZswapChainState()

```ts
new ZswapChainState(): ZswapChainState
```

#### Returns

[`ZswapChainState`](ZswapChainState.md)

## Properties

### firstFree

```ts
readonly firstFree: bigint;
```

코인 커밋먼트 트리의 첫 번째 빈 인덱스입니다.

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

### tryApply()

```ts
tryApply(offer, whitelist?): [ZswapChainState, Map<string, bigint>]
```

[Offer](Offer.md)를 상태에 적용하고, 업데이트된 상태를 반환합니다.
and a map on newly inserted coin commitments to their inserted indices.

#### Parameters

##### offer

[`Offer`](Offer.md)

##### whitelist?

`Set`\<`string`\>

A set of contract addresses that are of interest. If
set, *only* these addresses are tracked, and all other information is
discarded.

#### Returns

[[`ZswapChainState`](ZswapChainState.md), `Map`\<`string`, `bigint`\>]

***

### tryApplyProofErased()

```ts
tryApplyProofErased(offer, whitelist?): [ZswapChainState, Map<string, bigint>]
```

[tryApply](ZswapChainState.md#tryapply) for [ProofErasedOffer](ProofErasedOffer.md)s

#### Parameters

##### offer

[`ProofErasedOffer`](ProofErasedOffer.md)

##### whitelist?

`Set`\<`string`\>

#### Returns

[[`ZswapChainState`](ZswapChainState.md), `Map`\<`string`, `bigint`\>]

***

### deserialize()

```ts
static deserialize(raw, netid): ZswapChainState
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ZswapChainState`](ZswapChainState.md)

***

### deserializeFromLedgerState()

```ts
static deserializeFromLedgerState(raw, netid): ZswapChainState
```

전체 원장 직렬화 상태가 주어지면 Zswap 부분만 역직렬화합니다.

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`ZswapChainState`](ZswapChainState.md)
