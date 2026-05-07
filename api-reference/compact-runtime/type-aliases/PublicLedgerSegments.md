[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / PublicLedgerSegments

# Type Alias: PublicLedgerSegments

```ts
type PublicLedgerSegments = {
  indices: Record<number, PublicLedgerSegments | SparseCompactADT>;
  tag: "publicLedgerArray";
};
```

주어진 원장 상태에서 모든 컨트랙트 참조의 위치를 나타내는 데이터 구조입니다.

## Properties

### indices

```ts
indices: Record<number, PublicLedgerSegments | SparseCompactADT>;
```

적당히 작은 원장 상태에서 레코드의 키는 원장 상태 내 ADT의 위치를 식별합니다. 예를 들어,
Compact 소스 파일에

```
contract C {};
struct Struct1 {
  a: Field;
  b: C;
}
ledger ls1: List[Field];
ledger ls2: List[C];
ledger ls3: Set[Struct1];
```

인덱스 레코드에는 키 `1`과 `2`가 포함됩니다. 원장 선언 `1`과 `2`에는 컨트랙트
참조가 포함되어 있지만 원장 선언 `0`(`List[Field]`)에는 포함되어 있지 않기 때문입니다.

그러나 원장 구현에는 StateValue.toArray가 생성하는 상태 배열의 고정 최대 길이가 있습니다.
주어진 상태의 항목 수가 최대값을 초과하면 StateValue.toArray가 중첩된 상태 배열을 생성하며,
각 내부 상태 배열은 최대값 이내입니다. 각 중첩 상태 배열에 대해 PublicLedgerSegments 객체를
가리키는 키가 인덱스 레코드에 있습니다.

***

### tag

```ts
tag: "publicLedgerArray";
```
