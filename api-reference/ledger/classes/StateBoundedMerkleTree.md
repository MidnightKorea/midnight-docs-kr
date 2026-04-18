[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / StateBoundedMerkleTree

# Class: StateBoundedMerkleTree

프리이미지를 알 수 없는 해시된 데이터를 저장하는 고정 깊이 머클 트리를 나타냅니다.

## Constructors

### Constructor

```ts
new StateBoundedMerkleTree(height): StateBoundedMerkleTree;
```

주어진 높이로 빈 트리를 생성합니다.

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

`start`와 `end` 인덱스(포함) 사이에서 필요한 해시만 남기고 모두 삭제합니다.

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
findPathForLeaf(leaf): undefined | AlignedValue;
```

**`Internal`**

경로 탐색 프리미티브의 내부 구현입니다.
리프가 트리에 없으면 undefined를 반환합니다.

#### Parameters

##### leaf

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

`undefined` \| [`AlignedValue`](../type-aliases/AlignedValue.md)

***

### pathForLeaf()

```ts
pathForLeaf(index, leaf): AlignedValue;
```

**`Internal`**

경로 구성 프리미티브의 내부 구현입니다.

#### Parameters

##### index

`bigint`

##### leaf

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Throws

인덱스가 트리 범위를 벗어난 경우

***

### rehash()

```ts
rehash(): StateBoundedMerkleTree;
```

트리를 다시 해시하여 모든 내부 해시를 업데이트하고 모든 노드 해시가 존재하도록 합니다. 온체인 런타임이 트리를 자동으로 다시 해시하지 않으므로 필요합니다.

#### Returns

`StateBoundedMerkleTree`

***

### root()

```ts
root(): undefined | AlignedValue;
```

**`Internal`**

머클 트리 루트 프리미티브의 내부 구현입니다.
트리가 완전히 해시되지 않았으면 undefined를 반환합니다.

#### Returns

`undefined` \| [`AlignedValue`](../type-aliases/AlignedValue.md)

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

머클 트리에 값을 삽입하고 업데이트된 트리를 반환합니다.

#### Parameters

##### index

`bigint`

##### leaf

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

`StateBoundedMerkleTree`

#### Throws

If the index is out-of-bounds for the tree
