[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-utils](../README.md) / assertDefined

# Function: assertDefined()

> **assertDefined**\<`A`\>(`value`, `message?`): `asserts value is NonNullable<A>`

주어진 값이 null이나 undefined가 아닌지 확인합니다.

## Type Parameters

### A

`A`

## Parameters

### value

`A` \| `null` \| `undefined`

null 여부를 검사할 값입니다.

### message?

`string`

오류 발생 시 사용할 오류 메시지입니다.

## Returns

`asserts value is NonNullable<A>`

## Throws

값이 null 또는 undefined인 경우 Error를 발생시킵니다.
