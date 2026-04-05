[**@midnight-ntwrk/onchain-runtime v3.0.0**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / persistentCommit

# Function: persistentCommit()

```ts
function persistentCommit(
   align, 
   val, 
   opening): Value
```

**`Internal`**

영구 커밋먼트 프리미티브의 내부 구현

## Parameters

### align

[`Alignment`](../type-aliases/Alignment.md)

### val

[`Value`](../type-aliases/Value.md)

### opening

[`Value`](../type-aliases/Value.md)

## Returns

[`Value`](../type-aliases/Value.md)

## Throws

If [val](persistentCommit.md#val) does not have alignment [align](persistentCommit.md#align),
[opening](persistentCommit.md#opening) does not encode a 32-byte bytestring, or any component has a
compress alignment
