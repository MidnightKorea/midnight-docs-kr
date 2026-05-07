[**@midnight-ntwrk/compact-runtime v0.16.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / EncodedRecipient

# Interface: EncodedRecipient

필드가 바이트 문자열로 인코딩된 [Recipient](Recipient.md)입니다. 이 표현은 컨트랙트 실행 파일 내부에서 사용됩니다.

## Properties

### is\_left

```ts
readonly is_left: boolean;
```

수신자가 사용자인지 컨트랙트인지 나타냅니다.

***

### left

```ts
readonly left: EncodedCoinPublicKey;
```

수신자가 사용자인 경우 수신자의 공개 키입니다.

***

### right

```ts
readonly right: EncodedContractAddress;
```

수신자가 컨트랙트인 경우 수신자의 컨트랙트 주소입니다.
