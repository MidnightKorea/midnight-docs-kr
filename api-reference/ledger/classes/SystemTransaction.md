[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / SystemTransaction

# Class: SystemTransaction

시스템이 발행한 권한 있는 트랜잭션입니다.

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
static deserialize(raw): SystemTransaction;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`SystemTransaction`
