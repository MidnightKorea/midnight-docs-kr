[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ContractReferenceLocations

# Type Alias: ContractReferenceLocations

```ts
type ContractReferenceLocations = 
  | EmptyPublicLedger
  | PublicLedgerSegments;
```

주어진 원장 상태에서 모든 컨트랙트 참조의 위치를 나타내는 데이터 구조입니다. [EmptyPublicLedger](EmptyPublicLedger.md)이면
원장 상태에 컨트랙트 참조가 없습니다. [PublicLedgerSegments](PublicLedgerSegments.md)이면 컨트랙트 참조가
존재하며 [contractDependencies](../functions/contractDependencies.md)를 사용하여 추출할 수 있습니다.
