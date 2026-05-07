[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / Transcript

# Type Alias: Transcript\<R\>

```ts
type Transcript<R> = {
  effects: Effects;
  gas: RunningCost;
  program: Op<R>[];
};
```

트랜잭션에 기록될 연산의 트랜스크립트

## Type Parameters

### R

`R`

## Properties

### effects

```ts
effects: Effects;
```

실행 전에 검사되는 트랜스크립트의 효과로,
[program](#program)이 구성한 것과 일치해야 합니다

***

### gas

```ts
gas: RunningCost;
```

이 트랜스크립트의 실행 예산으로, [program](#program)이
초과해서는 안 됩니다

***

### program

```ts
program: Op<R>[];
```

이 트랜스크립트가 캡처한 연산의 시퀀스
