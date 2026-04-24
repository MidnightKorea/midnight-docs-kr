[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-indexer-public-data-provider](../README.md) / indexerPublicDataProvider

# Function: indexerPublicDataProvider()

> **indexerPublicDataProvider**(`queryURL`, `subscriptionURL`, `webSocketImpl?`): [`PublicDataProvider`](#)

Constructs a [PublicDataProvider](#) based on an [ApolloClient](#).

## Parameters

### queryURL

`string`

GraphQL 서버 쿼리 엔드포인트의 URL입니다.

### subscriptionURL

`string`

GraphQL 서버 구독(웹소켓) 엔드포인트의 URL입니다.

### webSocketImpl?

*typeof* `WebSocket` = `ws.WebSocket`

Apollo 클라이언트가 사용할 선택적 웹소켓 구현입니다.

TODO: Re-examine caching when 'ContractCall' and 'ContractDeploy' have transaction identifiers included.

## Returns

[`PublicDataProvider`](#)
