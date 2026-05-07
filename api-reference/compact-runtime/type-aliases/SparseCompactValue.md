[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactValue

# Type Alias: SparseCompactValue

```ts
type SparseCompactValue = {
  descriptor: CompactType<unknown>;
  sparseType: SparseCompactType;
  tag: "compactValue";
};
```

Compact 값에서 모든 컨트랙트 참조의 위치를 나타내는 데이터 구조입니다.

## Properties

### descriptor

```ts
descriptor: CompactType<unknown>;
```

[AlignedValue](AlignedValue.md)를 동일한 값의 TypeScript 표현으로 변환하는 데 사용할 수 있는 디스크립터입니다.
이 디스크립터는 컨트랙트 주소를 포함하는 `struct` 또는 `Vector`만 디코딩합니다.

***

### sparseType

```ts
sparseType: SparseCompactType;
```

위 `descriptor`의 출력에 존재하는 컨트랙트 주소로 탐색하는 방법을 나타내는 데이터 구조입니다.

***

### tag

```ts
tag: "compactValue";
```
