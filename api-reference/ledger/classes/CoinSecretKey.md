[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / CoinSecretKey

# Class: CoinSecretKey

사용자의 코인 비밀 키를 보유하며, 16진수로 인코딩된 32바이트 문자열로 직렬화됩니다.

## Methods

### clear()

```ts
clear(): void;
```

코인 비밀 키를 지워 더 이상 사용할 수 없고 메모리에도 남지 않게 합니다.

#### Returns

`void`

***

### yesIKnowTheSecurityImplicationsOfThis\_serialize()

```ts
yesIKnowTheSecurityImplicationsOfThis_serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### deserialize()

```ts
static deserialize(raw): CoinSecretKey;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`CoinSecretKey`
