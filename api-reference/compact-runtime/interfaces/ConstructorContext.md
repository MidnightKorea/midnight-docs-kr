[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ConstructorContext

# Interface: ConstructorContext\<PS\>

컨트랙트의 생성자에 전달됩니다. 컨트랙트의 초기 원장 상태를 계산하는 데 사용합니다.

## Type Parameters

### PS

`PS` = `any`

## Properties

### initialPrivateState

```ts
initialPrivateState: PS;
```

컨트랙트 생성자를 실행하는 데 사용할 프라이빗 상태입니다.

***

### initialZswapLocalState

```ts
initialZswapLocalState: EncodedZswapLocalState;
```

컨트랙트 생성자를 실행하는 데 사용할 초기(일반적으로 비어 있는) Zswap 로컬 상태입니다.
