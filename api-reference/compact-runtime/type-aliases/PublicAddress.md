[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / PublicAddress

# Type Alias: PublicAddress

```ts
type PublicAddress = 
  | {
  address: UserAddress;
  tag: "user";
}
  | {
  address: ContractAddress;
  tag: "contract";
};
```

엔티티를 식별할 수 있는 공개 주소
