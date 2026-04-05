[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / encodeShieldedCoinInfo

# Function: encodeShieldedCoinInfo()

```ts
function encodeShieldedCoinInfo(coin): {
  color: Uint8Array;
  nonce: Uint8Array;
  value: bigint;
};
```

[ShieldedCoinInfo](../type-aliases/ShieldedCoinInfo.md)를 Compact의 `ShieldedCoinInfo` TypeScript
표현으로 인코딩합니다

## Parameters

### coin

[`ShieldedCoinInfo`](../type-aliases/ShieldedCoinInfo.md)

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
