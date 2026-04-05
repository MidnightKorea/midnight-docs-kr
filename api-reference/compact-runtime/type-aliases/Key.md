[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / Key

# Type Alias: Key

```ts
type Key = 
  | {
  tag: "value";
  value: AlignedValue;
}
  | {
  tag: "stack";
};
```

온체인 VM에서 배열 또는 맵에 인덱싱하는 데 사용되는 키
