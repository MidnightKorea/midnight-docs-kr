[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactCellADT

# Type Alias: SparseCompactCellADT

```ts
type SparseCompactCellADT = {
  tag: "cell";
  valueType: SparseCompactValue;
};
```

Compact `Cell` ADT에서 모든 컨트랙트 참조의 위치를 나타내는 데이터 구조입니다.

## Properties

### tag

```ts
tag: "cell";
```

***

### valueType

```ts
valueType: SparseCompactValue;
```

외부 `Cell` ADT에 포함된 Compact 값에서 모든 컨트랙트 참조의 위치를 나타내는 데이터 구조입니다.
