[**@midnight/ledger v8.0.2**](../README.md)

***

[@midnight/ledger](../globals.md) / SegmentSpecifier

# Type Alias: SegmentSpecifier

```ts
type SegmentSpecifier = 
  | {
  tag: "first";
}
  | {
  tag: "guaranteedOnly";
}
  | {
  tag: "random";
}
  | {
  tag: "specific";
  value: number;
};
```

트랜잭션에서 실행 위치를 지정합니다.

Options are:
- As the first thing (alias for `{ tag: 'specific', value: 1 }`)
- In any physical segment, but only utilising the guaranteed logical segment
- In a random segment (ideal for merging with other intents)
- In a specific directly provided segment (in the range 1..65535)
