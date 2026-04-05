[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / CallContext

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

호출 시점에 호출된 컨트랙트가 보유한 잔액입니다.

***

### caller?

```ts
optional caller: PublicAddress;
```

A public address identifying an entity.

***

### comIndices

```ts
comIndices: Map<CoinCommitment, number>;
```

컨트랙트에서 접근 가능한 커밋먼트 인덱스 맵입니다.

***

### lastBlockTime

```ts
lastBlockTime: bigint;
```

The [secondsSinceEpoch](#secondssinceepoch) of the previous block

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

The hash of the block prior to this transaction, as a hex-encoded string

***

### secondsSinceEpoch

```ts
secondsSinceEpoch: bigint;
```

The seconds since the UNIX epoch that have elapsed

***

### secondsSinceEpochErr

```ts
secondsSinceEpochErr: number;
```

The maximum error on [secondsSinceEpoch](#secondssinceepoch) that should occur, as a
positive seconds value
