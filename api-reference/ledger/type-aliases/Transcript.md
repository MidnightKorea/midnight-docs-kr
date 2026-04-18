[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / Transcript

# Type Alias: Transcript\<R\>

```ts
type Transcript<R> = {
  effects: Effects;
  gas: RunningCost;
  program: Op<R>[];
};
```

A transcript of operations, to be recorded in a transaction

## Type Parameters

### R

`R`

## Properties

### effects

```ts
effects: Effects;
```

실행 전에 검증되는 트랜스크립트의 효과이며,
must match those constructed by [program](#program)

***

### gas

```ts
gas: RunningCost;
```

The execution budget for this transcript, which [program](#program) must not
exceed

***

### program

```ts
program: Op<R>[];
```

이 트랜스크립트가 캡처한 연산 시퀀스입니다.
