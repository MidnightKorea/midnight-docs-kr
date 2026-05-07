[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / StateValue

# Class: StateValue

컨트랙트 상태의 핵심을 나타내며, 각 구성 요소를 재귀적으로 표현합니다.

상태 값에는 여러 *종류*가 있습니다:
- `null`
- [AlignedValue](../type-aliases/AlignedValue.md)의 셀
- [AlignedValue](../type-aliases/AlignedValue.md)에서 상태 값으로의 맵
- [AlignedValue](../type-aliases/AlignedValue.md) 리프를 포함하는 제한된 Merkle 트리
- 짧은(\<= 15개 요소) 상태 값 배열

상태 값은 *불변*이므로 상태를 변경하는 연산은 새로운 상태를 반환합니다.

## Methods

### arrayPush()

```ts
arrayPush(value): StateValue;
```

#### Parameters

##### value

`StateValue`

#### Returns

`StateValue`

***

### asArray()

```ts
asArray(): StateValue[] | undefined;
```

#### Returns

`StateValue`[] \| `undefined`

***

### asBoundedMerkleTree()

```ts
asBoundedMerkleTree(): StateBoundedMerkleTree | undefined;
```

#### Returns

[`StateBoundedMerkleTree`](StateBoundedMerkleTree.md) \| `undefined`

***

### asCell()

```ts
asCell(): AlignedValue;
```

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md)

***

### asMap()

```ts
asMap(): StateMap | undefined;
```

#### Returns

[`StateMap`](StateMap.md) \| `undefined`

***

### encode()

```ts
encode(): EncodedStateValue;
```

**`Internal`**

#### Returns

[`EncodedStateValue`](../type-aliases/EncodedStateValue.md)

***

### logSize()

```ts
logSize(): number;
```

#### Returns

`number`

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

### type()

```ts
type(): "cell" | "map" | "array" | "null" | "boundedMerkleTree";
```

#### Returns

`"cell"` \| `"map"` \| `"array"` \| `"null"` \| `"boundedMerkleTree"`

***

### decode()

```ts
static decode(value): StateValue;
```

**`Internal`**

#### Parameters

##### value

[`EncodedStateValue`](../type-aliases/EncodedStateValue.md)

#### Returns

`StateValue`

***

### newArray()

```ts
static newArray(): StateValue;
```

#### Returns

`StateValue`

***

### newBoundedMerkleTree()

```ts
static newBoundedMerkleTree(tree): StateValue;
```

#### Parameters

##### tree

[`StateBoundedMerkleTree`](StateBoundedMerkleTree.md)

#### Returns

`StateValue`

***

### newCell()

```ts
static newCell(value): StateValue;
```

#### Parameters

##### value

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

`StateValue`

***

### newMap()

```ts
static newMap(map): StateValue;
```

#### Parameters

##### map

[`StateMap`](StateMap.md)

#### Returns

`StateValue`

***

### newNull()

```ts
static newNull(): StateValue;
```

#### Returns

`StateValue`
