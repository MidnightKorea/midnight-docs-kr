[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ZswapLocalState

# Interface: ZswapLocalState

회로 실행 전반에 걸쳐 소비되고 생성된 코인을 추적합니다.

## Properties

### coinPublicKey

```ts
coinPublicKey: string;
```

회로를 실행하는 사용자의 Zswap 코인 공개 키입니다.

***

### currentIndex

```ts
currentIndex: bigint;
```

다음에 생성될 코인의 Merkle 트리 인덱스입니다.

***

### inputs

```ts
inputs: QualifiedShieldedCoinInfo[];
```

회로의 입력으로 소비된 코인입니다.

***

### outputs

```ts
outputs: {
  coinInfo: ShieldedCoinInfo;
  recipient: Recipient;
}[];
```

회로의 출력으로 생성된 코인입니다.

#### coinInfo

```ts
coinInfo: ShieldedCoinInfo;
```

#### recipient

```ts
recipient: Recipient;
```
