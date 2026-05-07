[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / RunningCost

# Type Alias: RunningCost

```ts
type RunningCost = {
  bytesDeleted: bigint;
  bytesWritten: bigint;
  computeTime: bigint;
  readTime: bigint;
};
```

합성 리소스 비용의 누적 합계입니다.

## Properties

### bytesDeleted

```ts
bytesDeleted: bigint;
```

삭제된 (모델링된) 바이트 수입니다.

***

### bytesWritten

```ts
bytesWritten: bigint;
```

기록된 (모델링된) 바이트 수입니다.

***

### computeTime

```ts
computeTime: bigint;
```

단일 스레드 연산에 소요된 (모델링된) 시간으로, 피코초 단위입니다.

***

### readTime

```ts
readTime: bigint;
```

디스크 읽기에 소요된 (모델링된) 시간으로, 피코초 단위입니다.
