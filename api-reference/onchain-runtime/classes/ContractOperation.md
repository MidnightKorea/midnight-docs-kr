[**@midnight-ntwrk/onchain-runtime v3.0.0**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / ContractOperation

# Class: ContractOperation

컨트랙트의 개별 연산 또는 진입점으로, 주로 ZK 검증 키로 구성되며
증명 시스템의 서로 다른 버전에 대응할 수 있습니다.

이 API에서는 최신 버전만 노출됩니다.

키의 직렬화된 형태는 초기화 시 검증됩니다

## Constructors

### new ContractOperation()

```ts
new ContractOperation(): ContractOperation
```

#### Returns

[`ContractOperation`](ContractOperation.md)

## Properties

### verifierKey

```ts
verifierKey: Uint8Array;
```

## Methods

### serialize()

```ts
serialize(): Uint8Array
```

#### Returns

`Uint8Array`

***

### toString()

```ts
toString(compact?): string
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`

***

### deserialize()

```ts
static deserialize(raw): ContractOperation
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

[`ContractOperation`](ContractOperation.md)
