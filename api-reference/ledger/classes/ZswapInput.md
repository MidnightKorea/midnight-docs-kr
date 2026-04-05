[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / ZswapInput

# Class: ZswapInput\<P\>

차폐된 트랜잭션 입력입니다.

## Type Parameters

### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

## Properties

### contractAddress

```ts
readonly contractAddress: undefined | string;
```

발신자가 컨트랙트인 경우 입력을 수신하는 컨트랙트 주소입니다.

***

### nullifier

```ts
readonly nullifier: string;
```

입력의 널리파이어입니다.

***

### proof

```ts
readonly proof: P;
```

이 입력의 증명입니다.

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
static deserialize<P>(markerP, raw): ZswapInput<P>;
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

`ZswapInput`\<`P`\>

***

### newContractOwned()

```ts
static newContractOwned(
   coin, 
   segment, 
   contract, 
   state): UnprovenInput;
```

#### Parameters

##### coin

[`QualifiedShieldedCoinInfo`](../type-aliases/QualifiedShieldedCoinInfo.md)

##### segment

`undefined` | `number`

##### contract

`string`

##### state

[`ZswapChainState`](ZswapChainState.md)

#### Returns

[`UnprovenInput`](../type-aliases/UnprovenInput.md)
