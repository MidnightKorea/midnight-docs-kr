[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / entryPointHash

# Function: entryPointHash()

```ts
function entryPointHash(entryPoint): string;
```

주어진 컨트랙트 진입점의 (16진수 인코딩된) 해시를 계산합니다.
합성 가능한 컨트랙트에서 호출되는 컨트랙트의 진입점 ID를
회로 내에서 참조하는 데 사용합니다.

## Parameters

### entryPoint

`string` | `Uint8Array`\<`ArrayBufferLike`\>

## Returns

`string`
