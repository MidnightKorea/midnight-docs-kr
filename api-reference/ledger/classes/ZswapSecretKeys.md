[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / ZswapSecretKeys

# Class: ZswapSecretKeys

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

### clear()

```ts
clear(): void;
```

비밀 키를 지워 더 이상 사용할 수 없고 메모리에도 남지 않게 합니다.
참고: 키 복사본은 지워지지 않으며, 이는 증명 프리이미지에 특히 관련됩니다.
참고: 이후 다른 모든 연산이 실패합니다.

#### Returns

`void`

***

### fromSeed()

```ts
static fromSeed(seed): ZswapSecretKeys;
```

32바이트 시드로부터 비밀 키를 도출합니다.

#### Parameters

##### seed

`Uint8Array`

#### Returns

`ZswapSecretKeys`

***

### fromSeedRng()

```ts
static fromSeedRng(seed): ZswapSecretKeys;
```

더 이상 사용되지 않는 구현을 사용하여 32바이트 시드로부터 비밀 키를 도출합니다.
호환성 목적으로만 사용하세요.

#### Parameters

##### seed

`Uint8Array`

#### Returns

`ZswapSecretKeys`
