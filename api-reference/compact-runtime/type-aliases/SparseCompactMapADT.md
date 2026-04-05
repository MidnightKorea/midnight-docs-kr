[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactMapADT

# Type Alias: SparseCompactMapADT

```ts
type SparseCompactMapADT = {
  keyType?: SparseCompactValue;
  tag: "map";
  valueType?:   | SparseCompactADT
     | SparseCompactValue;
};
```

Compact `Map` ADT에서 모든 컨트랙트 참조의 위치를 나타내는 데이터 구조입니다.

## Properties

### keyType?

```ts
optional keyType: SparseCompactValue;
```

외부 `Map` ADT의 키인 Compact 값에서 모든 컨트랙트 참조의 위치를
나타내는 데이터 구조입니다.

***

### tag

```ts
tag: "map";
```

***

### valueType?

```ts
optional valueType: 
  | SparseCompactADT
  | SparseCompactValue;
```

외부 `Map` ADT의 값인 Compact 엔티티에서 모든 컨트랙트 참조의 위치를
나타내는 데이터 구조입니다. `Map` ADT의 값은 Compact 값 또는 다른 `Map` ADT일 수 있으므로
해당 데이터 구조의 합집합을 취합니다.
