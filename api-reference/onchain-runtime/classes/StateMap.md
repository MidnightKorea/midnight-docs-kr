[**@midnight-ntwrk/onchain-runtime v3.0.0**](../README.md)

***

[@midnight-ntwrk/onchain-runtime](../globals.md) / StateMap

# Class: StateMap

키-값 맵을 나타내며, 키는 [AlignedValue](../type-aliases/AlignedValue.md)이고 값은
[StateValue](StateValue.md)입니다.

## Constructors

### new StateMap()

```ts
new StateMap(): StateMap
```

#### Returns

[`StateMap`](StateMap.md)

## Methods

### get()

```ts
get(key): undefined | StateValue
```

#### Parameters

##### key

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

`undefined` \| [`StateValue`](StateValue.md)

***

### insert()

```ts
insert(key, value): StateMap
```

#### Parameters

##### key

[`AlignedValue`](../type-aliases/AlignedValue.md)

##### value

[`StateValue`](StateValue.md)

#### Returns

[`StateMap`](StateMap.md)

***

### keys()

```ts
keys(): AlignedValue[]
```

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md)[]

***

### remove()

```ts
remove(key): StateMap
```

#### Parameters

##### key

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

[`StateMap`](StateMap.md)

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
