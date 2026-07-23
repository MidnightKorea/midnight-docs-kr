#!/usr/bin/env node
/**
 * kr-lint — Midnight KR docs 번역 품질 검사기
 *
 * upstream sync 후 마지막 단계로 반드시 실행한다.
 * 기준 문서: KR_STYLE.md
 *
 * 사용법:
 *   node scripts/kr-lint.mjs                 # 전체 검사
 *   node scripts/kr-lint.mjs untranslated    # 특정 검사만
 *   node scripts/kr-lint.mjs --path docs/compact
 *   node scripts/kr-lint.mjs --json
 *
 * 검사 종류:
 *   untranslated   한글이 거의 없는 문서 (번역 누락)
 *   english-prose  한글 문서에 섞여 있는 영문 산문 (auto-merge 유입)
 *   frontmatter    title / sidebar_label / description 언어 정책
 *   terminology    KR_STYLE 폐기 표기
 *   style          직역투 · 조사 규칙
 *
 * 종료 코드: 발견 0건이면 0, 있으면 1
 */

import fs from "node:fs";
import path from "node:path";

const ROOTS = ["docs", "sdks", "blog"];
// upstream deprecated / 자동 생성 / 번역 대상 아님
const SKIP_DIRS = ["api-reference", "_learn", "_develop", "node_modules"];
const HANGUL = /[가-힣]/;

// ── 파일 수집 ──────────────────────────────────────────────
function walk(dir, out = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = path.join(dir, e.name).split(path.sep).join("/");
    if (e.isDirectory()) {
      if (SKIP_DIRS.some((s) => e.name === s)) continue;
      walk(p, out);
    } else if (/\.mdx?$/.test(e.name)) {
      out.push(p);
    }
  }
  return out;
}

function collect(filter) {
  const files = [];
  for (const r of ROOTS) {
    if (filter && !filter.startsWith(r) && !r.startsWith(filter)) continue;
    if (fs.existsSync(r)) walk(r, files);
  }
  return filter ? files.filter((f) => f.startsWith(filter)) : files;
}

// ── 텍스트 유틸 ────────────────────────────────────────────
const splitFrontmatter = (s) => {
  const m = /^---\n([\s\S]*?)\n---\n/.exec(s);
  return m ? { fm: m[1], body: s.slice(m[0].length), fmLines: m[0].split("\n").length - 1 }
           : { fm: "", body: s, fmLines: 0 };
};
const stripFences = (s) => s.replace(/```[\s\S]*?```/g, "");
const stripInline = (s) => s.replace(/`[^`\n]*`/g, "");
const stripLinks = (s) => s.replace(/\]\([^)\n]*\)/g, "]").replace(/https?:\/\/\S+/g, "");
// JSX 태그·컴포넌트명·import 문은 번역 대상이 아니므로 언어 비율 계산에서 제외
const stripJsx = (s) =>
  s.replace(/^(import|export)\s+.*$/gm, "")
   .replace(/<[^>\n]*>/g, "")
   .replace(/^\s*(to|cta|title|href|repo|docs|className|value|groupId)\s*[:=].*$/gm, "");
const isGenerated = (s) => /DO NOT EDIT|automatically generated/i.test(s);
// `_` 로 시작하는 폴더·파일 = upstream 초안/partial. 페이지로 빌드되지 않는다.
const isDraft = (p) => p.split("/").some((seg) => seg.startsWith("_"));

// 워킹트리가 CRLF일 수 있으므로 정규화한다(줄 번호는 그대로 유지된다).
const read = (p) => fs.readFileSync(p, "utf8").replace(/\r\n/g, "\n");
const fmField = (fm, key) => {
  const m = new RegExp(`^${key}:\\s*(.+)$`, "m").exec(fm);
  return m ? m[1].trim().replace(/^["']|["']$/g, "") : null;
};

// ── 검사 1: 미번역 문서 ────────────────────────────────────
function checkUntranslated(files) {
  const out = [];
  for (const p of files) {
    if (isDraft(p)) continue;
    const raw = read(p);
    if (isGenerated(raw)) continue;
    const { body } = splitFrontmatter(raw);
    const prose = stripJsx(stripLinks(stripInline(stripFences(body))));
    const ko = (prose.match(/[가-힣]/g) || []).length;
    const en = (prose.match(/[A-Za-z]/g) || []).length;
    if (ko + en < 200) continue; // 코드 조각 partial 등은 대상 아님
    const ratio = ko / (ko + en);
    if (ratio < 0.12) {
      out.push({ file: p, line: 1, msg: `한글 비율 ${(ratio * 100).toFixed(1)}% — 번역 누락 의심 (한글 ${ko} / 영문 ${en})` });
    }
  }
  return out;
}

// ── 검사 2: 한글 문서 속 영문 산문 ─────────────────────────
const STOPWORDS = new Set(
  ("the and for you with that this are can from use when which your not has have all their into they more than each how what its will using see make only also need must should".split(" "))
);
function checkEnglishProse(files) {
  const out = [];
  for (const p of files) {
    const raw = read(p);
    if (isGenerated(raw)) continue;
    const { body, fmLines } = splitFrontmatter(raw);
    if (!HANGUL.test(stripFences(body))) continue; // 통째 영문은 검사 1 소관

    const lines = raw.split("\n");
    let inFence = false;
    let inComment = false;
    for (let i = fmLines; i < lines.length; i++) {   // frontmatter 제외
      const line = lines[i];
      const t = line.trim();
      // 학술 인용·외부 자료 링크 제목·JSX 속성값은 원문 유지가 관례
      if (/^\[\^/.test(t)) continue;
      if (/^[-*]\s*\[.*\]\(.*\)\s*$/.test(t)) continue;
      if (/^[A-Za-z_][\w-]*\s*=\s*["'{]/.test(t)) continue;
      if (t.startsWith("```")) { inFence = !inFence; continue; }
      if (t.includes("{/*")) inComment = true;
      if (inComment) { if (t.includes("*/}")) inComment = false; continue; }
      if (inFence || !t) continue;
      if (HANGUL.test(t)) continue;
      if (/^(import|export|<|\/>|\||:::|---|#|>|https?:)/.test(t)) continue;
      if (/^[-*]\s*$/.test(t)) continue;

      const clean = stripLinks(stripInline(t)).replace(/\[[^\]]*\]/g, "");
      const words = clean.match(/\b[A-Za-z]{2,}\b/g) || [];
      const fn = words.filter((w) => STOPWORDS.has(w.toLowerCase())).length;
      if (words.length >= 7 && fn >= 2) {
        out.push({ file: p, line: i + 1, msg: `영문 산문 유입: ${t.slice(0, 90)}` });
      }
    }
  }
  return out;
}

