[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / StateBoundedMerkleTree

# Class: StateBoundedMerkleTree

해시된 데이터를 저장하는 고정 깊이 Merkle 트리를 나타내며, 프리이미지는 알 수 없습니다

## Constructors

### Constructor

```ts
new StateBoundedMerkleTree(height): StateBoundedMerkleTree;
```

주어진 높이의 빈 트리를 생성합니다

#### Parameters

##### height

`number`

#### Returns

`StateBoundedMerkleTree`

## Properties

### height

```ts
readonly height: number;
```

## Methods

### collapse()

```ts
collapse(start, end): StateBoundedMerkleTree;
```

**`Internal`**

`start`와 `end` 인덱스 사이(포함)에서 필요한 해시만 남기고 나머지를 제거합니다

#### Parameters

##### start

`bigint`

##### end

`bigint`

#### Returns

`StateBoundedMerkleTree`

#### Throws

인덱스가 트리 범위를 벗어나거나 `end < start`인 경우

***

### findPathForLeaf()

```ts
findPathForLeaf(leaf): AlignedValue | undefined;
```

**`Internal`**

경로 찾기 프리미티브의 내부 구현입니다.
리프가 트리에 없으면 undefined를 반환합니다.

#### Parameters

##### leaf

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md) \| `undefined`

***

### pathForLeaf()

```ts
pathForLeaf(index, leaf): AlignedValue;
```

**`Internal`**

경로 생성 프리미티브의 내부 구현

#### Parameters

##### index

`bigint`

##### leaf

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Throws

인덱스가 트리 범위를 벗어나는 경우

***

### rehash()

```ts
rehash(): StateBoundedMerkleTree;
```

트리를 다시 해싱하여 모든 내부 해시를 업데이트하고 모든 노드 해시가
존재하도록 보장합니다. 온체인 런타임이 자동으로 트리를 재해싱하지
않으므로 필요합니다.

#### Returns

`StateBoundedMerkleTree`

***

### root()

```ts
root(): AlignedValue | undefined;
```

**`Internal`**

Merkle 트리 루트 프리미티브의 내부 구현입니다.
트리가 완전히 해싱되지 않은 경우 undefined를 반환합니다.

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md) \| `undefined`

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

### update()

```ts
update(index, leaf): StateBoundedMerkleTree;
```

Merkle 트리에 값을 삽입하고 업데이트된 트리를 반환합니다

#### Parameters

##### index

`bigint`

##### leaf

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

`StateBoundedMerkleTree`

#### Throws

인덱스가 트리 범위를 벗어나는 경우
