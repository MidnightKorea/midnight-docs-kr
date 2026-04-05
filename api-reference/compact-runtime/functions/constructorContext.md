[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / constructorContext

# Function: constructorContext()

```ts
function constructorContext<T>(initialPrivateState, coinPublicKey): ConstructorContext<T>;
```

주어진 초기 프라이빗 상태와 빈 Zswap 로컬 상태로 새 [ConstructorContext](../interfaces/ConstructorContext.md)를 생성합니다.

## Type Parameters

### T

`T`

## Parameters

### initialPrivateState

`T`

컨트랙트 생성자를 실행하는 데 사용할 프라이빗 상태입니다.

### coinPublicKey

`string`

컨트랙트를 실행하는 사용자의 Zswap 코인 공개 키입니다.

## Returns

[`ConstructorContext`](../interfaces/ConstructorContext.md)\<`T`\>
