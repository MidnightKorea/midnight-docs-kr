[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / VmStack

# Class: VmStack

특정 시점의 VM 스택 상태를 나타냅니다. 스택은 [StateValue](StateValue.md) 배열이며, 각 항목에는 "strong" 또는 "weak" 여부, 즉 온체인 저장이 허용되는지 여부가 표시됩니다.

## Constructors

### Constructor

```ts
new VmStack(): VmStack;
```

#### Returns

`VmStack`

## Methods

### get()

```ts
get(idx): undefined | StateValue;
```

#### Parameters

##### idx

`number`

#### Returns

`undefined` \| [`StateValue`](StateValue.md)

***

### isStrong()

```ts
isStrong(idx): undefined | boolean;
```

#### Parameters

##### idx

`number`

#### Returns

`undefined` \| `boolean`

***

### length()

```ts
length(): number;
```

#### Returns

`number`

***

### push()

```ts
push(value, is_strong): void;
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
removeLast(): void;
```

#### Returns

`void`

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
