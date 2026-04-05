[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / Utxo

# Type Alias: Utxo

```ts
type Utxo = {
  intentHash: IntentHash;
  outputNo: number;
  owner: UserAddress;
  type: RawTokenType;
  value: bigint;
};
```

미사용 트랜잭션 출력입니다.

## Properties

### intentHash

```ts
intentHash: IntentHash;
```

The hash of the intent outputting this UTXO

***

### outputNo

```ts
outputNo: number;
```

상위 [Intent](../classes/Intent.md)에서 이 UTXO의 출력 번호입니다.

***

### owner

```ts
owner: UserAddress;
```

이 토큰을 소유한 주소입니다.

***

### type

```ts
type: RawTokenType;
```

The token type of this UTXO

***

### value

```ts
value: bigint;
```

이 UTXO가 나타내는 토큰 양입니다.
