import React, { useMemo, useState } from "react";
import Link from "@docusaurus/Link";
import { columns as allColumns, features as allFeatures } from "./data";
import styles from "./styles.module.css";

const GROUPS = [
  { id: "All", label: "전체" },
  { id: "DApps", label: "DApp" },
  { id: "Contracts", label: "컨트랙트" }
];

const MARKS = {
  x: { cls: "markFull", label: "구현됨" },
  "?": { cls: "markPartial", label: "부분 구현 또는 진행 중" }
};

function CoverageMark({ value }) {
  const mark = MARKS[value] || { cls: "markNone", label: "다루지 않음" };
  return (
    <span
      className={styles[mark.cls]}
      role="img"
      aria-label={mark.label}
      title={mark.label}
    />
  );
}

function groupClass(group) {
  return group === "Contracts" ? styles.isContracts : styles.isDapps;
}

function ColumnHeader({ column }) {
  const inner = <span className={styles.colName}>{column.name}</span>;
  return (
    <th
      className={`${styles.colHeader} ${groupClass(column.group)}`}
      scope="col"
    >
      {column.href ? (
        <Link className={styles.colLink} to={column.href}>
          {inner}
        </Link>
      ) : (
        <span className={styles.colPlain}>{inner}</span>
      )}
    </th>
  );
}

export default function CoverageMatrix() {
  const [group, setGroup] = useState("All");
  const [selectedFeature, setSelectedFeature] = useState("all");

  const visibleColumns = useMemo(
    () =>
      group === "All"
        ? allColumns
        : allColumns.filter((c) => c.group === group),
    [group]
  );

  const visibleFeatures = useMemo(
    () =>
      selectedFeature === "all"
        ? allFeatures
        : allFeatures.filter((f) => f.name === selectedFeature),
    [selectedFeature]
  );

  // Examples that demonstrate the currently selected feature. Computed against
  // every column (not the group-filtered view) so the summary always reflects
  // reality, then we note when the active filter hides some of them.
  const matches = useMemo(() => {
    if (selectedFeature === "all") return null;
    const feature = allFeatures.find((f) => f.name === selectedFeature);
    if (!feature) return [];
    return allColumns
      .filter((c) => feature.coverage[c.id])
      .map((c) => ({ ...c, level: feature.coverage[c.id] }));
  }, [selectedFeature]);

  // Of the matches, how many are hidden by the current group filter.
  const hiddenByFilter = useMemo(() => {
    if (!matches || group === "All") return 0;
    return matches.filter((m) => m.group !== group).length;
  }, [matches, group]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>
            기능·해결 과제로 찾기
          </span>
          <div className={styles.selectShell}>
            <select
              className={styles.select}
              aria-label="기능·해결 과제로 찾기"
              value={selectedFeature}
              onChange={(e) => setSelectedFeature(e.target.value)}
            >
              <option value="all">전체 기능</option>
              {allFeatures.map((f) => (
                <option key={f.name} value={f.name}>
                  {f.name}
                </option>
              ))}
            </select>
          </div>
        </label>

        <div className={styles.field}>
          <span className={styles.fieldLabel}>표시</span>
          <div
            className={styles.groupToggle}
            role="group"
            aria-label="예제 유형으로 필터"
          >
            {GROUPS.map((g) => (
              <button
                key={g.id}
                type="button"
                aria-pressed={g.id === group}
                className={
                  g.id === group ? styles.groupBtnActive : styles.groupBtn
                }
                onClick={() => setGroup(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {matches ? (
        <div className={styles.summary}>
          {matches.length > 0 ? (
            <>
              <span className={styles.summaryLabel}>이 기능을 보여주는 예제</span>
              <span className={styles.chips}>
                {matches.map((m) =>
                  m.href ? (
                    <Link key={m.id} to={m.href} className={styles.chipLink}>
                      {m.name}
                      {m.level === "?" ? <em> 부분</em> : null}
                    </Link>
                  ) : (
                    <span key={m.id} className={styles.chip}>
                      {m.name}
                      {m.level === "?" ? <em> 부분</em> : null}
                    </span>
                  )
                )}
              </span>
              {hiddenByFilter > 0 ? (
                <span className={styles.summaryHint} role="status">
                  현재 필터에 가려진 예제 {hiddenByFilter}개가 있습니다. 전체로
                  전환하면 볼 수 있습니다.
                </span>
              ) : null}
            </>
          ) : (
            <span className={styles.summaryEmpty}>
              아직 이 기능을 다루는 문서화된 예제가 없습니다.
            </span>
          )}
        </div>
      ) : null}

      <div className={styles.tableCard}>
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.cornerHeader} scope="col">
                  기능 / 해결 과제
                </th>
                {visibleColumns.map((c) => (
                  <ColumnHeader key={c.id} column={c} />
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleFeatures.map((feature) => (
                <tr
                  key={feature.name}
                  className={
                    selectedFeature === feature.name
                      ? styles.rowActive
                      : undefined
                  }
                >
                  <th className={styles.rowHeader} scope="row">
                    {feature.name}
                  </th>
                  {visibleColumns.map((c) => (
                    <td key={c.id} className={styles.cell}>
                      <CoverageMark value={feature.coverage[c.id]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={styles.markFull} /> 구현됨
        </span>
        <span className={styles.legendItem}>
          <span className={styles.markPartial} /> 부분 구현 또는 진행 중
        </span>
        <span className={styles.legendItem}>
          <span className={styles.markNone} /> 다루지 않음
        </span>
        <span className={styles.legendSpacer} />
        <span className={styles.legendItem}>
          <span className={`${styles.swatch} ${styles.isDapps}`} /> DApp
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.swatch} ${styles.isContracts}`} /> 컨트랙트
        </span>
      </div>
    </div>
  );
}
