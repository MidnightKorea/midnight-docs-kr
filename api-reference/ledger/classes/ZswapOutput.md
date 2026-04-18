[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / ZswapOutput

# Class: ZswapOutput\<P\>

차폐된 트랜잭션 출력입니다.

## Type Parameters

### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

## Properties

### commitment

```ts
readonly commitment: string;
```

출력의 커밋먼트입니다.

***

### contractAddress

```ts
readonly contractAddress: undefined | string;
```

수신자가 컨트랙트인 경우 출력을 수신하는 컨트랙트 주소입니다.

***

### proof

```ts
readonly proof: P;
```

이 출력의 증명입니다.

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
static deserialize<P>(markerP, raw): ZswapOutput<P>;
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

`ZswapOutput`\<`P`\>

***

### new()

```ts
static new(
   coin, 
   segment, 
   target_cpk, 
   target_epk): UnprovenOutput;
```

사용자의 코인 공개 키를 대상으로 새 출력을 생성합니다.

선택적으로 사용자의 암호화 공개 키로 암호화된 암호문을 포함하며, [ShieldedCoinInfo](../type-aliases/ShieldedCoinInfo.md)가 다른 방법으로 수신자에게 전달되는 경우에*만* 생략할 수 있습니다.

#### Parameters

##### coin

[`ShieldedCoinInfo`](../type-aliases/ShieldedCoinInfo.md)

##### segment

`undefined` | `number`

##### target\_cpk

`string`

##### target\_epk

`string`

#### Returns

[`UnprovenOutput`](../type-aliases/UnprovenOutput.md)

***

### newContractOwned()

```ts
static newContractOwned(
   coin, 
   segment, 
   contract): UnprovenOutput;
```

스마트 컨트랙트를 대상으로 새 출력을 생성합니다.

출력이 유효하려면 컨트랙트가 이 방식으로 생성된 코인을 명시적으로 수신해야 *합니다*.

#### Parameters

##### coin

[`ShieldedCoinInfo`](../type-aliases/ShieldedCoinInfo.md)

##### segment

`undefined` | `number`

##### contract

`string`

#### Returns

[`UnprovenOutput`](../type-aliases/UnprovenOutput.md)
