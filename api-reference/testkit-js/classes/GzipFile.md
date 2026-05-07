[**@midnight-ntwrk/testkit-js v4.0.4**](../README.md)

***

A class for compressing and decompressing files using gzip.

## Constructors

### Constructor

> **new GzipFile**(`inputFile`, `outputFile`): `GzipFile`

새 GzipFile 인스턴스를 생성합니다.

#### Parameters

##### inputFile

`string`

압축/해제할 입력 파일 경로

##### outputFile

`string`

압축 파일이 저장될 경로

#### Returns

`GzipFile`

## Properties

### inputFile

> **inputFile**: `string`

입력 파일 경로

***

### outputFile

> **outputFile**: `string`

출력 파일 경로

## Methods

### compress()

> **compress**(): `Promise`\<`void`\>

Compresses the input file using gzip compression.

#### Returns

`Promise`\<`void`\>

A promise that resolves when compression is complete

#### Throws

If there is an error during compression

***

### decompress()

> **decompress**(): `Promise`\<`string`\>

Decompresses the input gzip file and returns its contents as a string.

#### Returns

`Promise`\<`string`\>

A promise that resolves with the decompressed file contents as a string

#### Throws

If there is an error during decompression
