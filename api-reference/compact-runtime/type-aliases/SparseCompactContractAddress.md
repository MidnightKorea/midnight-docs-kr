[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / SparseCompactContractAddress

# Type Alias: SparseCompactContractAddress

```ts
type SparseCompactContractAddress = {
  tag: "contractAddress";
};
```

현재 탐색 중인 CompactValue가 컨트랙트 참조임을 나타내는 데이터 구조입니다.
이 타입이 인식되면 현재 CompactValue는 [ContractAddress](ContractAddress.md)여야 하며,
해당 주소가 의존성 집합에 추가됩니다.

## Properties

### tag

```ts
tag: "contractAddress";
```
