[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / WellFormedStrictness

# Class: WellFormedStrictness

트랜잭션 올바른 형식 평가를 위한 엄격도 기준으로, 테스트 시 트랜잭션 검증의 일부를 비활성화하는 데 사용됩니다.

## Constructors

### Constructor

```ts
new WellFormedStrictness(): WellFormedStrictness;
```

#### Returns

`WellFormedStrictness`

## Properties

### enforceBalancing

```ts
enforceBalancing: boolean;
```

트랜잭션이 음이 아닌 잔액을 가져야 하는지 여부입니다.

***

### enforceLimits

```ts
enforceLimits: boolean;
```

트랜잭션 바이트 한도를 강제할지 여부입니다.

***

### verifyContractProofs

```ts
verifyContractProofs: boolean;
```

트랜잭션의 컨트랙트 증명을 검증할지 여부입니다.

***

### verifyNativeProofs

```ts
verifyNativeProofs: boolean;
```

트랜잭션의 Midnight 네이티브(비컨트랙트) 증명을 검증할지 여부입니다.

***

### verifySignatures

```ts
verifySignatures: boolean;
```

서명 검증을 강제할지 여부입니다.
