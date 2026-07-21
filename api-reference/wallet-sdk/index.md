---
SPDX-License-Identifier: Apache-2.0
copyright: This file is part of midnight-docs. Copyright (C) Midnight Foundation. Licensed under the Apache License, Version 2.0 (the "License"); You may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
sidebar_label: Wallet SDK
title: Wallet SDK API Reference
description: facade, HD 키 파생, 주소 인코딩, 전송, DUST 관리, 아토믹 스왑을 다루는 Midnight Wallet SDK API 레퍼런스입니다.
toc_max_heading_level: 2
---

# Wallet SDK API Reference

Midnight Wallet SDK는 Midnight Network의 지갑을 관리하는 TypeScript 라이브러리입니다. Midnight을 구동하는 세 가지 토큰 체계, 즉 unshielded 토큰(NIGHT), 영지식 증명 기반 shielded 토큰, 그리고 트랜잭션 수수료용 DUST를 모두 지원합니다.

설정 방법과 실습 과정을 담은 상세 개발자 가이드는 [Wallet SDK 개발자 가이드](/sdks/official/wallet-developer-guide)를 참고하세요.

## Architecture

Wallet SDK는 모듈형 패키지 구조를 사용하며, Midnight의 토큰 타입에 대응하는 세 가지 지갑 모델로 구성됩니다.

```text
wallet-sdk-facade          Unified entry point
├── wallet-sdk-unshielded-wallet  NIGHT and unshielded token operations
├── wallet-sdk-shielded           Shielded token operations with ZK proofs
├── wallet-sdk-dust-wallet        DUST management for transaction fees
├── wallet-sdk-hd                 HD key derivation (BIP 32 / BIP 44 / CIP 1852)
├── wallet-sdk-address-format     Bech32m address encoding and decoding
├── wallet-sdk-node-client        Node communication
├── wallet-sdk-indexer-client     Indexer queries
└── wallet-sdk-prover-client      Proof server interface
```

## Packages

| Package | Purpose |
|---------|---------|
| `@midnight-ntwrk/wallet-sdk-facade` | 모든 지갑 작업을 위한 통합 API |
| `@midnight-ntwrk/wallet-sdk-unshielded-wallet` | NIGHT 및 unshielded 토큰 관리 |
| `@midnight-ntwrk/wallet-sdk-shielded` | ZK 증명 기반 shielded 토큰 관리 |
| `@midnight-ntwrk/wallet-sdk-dust-wallet` | 트랜잭션 수수료용 DUST 관리 |
| `@midnight-ntwrk/wallet-sdk-hd` | 계층적 결정성 키 파생 |
| `@midnight-ntwrk/wallet-sdk-address-format` | Bech32m 주소 인코딩 및 디코딩 |
| `@midnight-ntwrk/wallet-sdk-node-client` | Midnight 노드와의 통신 |
| `@midnight-ntwrk/wallet-sdk-indexer-client` | Midnight indexer 조회 |
| `@midnight-ntwrk/wallet-sdk-prover-client` | 증명 서버 인터페이스 |

## Wallet Facade

facade는 세 가지 지갑 타입을 함께 관리하며 잔액 조회, 전송, 상태 관리, 트랜잭션 실행을 하나의 인터페이스로 제공합니다.

### Initialize

```typescript
import { type DefaultConfiguration } from '@midnight-ntwrk/wallet-sdk-facade';
import { InMemoryTransactionHistoryStorage } from '@midnight-ntwrk/wallet-sdk-unshielded-wallet';

const configuration: DefaultConfiguration = {
  networkId: 'preprod',
  costParameters: {
    feeBlocksMargin: 5,
  },
  relayURL: new URL('wss://rpc.preprod.midnight.network'),
  provingServerUrl: new URL('http://localhost:6300'),
  indexerClientConnection: {
    indexerHttpUrl: 'https://indexer.preprod.midnight.network/api/v4/graphql',
    indexerWsUrl: 'wss://indexer.preprod.midnight.network/api/v4/graphql/ws',
  },
  txHistoryStorage: new InMemoryTransactionHistoryStorage(),
};

const wallet = await WalletFacade.init({
  configuration,
  shielded: (config) => ShieldedWallet(config).startWithSecretKeys(shieldedKeys),
  unshielded: (config) => UnshieldedWallet(config).startWithPublicKey(publicKey),
  dust: (config) => DustWallet(config).startWithSecretKey(dustKey, dustParams),
});
```

### State

