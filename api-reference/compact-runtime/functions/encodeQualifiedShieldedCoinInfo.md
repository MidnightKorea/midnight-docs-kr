[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / encodeQualifiedShieldedCoinInfo

# Function: encodeQualifiedShieldedCoinInfo()

```ts
function encodeQualifiedShieldedCoinInfo(coin): {
  color: Uint8Array;
  mt_index: bigint;
  nonce: Uint8Array;
  value: bigint;
};
```

[QualifiedShieldedCoinInfo](../type-aliases/QualifiedShieldedCoinInfo.md)를 Compact의 `QualifiedShieldedCoinInfo`
TypeScript 표현으로 인코딩합니다

## Parameters

### coin

[`QualifiedShieldedCoinInfo`](../type-aliases/QualifiedShieldedCoinInfo.md)

## Returns

```ts
{
  color: Uint8Array;
  mt_index: bigint;
  nonce: Uint8Array;
  value: bigint;
}
```

### color

```ts
color: Uint8Array;
```

### mt\_index

```ts
mt_index: bigint;
```

### nonce

```ts
nonce: Uint8Array;
```

### value

```ts
value: bigint;
```
