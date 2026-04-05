[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / transientHash

# Function: transientHash()

```ts
function transientHash<A>(rtType, value): bigint;
```

Compact 내장 `transient_hash` 함수

임의의 데이터를 필드 요소로 압축하는 회로 효율적 압축 함수입니다.
업그레이드 간 영속성이 보장되지 않습니다. 상태 데이터를 도출하는 데
사용해서는 안 되지만, 일관성 검사에는 사용할 수 있습니다.

## Type Parameters

### A

`A`

## Parameters

### rtType

[`CompactType`](../interfaces/CompactType.md)\<`A`\>

### value

`A`

## Returns

`bigint`
