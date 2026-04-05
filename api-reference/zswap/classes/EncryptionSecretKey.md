[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / EncryptionSecretKey

# Class: EncryptionSecretKey

사용자의 암호화 비밀 키를 보유하며, 주어진 오퍼에 이 사용자에게 보내진 출력이 포함되어 있는지 확인하는 데 사용할 수 있습니다.

## Methods

### test()

```ts
test(offer): boolean
```

#### Parameters

##### offer

[`Offer`](Offer.md)

#### Returns

`boolean`

***

### yesIKnowTheSecurityImplicationsOfThis\_serialize()

```ts
yesIKnowTheSecurityImplicationsOfThis_serialize(netid): Uint8Array<ArrayBufferLike>
```

#### Parameters

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

***

### deserialize()

```ts
static deserialize(raw, netid): EncryptionSecretKey
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`EncryptionSecretKey`](EncryptionSecretKey.md)
