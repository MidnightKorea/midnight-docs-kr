[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / Intent

# Class: Intent\<S, P, B\>

인텐트는 균형이 맞지 않을 수 있는 부분 트랜잭션으로, 다른 인텐트와 결합하여 완전한 트랜잭션을 구성할 수 있습니다.

## Type Parameters

### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

### B

`B` *extends* [`Bindingish`](../type-aliases/Bindingish.md)

## Properties

### actions

```ts
actions: ContractAction<P>[];
```

이 인텐트의 액션 시퀀스입니다.

#### Throws

Writing throws if `B` is [Binding](Binding.md).

***

### binding

```ts
readonly binding: B;
```

***

### dustActions

```ts
dustActions: undefined | DustActions<S, P>;
```

이 인텐트에서 수행하는 DUST 상호작용입니다.

#### Throws

Writing throws if `B` is [Binding](Binding.md).

***

### fallibleUnshieldedOffer

```ts
fallibleUnshieldedOffer: undefined | UnshieldedOffer<S>;
```

이 인텐트의 fallible 섹션에 포함된 UTXO 입력 및 출력입니다.

#### Throws

Writing throws if `B` is [Binding](Binding.md), unless the only change
is in the signature set.

***

### guaranteedUnshieldedOffer

```ts
guaranteedUnshieldedOffer: undefined | UnshieldedOffer<S>;
```

이 인텐트의 guaranteed 섹션에 포함된 UTXO 입력 및 출력입니다.

#### Throws

Writing throws if `B` is [Binding](Binding.md), unless the only change
is in the signature set.

***

### ttl

```ts
ttl: Date;
```

이 인텐트의 만료 시간입니다.

#### Throws

Writing throws if `B` is [Binding](Binding.md).

## Methods

### addCall()

```ts
addCall(call): Intent<S, PreProof, PreBinding>;
```

이 인텐트에 컨트랙트 호출을 추가합니다.

#### Parameters

##### call

[`ContractCallPrototype`](ContractCallPrototype.md)

#### Returns

`Intent`\<`S`, [`PreProof`](PreProof.md), [`PreBinding`](PreBinding.md)\>

***

### addDeploy()

```ts
addDeploy(deploy): Intent<S, PreProof, PreBinding>;
```

이 인텐트에 컨트랙트 배포를 추가합니다.

#### Parameters

##### deploy

[`ContractDeploy`](ContractDeploy.md)

#### Returns

`Intent`\<`S`, [`PreProof`](PreProof.md), [`PreBinding`](PreBinding.md)\>

***

### addMaintenanceUpdate()

```ts
addMaintenanceUpdate(update): Intent<S, PreProof, PreBinding>;
```

이 인텐트에 유지보수 업데이트를 추가합니다.

#### Parameters

##### update

[`MaintenanceUpdate`](MaintenanceUpdate.md)

#### Returns

`Intent`\<`S`, [`PreProof`](PreProof.md), [`PreBinding`](PreBinding.md)\>

***

### bind()

```ts
bind(segmentId): Intent<S, P, Binding>;
```

이 인텐트에 바인딩을 강제합니다. 되돌릴 수 없습니다.

#### Parameters

##### segmentId

`number`

#### Returns

`Intent`\<`S`, `P`, [`Binding`](Binding.md)\>

#### Throws

If `segmentId` is not a valid segment ID.

***

### eraseProofs()

```ts
eraseProofs(): Intent<S, NoProof, NoBinding>;
```

이 인텐트에서 증명을 제거합니다.

#### Returns

`Intent`\<`S`, [`NoProof`](NoProof.md), [`NoBinding`](NoBinding.md)\>

***

### eraseSignatures()

```ts
eraseSignatures(): Intent<SignatureErased, P, B>;
```

이 인텐트에서 서명을 제거합니다.

#### Returns

`Intent`\<[`SignatureErased`](SignatureErased.md), `P`, `B`\>

***

### intentHash()

```ts
intentHash(segmentId): string;
```

주어진 세그먼트 ID에 대한 이 인텐트의 해시를 반환합니다.

#### Parameters

##### segmentId

`number`

#### Returns

`string`

***

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### signatureData()

```ts
signatureData(segmentId): Uint8Array;
```

이 인텐트의 비차폐 입력에 서명되는 원시 데이터입니다.

#### Parameters

##### segmentId

`number`

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
static deserialize<S, P, B>(
   markerS, 
   markerP, 
   markerB, 
raw): Intent<S, P, B>;
```

#### Type Parameters

##### S

`S` *extends* [`Signaturish`](../type-aliases/Signaturish.md)

##### P

`P` *extends* [`Proofish`](../type-aliases/Proofish.md)

##### B

`B` *extends* [`Bindingish`](../type-aliases/Bindingish.md)

#### Parameters

##### markerS

`S`\[`"instance"`\]

##### markerP

`P`\[`"instance"`\]

##### markerB

`B`\[`"instance"`\]

##### raw

`Uint8Array`

#### Returns

`Intent`\<`S`, `P`, `B`\>

***

### new()

```ts
static new(ttl): UnprovenIntent;
```

#### Parameters

##### ttl

`Date`

#### Returns

[`UnprovenIntent`](../type-aliases/UnprovenIntent.md)
