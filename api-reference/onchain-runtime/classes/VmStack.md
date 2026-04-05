[**@midnight-ntwrk/onchain-runtime v3.0.0**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / VmStack

# Class: VmStack

특정 시점의 VM 스택 상태를 나타냅니다. 스택은
[StateValue](StateValue.md) 배열로, 각 요소에는 "강함" 또는 "약함" 주석이 달려 있습니다.
이는 해당 값을 온체인에 저장할 수 있는지 여부를 나타냅니다.

## Constructors

### new VmStack()

```ts
new VmStack(): VmStack
```

#### Returns

[`VmStack`](VmStack.md)

## Methods

### get()

```ts
get(idx): undefined | StateValue
```

#### Parameters

##### idx

`number`

#### Returns

`undefined` \| [`StateValue`](StateValue.md)

***

### isStrong()

```ts
isStrong(idx): undefined | boolean
```

#### Parameters

##### idx

`number`

#### Returns

`undefined` \| `boolean`

***

### length()

```ts
length(): number
```

#### Returns

`number`

***

### push()

```ts
push(value, is_strong): void
```

#### Parameters

##### value

[`StateValue`](StateValue.md)

##### is\_strong

`boolean`

#### Returns

`void`

***

### removeLast()

```ts
removeLast(): void
```

#### Returns

`void`

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
