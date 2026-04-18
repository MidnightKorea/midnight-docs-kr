# Ledger API

**@midnight/ledger v8.0.3**

***

# Ledger TypeScript API

이 문서는 원장 TS API를 사용한 트랜잭션 조립 및 사용 흐름을 설명합니다.

## Proof stages

대부분의 트랜잭션 구성 요소는 `X`, `UnprovenX`, `ProofErasedX` 세 단계 중 하나에 있습니다. `UnprovenX` 단계가 _항상_ 첫 번째 단계입니다. 증명 서버를 통해 `UnprovenTransaction`을 증명하면 `X` 단계로 전환할 수 있습니다. 테스트 목적이거나 증명이 필요 없는 경우에는 `ProofErasedX` 단계를 사용하며, 다른 두 단계에서 `eraseProof[s]`를 통해 도달할 수 있습니다.

## Transaction structure

[Transaction](classes/Transaction.md)은 두 단계로 실행됩니다. 수수료 결제와 빠른 검증 작업을 처리하는 _guaranteed_ 세그먼트와, 일련의 _fallible 세그먼트_ 입니다. 각 세그먼트는 guaranteed 세그먼트와 별개로 원자적으로 실패할 수 있습니다. 따라서 다음을 포함합니다:

* "guaranteed" [ZswapOffer](classes/ZswapOffer.md)
* 세그먼트 ID에서 "fallible" [ZswapOffer](classes/ZswapOffer.md)로의 매핑
* 세그먼트 ID에서 [Intent](classes/Intent.md)로의 매핑 ([UnshieldedOffer](classes/UnshieldedOffer.md)와 [ContractAction](type-aliases/ContractAction.md) 포함)

이 외에도 이 문서에서는 생략할 암호학적 연결 요소가 추가로 포함됩니다.

### Zswap

[ZswapOffer](classes/ZswapOffer.md)는 다음으로 구성됩니다:
* 코인을 소각하는 [ZswapInput](classes/ZswapInput.md) 집합
* 코인을 생성하는 [ZswapOutput](classes/ZswapOutput.md) 집합
* 동일 트랜잭션 내에서 생성과 소각이 동시에 일어나는 코인을 나타내는 [ZswapTransient](classes/ZswapTransient.md) 집합
* [RawTokenType](type-aliases/RawTokenType.md)에서 오퍼 잔액으로의 매핑 (입력이 출력보다 많으면 양수, 반대면 음수)

[ZswapInput](classes/ZswapInput.md)은 컨트랙트 소유 코인인 경우 [QualifiedShieldedCoinInfo](type-aliases/QualifiedShieldedCoinInfo.md)와 컨트랙트 주소로부터, 사용자 소유 코인인 경우 [QualifiedShieldedCoinInfo](type-aliases/QualifiedShieldedCoinInfo.md)와 [ZswapLocalState](classes/ZswapLocalState.md)로부터 생성할 수 있습니다. 마찬가지로 [ZswapOutput](classes/ZswapOutput.md)은 컨트랙트 소유 코인의 경우 [ShieldedCoinInfo](type-aliases/ShieldedCoinInfo.md)와 컨트랙트 주소로부터, 사용자 소유 코인의 경우 [ShieldedCoinInfo](type-aliases/ShieldedCoinInfo.md)와 사용자의 공개 키로부터 생성할 수 있습니다. [ZswapTransient](classes/ZswapTransient.md)는 [ZswapInput](classes/ZswapInput.md)과 유사하게 생성되지만, 기존 [ZswapOutput](classes/ZswapOutput.md)을 직접 변환합니다.

[QualifiedShieldedCoinInfo](type-aliases/QualifiedShieldedCoinInfo.md)는 소비할 코인을 찾는 데 사용되는 코인 커밋먼트 머클 트리 인덱스가 포함된 [ShieldedCoinInfo](type-aliases/ShieldedCoinInfo.md)이며, [ShieldedCoinInfo](type-aliases/ShieldedCoinInfo.md)는 코인의 [RawTokenType](type-aliases/RawTokenType.md), 값, 논스로 구성됩니다.

### Calls

[ContractDeploy](classes/ContractDeploy.md)는 초기 컨트랙트 상태와 논스로 구성됩니다.

[ContractCall](classes/ContractCall.md)은 컨트랙트 주소, 해당 컨트랙트에서 사용되는 진입점, guaranteed 및 fallible 공개 오라클 트랜스크립트, 커뮤니케이션 커밋먼트, 증명으로 구성됩니다. [ContractCall](classes/ContractCall.md)은 [ContractCallPrototype](classes/ContractCallPrototype.md)을 통해 구성되며, 다음과 같은 원시 데이터로 이루어집니다:
* 컨트랙트 주소
* 컨트랙트의 진입점
* 예상되는 컨트랙트 연산 (해당 컨트랙트 주소와 진입점에 있을 것으로 예상되는 검증자 키 및 트랜스크립트 형태)
* guaranteed 트랜스크립트 (생성된 JS 코드에서 생산)
* fallible 트랜스크립트 (생성된 JS 코드에서 생산)
* 프라이빗 오라클 호출의 출력 (FAB [AlignedValue](type-aliases/AlignedValue.md) 형식)
* 호출에 대한 입력, 연결된 형태 (FAB [AlignedValue](type-aliases/AlignedValue.md) 형식)
* 호출에 대한 출력, 연결된 형태 (FAB [AlignedValue](type-aliases/AlignedValue.md) 형식)
* 커뮤니케이션 커밋먼트 랜덤값 (16진수로 인코딩된 필드 요소 문자열)
* 사용된 ZK 회로의 고유 식별자 (증명 서버가 증명자 키를 인덱싱하는 데 사용)

참고: 현재 JS 코드는 단일 트랜스크립트만 생성합니다. guaranteed/fallible로 분할하는 표준적인 방법이 필요할 수 있습니다.

[Intent](classes/Intent.md) 객체를 조립한 뒤, [ContractCallPrototype](classes/ContractCallPrototype.md)이나 [ContractDeploy](classes/ContractDeploy.md)를 직접 추가합니다. 이후 이를 [Transaction](classes/Transaction.md)에 삽입할 수 있습니다.

## State Structure

[LedgerState](classes/LedgerState.md)는 Midnight 원장 상태의 주요 진입점이며, [ZswapChainState](classes/ZswapChainState.md)와 [ContractAddress](type-aliases/ContractAddress.md)에서 [ContractState](classes/ContractState.md)로의 매핑으로 구성됩니다. 상태는 불변이며, 트랜잭션을 적용하면 항상 새로운 출력 상태가 생성됩니다.
