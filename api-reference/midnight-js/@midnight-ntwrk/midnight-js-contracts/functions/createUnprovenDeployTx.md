[**Midnight.js API Reference v4.0.4**](../../../README.md)

***

[Midnight.js API Reference](../../../packages.md) / [@midnight-ntwrk/midnight-js-contracts](../README.md) / createUnprovenDeployTx

# Function: createUnprovenDeployTx()

컨트랙트 생성자를 호출하고, 생성자 결과로부터 밸런싱되지 않은 미증명 미제출 배포 트랜잭션을 생성합니다.

## Param

배포 트랜잭션을 생성하는 데 사용할 프로바이더입니다.

## Param

설정입니다.

## Call Signature

> **createUnprovenDeployTx**\<`C`\>(`providers`, `options`): `Promise`\<[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Contract`\<`undefined`, `Witnesses`\<`undefined`\>\>

### Parameters

#### providers

[`UnprovenDeployTxProviders`](../type-aliases/UnprovenDeployTxProviders.md)\<`C`\>

#### options

[`DeployTxOptionsBase`](../type-aliases/DeployTxOptionsBase.md)\<`C`\>

### Returns

`Promise`\<[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>\>

## Call Signature

> **createUnprovenDeployTx**\<`C`\>(`providers`, `options`): `Promise`\<[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>\>

### Type Parameters

#### C

`C` *extends* `Any`

### Parameters

#### providers

[`UnprovenDeployTxProviders`](../type-aliases/UnprovenDeployTxProviders.md)\<`C`\>

#### options

[`DeployTxOptionsWithPrivateState`](../type-aliases/DeployTxOptionsWithPrivateState.md)\<`C`\>

### Returns

`Promise`\<[`UnsubmittedDeployTxData`](../type-aliases/UnsubmittedDeployTxData.md)\<`C`\>\>