초기 동기화를 기다리거나 업데이트를 구독하여 지갑 상태에 접근합니다.

```typescript
// 초기 동기화 대기
const syncedState = await wallet.waitForSyncedState();
console.log('Shielded balance:', syncedState.shielded.balances);
console.log('Unshielded balance:', syncedState.unshielded.balances);
console.log('DUST balance:', syncedState.dust.totalCoins);

// 상태 변경 구독
wallet.state().subscribe((state) => {
  if (state.isSynced) {
    console.log('Shielded coins:', state.shielded.availableCoins.length);
    console.log('Unshielded UTxOs:', state.unshielded.availableCoins.length);
  }
});
```

### Transfers

unshielded 전송은 Schnorr 서명을 사용하는 UTxO 기반 트랜잭션입니다. shielded 전송은 영지식 증명을 사용하므로 별도의 서명 작업이 필요 없습니다.

```typescript
import * as ledger from '@midnight-ntwrk/ledger-v8';

// unshielded 전송
await wallet
  .transferTransaction(
    [
      {
        type: 'unshielded',
        outputs: [
          {
            amount: 1_000_000n,
            receiverAddress: await receiverWallet.unshielded.getAddress(),
            type: ledger.unshieldedToken().raw,
          },
        ],
      },
    ],
    { shieldedSecretKeys, dustSecretKey },
    { ttl: new Date(Date.now() + 30 * 60 * 1000) }
  )
  .then((recipe) => wallet.signRecipe(recipe, (payload) => keystore.signData(payload)))
  .then((recipe) => wallet.finalizeRecipe(recipe))
  .then((tx) => wallet.submitTransaction(tx));

// shielded 전송 (서명 불필요)
await wallet
  .transferTransaction(
    [
      {
        type: 'shielded',
        outputs: [
          {
            amount: 1_000_000n,
            receiverAddress: await receiverWallet.shielded.getAddress(),
            type: ledger.shieldedToken().raw,
          },
        ],
      },
    ],
    { shieldedSecretKeys, dustSecretKey },
    { ttl: new Date(Date.now() + 30 * 60 * 1000) }
  )
  .then((recipe) => wallet.finalizeRecipe(recipe))
  .then((tx) => wallet.submitTransaction(tx));
```

### Lifecycle

```typescript
await wallet.start(shieldedSecretKeys, dustSecretKey);
await wallet.stop();
```

### Terms and Conditions

```typescript
const terms = await WalletFacade.fetchTermsAndConditions(networkId);
await wallet.acceptTermsAndConditions(terms);
```

## HD Wallet

BIP 32 / BIP 44 / CIP 1852 파생 방식으로 하나의 시드에서 세 가지 키를 모두 파생합니다.

```typescript
import * as ledger from '@midnight-ntwrk/ledger-v8';
import { HDWallet, Roles } from '@midnight-ntwrk/wallet-sdk-hd';

function deriveRoleKey(accountKey, role, addressIndex = 0) {
  const result = accountKey.selectRole(role).deriveKeyAt(addressIndex);
  if (result.type === 'keyDerived') {
    return Buffer.from(result.key);
  }
  return deriveRoleKey(accountKey, role, addressIndex + 1);
}

const hdWallet = HDWallet.fromSeed(seed);
const account = hdWallet.hdWallet.selectAccount(0);
const shieldedSeed = deriveRoleKey(account, Roles.Zswap);
const dustSeed = deriveRoleKey(account, Roles.Dust);
const unshieldedKey = deriveRoleKey(account, Roles.NightExternal);
hdWallet.hdWallet.clear();
```

## Address Format

Midnight은 주소에 Bech32m 형식을 사용하며, 네트워크별 접두사를 붙입니다.

```typescript
import {
  MidnightBech32m,
  UnshieldedAddress,
  ShieldedAddress,
  DustAddress,
  ShieldedCoinPublicKey,
  ShieldedEncryptionPublicKey,
} from '@midnight-ntwrk/wallet-sdk-address-format';
import * as ledger from '@midnight-ntwrk/ledger-v8';

const networkId = 'preprod';

// unshielded 주소 인코딩
const verifyingKey = ledger.signatureVerifyingKey(unshieldedSecretKey.toString('hex'));
const unshieldedAddress = new UnshieldedAddress(
  Buffer.from(ledger.addressFromKey(verifyingKey), 'hex')
);
const unshieldedBech32m = MidnightBech32m.encode(networkId, unshieldedAddress).toString();

// shielded 주소 인코딩
const shieldedAddress = new ShieldedAddress(
  new ShieldedCoinPublicKey(Buffer.from(shieldedKeys.coinPublicKey, 'hex')),
  new ShieldedEncryptionPublicKey(Buffer.from(shieldedKeys.encryptionPublicKey, 'hex'))
);
const shieldedBech32m = MidnightBech32m.encode(networkId, shieldedAddress).toString();

// DUST 주소 인코딩
const dustAddress = new DustAddress(dustSecretKey.publicKey);
const dustBech32m = MidnightBech32m.encode(networkId, dustAddress).toString();

// 주소 디코딩
const parsed = MidnightBech32m.parse(unshieldedBech32m);
const decoded = parsed.decode(UnshieldedAddress, networkId);
```

