# ZSwap API

**@midnight/zswap v4.0.0-rc**

***

# Zswap TypeScript API

이 문서는 Zswap TS API 사용법을 설명합니다.

## Network ID

상호작용에 앞서, setNetworkId를 사용하여 [NetworkId](enumerations/NetworkId.md)를 올바른 네트워크로 설정해야 합니다.

## Proof stages

대부분의 트랜잭션 구성 요소는 `X`, `UnprovenX`, `ProofErasedX` 세 단계 중 하나에 있습니다. `UnprovenX` 단계가 _항상_ 첫 번째 단계입니다. 증명 서버를 통해 `UnprovenTransaction`을 증명하면 `X` 단계로 전환할 수 있습니다. 테스트 목적이거나 증명이 필요 없는 경우에는 `ProofErasedX` 단계를 사용하며, 다른 두 단계에서 `eraseProof[s]`를 통해 도달할 수 있습니다.

## Transaction structure

[Transaction](classes/Transaction.md)은 두 단계로 실행됩니다. 수수료 결제와 빠른 검증 작업을 처리하는 _guaranteed_ 단계와, guaranteed 단계와 별개로 원자적으로 실패할 수 있는 작업을 처리하는 _fallible_ 단계입니다. 따라서 다음을 포함합니다:

* "guaranteed" [Offer](classes/Offer.md)
* 선택적으로, "fallible" [Offer](classes/Offer.md)
* 이 API에서 접근할 수 없는 컨트랙트 호출 정보

이 외에도 이 문서에서는 생략할 암호학적 연결 요소가 추가로 포함됩니다.

### Zswap

Zswap [Offer](classes/Offer.md)는 다음으로 구성됩니다:
* 코인을 소각하는 [Input](classes/Input.md) 집합
* 코인을 생성하는 [Output](classes/Output.md) 집합
* 동일 트랜잭션 내에서 생성과 소각이 동시에 일어나는 코인을 나타내는 [Transient](classes/Transient.md) 집합
* [TokenType](type-aliases/TokenType.md)에서 오퍼 잔액으로의 매핑 (입력이 출력보다 많으면 양수, 반대면 음수)

[Input](classes/Input.md)은 컨트랙트 소유 코인인 경우 [QualifiedCoinInfo](type-aliases/QualifiedCoinInfo.md)와 컨트랙트 주소로부터, 사용자 소유 코인인 경우 [QualifiedCoinInfo](type-aliases/QualifiedCoinInfo.md)와 ZswapLocalState로부터 생성할 수 있습니다. 마찬가지로 [Output](classes/Output.md)은 컨트랙트 소유 코인의 경우 [CoinInfo](type-aliases/CoinInfo.md)와 컨트랙트 주소로부터, 사용자 소유 코인의 경우 [CoinInfo](type-aliases/CoinInfo.md)와 사용자의 공개 키로부터 생성할 수 있습니다. [Transient](classes/Transient.md)는 [Input](classes/Input.md)과 유사하게 생성되지만, 기존 [Output](classes/Output.md)을 직접 변환합니다.

[QualifiedCoinInfo](type-aliases/QualifiedCoinInfo.md)는 소비할 코인을 찾는 데 사용되는 코인 커밋먼트 머클 트리 인덱스가 포함된 [CoinInfo](type-aliases/CoinInfo.md)이며, [CoinInfo](type-aliases/CoinInfo.md)는 코인의 [TokenType](type-aliases/TokenType.md), 값, 논스로 구성됩니다.

## State Structure

[ZswapChainState](classes/ZswapChainState.md)는 Zswap의 온체인 상태를 보유하고, ZswapLocalState는 로컬 지갑 상태를 보유합니다.
