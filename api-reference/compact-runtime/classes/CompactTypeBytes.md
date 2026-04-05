[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CompactTypeBytes

# Class: CompactTypeBytes

내장 `Bytes` 타입의 런타임 타입

## Implements

- [`CompactType`](../interfaces/CompactType.md)\<`Uint8Array`\>

## Constructors

### Constructor

```ts
new CompactTypeBytes(length): CompactTypeBytes;
```

#### Parameters

##### length

`number`

#### Returns

`CompactTypeBytes`

## Properties

### length

```ts
readonly length: number;
```

## Methods

### alignment()

```ts
alignment(): Alignment;
```

이 타입의 필드 정렬 바이너리 정렬 방식입니다.

#### Returns

[`Alignment`](../type-aliases/Alignment.md)

#### Implementation of

[`CompactType`](../interfaces/CompactType.md).[`alignment`](../interfaces/CompactType.md#alignment)

***

### fromValue()

```ts
fromValue(value): Uint8Array;
```

이 타입의 필드 정렬 바이너리 표현을 TypeScript 표현으로
파괴적으로 변환합니다. 입력을 (부분적으로) 소비하며,
체이닝을 위해 불필요한 데이터는 무시합니다.

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

`Uint8Array`

#### Implementation of

[`CompactType`](../interfaces/CompactType.md).[`fromValue`](../interfaces/CompactType.md#fromvalue)

***

### toValue()

```ts
toValue(value): Value;
```

이 타입의 TypeScript 표현을 필드 정렬 바이너리
표현으로 변환합니다

#### Parameters

##### value

`Uint8Array`

#### Returns

[`Value`](../type-aliases/Value.md)

#### Implementation of

[`CompactType`](../interfaces/CompactType.md).[`toValue`](../interfaces/CompactType.md#tovalue)
