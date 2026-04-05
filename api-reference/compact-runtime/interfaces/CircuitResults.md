[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CircuitResults

# Interface: CircuitResults\<PS, R\>

Compact 회로 호출의 결과

## Type Parameters

### PS

`PS` = `any`

### R

`R` = `any`

## Properties

### context

```ts
context: CircuitContext<PS>;
```

회로 실행 후 업데이트된 컨텍스트로, 이후 실행에 활용할 수 있습니다

***

### gasCost

```ts
gasCost: RunningCost;
```

회로 실행의 가스 소비량

***

### proofData

```ts
proofData: ProofData;
```

이 회로 실행을 증명하는 데 필요한 데이터

***

### result

```ts
result: R;
```

Compact에서 반환된 기본 결과
