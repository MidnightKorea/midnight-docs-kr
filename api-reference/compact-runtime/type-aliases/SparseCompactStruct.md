[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactStruct

# Type Alias: SparseCompactStruct

```ts
type SparseCompactStruct = {
  elements: Record<string, SparseCompactType>;
  tag: "struct";
};
```

Compact 구조체에서 컨트랙트 참조의 위치를 나타내는 데이터 구조입니다.

## Properties

### elements

```ts
elements: Record<string, SparseCompactType>;
```

Compact 구조체의 요소에서 컨트랙트 참조의 위치를 나타내는 데이터 구조입니다.
레코드의 키는 컨트랙트 참조를 포함하는 Compact 구조체의 필드에 대응합니다.
레코드의 키를 사용하여 해당 CompactStruct의 요소를 탐색합니다.

***

### tag

```ts
tag: "struct";
```
