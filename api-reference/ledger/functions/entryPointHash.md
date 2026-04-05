[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / entryPointHash

# Function: entryPointHash()

```ts
function entryPointHash(entryPoint): string;
```

주어진 컨트랙트 진입점의 (16진수 인코딩된) 해시를 계산합니다.
composable contracts to reference the called contract's entry point ID
in-circuit.

## Parameters

### entryPoint

`string` | `Uint8Array`\<`ArrayBufferLike`\>

## Returns

`string`
