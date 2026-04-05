[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / AlignmentAtom

# Type Alias: AlignmentAtom

```ts
type AlignmentAtom = 
  | {
  tag: "compress";
}
  | {
  tag: "field";
}
  | {
  length: number;
  tag: "bytes";
};
```

[Alignment](Alignment.md) 내의 원자 단위입니다.
