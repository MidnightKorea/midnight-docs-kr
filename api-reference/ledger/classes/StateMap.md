[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / StateMap

# Class: StateMap

키가 [AlignedValue](../type-aliases/AlignedValue.md)이고 값이 [StateValue](StateValue.md)인 키-값 맵을 나타냅니다.

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
get(key): undefined | StateValue;
```

#### Parameters

##### key

[`AlignedValue`](../type-aliases/AlignedValue.md)

#### Returns

`undefined` \| [`StateValue`](StateValue.md)

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
