[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / PreProof

# Class: PreProof

[Proof](Proof.md)를 생성하는 데 필요한 프리이미지 또는 데이터입니다.

## Constructors

### Constructor

```ts
new PreProof(data): PreProof;
```

#### Parameters

##### data

`String`

#### Returns

`PreProof`

## Properties

### instance

```ts
instance: "pre-proof";
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
static deserialize(raw): PreProof;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`PreProof`
