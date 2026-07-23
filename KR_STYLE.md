# Midnight KR Docs — 용어 표기 기준

2026-07-23 확정. 전체 코퍼스(docs·blog·sdks 296개 문서) 표기 분포를 측정한 뒤 항목별로 결정했다.
번역·검수·머지 충돌 해결 시 이 문서를 기준으로 한다.

## 대원칙

1. **Compact/SDK에 식별자로 실존하는 개념은 영문**, 순수 일반명사는 한글.
2. **고정 복합어는 영문 유지.** `proof server`, `Wallet SDK`, `Midnight node`, `Cardano node`,
   `proving key`, `verifier key`, `Lace wallet`, `wallet seed`, `wallet address`, `wallet API` 등.
3. **괄호 병기하지 않는다.** `차폐(shielded)` 같은 표기는 쓰지 않는다. 낯선 용어는 용어집·문서 링크로 유도한다.
4. **UI 라벨은 원문 그대로.** 버튼·메뉴 텍스트(`Connect Wallet` 등)는 번역하지 않는다.
5. **헤딩(H1~H4)은 영문 유지.**
6. **`title`·`sidebar_label`도 영문.** 사이드바와 페이지 제목은 전부 영문으로 통일한다(2026-07-23 확정).
   릴리스 노트 title을 한국어(`...릴리스 노트`)로 쓰던 기존 예외는 폐지했다.
   upstream에 대응 파일이 있으면 upstream 원문 표기를 그대로 가져온다.
   - **예외 1 — 블로그**: `blog/*.mdx`의 frontmatter `title`은 한국어를 유지한다. 블로그는 소통 콘텐츠다.
   - **예외 2 — 릴리스 노트 본문 섹션 헤딩**: 한국어 고정 세트를 계속 쓴다.
7. **`description`은 한국어.** 단 릴리스 노트 `description`은 영문 유지(기존 관례).

## 영문으로 쓰는 용어

| 용어 | 비고 |
|---|---|
| `ledger` | Compact 키워드. `ledger state`, `public ledger` 등 복합어도 영문 |
| `circuit` | Compact 키워드. 조사는 받침형(`circuit은/이/을/과/으로`) — 한국어 발음 "서킷" 기준. 단 `산술 회로`·`논리 회로` 등 일반 수학·전산 개념어는 한글 `회로` 유지 |
| `witness` | |
| `private state` / `public state` | `ledger state`와 정렬 |
| `shielded` / `unshielded` | 반드시 짝으로. `sendShielded`·`unshieldedBalance` 식별자와 정렬 |
| `commitment` | `nullifier`와 짝 |
| `nullifier` | |
| `provider` | |
| `indexer` | |
| `faucet` | |
| `proving key` / `verifier key` | ZK 아티팩트 키만 영문 |

## 한글로 쓰는 용어

| 용어 | 비고 |
|---|---|
| 컨트랙트 / 스마트 컨트랙트 | |
| 지갑 | 단독일 때만. `Wallet SDK`·`Lace wallet` 등 복합어는 영문 |
| 증명 | 단독일 때만. `proof server`·`proof provider`는 영문 |
| 노드 | 역할명도 한글: 부트 노드·풀 노드·RPC 노드·릴레이 노드. 단 `Midnight node`·`Cardano node`는 제품명이라 영문 |
| 키 / 공개 키 / 비밀 키 | `개인 키`는 `비밀 키`로 통일 |
| 영지식 / 영지식 증명 / ZK 증명 | 약어 `ZK`·`ZKP` 단독 사용은 그대로 |
| 트랜잭션 | |
| 토큰 | |
| 블록 | |
| 잔액 | |
| 배포 | |

## 쓰지 않는 표기

`원장`, `서킷`, `프로바이더`, `인덱서`, `널리파이어`, `위트니스`, `증인`, `커밋먼트`,
`차폐`, `비차폐`, `실드`, `비공개 상태`, `프라이빗 상태`, `공개 상태`, `원장 상태`,
`증명 서버`, `증명 키`, `검증 키`, `개인 키`

> 위 목록은 "다수파로 흡수될 소수 표기"다. 기존 문서에서 발견되면 기준 표기로 교체한다.

## 문체

- 설명문 `~합니다`, 지시·안내문 `~하세요`, 짧은 설명 `~입니다`. 문맥에 맞게 조절하고 일괄 통일하지 않는다.
- 하십시오체(`~하십시오`, `~하시기 바랍니다`)는 쓰지 않는다.
- 영어 고유명사 뒤 조사: 받침 없는 영어 단어는 `은/을/이`를 쓴다. **Midnight은, Midnight을, Midnight이**.
  `NIGHT은/을/이`도 동일. `Midnight는/를/가`, `NIGHT는/를/가`는 쓰지 않는다.
- 직역투를 쓰지 않는다.
  - `~에 의해` → 능동으로. "노드에 의해 생성되고" → "노드가 생성하고"
  - `~을 가능하게 합니다` → "덕분에 ~가 성립합니다" / "~할 수 있습니다"
  - `~할 수 있게 해줍니다` → "~할 수 있습니다"
  - 영어 `This is~`를 그대로 옮긴 문두 `이것은/그것은` 지양

## 검사 도구

```bash
npm run kr-lint                          # 전체 검사
node scripts/kr-lint.mjs terminology     # 특정 검사만
node scripts/kr-lint.mjs --path docs/compact
node scripts/kr-lint.mjs --json
```

**upstream sync 후 빌드 전에 반드시 실행한다.** 5가지를 검사한다.

| 검사 | 내용 |
|---|---|
| `untranslated` | 한글이 거의 없는 문서 (번역 누락) |
| `english-prose` | 한글 문서에 섞여 들어온 영문 산문 (auto-merge 유입) |
| `frontmatter` | `title`·`sidebar_label`·`description` 언어 정책 |
| `terminology` | 위 폐기 표기 |
| `style` | 직역투 · 조사 규칙 |

발견 건수가 있으면 종료 코드 1을 반환한다.

## 적용 현황

- **완료** — `title`·`sidebar_label`·본문 H1 영문 통일(2026-07-23). 56개 파일 85곳 수정,
  잔여 한글 0건. 값은 upstream 원문에서 가져왔다.
- **완료** — 용어 기준에 따른 본문 치환(2026-07-23). docs·sdks·blog 전 구간, 약 2,100곳.
  잔여 폐기 표기 0건.
- **완료** — 직역투 정리(2026-07-23). `에 의해` 41곳 능동태 전환, `가능하게 합니다`류 17곳,
  문두 `이것은` 60곳(릴리스 노트는 주어 생략, 나머지는 `이는`), 하십시오체 2곳.
- **제외** — `docs/_learn`, `docs/_develop`(upstream deprecated),
  `compact-keywords.mdx`(자동 생성 + 언어 키워드 목록).
