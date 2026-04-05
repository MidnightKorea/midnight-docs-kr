[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / QualifiedShieldedCoinInfo

# Type Alias: QualifiedShieldedCoinInfo

```ts
type QualifiedShieldedCoinInfo = {
  mt_index: bigint;
  nonce: Nonce;
  type: RawTokenType;
  value: bigint;
};
```

기존 코인을 소비하는 데 필요한 정보와 소유자의 인가

## Properties

### mt\_index

```ts
mt_index: bigint;
```

체인의 코인 커밋먼트 Merkle 트리에서 코인의 위치

음이 아닌 64비트 정수로 제한됩니다

***

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
