[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CallContext

# Type Alias: CallContext

```ts
type CallContext = {
  balance: Map<TokenType, bigint>;
  caller?: PublicAddress;
  comIndices: Map<CoinCommitment, number>;
  lastBlockTime: bigint;
  ownAddress: ContractAddress;
  parentBlockHash: string;
  secondsSinceEpoch: bigint;
  secondsSinceEpochErr: number;
};
```

VM에 제공되는 호출의 컨텍스트 정보입니다.

## Properties

### balance

```ts
balance: Map<TokenType, bigint>;
```

호출 시 호출된 컨트랙트가 보유한 잔액입니다.

***

### caller?

```ts
optional caller: PublicAddress;
```

엔티티를 식별하는 공개 주소입니다.

***

### comIndices

```ts
comIndices: Map<CoinCommitment, number>;
```

컨트랙트가 접근할 수 있는 커밋먼트 인덱스 맵입니다.

***

### lastBlockTime

```ts
lastBlockTime: bigint;
```

이전 블록의 [secondsSinceEpoch](#secondssinceepoch)

***

### ownAddress

```ts
ownAddress: ContractAddress;
```

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
