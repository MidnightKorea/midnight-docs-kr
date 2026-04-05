[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / MaintenanceUpdate

# Class: MaintenanceUpdate

연관된 연산을 업데이트하거나 유지보수 권한을 변경하는 컨트랙트 유지보수 업데이트입니다.

## Constructors

### Constructor

```ts
new MaintenanceUpdate(
   address, 
   updates, 
   counter): MaintenanceUpdate;
```

#### Parameters

##### address

`string`

##### updates

[`SingleUpdate`](../type-aliases/SingleUpdate.md)[]

##### counter

`bigint`

#### Returns

`MaintenanceUpdate`

## Properties

### address

```ts
readonly address: string;
```

이 배포가 생성하려는 주소입니다.

***

### counter

```ts
readonly counter: bigint;
```

이 업데이트가 유효한 카운터 값입니다.

***

### dataToSign

```ts
readonly dataToSign: Uint8Array;
```

이 업데이트를 승인하기 위해 유효한 서명이 서명해야 하는 원시 데이터입니다.

***

### signatures

```ts
readonly signatures: [bigint, string][];
```

이 업데이트에 대한 서명입니다.

***

### updates

```ts
readonly updates: SingleUpdate[];
```

수행할 업데이트입니다.

## Methods

### addSignature()

```ts
addSignature(idx, signature): MaintenanceUpdate;
```

이 업데이트에 새 서명을 추가합니다.

#### Parameters

##### idx

`bigint`

##### signature

`string`

#### Returns

`MaintenanceUpdate`

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
