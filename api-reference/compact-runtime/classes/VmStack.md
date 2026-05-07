[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / VmStack

# Class: VmStack

특정 시점의 VM 스택 상태를 나타냅니다. 스택은 [StateValue](StateValue.md)의
배열이며, 각 항목에는 "strong" 또는 "weak" 주석이 붙습니다.
이는 온체인에 저장할 수 있는지 여부를 나타냅니다.

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
get(idx): StateValue | undefined;
```

#### Parameters

##### idx

`number`

#### Returns

[`StateValue`](StateValue.md) \| `undefined`

***

### isStrong()

```ts
isStrong(idx): boolean | undefined;
```

#### Parameters

##### idx

`number`

#### Returns

`boolean` \| `undefined`

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
