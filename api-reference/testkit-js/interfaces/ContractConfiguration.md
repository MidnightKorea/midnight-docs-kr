[**@midnight-ntwrk/testkit-js v4.0.2**](../README.md)

***

Midnight 컨트랙트의 구성 인터페이스입니다.

## Properties

### privateStateStoreName

> `readonly` **privateStateStoreName**: `string`

Name of the store used for persisting private state data.
This is used as a base name - a signing key store will also be created with "-signing-keys" appended.

***

### zkConfigPath

> `readonly` **zkConfigPath**: `string`

File system path to the zero-knowledge proof configuration files.
This should point to the directory containing the circuit verification keys and other ZK artifacts.
