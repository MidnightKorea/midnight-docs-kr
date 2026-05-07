[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / createZswapOutput

# Function: createZswapOutput()

```ts
function createZswapOutput(
   circuitContext, 
   coinInfo, 
   recipient): [];
```

회로가 생성하는 출력 목록에 코인을 추가합니다.

## Parameters

### circuitContext

[`CircuitContext`](../interfaces/CircuitContext.md)\<`unknown`\>

현재 회로 컨텍스트입니다.

### coinInfo

[`EncodedShieldedCoinInfo`](../interfaces/EncodedShieldedCoinInfo.md)

생성할 코인입니다.

### recipient

[`EncodedRecipient`](../interfaces/EncodedRecipient.md)

코인 수신자로, 최종 사용자를 나타내는 코인 공개 키 또는 컨트랙트를 나타내는
                 컨트랙트 주소입니다.

## Returns

\[\]
