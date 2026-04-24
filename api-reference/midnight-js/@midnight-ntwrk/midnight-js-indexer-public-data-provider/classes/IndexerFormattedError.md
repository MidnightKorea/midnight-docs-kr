[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-indexer-public-data-provider](../README.md) / IndexerFormattedError

# Class: IndexerFormattedError

An error describing the causes of error that occurred during server-side execution of
a query against the Indexer.

## Extends

- `Error`

## Constructors

### Constructor

> **new IndexerFormattedError**(`cause`): `IndexerFormattedError`

#### Parameters

##### cause

readonly `GraphQLFormattedError`[]

서버 측 실행 중 발생한 GraphQL 오류 배열입니다.

#### Returns

`IndexerFormattedError`

#### Overrides

`Error.constructor`

## Properties

### cause

> `readonly` **cause**: readonly `GraphQLFormattedError`[]

서버 측 실행 중 발생한 GraphQL 오류 배열입니다.

#### Inherited from

`Error.cause`
