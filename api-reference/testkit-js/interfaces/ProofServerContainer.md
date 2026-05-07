[**@midnight-ntwrk/testkit-js v4.0.4**](../README.md)

***

Interface representing a proof server container that can be started and stopped.

## Methods

### getUrl()

> **getUrl**(): `string`

증명 서버에 접근할 수 있는 URL을 가져옵니다.

#### Returns

`string`

증명 서버의 URL

***

### stop()

> **stop**(): `Promise`\<`void`\>

증명 서버 컨테이너를 중지합니다.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the container is stopped
