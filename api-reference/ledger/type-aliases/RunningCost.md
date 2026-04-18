[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / RunningCost

# Type Alias: RunningCost

```ts
type RunningCost = {
  bytesDeleted: bigint;
  bytesWritten: bigint;
  computeTime: bigint;
  readTime: bigint;
};
```

A running tally of synthetic resource costs.

## Properties

### bytesDeleted

```ts
bytesDeleted: bigint;
```

(모델링된) 삭제된 바이트 수입니다.

***

### bytesWritten

```ts
bytesWritten: bigint;
```

(모델링된) 기록된 바이트 수입니다.

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
