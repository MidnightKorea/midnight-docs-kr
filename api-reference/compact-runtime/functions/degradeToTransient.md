[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / degradeToTransient

# Function: degradeToTransient()

```ts
function degradeToTransient(x): bigint;
```

Compact 내장 `degrade_to_transient` 함수

[persistentHash](persistentHash.md) 또는 [persistentCommit](persistentCommit.md)의 출력을
필드 요소로 "다운그레이드"하며, 그 결과를 [transientHash](transientHash.md) 또는
[transientCommit](transientCommit.md)에서 사용할 수 있습니다.

## Parameters

### x

`Uint8Array`

## Returns

`bigint`

## Throws

`x`가 32바이트가 아닌 경우
