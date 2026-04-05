[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / VerifierKeyInsert

# Class: VerifierKeyInsert

특정 연산 및 버전에 검증자 키를 삽입하는 업데이트 명령입니다.

## Constructors

### Constructor

```ts
new VerifierKeyInsert(operation, vk): VerifierKeyInsert;
```

#### Parameters

##### operation

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### vk

[`ContractOperationVersionedVerifierKey`](ContractOperationVersionedVerifierKey.md)

#### Returns

`VerifierKeyInsert`

## Properties

### operation

```ts
readonly operation: string | Uint8Array<ArrayBufferLike>;
```

***

### vk

```ts
readonly vk: ContractOperationVersionedVerifierKey;
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
