[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactSetADT

# Type Alias: SparseCompactSetADT

```ts
type SparseCompactSetADT = {
  tag: "set";
  valueType: SparseCompactValue;
};
```

Compact `Set` ADT에서 모든 컨트랙트 참조의 위치를 나타내는 데이터 구조입니다.

## Properties

### tag

```ts
tag: "set";
```

***

### valueType

```ts
valueType: SparseCompactValue;
```

외부 `Set` ADT의 Compact 값에서 모든 컨트랙트 참조의 위치를 나타내는 데이터 구조입니다.
