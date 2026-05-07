[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactListADT

# Type Alias: SparseCompactListADT

```ts
type SparseCompactListADT = {
  tag: "list";
  valueType: SparseCompactValue;
};
```

Compact `List` ADT에서 모든 컨트랙트 참조의 위치를 나타내는 데이터 구조입니다.

## Properties

### tag

```ts
tag: "list";
```

***

### valueType

```ts
valueType: SparseCompactValue;
```

외부 `List` ADT의 Compact 값에서 모든 컨트랙트 참조의 위치를 나타내는 데이터 구조입니다.
