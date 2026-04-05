[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / LedgerState

# Class: LedgerState

Midnight 원장의 상태입니다.

## Constructors

### Constructor

```ts
new LedgerState(network_id, zswap): LedgerState;
```

빈 컨트랙트 집합으로 Zswap 상태에서 초기화합니다.

#### Parameters

##### network\_id

`string`

##### zswap

[`ZswapChainState`](ZswapChainState.md)

#### Returns

`LedgerState`

## Properties

### blockRewardPool

```ts
readonly blockRewardPool: bigint;
```

아직 보상되지 않은 네이티브 토큰의 남은 공급량입니다.

***

### dust

```ts
readonly dust: DustState;
```

Dust 하위 시스템의 상태입니다.

***

### lockedPool

```ts
readonly lockedPool: bigint;
```

잠긴 Night 풀의 남은 크기입니다.

***

### parameters

```ts
parameters: LedgerParameters;
```

원장의 매개변수입니다.

***

### reservePool

```ts
readonly reservePool: bigint;
```

예비 Night 풀의 크기입니다.

***

### utxo

```ts
readonly utxo: UtxoState;
```

존재하는 비차폐 UTXO입니다.

***

### zswap

```ts
readonly zswap: ZswapChainState;
```

원장 상태의 Zswap 부분입니다.

## Methods

### apply()

```ts
apply(transaction, context): [LedgerState, TransactionResult];
```

[Transaction](Transaction.md)을 적용합니다.

#### Parameters

##### transaction

[`VerifiedTransaction`](VerifiedTransaction.md)

##### context

[`TransactionContext`](TransactionContext.md)

#### Returns

\[`LedgerState`, [`TransactionResult`](TransactionResult.md)\]

***

### applySystemTx()

```ts
applySystemTx(transaction, tblock): [LedgerState, Event[]];
```

이 원장 상태에 시스템 트랜잭션을 적용합니다.

#### Parameters

##### transaction

[`SystemTransaction`](SystemTransaction.md)

##### tblock

`Date`

#### Returns

\[`LedgerState`, [`Event`](Event.md)[]\]

***

### bridgeReceiving()

#### Call Signature

```ts
bridgeReceiving(recipient): bigint;
```

수령인에게 지급해야 하고 청구 가능한 브릿지된 Night의 양입니다.

##### Parameters

###### recipient

`string`

##### Returns

`bigint`

#### Call Signature

```ts
bridgeReceiving(recipient): bigint;
```

수령인에게 지급해야 하고 청구 가능한 브릿지된 Night의 양입니다.

##### Parameters

###### recipient

`string`

##### Returns

`bigint`

***

### index()

```ts
index(address): undefined | ContractState;
```

주어진 컨트랙트 주소로 컨트랙트 상태 맵을 인덱싱합니다.

#### Parameters

##### address

`string`

#### Returns

`undefined` \| [`ContractState`](ContractState.md)

***

### postBlockUpdate()

```ts
postBlockUpdate(
   tblock, 
   detailedBlockFullness?, 
   overallBlockFullness?): LedgerState;
```

블록 후 업데이트를 수행합니다. 상태 변경당 한 번만 필요한 분할 상환 방식의 장부 관리를 합니다.

일반적으로 `postBlockUpdate`는 (시스템) 트랜잭션 적용 후에 실행해야 합니다.

#### Parameters

##### tblock

`Date`

##### detailedBlockFullness?

[`NormalizedCost`](../type-aliases/NormalizedCost.md)

##### overallBlockFullness?

`number`

#### Returns

`LedgerState`

***

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### testingDistributeNight()

```ts
testingDistributeNight(
   recipient, 
   amount, 
   tblock): LedgerState;
```

지정된 양의 Night을 수령인 주소로 배분합니다.
테스트 목적으로만 사용해야 합니다.

#### Parameters

##### recipient

`string`

##### amount

`bigint`

##### tblock

`Date`

#### Returns

`LedgerState`

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

### treasuryBalance()

```ts
treasuryBalance(token_type): bigint;
```

특정 토큰 유형에 대한 재무부 잔액을 조회합니다.

#### Parameters

##### token\_type

[`TokenType`](../type-aliases/TokenType.md)

#### Returns

`bigint`

***

### unclaimedBlockRewards()

```ts
unclaimedBlockRewards(recipient): bigint;
```

수령인에게 지급해야 하고 청구 가능한 블록 보상의 양입니다.

#### Parameters

##### recipient

`string`

#### Returns

`bigint`

***

### updateIndex()

```ts
updateIndex(
   address, 
   state, 
   balance): LedgerState;
```

[ChargedState](ChargedState.md)로부터 주어진 컨트랙트 주소의 상태를 설정합니다.

#### Parameters

##### address

`string`

##### state

[`ChargedState`](ChargedState.md)

##### balance

`Map`\<[`TokenType`](../type-aliases/TokenType.md), `bigint`\>

#### Returns

`LedgerState`

***

### blank()

```ts
static blank(network_id): LedgerState;
```

완전히 빈 상태입니다.

#### Parameters

##### network\_id

`string`

#### Returns

`LedgerState`

***

### deserialize()

```ts
static deserialize(raw): LedgerState;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`LedgerState`
