[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / QualifiedShieldedCoinInfo

# Type Alias: QualifiedShieldedCoinInfo

```ts
type QualifiedShieldedCoinInfo = {
  mt_index: bigint;
  nonce: Nonce;
  type: RawTokenType;
  value: bigint;
};
```

기존 코인을 소비하는 데 필요한 정보와 승인 정보입니다.
the owner

## Properties

### mt\_index

```ts
mt_index: bigint;
```

체인의 코인 커밋먼트 머클 트리에서 코인의 위치입니다.

음이 아닌 64비트 정수로 제한됩니다.

***

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

Bounded to be a non-negative 64-bit integer
