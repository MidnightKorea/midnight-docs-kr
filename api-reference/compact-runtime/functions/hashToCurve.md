[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / hashToCurve

# Function: hashToCurve()

```ts
function hashToCurve<A>(rtType, x): JubjubPoint;
```

Compact 내장 `hash_to_curve` 함수

Compact에서 표현 가능한 임의의 값을 증명 시스템의 내장 곡선 위의
타원 곡선 점으로 매핑합니다.

출력은 그룹 기저 및 다른 출력에 대해 이산 로그가 알려지지 않도록
보장되지만, 유일성은 보장되지 않습니다(하나의 입력이 여러 출력에 대해
올바른 것으로 증명될 수 있음).

서로 다른 타입의 입력도 동일한 필드 정렬 바이너리 표현을 가지면
같은 출력을 가질 수 있습니다.

## Type Parameters

### A

`A`

## Parameters

### rtType

[`CompactType`](../interfaces/CompactType.md)\<`A`\>

### x

`A`

## Returns

[`JubjubPoint`](../interfaces/JubjubPoint.md)
