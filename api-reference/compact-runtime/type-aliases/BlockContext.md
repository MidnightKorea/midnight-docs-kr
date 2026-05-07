[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / BlockContext

# Type Alias: BlockContext

```ts
type BlockContext = {
  lastBlockTime: bigint;
  parentBlockHash: string;
  secondsSinceEpoch: bigint;
  secondsSinceEpochErr: number;
};
```

[CallContext](CallContext.md)에 전달되는 블록 관련 컨텍스트 정보입니다.

## Properties

### lastBlockTime

```ts
lastBlockTime: bigint;
```

이전 블록의 [secondsSinceEpoch](#secondssinceepoch)

***

### parentBlockHash

```ts
parentBlockHash: string;
```

이 트랜잭션 이전 블록의 해시로, 16진수 인코딩된 문자열

***

### secondsSinceEpoch

```ts
secondsSinceEpoch: bigint;
```

경과한 UNIX 에포크 이후 초

***

### secondsSinceEpochErr

```ts
secondsSinceEpochErr: number;
```

[secondsSinceEpoch](#secondssinceepoch)에서 발생할 수 있는 최대 오차로,
양의 초 단위 값
