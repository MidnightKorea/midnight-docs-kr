[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / ContractOperationVersionedVerifierKey

# Class: ContractOperationVersionedVerifierKey

[ContractOperation](ContractOperation.md)에 연결할 버전이 지정된 검증자 키입니다.

## Constructors

### Constructor

```ts
new ContractOperationVersionedVerifierKey(version, rawVk): ContractOperationVersionedVerifierKey;
```

#### Parameters

##### version

`"v3"`

##### rawVk

`Uint8Array`

#### Returns

`ContractOperationVersionedVerifierKey`

## Properties

### rawVk

```ts
readonly rawVk: Uint8Array;
```

***

### version

```ts
readonly version: "v3";
```

## Methods

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`
