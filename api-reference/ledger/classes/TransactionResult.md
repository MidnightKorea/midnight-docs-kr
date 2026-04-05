[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / TransactionResult

# Class: TransactionResult

트랜잭션 적용 결과 상태입니다.
트랜잭션이 실패하거나 부분적으로 실패한 경우 오류 메시지를 포함합니다.

## Properties

### error?

```ts
readonly optional error: string;
```

***

### events

```ts
readonly events: Event[];
```

***

### successfulSegments?

```ts
readonly optional successfulSegments: Map<number, boolean>;
```

***

### type

```ts
readonly type: "success" | "partialSuccess" | "failure";
```

## Methods

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`