// ── 검사 3: frontmatter 언어 정책 ──────────────────────────
// KR_STYLE: title / sidebar_label 은 영문. description 은 한국어(릴리스 노트는 영문 유지).
// blog frontmatter title 은 한국어 유지.
function checkFrontmatter(files) {
  const out = [];
  for (const p of files) {
    if (isDraft(p)) continue;
    const raw = read(p);
    const { fm, body } = splitFrontmatter(raw);
    if (!fm) continue;
    if (!HANGUL.test(stripFences(body))) continue;
    const isBlog = p.startsWith("blog/");
    const isRelnotes = p.startsWith("docs/relnotes/");

    for (const key of ["title", "sidebar_label"]) {
      const v = fmField(fm, key);
      if (!v) continue;
      if (isBlog && key === "title") continue; // 블로그 제목은 한국어 유지
      if (HANGUL.test(v)) {
        out.push({ file: p, line: 1, msg: `${key}가 한글입니다(영문이어야 함): ${v.slice(0, 60)}` });
      }
    }
    const d = fmField(fm, "description");
    if (d && !isRelnotes && !HANGUL.test(d) && (d.match(/\b[A-Za-z]{2,}\b/g) || []).length >= 4) {
      out.push({ file: p, line: 1, msg: `description이 영문입니다(한국어여야 함): ${d.slice(0, 60)}` });
    }
  }
  return out;
}

