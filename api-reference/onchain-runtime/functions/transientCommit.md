[**@midnight-ntwrk/onchain-runtime v3.0.0**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / transientCommit

# Function: transientCommit()

```ts
function transientCommit(
   align, 
   val, 
   opening): Value
```

**`Internal`**

일시적 커밋먼트 프리미티브의 내부 구현

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

If [val](transientCommit.md#val) does not have alignment [align](transientCommit.md#align), or
[opening](transientCommit.md#opening) 필드 원소를 인코딩하지 않은 경우
