[**@midnight/zswap v4.0.0-rc**](../README.md)

***

[@midnight/zswap](../globals.md) / MerkleTreeCollapsedUpdate

# Class: MerkleTreeCollapsedUpdate

코인 커밋먼트 머클 트리의 압축 델타로, 모든 트랜잭션을 수신하지 않고도 로컬 소비 트리를 글로벌 상태와 동기화하는 데 사용됩니다.

## Constructors

### new MerkleTreeCollapsedUpdate()

```ts
new MerkleTreeCollapsedUpdate(
   state, 
   start, 
   end): MerkleTreeCollapsedUpdate
```

비압축 상태와 포함 범위의 인덱스로 새 압축 업데이트를 생성합니다.
`start` and `end` indices

#### Parameters

##### state

[`ZswapChainState`](ZswapChainState.md)

##### start

`bigint`

##### end

`bigint`

#### Returns

[`MerkleTreeCollapsedUpdate`](MerkleTreeCollapsedUpdate.md)

#### Throws

If the indices are out-of-bounds for the state, or `end < start`

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
static deserialize(raw, netid): MerkleTreeCollapsedUpdate
```

#### Parameters

##### raw

`Uint8Array`\<`ArrayBufferLike`\>

##### netid

[`NetworkId`](../enumerations/NetworkId.md)

#### Returns

[`MerkleTreeCollapsedUpdate`](MerkleTreeCollapsedUpdate.md)
