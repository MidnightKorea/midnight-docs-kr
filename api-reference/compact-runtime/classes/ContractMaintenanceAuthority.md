[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / ContractMaintenanceAuthority

# Class: ContractMaintenanceAuthority

이 컨트랙트를 변경할 수 있는 권한을 가진 위원회입니다. 위원회 내 공개 키의
임계값 이상이 서명하면 이 컨트랙트의 규칙을 변경하거나 새 버전으로
재컴파일할 수 있습니다.

임계값이 위원회 구성원 수보다 크면 어떤 것에도 서명할 수 없습니다.

## Constructors

### Constructor

```ts
new ContractMaintenanceAuthority(
   committee, 
   threshold, 
   counter?): ContractMaintenanceAuthority;
```

구성 요소로부터 새 권한을 생성합니다

`counter`를 지정하지 않으면 기본값은 `0n`입니다. 값은 음수가 아니어야 하며
최대 2^32 - 1이어야 합니다.

배포 시 `counter`는 반드시 `0n`이어야 하며, 이후 업데이트 시에는
counter를 현재 값보다 정확히 1 큰 값으로 설정해야 합니다.

#### Parameters

##### committee

`string`[]

##### threshold

`number`

##### counter?

`bigint`

#### Returns

`ContractMaintenanceAuthority`

## Properties

### committee

```ts
readonly committee: string[];
```

위원회 공개 키

***

### counter

```ts
readonly counter: bigint;
```

리플레이 보호 카운터

***

### threshold

```ts
readonly threshold: number;
```

규칙 변경에 서명해야 하는 키 수

## Methods

### serialize()

```ts
serialize(): Uint8Array;
```

#### Returns

`Uint8Array`

***

### toString()

```ts
toString(compact?): string;
```

#### Parameters

##### compact?

`boolean`

#### Returns

`string`

***

### deserialize()

```ts
static deserialize(raw): ContractState;
```

#### Parameters

##### raw

`Uint8Array`

#### Returns

[`ContractState`](ContractState.md)
