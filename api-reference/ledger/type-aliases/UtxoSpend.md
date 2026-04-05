[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / UtxoSpend

# Type Alias: UtxoSpend

```ts
type UtxoSpend = {
  intentHash: IntentHash;
  outputNo: number;
  owner: SignatureVerifyingKey;
  type: RawTokenType;
  value: bigint;
};
```

[Intent](../classes/Intent.md)에 나타나는 입력 또는 사용자의 로컬 장부입니다.

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
owner: SignatureVerifyingKey;
```

이 토큰을 소유한 서명 키입니다.

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
