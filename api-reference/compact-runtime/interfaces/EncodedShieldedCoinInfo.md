[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / EncodedShieldedCoinInfo

# Interface: EncodedShieldedCoinInfo

필드가 바이트 문자열로 인코딩된 [ShieldedCoinInfo](../type-aliases/ShieldedCoinInfo.md)입니다. 이 표현은
컨트랙트 실행 파일 내부에서 사용됩니다.

## Extended by

- [`EncodedQualifiedShieldedCoinInfo`](EncodedQualifiedShieldedCoinInfo.md)

## Properties

### color

```ts
readonly color: Uint8Array;
```

코인의 타입으로, 해당 코인이 나타내는 통화를 식별합니다.

***

### nonce

```ts
readonly nonce: Uint8Array;
```

코인의 무작위 값으로, 다른 코인과 충돌하지 않도록 합니다.

***

### value

```ts
readonly value: bigint;
```

코인의 값으로, 통화에 따른 최소 단위입니다. 음이 아닌 64비트 정수로 제한됩니다.
