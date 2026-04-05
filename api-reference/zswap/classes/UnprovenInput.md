[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / UnprovenInput

# Class: UnprovenInput

A [Input](Input.md), before being proven

이 단계에서 입력의 모든 "차폐" 정보를 추출할 수 있습니다.
stage!

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

## Methods

### serialize()

```ts
serialize(netid): Uint8Array<ArrayBufferLike>
```

#### Parameters

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

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
static deserialize(raw, netid): UnprovenInput
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`UnprovenInput`](UnprovenInput.md)

***

### newContractOwned()

```ts
static newContractOwned(
   coin, 
   segment, 
   contract, 
   state): UnprovenInput
```

Creates a new input, spending a specific coin from a smart contract,
against a state which contains this coin.

Note that inputs created in this way *also* need to be authorized by the
contract

#### Parameters

##### coin

[`QualifiedCoinInfo`](../type-aliases/QualifiedCoinInfo.md)

##### segment

`number`

##### contract

`string`

##### state

[`ZswapChainState`](ZswapChainState.md)

#### Returns

[`UnprovenInput`](UnprovenInput.md)
