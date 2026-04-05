[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / ErasedTransactionResult

# Type Alias: ErasedTransactionResult

```ts
type ErasedTransactionResult = {
  successfulSegments?: Map<number, boolean>;
  type: "success" | "partialSuccess" | "failure";
};
```

오류 메시지 없는 트랜잭션 적용 결과 상태입니다.

## Properties

### successfulSegments?

```ts
optional successfulSegments: Map<number, boolean>;
```

***

### type

```ts
type: "success" | "partialSuccess" | "failure";
```
