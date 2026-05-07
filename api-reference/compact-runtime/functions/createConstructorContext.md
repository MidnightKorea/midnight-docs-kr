[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / createConstructorContext

# Function: createConstructorContext()

```ts
function createConstructorContext<PS>(initialPrivateState, coinPublicKey): ConstructorContext<PS>;
```

주어진 초기 프라이빗 상태와 빈 Zswap 로컬 상태로 새 [ConstructorContext](../interfaces/ConstructorContext.md)를 생성합니다.

## Type Parameters

### PS

`PS`

## Parameters

### initialPrivateState

`PS`

컨트랙트 생성자를 실행하는 데 사용할 프라이빗 상태입니다.

### coinPublicKey

컨트랙트를 실행하는 사용자의 Zswap 코인 공개 키입니다.

`string` | [`EncodedCoinPublicKey`](../interfaces/EncodedCoinPublicKey.md)

## Returns

[`ConstructorContext`](../interfaces/ConstructorContext.md)\<`PS`\>
