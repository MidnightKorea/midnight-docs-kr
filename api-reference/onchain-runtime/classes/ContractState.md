[**@midnight-ntwrk/onchain-runtime v3.0.0**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / ContractState

# Class: ContractState

컨트랙트의 상태로, 주로 컨트랙트가 직접 접근할 수 있는 [data](ContractState.md#data)와
호출 가능한 [ContractOperation](ContractOperation.md) 맵으로 구성됩니다. 맵의 키는
[operations](ContractState.md#operations)로 접근할 수 있고, 개별 연산은
[operation](ContractState.md#operation)으로 조회하거나 [setOperation](ContractState.md#setoperation)으로
설정할 수 있습니다.

## Constructors

### new ContractState()

```ts
new ContractState(): ContractState
```

빈 컨트랙트 상태를 생성합니다

#### Returns

[`ContractState`](ContractState.md)

## Properties

### balance

```ts
balance: Map<TokenType, bigint>;
```

이 컨트랙트가 보유한 공개 잔액

***

### data

```ts
data: ChargedState;
```

컨트랙트 기본 상태의 현재 값

***

### maintenanceAuthority

```ts
maintenanceAuthority: ContractMaintenanceAuthority;
```

이 컨트랙트에 연결된 유지보수 authority

## Methods

### operation()

```ts
operation(operation): undefined | ContractOperation
```

특정 진입점 이름에 해당하는 연산을 가져옵니다

#### Parameters

##### operation

`string` | `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`undefined` \| [`ContractOperation`](ContractOperation.md)

***

### operations()

```ts
operations(): (string | Uint8Array<ArrayBufferLike>)[]
```

이 컨트랙트에 현재 등록된 진입점 목록을 반환합니다

#### Returns

(`string` \| `Uint8Array`\<`ArrayBufferLike`\>)[]

***

### query()

```ts
query(query, cost_model): GatherResult[]
```

현재 상태에 대해 일련의 연산을 실행하고 결과를 반환합니다

#### Parameters

##### query

[`Op`](../type-aliases/Op.md)\<`null`\>[]

##### cost\_model

[`CostModel`](CostModel.md)

#### Returns

[`GatherResult`](../type-aliases/GatherResult.md)[]

***

### serialize()

```ts
serialize(): Uint8Array
```

#### Returns

`Uint8Array`

***

### setOperation()

```ts
setOperation(operation, value): void
```

특정 진입점 이름에 지정된 연산을 설정합니다

#### Parameters

##### operation

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### value

[`ContractOperation`](ContractOperation.md)

#### Returns

`void`

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
static deserialize(raw): ContractState
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

[`ContractState`](ContractState.md)
