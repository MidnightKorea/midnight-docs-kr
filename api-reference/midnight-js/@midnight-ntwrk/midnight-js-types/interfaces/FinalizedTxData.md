[**Midnight.js API Reference v4.0.2**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-types](../README.md) / FinalizedTxData

# Interface: FinalizedTxData

확정된 트랜잭션의 데이터입니다.

## Properties

### blockAuthor

> `readonly` **blockAuthor**: `string` \| `null`

트랜잭션이 포함된 블록의 작성자입니다.

***

### blockHash

> `readonly` **blockHash**: `string`

트랜잭션이 포함된 블록의 블록 해시입니다.

***

### blockHeight

> `readonly` **blockHeight**: `number`

트랜잭션이 포함된 블록의 블록 높이입니다.

***

### blockTimestamp

> `readonly` **blockTimestamp**: `number`

트랜잭션이 포함된 블록의 타임스탬프입니다.

***

### fees

> `readonly` **fees**: [`Fees`](../type-aliases/Fees.md)

지불 수수료와 예상 수수료를 모두 포함하는 트랜잭션 관련 수수료입니다.

***

### identifiers

> `readonly` **identifiers**: readonly `string`[]

제출된 트랜잭션의 모든 트랜잭션 ID입니다.

***

### indexerId

> `readonly` **indexerId**: `number`

인덱서 내부 DB ID입니다.

***

### protocolVersion

> `readonly` **protocolVersion**: `number`

트랜잭션의 프로토콜 버전입니다.

***

### segmentStatusMap

> `readonly` **segmentStatusMap**: `Map`\<`number`, [`SegmentStatus`](../type-aliases/SegmentStatus.md)\> \| `undefined`

The map that associates segment identifiers (numbers) with their corresponding status [SegmentStatus](../type-aliases/SegmentStatus.md).
The segment identifier is represented as a number (key in the map), and the status indicates the success or failure of the transaction update.

***

### status

> `readonly` **status**: [`TxStatus`](../type-aliases/TxStatus.md)

제출된 트랜잭션의 상태입니다.

***

### tx

> `readonly` **tx**: `Transaction`\<`SignatureEnabled`, `Proof`, `Binding`\>

확정된 트랜잭션입니다.

***

### txHash

> `readonly` **txHash**: `string`

원본 트랜잭션이 포함된 트랜잭션의 트랜잭션 해시입니다.

***

### txId

> `readonly` **txId**: `string`

제출된 트랜잭션의 트랜잭션 ID 중 하나입니다.

***

### unshielded

> `readonly` **unshielded**: [`UnshieldedUtxos`](../type-aliases/UnshieldedUtxos.md)

Represents the unshielded outputs, typically used for transactions or operations
involving data or values that are not encrypted or concealed.
