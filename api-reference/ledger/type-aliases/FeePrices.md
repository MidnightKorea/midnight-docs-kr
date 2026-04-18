[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / FeePrices

# Type Alias: FeePrices

```ts
type FeePrices = {
  blockUsageFactor: number;
  computeFactor: number;
  overallPrice: number;
  readFactor: number;
  writeFactor: number;
};
```

트랜잭션 수수료 가격입니다.

## Properties

### blockUsageFactor

```ts
blockUsageFactor: number;
```

블록 사용량의 가격 인수입니다.

***

### computeFactor

```ts
computeFactor: number;
```

단일 스레드 연산에 소비된 시간의 가격 인수입니다.

***

### overallPrice

```ts
overallPrice: number;
```

평균 비용 차원에서 전체 블록의 총 가격입니다.

***

### readFactor

```ts
readFactor: number;
```

디스크 읽기에 소비된 시간의 가격 인수입니다.

***

### writeFactor

```ts
writeFactor: number;
```

디스크 쓰기에 소비된 시간의 가격 인수입니다.
