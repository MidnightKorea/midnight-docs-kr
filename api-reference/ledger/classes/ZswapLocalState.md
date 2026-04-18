[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / ZswapLocalState

# Class: ZswapLocalState

미사용 코인 집합으로 구성된 사용자/지갑의 로컬 상태입니다.

소비 예정이거나 수신 예정인 진행 중 코인도 추적하며, 증명 생성을 위한 글로벌 코인 커밋먼트 머클 트리의 로컬 사본을 유지합니다.

키를 내부에 저장하지 않고, 다양한 연산의 인수로 받아들입니다.

## Constructors

### Constructor

```ts
new ZswapLocalState(): ZswapLocalState;
```

새로운 빈 상태를 생성합니다.

#### Returns

`ZswapLocalState`

## Properties

### coins

```ts
readonly coins: Set<QualifiedShieldedCoinInfo>;
```

이 지갑의 *소비 가능한* 코인 집합입니다.

***

### firstFree

```ts
readonly firstFree: bigint;
```

내부 코인 커밋먼트 머클 트리의 첫 번째 빈 인덱스입니다.
어떤 머클 트리 업데이트가 필요한지 식별하는 데 사용할 수 있습니다.

***

### pendingOutputs

```ts
readonly pendingOutputs: Map<string, [ShieldedCoinInfo, undefined | Date]>;
```

이 지갑이 향후 수신할 것으로 예상하는 출력으로, 선택적 TTL이 첨부됩니다.

***

### pendingSpends

```ts
readonly pendingSpends: Map<string, [QualifiedShieldedCoinInfo, undefined | Date]>;
```

이 지갑이 향후 온체인에서 확정될 것으로 예상하는 소비입니다. 각각 선택적 TTL이 첨부됩니다.

## Methods

### apply()

```ts
apply<P>(secretKeys, offer): ZswapLocalState;
```

현재 상태에 오퍼를 로컬로 적용하고 업데이트된 상태를 반환합니다.

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### secretKeys

[`ZswapSecretKeys`](ZswapSecretKeys.md)

##### offer

[`ZswapOffer`](ZswapOffer.md)\<`P`\>

#### Returns

`ZswapLocalState`

***

### applyCollapsedUpdate()

```ts
applyCollapsedUpdate(update): ZswapLocalState;
```

올바른 업데이트인 경우, 압축된 머클 트리 업데이트를 현재 로컬 상태에 적용하고 포함된 인덱스를 건너뜁니다.

The general flow for usage if Alice is in state A, and wants to ask Bob how to reach the new state B, is:
 - Find where she left off – what's her firstFree?
 - Find out where she's going – ask for Bob's firstFree.
 - Find what contents she does care about – ask Bob for the filtered
   entries she want to include proper in her tree.
 - In order, of Merkle tree indices:
   - Insert (with `apply` offers Alice cares about).
   - Skip (with this method) sections Alice does not care about, obtaining
     the collapsed update covering the gap from Bob.
Note that `firstFree` is not included in the tree itself, and both ends of
updates *are* included.

#### Parameters

##### update

[`MerkleTreeCollapsedUpdate`](MerkleTreeCollapsedUpdate.md)

#### Returns

`ZswapLocalState`

***

### applyFailed()

```ts
applyFailed<P>(offer): ZswapLocalState;
```

실패했거나 폐기된 오퍼의 대기 중인 출력/소비를 로컬에서 되돌립니다.

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### offer

[`ZswapOffer`](ZswapOffer.md)\<`P`\>

#### Returns

`ZswapLocalState`

***

### clearPending()

```ts
clearPending(time): ZswapLocalState;
```

블록에 포함되지 않고 TTL이 경과한 대기 중인 출력/소비를 지웁니다.

TTL은 *블록 관점*이며 블록과 지갑 간에 지연이 있으므로, 여기에 전달하는 시간은 현재 시간이 아니라 지연 버퍼를 포함해야 합니다.

참고: 이 API 엔드포인트는 현재 작동하지 않으며 아무 작업도 수행하지 않습니다.

#### Parameters

##### time

`Date`

#### Returns

`ZswapLocalState`

***

### replayEvents()

```ts
replayEvents(secretKeys, events): ZswapLocalState;
```

관찰된 이벤트를 현재 로컬 상태에 리플레이합니다. 팔로우하는 체인에서 발생한 순서와 *동일한* 순서로 리플레이해야 합니다.

#### Parameters

##### secretKeys

[`ZswapSecretKeys`](ZswapSecretKeys.md)

##### events

[`Event`](Event.md)[]

#### Returns

`ZswapLocalState`

***

### replayEventsWithChanges()

```ts
replayEventsWithChanges(secretKeys, events): ZswapLocalStateWithChanges;
```

관찰된 이벤트를 현재 로컬 상태에 리플레이하고, 업데이트된 상태와 상태 변경 사항을 모두 반환합니다. 팔로우하는 체인에서 발생한 순서와 *동일한* 순서로 리플레이해야 합니다.

#### Parameters

##### secretKeys

[`ZswapSecretKeys`](ZswapSecretKeys.md)

##### events

[`Event`](Event.md)[]

#### Returns

[`ZswapLocalStateWithChanges`](ZswapLocalStateWithChanges.md)

***

### revertTransaction()

```ts
revertTransaction<S, P, B>(transaction): ZswapLocalState;
```

폐기된 트랜잭션의 모든 대기 중인 출력/소비를 로컬에서 되돌립니다.

전체 트랜잭션에 대해 [applyFailed](#applyfailed)와 동일하게 동작합니다.

#### Type Parameters

##### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

##### B

`B` *extends* [`Bindingish`](../type-aliases/Bindingish.md)

#### Parameters

##### transaction

[`Transaction`](Transaction.md)\<`S`, `P`, `B`\>

#### Returns

`ZswapLocalState`

***

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### spend()

```ts
spend(
   secretKeys, 
   coin, 
   segment, 
   ttl?): [ZswapLocalState, UnprovenInput];
```

특정 코인의 새 소비를 시작하고, 해당 [ZswapInput](ZswapInput.md)과 이 코인을 진행 중으로 표시한 업데이트된 상태를 출력합니다.

#### Parameters

##### secretKeys

[`ZswapSecretKeys`](ZswapSecretKeys.md)

##### coin

[`QualifiedShieldedCoinInfo`](../type-aliases/QualifiedShieldedCoinInfo.md)

##### segment

`undefined` | `number`

##### ttl?

`Date`

#### Returns

\[`ZswapLocalState`, [`UnprovenInput`](../type-aliases/UnprovenInput.md)\]

***

### spendFromOutput()

```ts
spendFromOutput(
   secretKeys, 
   coin, 
   segment, 
   output, 
   ttl?): [ZswapLocalState, UnprovenTransient];
```

아직 수신되지 않은 새 출력의 소비를 시작하고, 해당 [ZswapTransient](ZswapTransient.md)와 이 코인을 진행 중으로 표시한 업데이트된 상태를 출력합니다.

#### Parameters

##### secretKeys

[`ZswapSecretKeys`](ZswapSecretKeys.md)

##### coin

[`QualifiedShieldedCoinInfo`](../type-aliases/QualifiedShieldedCoinInfo.md)

##### segment

`undefined` | `number`

##### output

[`UnprovenOutput`](../type-aliases/UnprovenOutput.md)

##### ttl?

`Date`

#### Returns

\[`ZswapLocalState`, [`UnprovenTransient`](../type-aliases/UnprovenTransient.md)\]

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

### watchFor()

```ts
watchFor(coinPublicKey, coin): ZswapLocalState;
```

수신 예정 코인 목록에 코인을 추가합니다.

이 지갑을 위한 코인을 생성하는 출력이 감지를 위한 암호문을 포함하지 않는 경우 사용해야 합니다. 이 경우 지갑이 수신을 인지하려면 커밋먼트를 미리 알고 있어야 합니다.

#### Parameters

##### coinPublicKey

`string`

##### coin

[`ShieldedCoinInfo`](../type-aliases/ShieldedCoinInfo.md)

#### Returns

`ZswapLocalState`

***

### deserialize()

```ts
static deserialize(raw): ZswapLocalState;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`ZswapLocalState`
