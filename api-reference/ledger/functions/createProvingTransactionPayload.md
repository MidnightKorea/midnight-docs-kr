[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / createProvingTransactionPayload

# Function: ~~createProvingTransactionPayload()~~

```ts
function createProvingTransactionPayload(transaction, proving_data): Uint8Array;
```

증명 서버를 통해 특정 트랜잭션을 증명하기 위한 페이로드를 생성합니다.

## Parameters

### transaction

[`UnprovenTransaction`](../type-aliases/UnprovenTransaction.md)

### proving\_data

`Map`\<`string`, [`ProvingKeyMaterial`](../type-aliases/ProvingKeyMaterial.md)\>

## Returns

`Uint8Array`

## Deprecated

`Transaction.prove`를 대신 사용하세요.
