[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / signData

# Function: signData()

```ts
function signData(key, data): string;
```

주어진 서명 키로 임의의 데이터에 서명합니다.

WARNING: Do not expose access to this function for valuable keys for data
that is not strictly controlled!

## Parameters

### key

`string`

### data

`Uint8Array`

## Returns

`string`
