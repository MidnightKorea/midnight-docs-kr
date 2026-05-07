[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / WitnessContext

# Interface: WitnessContext\<L, PS\>

Compact 위트니스 호출 내에서 접근 가능한 외부 정보

## Type Parameters

### L

`L` = `any`

### PS

`PS` = `any`

## Properties

### contractAddress

```ts
readonly contractAddress: string;
```

호출되는 컨트랙트의 주소

***

### ledger

```ts
readonly ledger: L;
```

트랜잭션이 로컬에서 현재 확인되는 원장 상태를 기준으로
실행될 경우의 예상 원장 상태

***

### privateState

```ts
readonly privateState: PS;
```

컨트랙트의 현재 프라이빗 상태
