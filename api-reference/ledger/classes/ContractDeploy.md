[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / ContractDeploy

# Class: ContractDeploy

컨트랙트 배포 세그먼트로, 아직 존재하지 않는 경우 새 컨트랙트 주소 생성을 지시합니다.

## Constructors

### Constructor

```ts
new ContractDeploy(initial_state): ContractDeploy;
```

임의의 컨트랙트 상태에 대한 배포를 생성합니다.

배포와 해당 주소는 무작위로 결정됩니다.

#### Parameters

##### initial\_state

[`ContractState`](ContractState.md)

#### Returns

`ContractDeploy`

## Properties

### address

```ts
readonly address: string;
```

이 배포가 생성하려는 주소입니다.

***

### initialState

```ts
readonly initialState: ContractState;
```

## Methods

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`
