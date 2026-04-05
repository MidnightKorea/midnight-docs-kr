[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / persistentCommit

# Function: persistentCommit()

```ts
function persistentCommit<A>(
   rtType, 
   value, 
   opening): Uint8Array;
```

Compact 내장 `persistent_commit` 함수

Compact에서 표현 가능한 임의의 값과 256비트 바이트열 오프닝으로부터
256비트 바이트열을 생성하는 비회로 최적화 커밋먼트 함수입니다.
업그레이드 간 영속성이 보장됩니다. 상태 데이터를 도출하는 데 사용해야 하며,
가능하면 일관성 검사에는 사용하지 않아야 합니다.

`Opaque` 요소가 포함된 데이터는 런타임 오류를 발생시킬 *수* 있으며,
일관된 표현으로 신뢰할 수 없습니다.

## Type Parameters

### A

`A`

## Parameters

### rtType

[`CompactType`](../interfaces/CompactType.md)\<`A`\>

### value

`A`

### opening

`Uint8Array`

## Returns

`Uint8Array`

## Throws

`rtType`이 Compact 'Opaque' 타입을 포함하는 타입을 인코딩하거나
`opening`이 32바이트가 아닌 경우
