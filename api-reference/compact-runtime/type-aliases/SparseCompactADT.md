[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactADT

# Type Alias: SparseCompactADT

```ts
type SparseCompactADT = 
  | SparseCompactCellADT
  | SparseCompactArrayLikeADT
  | SparseCompactMapADT;
```

Compact `Cell`, `List`, `Set` 또는 `Map` ADT에서 컨트랙트 참조 위치를 설명하는 구별된 합집합입니다.
