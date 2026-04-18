[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / persistentHash

# Function: persistentHash()

```ts
function persistentHash(align, val): Value;
```

**`Internal`**

영속 해시 프리미티브의 내부 구현입니다.

## Parameters

### align

[`Alignment`](../type-aliases/Alignment.md)

### val

[`Value`](../type-aliases/Value.md)

## Returns

[`Value`](../type-aliases/Value.md)

## Throws

If [val](#persistenthash) does not have alignment [align](#persistenthash), or any
component has a compress alignment
