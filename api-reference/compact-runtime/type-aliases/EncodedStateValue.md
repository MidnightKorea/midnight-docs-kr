[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / EncodedStateValue

# Type Alias: EncodedStateValue

```ts
type EncodedStateValue = 
  | {
  tag: "null";
}
  | {
  content: AlignedValue;
  tag: "cell";
}
  | {
  content: Map<AlignedValue, EncodedStateValue>;
  tag: "map";
}
  | {
  content: EncodedStateValue[];
  tag: "array";
}
  | {
  content: [number, Map<bigint, [Uint8Array, undefined]>];
  tag: "boundedMerkleTree";
};
```

기술적 이유로 [Op](Op.md)에서 사용하기 위한
[StateValue](../classes/StateValue.md)의 대체 인코딩
