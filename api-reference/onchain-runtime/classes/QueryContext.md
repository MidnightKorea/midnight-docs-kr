[**@midnight-ntwrk/onchain-runtime v3.0.0**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / QueryContext

# Class: QueryContext

트랜잭션을 완전히 처리하는 데 필요한 정보를 제공하며,
트랜잭션의 나머지 부분에 대한 정보와 실행 시점의
체인 상태를 포함합니다.

## Constructors

### new QueryContext()

```ts
new QueryContext(state, address): QueryContext
```

컨트랙트의 주소와 현재 상태 값으로 기본 컨텍스트를 생성합니다

#### Parameters

##### state

[`ChargedState`](ChargedState.md)

##### address

`string`

#### Returns

[`QueryContext`](QueryContext.md)

## Properties

### address

```ts
readonly address: string;
```

컨트랙트의 주소

***

### block

```ts
block: CallContext;
```

컨트랙트가 접근할 수 있는 블록 수준 정보

***

### comIndices

```ts
readonly comIndices: Map<string, bigint>;
```

컨트랙트가 접근할 수 있는 커밋먼트 인덱스 맵으로, 주로
[qualify](QueryContext.md#qualify)를 통해 사용합니다

***

### effects

```ts
effects: Effects;
```

이 컨텍스트에 대한 실행 중 발생한 효과로,
[Transcript](../type-aliases/Transcript.md)에 선언된 것과 일치해야 합니다

***

### state

```ts
readonly state: ChargedState;
```

컨텍스트에 보유된 현재 컨트랙트 상태

## Methods

### insertCommitment()

```ts
insertCommitment(comm, index): QueryContext
```

지정된 코인 커밋먼트를 특정 인덱스에서 접근 가능하도록 등록합니다.
컨트랙트 내에서 코인을 수신할 때 나중에 사용하기 위해
인덱스를 기록할 용도입니다

#### Parameters

##### comm

`string`

##### index

`bigint`

#### Returns

[`QueryContext`](QueryContext.md)

***

### qualify()

```ts
qualify(coin): undefined | Value
```

**`Internal`**

[insertCommitment](QueryContext.md#insertcommitment)의 내부 대응 메서드로, 삽입된 커밋먼트를 사용하여
인코딩된 [ShieldedCoinInfo](../type-aliases/ShieldedCoinInfo.md)를 인코딩된 [QualifiedShieldedCoinInfo](../type-aliases/QualifiedShieldedCoinInfo.md)로 업그레이드합니다

#### Parameters

##### coin

[`Value`](../type-aliases/Value.md)

#### Returns

`undefined` \| [`Value`](../type-aliases/Value.md)

***

### query()

```ts
query(
   ops, 
   cost_model, 
   gas_limit?): QueryResults
```

gather 모드에서 일련의 연산을 실행하고 gather 결과를 반환합니다.

#### Parameters

##### ops

[`Op`](../type-aliases/Op.md)\<`null`\>[]

##### cost\_model

[`CostModel`](CostModel.md)

##### gas\_limit?

[`RunningCost`](../type-aliases/RunningCost.md)

#### Returns

[`QueryResults`](QueryResults.md)

***

### runTranscript()

```ts
runTranscript(transcript, cost_model): QueryContext
```

현재 쿼리 컨텍스트에 대해 검증 모드로 트랜스크립트를 실행하고,
실행 후의 [state](QueryContext.md#state-1)와 [effects](QueryContext.md#effects)가 포함된
새 쿼리 컨텍스트를 출력합니다.

#### Parameters

##### transcript

[`Transcript`](../type-aliases/Transcript.md)\<[`AlignedValue`](../type-aliases/AlignedValue.md)\>

##### cost\_model

[`CostModel`](CostModel.md)

#### Returns

[`QueryContext`](QueryContext.md)

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

### toVmStack()

```ts
toVmStack(): VmStack
```

QueryContext를 [VmStack](VmStack.md)으로 변환합니다.

#### Returns

[`VmStack`](VmStack.md)
