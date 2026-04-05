[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / hasCoinCommitment

# Function: hasCoinCommitment()

```ts
function hasCoinCommitment(
   context, 
   coinInfo, 
   recipient): boolean;
```

현재 쿼리 컨텍스트에 코인 커밋먼트가 이미 추가되었는지 확인합니다.

## Parameters

### context

[`CircuitContext`](../interfaces/CircuitContext.md)

현재 회로 컨텍스트입니다.

### coinInfo

[`EncodedShieldedCoinInfo`](../interfaces/EncodedShieldedCoinInfo.md)

확인할 코인 정보입니다.

### recipient

[`EncodedRecipient`](../interfaces/EncodedRecipient.md)

확인할 코인 수신자입니다.

## Returns

`boolean`
