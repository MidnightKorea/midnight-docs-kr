[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / persistentCommit

# Function: persistentCommit()

```ts
function persistentCommit(
   align, 
   val, 
   opening): Value;
```

**`Internal`**

영속 커밋먼트 프리미티브의 내부 구현입니다.

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

If [val](#persistentcommit) does not have alignment [align](#persistentcommit),
[opening](#persistentcommit) does not encode a 32-byte bytestring, or any component has a
compress alignment
