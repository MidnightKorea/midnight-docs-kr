# Midnight JS API

**Midnight.js API Reference v4.0.2**

***

# Midnight.js

Midnight 블록체인에서 프라이버시 보호 dApp을 구축하기 위한 TypeScript SDK입니다.

Midnight.js는 스마트 컨트랙트 배포 및 상호작용, 암호화된 프라이빗 상태 관리, 영지식 증명 생성, Midnight 네트워크로의 트랜잭션 제출을 위한 도구를 제공합니다.

## Architecture

Midnight.js는 각 기능을 교체 가능한 **모듈형 프로바이더 패턴**을 사용합니다:

```
MidnightProviders
├── privateStateProvider   — 암호화된 로컬 상태 저장소
├── publicDataProvider     — GraphQL을 통한 블록체인 데이터 조회
├── zkConfigProvider       — ZK 아티팩트 조회 (증명자/검증자 키)
├── proofProvider          — 영지식 증명 생성
├── walletProvider         — 트랜잭션 밸런싱 및 서명
├── midnightProvider       — 네트워크로의 트랜잭션 제출
└── loggerProvider         — 선택적 진단 로깅
```

## Packages

### Core

| 패키지 | 용도 |
|---------|---------|
| `@midnight-ntwrk/midnight-js-types` | 공유 타입, 인터페이스, 프로바이더 계약 |
| `@midnight-ntwrk/midnight-js-contracts` | 컨트랙트 배포, 서킷 호출, 트랜잭션 제출 |
| `@midnight-ntwrk/midnight-js-network-id` | 런타임 및 원장 WASM API를 위한 네트워크 식별자 설정 |
| `@midnight-ntwrk/midnight-js-utils` | 공유 유틸리티 (hex 인코딩, bech32m, 어설션) |

### Providers

| 패키지 | 용도 |
|---------|---------|
| `@midnight-ntwrk/midnight-js-indexer-public-data-provider` | GraphQL 기반 블록체인 데이터 프로바이더 (쿼리 및 구독) |
| `@midnight-ntwrk/midnight-js-level-private-state-provider` | [LevelDB](https://github.com/Level/level) 기반 AES-256-GCM 암호화 영구 상태 저장소 |
| `@midnight-ntwrk/midnight-js-http-client-proof-provider` | Midnight 증명 서버용 HTTP 클라이언트 |
| `@midnight-ntwrk/midnight-js-fetch-zk-config-provider` | [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 기반 브라우저 호환 ZK 아티팩트 프로바이더 |
| `@midnight-ntwrk/midnight-js-node-zk-config-provider` | Node.js 파일시스템 기반 ZK 아티팩트 프로바이더 |
| `@midnight-ntwrk/midnight-js-logger-provider` | 애플리케이션별 [Pino](https://github.com/pinojs/pino) 로거 설정 |

### Tooling

| 패키지 | 용도 |
|---------|---------|
| `@midnight-ntwrk/midnight-js-compact` | 컨트랙트 컴파일을 위한 Compact 컴파일러 관리자 |

## Quick Start

### 1. 네트워크 설정

```typescript
import { setNetworkId } from '@midnight-ntwrk/midnight-js-network-id';

setNetworkId('testnet');
```

### 2. 프로바이더 구성

```typescript
import { levelPrivateStateProvider } from '@midnight-ntwrk/midnight-js-level-private-state-provider';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import { httpClientProofProvider } from '@midnight-ntwrk/midnight-js-http-client-proof-provider';
import { FetchZkConfigProvider } from '@midnight-ntwrk/midnight-js-fetch-zk-config-provider';

const zkConfigProvider = new FetchZkConfigProvider(zkArtifactsUrl);

const providers: MidnightProviders = {
  privateStateProvider: levelPrivateStateProvider({
    privateStoragePasswordProvider: () => password,
    accountId: walletAddress,
  }),
  publicDataProvider: indexerPublicDataProvider(queryUrl, subscriptionUrl),
  zkConfigProvider,
  proofProvider: httpClientProofProvider(proofServerUrl, zkConfigProvider),
  walletProvider,    // from @midnight-ntwrk/wallet-sdk-facade
  midnightProvider,  // from @midnight-ntwrk/wallet-sdk-facade
};
```

### 3. 컨트랙트 배포 및 상호작용

```typescript
import { deployContract, findDeployedContract } from '@midnight-ntwrk/midnight-js-contracts';

const deployed = await deployContract(providers, {
  compiledContract,
  privateStateId: 'my-state',
  initialPrivateState: { counter: 0n },
});

const result = await deployed.callTx.increment();
```

### 4. 상태 조회

```typescript
import { getStates, getPublicStates } from '@midnight-ntwrk/midnight-js-contracts';

const states = await getStates(providers, contractAddress, privateStateId);
const publicStates = await getPublicStates(providers, contractAddress);
```

## Key Concepts

### 컨트랙트 모델

| 용어 | 설명 |
|------|-------------|
| **Circuit** | 로컬에서 실행되어 영지식 증명을 생성하는 스마트 컨트랙트 함수 |
| **Witness** | 최종 사용자 기기에서 실행되는 프라이빗 연산 |
| **Private state** | 서킷이 업데이트하는 사용자 로컬 상태 — 온체인에 저장되지 않음 |
| **Ledger state** | 온체인 퍼블릭 컨트랙트 상태 |

### ZK 아티팩트

| 아티팩트 | 역할 |
|----------|------|
| **Prover key** | 영지식 증명 생성에 사용되는 바이너리 |
| **Verifier key** | 온체인 증명 검증에 사용되는 바이너리 |
| **ZKIR** | 컴파일된 컨트랙트의 영지식 중간 표현(Zero-Knowledge Intermediate Representation) |

### 트랜잭션 흐름

```
1. 서킷을 로컬에서 실행    →  미증명 트랜잭션
2. ZK 증명 생성            →  ProofProvider
3. 트랜잭션 밸런싱          →  WalletProvider
4. 네트워크에 제출          →  MidnightProvider
5. 확정 대기                →  PublicDataProvider
```

### 트랜잭션 상태

| 상태 | 의미 |
|--------|---------|
| `SucceedEntirely` | 모든 트랜잭션 세그먼트가 성공함 |
| `FailFallible` | 보장 부분은 성공했으나 실패 허용 부분이 실패함 |
| `FailEntirely` | 트랜잭션이 유효하지 않음 |

## 프라이빗 상태 보안

- **암호화**: 저장 시 AES-256-GCM 적용
- **키 파생**: PBKDF2-SHA256 (600,000회 반복)
- **격리**: 지갑 주소의 SHA-256 해시를 키로 사용하는 계정 범위 저장소
- **내장 복구 기능 없음**: 프로덕션 배포 시 백업 전략이 필요함
