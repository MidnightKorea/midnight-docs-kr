[**@midnight-ntwrk/compact-runtime v0.9.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / encodeCoinInfo

# Function: encodeCoinInfo()

```ts
function encodeCoinInfo(coin): {
  color: Uint8Array;
  nonce: Uint8Array;
  value: bigint;
};
```

[CoinInfo](../type-aliases/CoinInfo.md)를 Compact의 `CoinInfo` TypeScript
표현으로 인코딩합니다

## Parameters

### coin

[`CoinInfo`](../type-aliases/CoinInfo.md)

## Returns

```ts
{
  color: Uint8Array;
  nonce: Uint8Array;
  value: bigint;
}
```

### color

```ts
color: Uint8Array;
```

### nonce

```ts
nonce: Uint8Array;
```

### value

```ts
value: bigint;
```
