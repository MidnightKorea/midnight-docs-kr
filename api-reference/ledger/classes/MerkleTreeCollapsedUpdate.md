[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / MerkleTreeCollapsedUpdate

# Class: MerkleTreeCollapsedUpdate

코인 커밋먼트 머클 트리의 압축 델타로, 모든 트랜잭션을 수신하지 않고도 로컬 소비 트리를 글로벌 상태와 동기화하는 데 사용됩니다.

## Constructors

### Constructor

```ts
new MerkleTreeCollapsedUpdate(
   state, 
   start, 
   end): MerkleTreeCollapsedUpdate;
```

비압축 상태와 `start`, `end` 인덱스(포함)로 새 압축 업데이트를 생성합니다.

#### Parameters

##### state

[`ZswapChainState`](ZswapChainState.md)

##### start

`bigint`

##### end

`bigint`

#### Returns

`MerkleTreeCollapsedUpdate`

#### Throws

인덱스가 상태 범위를 벗어나거나 `end < start`인 경우

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
static deserialize(raw): MerkleTreeCollapsedUpdate;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

`MerkleTreeCollapsedUpdate`
