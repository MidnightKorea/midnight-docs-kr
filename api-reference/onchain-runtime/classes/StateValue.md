[**@midnight-ntwrk/onchain-runtime v3.0.0**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / StateValue

# Class: StateValue

컨트랙트 상태의 핵심을 나타내며, 각 구성 요소를 재귀적으로 표현합니다.

상태 값에는 다양한 *종류*가 있습니다:
- `null`
- [AlignedValue](../type-aliases/AlignedValue.md)의 셀
- [AlignedValue](../type-aliases/AlignedValue.md)에서 상태 값으로의 맵
- [AlignedValue](../type-aliases/AlignedValue.md) 리프를 포함하는 바운디드 머클 트리
- 짧은 (\<= 15개 요소) 상태 값 배열

상태 값은 *불변*이며, 상태를 변경하는 모든 연산은
기존 상태를 수정하는 대신 새 상태를 반환합니다.

## Methods

### arrayPush()

```ts
arrayPush(value): StateValue
```

#### Parameters

##### value

[`StateValue`](StateValue.md)

#### Returns

[`StateValue`](StateValue.md)

***

### asArray()

```ts
asArray(): undefined | StateValue[]
```

#### Returns

`undefined` \| [`StateValue`](StateValue.md)[]

***

### asBoundedMerkleTree()

```ts
asBoundedMerkleTree(): undefined | StateBoundedMerkleTree
```

#### Returns

`undefined` \| [`StateBoundedMerkleTree`](StateBoundedMerkleTree.md)

***

### asCell()

```ts
asCell(): AlignedValue
```

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md)

***

### asMap()

```ts
asMap(): undefined | StateMap
```

#### Returns

`undefined` \| [`StateMap`](StateMap.md)

***

### encode()

```ts
encode(): EncodedStateValue
```

**`Internal`**

#### Returns

[`EncodedStateValue`](../type-aliases/EncodedStateValue.md)

***

### logSize()

```ts
logSize(): number
```

#### Returns

`number`

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

### type()

```ts
type(): 
  | "map"
  | "null"
  | "cell"
  | "array"
  | "boundedMerkleTree"
```

#### Returns

  \| `"map"`
  \| `"null"`
  \| `"cell"`
  \| `"array"`
  \| `"boundedMerkleTree"`

***

### decode()

```ts
static decode(value): StateValue
```

**`Internal`**

#### Parameters

##### value

[`EncodedStateValue`](../type-aliases/EncodedStateValue.md)

#### Returns

[`StateValue`](StateValue.md)

***

### newArray()

```ts
static newArray(): StateValue
```

#### Returns

[`StateValue`](StateValue.md)

***

### newBoundedMerkleTree()

```ts
static newBoundedMerkleTree(tree): StateValue
```

#### Parameters

##### tree

[`StateBoundedMerkleTree`](StateBoundedMerkleTree.md)

#### Returns

[`StateValue`](StateValue.md)

***

### newCell()

```ts
static newCell(value): StateValue
```

#### Parameters

##### value

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

[`StateValue`](StateValue.md)

***

### newMap()

```ts
static newMap(map): StateValue
```

#### Parameters

##### map

[`StateMap`](StateMap.md)

#### Returns

[`StateValue`](StateValue.md)

***

### newNull()

```ts
static newNull(): StateValue
```

#### Returns

[`StateValue`](StateValue.md)
