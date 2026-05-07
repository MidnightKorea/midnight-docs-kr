[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / CompactType

# Interface: CompactType\<A\>

Compact 타입의 런타임 표현

## Type Parameters

### A

`A`

## Methods

### alignment()

```ts
alignment(): Alignment;
```

이 타입의 필드 정렬 바이너리 정렬 방식입니다.

#### Returns

[`Alignment`](../type-aliases/Alignment.md)

***

### fromValue()

```ts
fromValue(value): A;
```

이 타입의 필드 정렬 바이너리 표현을 TypeScript 표현으로
파괴적으로 변환합니다. 입력을 (부분적으로) 소비하며,
체이닝을 위해 불필요한 데이터는 무시합니다.

#### Parameters

##### value

[`Value`](../type-aliases/Value.md)

#### Returns

`A`

***

### toValue()

```ts
toValue(value): Value;
```

이 타입의 TypeScript 표현을 필드 정렬 바이너리
표현으로 변환합니다

#### Parameters

##### value

`A`

#### Returns

[`Value`](../type-aliases/Value.md)
