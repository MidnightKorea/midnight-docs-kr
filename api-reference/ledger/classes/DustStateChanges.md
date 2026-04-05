[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / DustStateChanges

# Class: DustStateChanges

## Properties

### receivedUtxos

```ts
readonly receivedUtxos: QualifiedDustOutput[];
```

이 상태 변경에서 수신된 UTXO입니다.

***

### source

```ts
readonly source: string;
```

16진수로 인코딩된 문자열 형태의 상태 변경 출처입니다.

***

### spentUtxos

```ts
readonly spentUtxos: QualifiedDustOutput[];
```

이 상태 변경에서 소비된 UTXO입니다.