## DUST Management

NIGHT 코인을 등록하면 트랜잭션 수수료로 쓸 DUST가 생성됩니다.

```typescript
const { unshielded } = await wallet.waitForSyncedState();

// NIGHT를 등록해 DUST 생성 시작
await wallet
  .registerNightUtxosForDustGeneration(
    unshielded.availableCoins,
    unshieldedKeystore.getPublicKey(),
    (payload) => unshieldedKeystore.signData(payload)
  )
  .then((recipe) => wallet.finalizeRecipe(recipe))
  .then((tx) => wallet.submitTransaction(tx));
```

## DUST Sponsorship

스폰서가 사용자를 대신해 트랜잭션 수수료를 낼 수 있습니다.

```typescript
// 사용자는 DUST 밸런싱 없이 트랜잭션을 준비
const userRecipe = await userWallet.balanceUnboundTransaction(
  transaction,
  { shieldedSecretKeys, dustSecretKey },
  {
    ttl: new Date(Date.now() + 30 * 60 * 1000),
    tokenKindsToBalance: ['shielded', 'unshielded'],
  }
);

// 스폰서가 DUST를 추가하고 제출
const finalized = await userWallet.finalizeRecipe(
  await userWallet.signRecipe(userRecipe, (payload) => keystore.signData(payload))
);

await sponsorWallet
  .balanceFinalizedTransaction(
    finalized,
    { shieldedSecretKeys: sponsorKeys, dustSecretKey: sponsorDust },
    {
      ttl: new Date(Date.now() + 30 * 60 * 1000),
      tokenKindsToBalance: ['dust'],
    }
  )
  .then((recipe) => sponsorWallet.finalizeRecipe(recipe))
  .then((tx) => sponsorWallet.submitTransaction(tx));
```

## Atomic Swaps

단일 아토믹 트랜잭션으로 당사자 간 토큰을 신뢰 없이 교환합니다.

```typescript
// Alice가 token1을 내주고 token2를 받는 스왑을 개시
const aliceSwapTx = await aliceWallet
  .initSwap(
    { shielded: { [token1]: 1_000_000n } },
    [
      {
        type: 'shielded',
        outputs: [{
          type: token2,
          amount: 1_000_000n,
          receiverAddress: aliceShieldedAddress,
        }],
      },
    ],
    { shieldedSecretKeys: aliceKeys, dustSecretKey: aliceDust },
    { ttl: new Date(Date.now() + 30 * 60 * 1000) }
  )
  .then((recipe) => aliceWallet.finalizeRecipe(recipe));

// Bob이 스왑을 완료
await bobWallet
  .balanceFinalizedTransaction(
    aliceSwapTx,
    { shieldedSecretKeys: bobKeys, dustSecretKey: bobDust },
    { ttl: new Date(Date.now() + 30 * 60 * 1000) }
  )
  .then((recipe) => bobWallet.finalizeRecipe(recipe))
  .then((tx) => bobWallet.submitTransaction(tx));
```

## Alternative Proving

증명 서버에 HTTP로 접근할 수 없는 환경에서는 WASM 기반 증명을 사용합니다.

```typescript
import { makeWasmProvingService } from '@midnight-ntwrk/wallet-sdk-capabilities';

const wallet = await WalletFacade.init({
  configuration,
  shielded: (config) => ShieldedWallet(config).startWithSecretKeys(shieldedKeys),
  unshielded: (config) => UnshieldedWallet(config).startWithPublicKey(publicKey),
  dust: (config) => DustWallet(config).startWithSecretKey(dustKey, dustParams),
  provingService: () => makeWasmProvingService(),
});
```

## Release History

버전 이력과 변경 내역은 [Wallet SDK 릴리스 노트](/relnotes/wallet)를 참고하세요.
