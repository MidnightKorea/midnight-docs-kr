[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / Event

# Class: Event

원장에서 발생한 이벤트입니다.

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
static deserialize(raw): Event;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`Event`
