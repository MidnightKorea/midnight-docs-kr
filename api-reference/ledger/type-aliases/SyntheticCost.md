[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / SyntheticCost

# Type Alias: SyntheticCost

```ts
type SyntheticCost = {
  blockUsage: bigint;
  bytesChurned: bigint;
  bytesWritten: bigint;
  computeTime: bigint;
  readTime: bigint;
};
```

A modelled cost of a transaction or block.

## Properties

### blockUsage

```ts
blockUsage: bigint;
```

사용된 블록 공간 바이트 수입니다.

***

### bytesChurned

```ts
bytesChurned: bigint;
```

(모델링된) 임시 기록 또는 덮어쓰기된 바이트 수입니다.

***

### bytesWritten

```ts
bytesWritten: bigint;
```

The net number of (modelled) bytes written, i.e. max(0, absolute written bytes less deleted bytes).

***

### computeTime

```ts
computeTime: bigint;
```

The amount of (modelled) time spent in single-threaded compute, measured in picoseconds.

***

### readTime

```ts
readTime: bigint;
```

The amount of (modelled) time spent reading from disk, measured in picoseconds.
