[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / DustSecretKey

# Class: DustSecretKey

Dust의 비밀 키로, Dust UTxO 논스를 도출하고 Dust UTxO를 소비하기 위한 자격 증명에 사용됩니다.

## Properties

### publicKey

```ts
publicKey: bigint;
```

## Methods

### clear()

```ts
clear(): void;
```

Dust 비밀 키를 지워 더 이상 사용할 수 없고 메모리에도 남지 않게 합니다.

#### Returns

`void`

***

### fromBigint()

```ts
static fromBigint(bigint): DustSecretKey;
```

bigint(고유 표현)로부터 DustSecretKey 인스턴스를 생성하는 임시 메서드입니다.

#### Parameters

##### bigint

`bigint`

#### Returns

`DustSecretKey`

***

### fromSeed()

```ts
static fromSeed(seed): DustSecretKey;
```

시드로부터 DustSecretKey 인스턴스를 생성합니다.

#### Parameters

##### seed

`Uint8Array`

#### Returns

`DustSecretKey`
