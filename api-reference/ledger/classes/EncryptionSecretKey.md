[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / EncryptionSecretKey

# Class: EncryptionSecretKey

사용자의 암호화 비밀 키를 보유하며, 주어진 오퍼에 이 사용자에게 보내진 출력이 포함되어 있는지 확인하는 데 사용할 수 있습니다.

## Methods

### clear()

```ts
clear(): void;
```

암호화 비밀 키를 지워 더 이상 사용할 수 없고 메모리에도 남지 않게 합니다.

#### Returns

`void`

***

### test()

```ts
test<P>(offer): boolean;
```

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### offer

[`ZswapOffer`](ZswapOffer.md)\<`P`\>

#### Returns

`boolean`

***

### yesIKnowTheSecurityImplicationsOfThis\_serialize()

```ts
yesIKnowTheSecurityImplicationsOfThis_serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### yesIKnowTheSecurityImplicationsOfThis\_taggedSerialize()

```ts
yesIKnowTheSecurityImplicationsOfThis_taggedSerialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### deserialize()

```ts
static deserialize(raw): EncryptionSecretKey;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`EncryptionSecretKey`

***

### taggedDeserialize()

```ts
static taggedDeserialize(raw): EncryptionSecretKey;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`EncryptionSecretKey`
