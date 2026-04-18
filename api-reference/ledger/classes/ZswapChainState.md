[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / ZswapChainState

# Class: ZswapChainState

코인 커밋먼트의 머클 트리, 널리파이어 집합, 머클 트리 인덱스, 유효한 과거 머클 트리 루트 집합으로 구성된 Zswap의 온체인 상태입니다.

## Constructors

### Constructor

```ts
new ZswapChainState(): ZswapChainState;
```

#### Returns

`ZswapChainState`

## Properties

### firstFree

```ts
readonly firstFree: bigint;
```

코인 커밋먼트 트리의 첫 번째 빈 인덱스입니다.

## Methods

### filter()

```ts
filter(contractAddress): ZswapChainState;
```

주어진 컨트랙트 주소에 관련된 코인만 포함하도록 상태를 필터링합니다.

#### Parameters

##### contractAddress

`string`

#### Returns

`ZswapChainState`

***

### postBlockUpdate()

```ts
postBlockUpdate(tblock): ZswapChainState;
```

Carries out a post-block update, which does amortized bookkeeping that
only needs to be done once per state change.

Typically, `postBlockUpdate` should be run after any (sequence of)
(system)-transaction application(s).

#### Parameters

##### tblock

`Date`

#### Returns

`ZswapChainState`

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

### tryApply()

```ts
tryApply<P>(offer, whitelist?): [ZswapChainState, Map<string, bigint>];
```

[ZswapOffer](ZswapOffer.md)를 상태에 적용하고, 업데이트된 상태와 새로 삽입된 코인 커밋먼트에서 삽입된 인덱스로의 맵을 반환합니다.

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### offer

[`ZswapOffer`](ZswapOffer.md)\<`P`\>

##### whitelist?

`Set`\<`string`\>

A set of contract addresses that are of interest. If
set, *only* these addresses are tracked, and all other information is
discarded.

#### Returns

\[`ZswapChainState`, `Map`\<`string`, `bigint`\>\]

***

### deserialize()

```ts
static deserialize(raw): ZswapChainState;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`ZswapChainState`

***

### deserializeFromLedgerState()

```ts
static deserializeFromLedgerState(raw): ZswapChainState;
```

전체 원장 직렬화 상태가 주어지면 Zswap 부분만 역직렬화합니다.

#### Parameters

##### raw

`Uint8Array`

#### Returns

`ZswapChainState`
