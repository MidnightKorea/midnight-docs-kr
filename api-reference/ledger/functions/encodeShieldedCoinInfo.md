[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / encodeShieldedCoinInfo

# Function: encodeShieldedCoinInfo()

```ts
function encodeShieldedCoinInfo(coin): {
  color: Uint8Array;
  nonce: Uint8Array;
  value: bigint;
};
```

[ShieldedCoinInfo](../type-aliases/ShieldedCoinInfo.md)를 Compact의 `ShieldedCoinInfo` TypeScript로 인코딩합니다.
representation

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
