[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / ShieldedCoinInfo

# Type Alias: ShieldedCoinInfo

```ts
type ShieldedCoinInfo = {
  nonce: Nonce;
  type: RawTokenType;
  value: bigint;
};
```

새 코인을 생성하는 데 필요한 정보와 세부 사항입니다.
recipient

## Properties

### nonce

```ts
nonce: Nonce;
```

다른 코인과의 충돌을 방지하는 코인의 랜덤값입니다.

***

### type

```ts
type: RawTokenType;
```

코인이 나타내는 통화를 식별하는 코인 유형입니다.

***

### value

```ts
value: bigint;
```

통화에 따른 최소 단위로 표현된 코인의 값입니다.

음이 아닌 64비트 정수로 제한됩니다.
