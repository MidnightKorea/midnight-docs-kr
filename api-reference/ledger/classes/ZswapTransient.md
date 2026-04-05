[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / ZswapTransient

# Class: ZswapTransient\<P\>

차폐된 "트랜지언트"로, 동일 트랜잭션 내에서 즉시 소비되는 출력입니다.

## Type Parameters

### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

## Properties

### commitment

```ts
readonly commitment: string;
```

트랜지언트의 커밋먼트입니다.

***

### contractAddress

```ts
readonly contractAddress: undefined | string;
```

해당하는 경우, 트랜지언트를 생성하는 컨트랙트 주소입니다.

***

### inputProof

```ts
readonly inputProof: P;
```

이 트랜지언트의 입력 증명입니다.

***

### nullifier

```ts
readonly nullifier: string;
```

트랜지언트의 널리파이어입니다.

***

### outputProof

```ts
readonly outputProof: P;
```

이 트랜지언트의 출력 증명입니다.

## Methods

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

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

***

### deserialize()

```ts
static deserialize<P>(markerP, raw): ZswapTransient<P>;
```

#### Type Parameters

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

#### Parameters

##### markerP

`P`\[`"instance"`\]

##### raw

`Uint8Array`

#### Returns

`ZswapTransient`\<`P`\>

***

### newFromContractOwnedOutput()

```ts
static newFromContractOwnedOutput(
   coin, 
   segment, 
   output): UnprovenTransient;
```

주어진 출력과 코인으로 컨트랙트 소유의 새 트랜지언트를 생성합니다.

The [QualifiedShieldedCoinInfo](../type-aliases/QualifiedShieldedCoinInfo.md) should have an `mt_index` of `0`

#### Parameters

##### coin

[`QualifiedShieldedCoinInfo`](../type-aliases/QualifiedShieldedCoinInfo.md)

##### segment

`undefined` | `number`

##### output

[`UnprovenOutput`](../type-aliases/UnprovenOutput.md)

#### Returns

[`UnprovenTransient`](../type-aliases/UnprovenTransient.md)
