[**@midnight-ntwrk/compact-runtime v0.15.0**](../README.md)

***

[@midnight-ntwrk/compact-runtime](../globals.md) / contractDependencies

# Function: contractDependencies()

```ts
function contractDependencies(contractReferenceLocations, state): string[];
```

컨트랙트의 현재 원장 상태를 나타내는 [StateValue](../classes/StateValue.md)가 주어지면, Compact 컴파일러가 생성한 [ContractReferenceLocations](../type-aliases/ContractReferenceLocations.md)
객체를 사용하여 주어진 원장 상태에 존재하는 현재 컨트랙트 주소를 추출합니다. 생성된
컨트랙트 주소는 루트 컨트랙트가 의존하는 컨트랙트를 나타냅니다. 이 의존성은 멀티 컨트랙트
환경에서 실행 전에 루트 컨트랙트가 의존하는 모든 컨트랙트의 원장 상태를 가져오는 데 사용됩니다.

참고: 주어진 [ContractReferenceLocations](../type-aliases/ContractReferenceLocations.md)는 주어진 [StateValue](../classes/StateValue.md)를 생성한 원장 상태 생성자를 포함하는
      컨트랙트 실행 파일의 것이어야 합니다.

## Parameters

### contractReferenceLocations

[`ContractReferenceLocations`](../type-aliases/ContractReferenceLocations.md)

루트 컨트랙트의 원장 상태에서 컨트랙트 참조를 가리키는 데이터 구조입니다.

### state

[`StateValue`](../classes/StateValue.md)

루트 컨트랙트의 현재 원장 상태입니다.

## Returns

`string`[]

주어진 원장 상태에 존재하는 모든 컨트랙트 주소(참조) 목록입니다.

## Remarks

알고리즘은 세 가지 주요 단계로 구성됩니다:

         1. 주어진 [ContractReferenceLocations](../type-aliases/ContractReferenceLocations.md)에서 [SparseCompactADT](../type-aliases/SparseCompactADT.md)에 도달할 때까지 [PublicLedgerSegments](../type-aliases/PublicLedgerSegments.md)를 풀어냅니다.
            [PublicLedgerSegments](../type-aliases/PublicLedgerSegments.md)를 풀어낼 때마다 현재 상태 값을 상태 값 배열로 캐스팅하고, 각 상태 값과 풀어낸 원장 세그먼트에 대해 재귀적으로 진행합니다.
         2. 현재 [PublicLedgerSegments](../type-aliases/PublicLedgerSegments.md)에서 [SparseCompactType](../type-aliases/SparseCompactType.md)에 도달할 때까지 각 [SparseCompactADT](../type-aliases/SparseCompactADT.md)를 풀어냅니다.
            [SparseCompactADT](../type-aliases/SparseCompactADT.md)를 풀어낼 때마다 현재 상태 값을 해당 [SparseCompactADT](../type-aliases/SparseCompactADT.md)가 나타내는 상태 표현으로 캐스팅합니다.
         3. 현재 상태를 더 이상 축소할 수 없으면, 상태 내부 어딘가에 Compact 컨트랙트 주소가 존재해야 하며 해당 컨트랙트 주소가 의존성 집합에 추가됩니다.
