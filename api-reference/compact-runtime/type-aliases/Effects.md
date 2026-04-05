[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / Effects

# Type Alias: Effects

```ts
type Effects = {
  claimedContractCalls: [bigint, ContractAddress, string, Fr][];
  claimedNullifiers: Nullifier[];
  claimedShieldedReceives: CoinCommitment[];
  claimedShieldedSpends: CoinCommitment[];
  claimedUnshieldedSpends: Map<[TokenType, PublicAddress], bigint>;
  shieldedMints: Map<string, bigint>;
  unshieldedInputs: Map<TokenType, bigint>;
  unshieldedMints: Map<string, bigint>;
  unshieldedOutputs: Map<TokenType, bigint>;
};
```

트랜스크립트의 컨트랙트 외부 효과입니다.

## Properties

### claimedContractCalls

```ts
claimedContractCalls: [bigint, ContractAddress, string, Fr][];
```

이 컨트랙트에서 호출한 컨트랙트입니다. 값은 순서대로:

- 이 호출의 시퀀스 번호
- 호출되는 컨트랙트
- 호출되는 진입점
- 통신 커밋먼트

***

### claimedNullifiers

```ts
claimedNullifiers: Nullifier[];
```

이 컨트랙트 호출에 필요한 무효화기(소비)

***

### claimedShieldedReceives

```ts
claimedShieldedReceives: CoinCommitment[];
```

이 컨트랙트 호출에 필요한 코인 커밋먼트(출력)로,
수신된 코인

***

### claimedShieldedSpends

```ts
claimedShieldedSpends: CoinCommitment[];
```

이 컨트랙트 호출에 필요한 코인 커밋먼트(출력)로,
전송된 코인

***

### claimedUnshieldedSpends

```ts
claimedUnshieldedSpends: Map<[TokenType, PublicAddress], bigint>;
```

이 컨트랙트가 존재할 것으로 예상하는 비차폐 UTXO 출력입니다.

***

### shieldedMints

```ts
shieldedMints: Map<string, bigint>;
```

이 호출에서 발행된 차폐 토큰으로, 16진수 인코딩된 256비트 도메인
구분자에서 부호 없는 64비트 정수로의 맵입니다.

***

### unshieldedInputs

```ts
unshieldedInputs: Map<TokenType, bigint>;
```

이 컨트랙트가 예상하는 비차폐 입력입니다.

***

### unshieldedMints

```ts
unshieldedMints: Map<string, bigint>;
```

이 호출에서 발행된 비차폐 토큰으로, 16진수 인코딩된 256비트 도메인
구분자에서 부호 없는 64비트 정수로의 맵입니다.

***

### unshieldedOutputs

```ts
unshieldedOutputs: Map<TokenType, bigint>;
```

이 컨트랙트가 승인한 비차폐 출력입니다.
