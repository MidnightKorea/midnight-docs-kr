[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / AlignmentSegment

# Type Alias: AlignmentSegment

```ts
type AlignmentSegment = 
  | {
  tag: "option";
  value: Alignment[];
}
  | {
  tag: "atom";
  value: AlignmentAtom;
};
```

[Alignment](Alignment.md) 내의 세그먼트입니다.
