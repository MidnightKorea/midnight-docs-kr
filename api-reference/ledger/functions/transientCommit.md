[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / transientCommit

# Function: transientCommit()

```ts
function transientCommit(
   align, 
   val, 
   opening): Value;
```

**`Internal`**

트랜지언트 커밋먼트 프리미티브의 내부 구현입니다.

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

If [val](#transientcommit) does not have alignment [align](#transientcommit), or
[opening](#transientcommit) does not encode a field element
