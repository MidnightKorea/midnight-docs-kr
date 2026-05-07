# Compact runtime API

**@midnight-ntwrk/compact-runtime v0.16.0**

***

# Compact runtime library

이 API는 Compact 컴파일러의 TypeScript 출력에서 사용하는 런타임 프리미티브를 제공합니다.
컴파일러 출력에서 직접 사용하거나, 해당 동작을 활용 또는 재현하는 용도로 쓸 수 있습니다.
이 API는 `@midnight-ntwrk/onchain-runtime-v2`의 여러 항목을 재내보내기하며, 일부는
TypeScript에 적합한 형태로 래핑합니다. 주요 구성 요소는 다음과 같습니다:

-  setNetworkId: 올바른 네트워크를 대상으로 지정하는 데 필요
- [CircuitContext](interfaces/CircuitContext.md) 및 [CircuitResults](interfaces/CircuitResults.md): 모든 회로의 입출력 정의에 사용
- [WitnessContext](interfaces/WitnessContext.md): 모든 회로의 입력 정의에 사용
- 내장 함수:
  - 해싱/커밋먼트
    - [transientHash](functions/transientHash.md)
    - [transientCommit](functions/transientCommit.md)
    - [persistentHash](functions/persistentHash.md)
    - [persistentCommit](functions/persistentCommit.md)
    - [degradeToTransient](functions/degradeToTransient.md)
  - 타원 곡선
    - [ecAdd](functions/ecAdd.md)
    - [ecMul](functions/ecMul.md)
    - [ecMulGenerator](functions/ecMulGenerator.md)
    - [hashToCurve](functions/hashToCurve.md)
- [ContractState](classes/ContractState.md): 스마트 컨트랙트의 온체인 상태 전체를 캡슐화
- [StateValue](classes/StateValue.md): 컨트랙트가 온체인에서 유지하는 데이터를 인코딩
- [QueryContext](classes/QueryContext.md): 컨트랙트 상태에 대한 주석이 달린 뷰를 제공하며, 이를 기반으로 온체인 VM 프로그램을 실행 가능
- [CompactType](interfaces/CompactType.md): 기본 Compact 데이터 타입의 런타임 표현을 제공
- Compact 타입과 동일한 이름의 다양한 TypeScript 타입
