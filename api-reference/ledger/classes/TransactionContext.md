[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / TransactionContext

# Class: TransactionContext

트랜잭션이 실행되는 컨텍스트입니다.

## Constructors

### Constructor

```ts
new TransactionContext(
   ref_state, 
   block_context, 
   whitelist?): TransactionContext;
```

#### Parameters

##### ref\_state

[`LedgerState`](LedgerState.md)

'정적' 데이터의 참조점으로 사용되는 과거 원장 상태입니다.

##### block\_context

[`BlockContext`](../type-aliases/BlockContext.md)

이 트랜잭션이 포함되어 있거나 포함될 블록에 대한 정보입니다.

##### whitelist?

`Set`\<`string`\>

추적 중인 컨트랙트 목록이며, 모든 컨트랙트를 추적하려면 `undefined`입니다.

#### Returns

`TransactionContext`

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
