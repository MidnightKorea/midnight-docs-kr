[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / upgradeFromTransient

# Function: upgradeFromTransient()

```ts
function upgradeFromTransient(x): Uint8Array;
```

Compact 내장 `upgrade_from_transient` 함수

[transientHash](transientHash.md) 또는 [transientCommit](transientCommit.md)의 출력을
256비트 바이트열로 "업그레이드"하며, 그 결과를 [persistentHash](persistentHash.md) 또는
[persistentCommit](persistentCommit.md)에서 사용할 수 있습니다.

## Parameters

### x

`bigint`

## Returns

`Uint8Array`

## Throws

`x`가 유효한 필드 요소가 아닌 경우
