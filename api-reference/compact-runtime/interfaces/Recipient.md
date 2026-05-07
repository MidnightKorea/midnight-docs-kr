[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / Recipient

# Interface: Recipient

회로에서 생성된 코인의 수신자입니다.

## Properties

### is\_left

```ts
readonly is_left: boolean;
```

수신자가 사용자인지 컨트랙트인지 나타냅니다.

***

### left

```ts
readonly left: string;
```

수신자가 사용자인 경우 수신자의 공개 키입니다.

***

### right

```ts
readonly right: string;
```

수신자가 컨트랙트인 경우 수신자의 컨트랙트 주소입니다.
