[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / VerifierKeyRemove

# Class: VerifierKeyRemove

특정 연산 및 버전의 검증자 키를 제거하는 업데이트 명령입니다.

## Constructors

### Constructor

```ts
new VerifierKeyRemove(operation, version): VerifierKeyRemove;
```

#### Parameters

##### operation

`string` | `Uint8Array`\<`ArrayBufferLike`\>

##### version

[`ContractOperationVersion`](ContractOperationVersion.md)

#### Returns

`VerifierKeyRemove`

## Properties

### operation

```ts
readonly operation: string | Uint8Array<ArrayBufferLike>;
```

***

### version

```ts
readonly version: ContractOperationVersion;
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
