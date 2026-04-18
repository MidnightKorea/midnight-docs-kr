[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / Binding

# Class: Binding

[Intent](Intent.md)에 대한 지수 바인딩(또는 임시 서명)의 Fiat-Shamir 증명입니다.

## Constructors

### Constructor

```ts
new Binding(data): Binding;
```

#### Parameters

##### data

`String`

#### Returns

`Binding`

## Properties

### instance

```ts
instance: "binding";
```

## Methods

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`

***

### deserialize()

```ts
static deserialize(raw): Binding;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`Binding`
