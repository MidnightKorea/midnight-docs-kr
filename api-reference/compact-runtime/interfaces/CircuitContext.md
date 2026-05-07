[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CircuitContext

# Interface: CircuitContext\<PS\>

Compact 회로 호출 내에서 접근 가능한 외부 정보

## Type Parameters

### PS

`PS` = `any`

## Properties

### costModel

```ts
costModel: CostModel;
```

실행에 사용할 비용 모델입니다.

***

### currentPrivateState

```ts
currentPrivateState: PS;
```

컨트랙트의 현재 프라이빗 상태입니다.

***

### currentQueryContext

```ts
currentQueryContext: QueryContext;
```

트랜잭션이 진행 중인 현재 온체인 컨텍스트입니다.

***

### currentZswapLocalState

```ts
currentZswapLocalState: EncodedZswapLocalState;
```

현재 Zswap 로컬 상태입니다. 회로 실행 중 생성된 입력과 출력을 추적합니다.

***

### gasLimit?

```ts
optional gasLimit: RunningCost;
```

이 회로의 가스 한도입니다.
