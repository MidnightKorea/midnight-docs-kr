[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / emptyZswapLocalState

# Function: emptyZswapLocalState()

```ts
function emptyZswapLocalState(coinPublicKey): EncodedZswapLocalState;
```

주어진 코인 공개 키로 새 [EncodedZswapLocalState](../interfaces/EncodedZswapLocalState.md)를 생성합니다. 결과는
[ConstructorContext](../interfaces/ConstructorContext.md)를 만드는 데 사용할 수 있습니다.

## Parameters

### coinPublicKey

회로를 실행하는 사용자의 Zswap 코인 공개 키입니다.

`string` | [`EncodedCoinPublicKey`](../interfaces/EncodedCoinPublicKey.md)

## Returns

[`EncodedZswapLocalState`](../interfaces/EncodedZswapLocalState.md)
