"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import StarBackground from "../components/StarBackground";
import styles from "./result.module.css";

const subjectNames: Record<string, string> = {
  quant: "QUANTITATIVE APTITUDE",
  logical: "LOGICAL APTITUDE",
  verbal: "VERBAL APTITUDE",
};

const topicNames: Record<string, string> = {
  // QUANT
  percentages: "PERCENTAGES",
  "profit-loss": "PROFIT & LOSS",
  "ratio-proportion": "RATIO & PROPORTION",
  average: "AVERAGE",
  "time-work": "TIME & WORK",
  "time-distance": "TIME & DISTANCE",
  "simple-interest": "SIMPLE INTEREST",
  "compound-interest": "COMPOUND INTEREST",
  "number-system": "NUMBER SYSTEM",
  probability: "PROBABILITY",

  // LOGICAL
  analogy: "ANALOGY",
  classification: "CLASSIFICATION",
  "number-alphabet-series": "NUMBER & ALPHABET SERIES",
  "coding-decoding": "CODING-DECODING",
  "blood-relations": "BLOOD RELATIONS",
  "direction-sense": "DIRECTION SENSE",
  "ranking-order": "RANKING & ORDER",
  syllogism: "SYLLOGISM",
  "seating-arrangement": "SEATING ARRANGEMENT",
  "logical-puzzles": "LOGICAL PUZZLES",

  // VERBAL
  vocabulary: "VOCABULARY",
  "synonyms-antonyms": "SYNONYMS & ANTONYMS",
  "sentence-completion": "SENTENCE COMPLETION",
  "spotting-errors": "SPOTTING ERRORS",
  "sentence-correction": "SENTENCE CORRECTION",
  "para-jumbles": "PARA JUMBLES",
  "reading-comprehension": "READING COMPREHENSION",
  "idioms-phrases": "IDIOMS & PHRASES",
  "one-word-substitution": "ONE WORD SUBSTITUTION",
  "grammar-usage": "GRAMMAR & USAGE",
};

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const subject = searchParams.get("subject") || "verbal";
  const topic = searchParams.get("topic") || "vocabulary";
  const paramCorrect = searchParams.get("correct");
  const paramTotal = searchParams.get("total");
  const paramTime = searchParams.get("time");
  const paramXp = searchParams.get("xp");

  const correctCount = paramCorrect !== null ? parseInt(paramCorrect, 10) : 8;
  const totalCount = paramTotal !== null ? parseInt(paramTotal, 10) : 10;
  const wrongCount = Math.max(0, totalCount - correctCount);
  const timeTaken = paramTime || "04:15";
  const xp = paramXp !== null ? parseInt(paramXp, 10) : correctCount * 10;

  const easyTotal = Math.ceil(totalCount * 0.4);
  const hardTotal = Math.floor(totalCount * 0.2);
  const mediumTotal = totalCount - easyTotal - hardTotal;

  const easyCorrect = Math.min(easyTotal, Math.ceil(correctCount * 0.45));
  const mediumCorrect = Math.min(mediumTotal, Math.max(0, Math.ceil(correctCount * 0.35)));
  const hardCorrect = Math.min(hardTotal, Math.max(0, correctCount - easyCorrect - mediumCorrect));

  const result = {
    correct: correctCount,
    wrong: wrongCount,
    total: totalCount,
    timeTaken,
    xp,

    difficulty: {
      easy: {
        correct: easyCorrect,
        total: easyTotal,
      },
      medium: {
        correct: mediumCorrect,
        total: mediumTotal,
      },
      hard: {
        correct: hardCorrect,
        total: hardTotal,
      },
    },
  };

  const accuracy = Math.round(
    (result.correct / result.total) * 100
  );

  const subjectName =
    subjectNames[subject] || "APTITUDE";

  const topicName =
    topicNames[topic] ||
    topic.replace(/-/g, " ").toUpperCase();

  const getPercentage = (
    correct: number,
    total: number
  ) => {
    if (total === 0) return 0;

    return Math.round((correct / total) * 100);
  };

  const goToDashboard = () => {
    router.push("/dashboard");
  };

  const goToMap = () => {
    router.push(`/${subject}`);
  };

  const goToQuestion = () => {
    router.push(`/${subject}/question?topic=${topic}`);
  };

  return (
    <main className={styles.page}>
      <StarBackground />
      <div className={styles.gameFrame}>

        {/* HEADER */}

        <header className={styles.header}>

          <button
            className={styles.back}
            onClick={() => router.back()}
          >
            ← <span>BACK</span>
          </button>

          <div className={styles.logo}>
            WINK
          </div>

          <div className={styles.headerStar}>
            ✦
          </div>

        </header>

        {/* HERO */}

        <section className={styles.hero}>

          <p className={styles.complete}>
            MISSION COMPLETE
          </p>

          <h1>{topicName}</h1>

          <p className={styles.subject}>
            {subjectName}
          </p>

          {/* ACCURACY */}

          <div className={styles.accuracyWrapper}>

            <div
              className={styles.accuracyRing}
              style={
                {
                  "--progress": `${accuracy * 3.6}deg`,
                } as React.CSSProperties
              }
            >

              <div className={styles.accuracyInner}>
                <span>{accuracy}%</span>
              </div>

            </div>

            <p className={styles.accuracyLabel}>
              ACCURACY
            </p>

          </div>

          {/* XP */}

          <div className={styles.xp}>
            +{result.xp} XP
          </div>

        </section>

        {/* STATS */}

        <section className={styles.stats}>

          <div className={styles.statCard}>
            <strong>{result.correct}</strong>

            <span>
              CORRECT
            </span>
          </div>

          <div className={styles.statCard}>
            <strong>{result.wrong}</strong>

            <span>
              WRONG
            </span>
          </div>

          <div className={styles.statCard}>
            <strong>{result.timeTaken}</strong>

            <span>
              TIME TAKEN
            </span>
          </div>

        </section>

        {/* PERFORMANCE */}

        <section className={styles.performance}>

          <h2>
            PERFORMANCE BREAKDOWN
          </h2>

          {/* EASY */}

          <div className={styles.difficultyRow}>

            <span className={styles.difficultyName}>
              EASY
            </span>

            <div className={styles.progressTrack}>

              <div
                className={styles.progressFill}
                style={{
                  width: `${getPercentage(
                    result.difficulty.easy.correct,
                    result.difficulty.easy.total
                  )}%`,
                }}
              />

            </div>

            <span className={styles.score}>
              {result.difficulty.easy.correct}/
              {result.difficulty.easy.total}
            </span>

          </div>

          {/* MEDIUM */}

          <div className={styles.difficultyRow}>

            <span className={styles.difficultyName}>
              MEDIUM
            </span>

            <div className={styles.progressTrack}>

              <div
                className={styles.progressFill}
                style={{
                  width: `${getPercentage(
                    result.difficulty.medium.correct,
                    result.difficulty.medium.total
                  )}%`,
                }}
              />

            </div>

            <span className={styles.score}>
              {result.difficulty.medium.correct}/
              {result.difficulty.medium.total}
            </span>

          </div>

          {/* HARD */}

          <div className={styles.difficultyRow}>

            <span className={styles.difficultyName}>
              HARD
            </span>

            <div className={styles.progressTrack}>

              <div
                className={styles.progressFill}
                style={{
                  width: `${getPercentage(
                    result.difficulty.hard.correct,
                    result.difficulty.hard.total
                  )}%`,
                }}
              />

            </div>

            <span className={styles.score}>
              {result.difficulty.hard.correct}/
              {result.difficulty.hard.total}
            </span>

          </div>

        </section>

        {/* ACTIONS */}

        <section className={styles.actions}>

          <button
            className={styles.reviewButton}
            onClick={goToQuestion}
          >
            REVIEW ANSWERS
          </button>

          <div className={styles.secondaryActions}>

            <button
              className={styles.secondaryButton}
              onClick={goToDashboard}
            >
              DASHBOARD
            </button>

            <button
              className={styles.secondaryButton}
              onClick={goToMap}
            >
              ← BACK TO MAP
            </button>

          </div>

        </section>

        {/* DECORATIVE STARS */}

        <div className={styles.starOne}>
          ✦
        </div>

        <div className={styles.starTwo}>
          ·
        </div>

        <div className={styles.starThree}>
          ✧
        </div>

        <div className={styles.starFour}>
          ✦
        </div>

      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}