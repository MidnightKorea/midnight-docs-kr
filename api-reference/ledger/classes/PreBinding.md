[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / PreBinding

# Class: PreBinding

향후 [Intent](Intent.md)를 바인딩하는 데 사용될 정보이지만, 아직 수정을 방지하지는 않습니다.

## Constructors

### Constructor

```ts
new PreBinding(data): PreBinding;
```

#### Parameters

##### data

`String`

#### Returns

`PreBinding`

## Properties

### instance

```ts
instance: "pre-binding";
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
static deserialize(raw): PreBinding;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`PreBinding`
