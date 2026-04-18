[**@midnight/ledger v8.0.3**](../README.md)

***

[@midnight/ledger](../globals.md) / ContractAction

# Type Alias: ContractAction\<P\>

```ts
type ContractAction<P> = 
  | ContractCall<P>
  | ContractDeploy
  | MaintenanceUpdate;
```

컨트랙트와의 상호작용입니다.

## Type Parameters

### P

`P` *extends* [`Proofish`](Proofish.md)
