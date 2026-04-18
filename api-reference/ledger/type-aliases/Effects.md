[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / Effects

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

The contracts called from this contract. The values are, in order:

- The sequence number of this call
- The contract being called
- The entry point being called
- The communications commitment

***

### claimedNullifiers

```ts
claimedNullifiers: Nullifier[];
```

이 컨트랙트 호출에 필요한 널리파이어(소비)입니다.

***

### claimedShieldedReceives

```ts
claimedShieldedReceives: CoinCommitment[];
```

이 컨트랙트 호출에 필요한 코인 커밋먼트(출력)입니다.
received

***

### claimedShieldedSpends

```ts
claimedShieldedSpends: CoinCommitment[];
```

The coin commitments (outputs) this contract call requires, as coins
sent

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

The shielded tokens minted in this call, as a map from hex-encoded 256-bit domain
separators to unsigned 64-bit integers.

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

The unshielded tokens minted in this call, as a map from hex-encoded 256-bit domain
separators to unsigned 64-bit integers.

***

### unshieldedOutputs

```ts
unshieldedOutputs: Map<TokenType, bigint>;
```

이 컨트랙트가 승인하는 비차폐 출력입니다.
