// Coverage matrix data: the documented Midnight example dApps and contracts,
// mapped to the Compact / Midnight features each one demonstrates.
//
// Scope: every column is an example that has a published docs page, and every
// feature row is something at least one of those examples actually shows. Cells
// are sourced from the example pages themselves, so each link is real and each
// mark is backed by code on the linked page.
//
// To keep this current:
//  - Add or rename a column in `columns` (id must be unique, lowercase-dashed)
//    and point `href` at its docs page.
//  - Under each feature in `features`, add `"<column-id>": "x"` for a feature
//    the example fully demonstrates, or `"?"` for partial / in-progress.
//
// `group` buckets a column as a full "DApps" or a standalone "Contracts" example.

export const columns = [
  {
    id: "calculator",
    name: "계산기",
    group: "Contracts",
    href: "/examples/contracts/calculator"
  },
  {
    id: "token-transfers",
    name: "토큰 전송",
    group: "Contracts",
    href: "/examples/contracts/token-transfers"
  },
  {
    id: "private-guest-list",
    name: "비공개 게스트 리스트",
    group: "Contracts",
    href: "/examples/contracts/private-guest-list"
  },
  {
    id: "election",
    name: "선거",
    group: "Contracts",
    href: "/examples/contracts/election"
  },
  {
    id: "private-reserve-auction",
    name: "비공개 최저가 경매",
    group: "Contracts",
    href: "/examples/contracts/private-reserve-auction"
  },
  {
    id: "battleship",
    name: "배틀쉽",
    group: "Contracts",
    href: "/examples/contracts/battleship-simple"
  },
  {
    id: "bboard",
    name: "게시판",
    group: "DApps",
    href: "/examples/dapps/bboard"
  },
  {
    id: "zkloan",
    name: "ZK Loan",
    group: "DApps",
    href: "/examples/dapps/zkloan"
  }
];

export const features = [
  {
    name: "witness 함수(비공개 입력)",
    coverage: {
      calculator: "x",
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "비공개 상태",
    coverage: {
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "공개 원장 상태",
    coverage: {
      calculator: "x",
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "프라이버시 경계(disclose)",
    coverage: {
      calculator: "x",
      "token-transfers": "x",
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "오프체인 연산의 온체인 검증",
    coverage: {
      calculator: "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      zkloan: "x"
    }
  },
  {
    name: "서킷 접근 제어",
    coverage: {
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "원장 Counter",
    coverage: {
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x"
    }
  },
  {
    name: "원장 Set",
    coverage: {
      "private-guest-list": "x",
      election: "x",
      battleship: "x"
    }
  },
  {
    name: "원장 Map",
    coverage: {
      election: "x",
      "private-reserve-auction": "x"
    }
  },
  {
    name: "원장 List",
    coverage: {
      battleship: "x"
    }
  },
  {
    name: "sealed 원장 필드",
    coverage: {
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x"
    }
  },
  {
    name: "표준 라이브러리 Maybe",
    coverage: {
      bboard: "x"
    }
  },
  {
    name: "원장의 Opaque 문자열",
    coverage: {
      election: "x",
      bboard: "x"
    }
  },
  {
    name: "DApp 전용 공개 키(추적 불가 신원)",
    coverage: {
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      zkloan: "x"
    }
  },
  {
    name: "커밋먼트와 persistent 해싱",
    coverage: {
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x"
    }
  },
  {
    name: "신원 노출 없는 ZK 신원 증명",
    coverage: {
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "서킷 내 서명 검증",
    coverage: {
      zkloan: "x"
    }
  },
  {
    name: "네이티브 토큰(NIGHT) 연산",
    coverage: {
      "token-transfers": "x",
      "private-guest-list": "x"
    }
  },
  {
    name: "차폐 토큰 연산",
    coverage: {
      "token-transfers": "x"
    }
  },
  {
    name: "중간 witness",
    coverage: {
      battleship: "x"
    }
  },
  {
    name: "명시적 상태 머신(enum)",
    coverage: {
      "private-guest-list": "x",
      election: "x",
      "private-reserve-auction": "x",
      battleship: "x",
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "다단계 승인 또는 턴 흐름",
    coverage: {
      battleship: "x",
      zkloan: "x"
    }
  },
  {
    name: "CLI 도구",
    coverage: {
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "웹 UI",
    coverage: {
      bboard: "x",
      zkloan: "x"
    }
  },
  {
    name: "지갑 및 증명 서버 연동",
    coverage: {
      bboard: "x",
      zkloan: "x"
    }
  }
];

export default { columns, features };

// Dev-only integrity check: warn about coverage keys that do not match a known
// column id, or duplicate column ids. Stripped from production builds.
if (process.env.NODE_ENV !== "production") {
  const ids = new Set();
  columns.forEach((c) => {
    if (ids.has(c.id)) {
      console.warn(`[CoverageMatrix] duplicate column id: "${c.id}"`);
    }
    ids.add(c.id);
  });
  features.forEach((f) => {
    Object.keys(f.coverage).forEach((key) => {
      if (!ids.has(key)) {
        console.warn(
          `[CoverageMatrix] feature "${f.name}" references unknown column id "${key}"`
        );
      }
    });
  });
}