// ── 검사 4: 폐기 표기 ──────────────────────────────────────
const DEPRECATED = [
  ["원장", "ledger"], ["서킷", "circuit"], ["위트니스", "witness"],
  ["커밋먼트", "commitment"], ["널리파이어", "nullifier"], ["프로바이더", "provider"],
  ["인덱서", "indexer"], ["비차폐", "unshielded"], ["실드", "shielded"],
  ["비공개 상태", "private state"], ["프라이빗 상태", "private state"],
  ["공개 상태", "public state"], ["증명 서버", "proof server"],
  ["증명 키", "proving key"], ["검증 키", "verifier key"], ["개인 키", "비밀 키"],
];
// '차폐'는 '산술 회로'처럼 예외가 없으므로 단독 검사
function checkTerminology(files) {
  const out = [];
  for (const p of files) {
    const raw = read(p);
    const lines = raw.split("\n");
    let inFence = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim().startsWith("```")) { inFence = !inFence; continue; }
      if (inFence) continue;
      const t = stripInline(line);
      for (const [bad, good] of DEPRECATED) {
        if (t.includes(bad)) out.push({ file: p, line: i + 1, msg: `폐기 표기 '${bad}' → '${good}'` });
      }
      if (/차폐/.test(t)) out.push({ file: p, line: i + 1, msg: `폐기 표기 '차폐' → 'shielded'` });
      // 회로: 산술/논리 회로만 허용
      const m = /(\S*)\s?회로/.exec(t);
      if (m && !/산술|논리/.test(m[1])) {
        out.push({ file: p, line: i + 1, msg: `'회로' → 'circuit' (산술·논리 회로만 예외)` });
      }
    }
  }
  return out;
}

// ── 검사 5: 직역투 · 조사 ──────────────────────────────────
const STYLE = [
  [/에 의해/, "수동태 직역투 — 능동으로 재작성"],
  [/가능하게 (합|해)/, "'~을 가능하게 합니다' — '~할 수 있습니다' 등으로"],
  [/할 수 있게 (해|만들)/, "'~할 수 있게 해줍니다' — '~할 수 있습니다'로"],
  [/(^|\. )이것은 /, "문두 '이것은' — '이는'으로 또는 주어 생략"],
  [/(하십시오|하시기 바랍니다)/, "하십시오체 — 하세요체로 통일"],
  [/되어집니다|지게 됩니다/, "이중 피동"],
  [/Midnight(는|가|를|와|로)(?![가-힣])/, "조사 규칙: Midnight은/이/을/과/으로"],
  [/(?<![a-zA-Z])NIGHT(는|가|를|와|로)(?![가-힣])/, "조사 규칙: NIGHT은/이/을/과/으로"],
  [/(?<![a-zA-Z])circuit(는|가|를|와|로)(?![가-힣])/, "조사 규칙: circuit은/이/을/과/으로"],
  [/증명 server|proof 서버/, "혼합 표기 — 'proof server'로"],
];
function checkStyle(files) {
  const out = [];
  for (const p of files) {
    const raw = read(p);
    const lines = raw.split("\n");
    let inFence = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim().startsWith("```")) { inFence = !inFence; continue; }
      if (inFence) continue;
      const t = stripInline(line);
      for (const [re, msg] of STYLE) {
        if (re.test(t)) out.push({ file: p, line: i + 1, msg });
      }
    }
  }
  return out;
}

// ── 실행 ──────────────────────────────────────────────────
const CHECKS = {
  untranslated: ["미번역 문서", checkUntranslated],
  "english-prose": ["영문 산문 유입", checkEnglishProse],
  frontmatter: ["frontmatter 언어 정책", checkFrontmatter],
  terminology: ["폐기 표기", checkTerminology],
  style: ["직역투 · 조사", checkStyle],
};

const argv = process.argv.slice(2);
const asJson = argv.includes("--json");
const pathIdx = argv.indexOf("--path");
const filter = pathIdx >= 0 ? argv[pathIdx + 1] : null;
const wanted = argv.filter((a) => CHECKS[a]);
const names = wanted.length ? wanted : Object.keys(CHECKS);

const files = collect(filter);
const results = {};
let total = 0;
for (const n of names) {
  const found = CHECKS[n][1](files);
  results[n] = found;
  total += found.length;
}

if (asJson) {
  console.log(JSON.stringify({ files: files.length, total, results }, null, 2));
} else {
  console.log(`kr-lint — 검사 대상 ${files.length}개 문서${filter ? ` (${filter})` : ""}\n`);
  for (const n of names) {
    const found = results[n];
    const label = CHECKS[n][0];
    if (!found.length) {
      console.log(`  OK    ${n.padEnd(15)} ${label}`);
      continue;
    }
    console.log(`  FAIL  ${n.padEnd(15)} ${label} — ${found.length}건`);
    for (const f of found.slice(0, 25)) {
      console.log(`          ${f.file}:${f.line}  ${f.msg}`);
    }
    if (found.length > 25) console.log(`          ... 외 ${found.length - 25}건`);
  }
  console.log(`\n합계 ${total}건`);
  if (total) console.log("기준: KR_STYLE.md");
}

process.exit(total ? 1 : 0);
