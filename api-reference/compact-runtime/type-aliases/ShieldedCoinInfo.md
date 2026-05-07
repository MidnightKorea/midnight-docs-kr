[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ShieldedCoinInfo

# Type Alias: ShieldedCoinInfo

```ts
type ShieldedCoinInfo = {
  nonce: Nonce;
  type: RawTokenType;
  value: bigint;
};
```

수신자 세부 정보와 함께 새 코인을 생성하는 데 필요한 정보

## Properties

### nonce

```ts
nonce: Nonce;
```

코인의 무작위 값으로, 다른 코인과 충돌하지 않도록 합니다

***

### type

```ts
type: RawTokenType;
```

코인의 타입으로, 해당 코인이 나타내는 통화를 식별합니다

***

### value

```ts
value: bigint;
```

코인의 값으로, 통화에 따른 최소 단위입니다

음이 아닌 64비트 정수로 제한됩니다
