[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / SecretKeys

# Class: SecretKeys

## Properties

### coinPublicKey

```ts
readonly coinPublicKey: string;
```

***

### coinSecretKey

```ts
readonly coinSecretKey: CoinSecretKey;
```

***

### encryptionPublicKey

```ts
readonly encryptionPublicKey: string;
```

***

### encryptionSecretKey

```ts
readonly encryptionSecretKey: EncryptionSecretKey;
```

## Methods

### fromSeed()

```ts
static fromSeed(seed): SecretKeys
```

32바이트 시드로부터 비밀 키를 도출합니다.

#### Parameters

##### seed

`Uint8Array`\<`ArrayBufferLike`\>

#### Returns

[`SecretKeys`](SecretKeys.md)

***

### fromSeedRng()

```ts
static fromSeedRng(seed): SecretKeys
```

더 이상 사용되지 않는 구현을 사용하여 32바이트 시드로부터 비밀 키를 도출합니다.
호환성 목적으로만 사용하세요.

#### Parameters

##### seed

`Uint8Array`\<`ArrayBufferLike`\>

#### Returns

[`SecretKeys`](SecretKeys.md)
