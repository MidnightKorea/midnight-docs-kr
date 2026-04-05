# Onchain Runtime API

**@midnight-ntwrk/onchain-runtime v3.0.0**

***

# Midnight Onchain Runtime TypeScript API

이 API는 Midnight 온체인 런타임에 대한 TypeScript 인터페이스를 제공하며,
VM 명령어 실행과 이를 사용하는 데 필요한 기본 요소를 포함합니다.

주요 구성 요소:

- [ContractState](classes/ContractState.md), 스마트 컨트랙트의 온체인 상태 전체를 캡슐화
- [StateValue](classes/StateValue.md), 컨트랙트가 온체인에서 유지하는 데이터를 인코딩
- [QueryContext](classes/QueryContext.md), 컨트랙트 상태에 대한 주석이 달린 뷰를 제공하며, 이를 기반으로 온체인 VM 프로그램을 실행 가능
- [Op](type-aliases/Op.md), 온체인 VM 프로그램의 TypeScript 인코딩을 제공
- [AlignedValue](type-aliases/AlignedValue.md), 온체인에 저장되는 모든 사용자 데이터를 인코딩하는 "기본" 값 타입
