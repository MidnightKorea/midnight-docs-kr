[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ConstructorResult

# Interface: ConstructorResult\<PS\>

컨트랙트 생성자 실행의 결과입니다.

## Type Parameters

### PS

`PS` = `any`

## Properties

### currentContractState

```ts
currentContractState: ContractState;
```

컨트랙트의 초기 원장(공개 상태)입니다.

***

### currentPrivateState

```ts
currentPrivateState: PS;
```

컨트랙트의 초기 프라이빗 상태입니다. [ConstructorContext](ConstructorContext.md)에 전달된 프라이빗 상태와 다를 수 있습니다.

***

### currentZswapLocalState

```ts
currentZswapLocalState: EncodedZswapLocalState;
```

컨트랙트의 초기 Zswap 로컬 상태입니다. 컨트랙트 생성자에서 생성된 출력을 포함할 수 있습니다.
