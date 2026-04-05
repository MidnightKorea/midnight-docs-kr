[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / NormalizedCost

# Type Alias: NormalizedCost

```ts
type NormalizedCost = {
  blockUsage: number;
  bytesChurned: number;
  bytesWritten: number;
  computeTime: number;
  readTime: number;
};
```

A normalized form of [SyntheticCost](SyntheticCost.md).

## Properties

### blockUsage

```ts
blockUsage: number;
```

사용된 블록 공간 바이트 수입니다.

***

### bytesChurned

```ts
bytesChurned: number;
```

(모델링된) 임시 기록 또는 덮어쓰기된 바이트 수입니다.

***

### bytesWritten

```ts
bytesWritten: number;
```

The net number of (modelled) bytes written, i.e. max(0, absolute written bytes less deleted bytes).

***

### computeTime

```ts
computeTime: number;
```

The amount of (modelled) time spent in single-threaded compute, measured in picoseconds.

***

### readTime

```ts
readTime: number;
```

The amount of (modelled) time spent reading from disk, measured in picoseconds.
