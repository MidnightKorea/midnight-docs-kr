[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / UtxoOutput

# Type Alias: UtxoOutput

```ts
type UtxoOutput = {
  owner: UserAddress;
  type: RawTokenType;
  value: bigint;
};
```

[Intent](../classes/Intent.md)에 나타나는 출력입니다.

## Properties

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
