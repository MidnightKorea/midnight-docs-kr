[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / transientCommit

# Function: transientCommit()

```ts
function transientCommit<A>(
   rtType, 
   value, 
   opening): bigint;
```

Compact 내장 `transient_commit` 함수

Compact에서 표현 가능한 임의의 값과 필드 요소 커밋먼트 오프닝으로부터
필드 요소를 생성하는 회로 효율적 커밋먼트 함수입니다.
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

### opening

`bigint`

## Returns

`bigint`

## Throws

`opening`이 필드 요소 범위를 벗어나는 경우
