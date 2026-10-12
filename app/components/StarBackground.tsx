"use client";

import styles from "./StarBackground.module.css";

const defaultStars = [
  { left: "8%", top: "12%", kind: "dot-sm" },
  { left: "18%", top: "28%", kind: "spark" },
  { left: "24%", top: "15%", kind: "dot-md" },
  { left: "32%", top: "35%", kind: "dot-sm" },
  { left: "42%", top: "18%", kind: "gold" },
  { left: "55%", top: "25%", kind: "dot-md" },
  { left: "68%", top: "14%", kind: "spark" },
  { left: "75%", top: "32%", kind: "dot-sm" },
  { left: "84%", top: "16%", kind: "gold-lg" },
  { left: "92%", top: "28%", kind: "dot-md" },
  { left: "12%", top: "68%", kind: "dot-md" },
  { left: "25%", top: "78%", kind: "spark" },
  { left: "38%", top: "85%", kind: "dot-sm" },
  { left: "62%", top: "72%", kind: "gold" },
  { left: "78%", top: "65%", kind: "dot-md" },
  { left: "88%", top: "82%", kind: "spark" },
  { left: "50%", top: "90%", kind: "dot-sm" },
];

export default function StarBackground() {
  return (
    <div className={styles.starField} aria-hidden="true">
      <div className={styles.glowNebulaTop} />
      <div className={styles.glowNebulaBottom} />
      <div className={styles.shootingStar} />

      {defaultStars.map((s, index) => {
        let starClass = styles.starDotSm;
        if (s.kind === "dot-md") starClass = styles.starDotMd;
        if (s.kind === "spark") starClass = styles.starSpark;
        if (s.kind === "gold") starClass = styles.starGold;
        if (s.kind === "gold-lg") starClass = styles.starGoldLg;

        return (
          <i
            key={index}
            className={`${styles.star} ${starClass}`}
            style={{ left: s.left, top: s.top }}
          />
        );
      })}
    </div>
  );
}
