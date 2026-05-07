[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / StateMap

# Class: StateMap

키-값 맵을 나타내며, 키는 [AlignedValue](../type-aliases/AlignedValue.md)이고 값은
[StateValue](StateValue.md)입니다.

## Constructors

### Constructor

```ts
new StateMap(): StateMap;
```

#### Returns

`StateMap`

## Methods

### get()

```ts
get(key): StateValue | undefined;
```

#### Parameters

##### key

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

[`StateValue`](StateValue.md) \| `undefined`

***

### insert()

```ts
insert(key, value): StateMap;
```

#### Parameters

##### key

[`AlignedValue`](../type-aliases/AlignedValue.md)

##### value

[`StateValue`](StateValue.md)

#### Returns

`StateMap`

***

### keys()

```ts
keys(): AlignedValue[];
```

#### Returns

[`AlignedValue`](../type-aliases/AlignedValue.md)[]

***

### remove()

```ts
remove(key): StateMap;
```

#### Parameters

##### key

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

`StateMap`

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
