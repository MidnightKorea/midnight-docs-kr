[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / UtxoState

# Class: UtxoState

비차폐 UTXO의 하위 상태입니다.

## Constructors

### Constructor

```ts
new UtxoState(): UtxoState;
```

#### Returns

`UtxoState`

## Properties

### utxos

```ts
readonly utxos: Set<Utxo>;
```

유효한 UTXO 집합입니다.

## Methods

### delta()

```ts
delta(prior, filterBy?): [Set<Utxo>, Set<Utxo>];
```

이전 UTXO 상태가 주어지면 집합 차이 `this \ prior`와 `prior \ this`를 생성하며, 선택적으로 추가 조건으로 필터링합니다.

저수준 구현이 공유 하위 구조의 순회를 회피할 수 있으므로, [utxos](#utxos) 값을 반복하거나 구체화하는 것보다 더 효율적입니다.

#### Parameters

##### prior

`UtxoState`

##### filterBy?

(`utxo`) => `boolean`

#### Returns

\[`Set`\<[`Utxo`](../type-aliases/Utxo.md)\>, `Set`\<[`Utxo`](../type-aliases/Utxo.md)\>\]

***

### filter()

```ts
filter(addr): Set<Utxo>;
```

특정 사용자 주소가 소유한 UTXO를 필터링합니다.

#### Parameters

##### addr

`string`

#### Returns

`Set`\<[`Utxo`](../type-aliases/Utxo.md)\>

***

### lookupMeta()

```ts
lookupMeta(utxo): undefined | UtxoMeta;
```

특정 UTXO의 메타데이터를 조회합니다.

#### Parameters

##### utxo

[`Utxo`](../type-aliases/Utxo.md)

#### Returns

`undefined` \| [`UtxoMeta`](UtxoMeta.md)

***

### new()

```ts
static new(utxos): UtxoState;
```

#### Parameters

##### utxos

`Map`\<[`Utxo`](../type-aliases/Utxo.md), [`UtxoMeta`](UtxoMeta.md)\>

#### Returns

`UtxoState`
