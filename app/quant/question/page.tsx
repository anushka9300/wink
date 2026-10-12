"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import StarBackground from "../../components/StarBackground";
import styles from "./question.module.css";

const questions = {
  percentages: [
    {
      question: "What is 25% of 240?",
      options: ["40", "50", "60", "80"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question: "What percentage of 80 is 20?",
      options: ["20%", "25%", "30%", "40%"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "What is 15% of 600?",
      options: ["60", "75", "90", "120"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question: "A number is increased from 200 to 240. Find the percentage increase.",
      options: ["10%", "15%", "20%", "25%"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "40% of a number is 120. What is the number?",
      options: ["200", "250", "300", "350"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "A salary of ₹20,000 is increased by 15%. What is the new salary?",
      options: ["₹21,000", "₹22,000", "₹23,000", "₹24,000"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "A price is reduced by 20% and then increased by 20%. What is the overall change?",
      options: ["No change", "4% decrease", "4% increase", "2% decrease"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "A number is first increased by 25% and then decreased by 20%. What is the final change?",
      options: ["5% increase", "5% decrease", "No change", "10% increase"],
      answer: 2,
      difficulty: "Hard",
    },
    {
      question: "If 30% of A is equal to 45% of B, then A : B is:",
      options: ["2 : 3", "3 : 2", "1 : 2", "2 : 1"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "A number is increased by 10% and then by 20%. What is the total percentage increase?",
      options: ["30%", "32%", "28%", "35%"],
      answer: 1,
      difficulty: "Hard",
    },
  ],

  "profit-loss": [
    {
      question:
        "An article costs ₹500 and is sold for ₹600. What is the profit?",
      options: ["₹50", "₹75", "₹100", "₹150"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question:
        "An article is bought for ₹800 and sold for ₹720. What is the loss?",
      options: ["₹40", "₹60", "₹80", "₹100"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question:
        "An article bought for ₹1000 is sold for ₹1200. Find the profit percentage.",
      options: ["10%", "15%", "20%", "25%"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question:
        "An article is sold for ₹900 at a profit of ₹100. What is its cost price?",
      options: ["₹700", "₹800", "₹900", "₹1000"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question:
        "A shopkeeper buys an article for ₹1500 and sells it for ₹1800. Find the profit percentage.",
      options: ["15%", "20%", "25%", "30%"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question:
        "An article is sold for ₹720 at a loss of 10%. Find its cost price.",
      options: ["₹780", "₹800", "₹820", "₹850"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question:
        "A shopkeeper marks an article at ₹2000 and gives a 10% discount. What is the selling price?",
      options: ["₹1700", "₹1750", "₹1800", "₹1900"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question:
        "An article is sold at 20% profit. If its cost price is ₹2500, find the selling price.",
      options: ["₹2800", "₹2900", "₹3000", "₹3200"],
      answer: 2,
      difficulty: "Hard",
    },
    {
      question:
        "A shopkeeper gives two successive discounts of 10% and 20%. What is the effective discount?",
      options: ["28%", "30%", "32%", "25%"],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question:
        "An article is sold at 20% loss. If the selling price is ₹1600, find the cost price.",
      options: ["₹1800", "₹1900", "₹2000", "₹2200"],
      answer: 2,
      difficulty: "Hard",
    },
  ],

  "ratio-proportion": [
    {
      question: "If A : B = 2 : 3 and B : C = 4 : 5, find A : C.",
      options: ["8 : 15", "6 : 15", "2 : 5", "4 : 15"],
      answer: 0,
      difficulty: "Easy",
    },
    {
      question: "Divide ₹1200 between A and B in the ratio 2 : 3.",
      options: ["₹400, ₹800", "₹480, ₹720", "₹500, ₹700", "₹450, ₹750"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "If 4 : x :: 8 : 12, find the value of x.",
      options: ["5", "6", "7", "8"],
      answer: 1,
      difficulty: "Easy",
    },
  ],

  average: [
    {
      question: "What is the average of 10, 20, 30, 40 and 50?",
      options: ["20", "25", "30", "35"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question: "What is the average of 15, 25 and 35?",
      options: ["20", "25", "30", "35"],
      answer: 1,
      difficulty: "Easy",
    },
  ],

  "time-work": [
    {
      question: "A can do a job in 10 days, B in 15 days. Working together, how many days will they take?",
      options: ["5 days", "6 days", "7 days", "8 days"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "If 6 men can complete a task in 12 days, how long will 9 men take?",
      options: ["8 days", "9 days", "10 days", "6 days"],
      answer: 0,
      difficulty: "Medium",
    },
  ],

  "time-distance": [
    {
      question: "A car travels 180 km in 3 hours. What is its speed?",
      options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Convert 72 km/h into m/s.",
      options: ["15 m/s", "20 m/s", "25 m/s", "30 m/s"],
      answer: 1,
      difficulty: "Easy",
    },
  ],

  "simple-interest": [
    {
      question: "Find SI on ₹5000 at 10% per annum for 2 years.",
      options: ["₹800", "₹900", "₹1000", "₹1200"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question: "At what rate % per annum will ₹2000 double itself in 5 years at Simple Interest?",
      options: ["15%", "20%", "25%", "10%"],
      answer: 1,
      difficulty: "Medium",
    },
  ],

  "compound-interest": [
    {
      question: "Find CI on ₹1000 at 10% per annum for 2 years compounded annually.",
      options: ["₹200", "₹210", "₹220", "₹250"],
      answer: 1,
      difficulty: "Medium",
    },
  ],

  "number-system": [
    {
      question: "Which of the following is a prime number?",
      options: ["15", "21", "29", "33"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question: "What is the HCF of 24 and 36?",
      options: ["6", "8", "12", "18"],
      answer: 2,
      difficulty: "Easy",
    },
  ],

  probability: [
    {
      question: "What is the probability of getting a Head when a fair coin is tossed?",
      options: ["1/4", "1/2", "3/4", "1"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "A die is thrown once. What is the probability of getting an even number?",
      options: ["1/6", "1/3", "1/2", "2/3"],
      answer: 2,
      difficulty: "Easy",
    },
  ],
};

const topicTitles: Record<string, string> = {
  percentages: "Percentages",
  "profit-loss": "Profit & Loss",
  "ratio-proportion": "Ratio & Proportion",
  average: "Average",
  "time-work": "Time & Work",
  "time-distance": "Time & Distance",
  "simple-interest": "Simple Interest",
  "compound-interest": "Compound Interest",
  "number-system": "Number System",
  probability: "Probability",
};

function QuestionContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const topicParam = searchParams.get("topic") || "percentages";

  const topicKey = (
    topicParam in questions ? topicParam : "percentages"
  ) as keyof typeof questions;

  const topicQuestions = questions[topicKey];
  const topicTitle =
    topicTitles[topicKey] || topicParam.replace(/-/g, " ");

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = topicQuestions[current];

  const isCorrect =
    selected !== null &&
    selected === currentQuestion.answer;

  function checkAnswer() {
    if (selected === null) return;
    if (selected === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
    setChecked(true);
  }

  function nextQuestion() {
    if (current < topicQuestions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setChecked(false);
    }
  }

  function previousQuestion() {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(null);
      setChecked(false);
    }
  }

  function submitQuiz() {
    const finalScore = isCorrect && checked ? score : (selected === currentQuestion.answer && !checked ? score + 1 : score);
    router.push(
      `/result?subject=quant&topic=${topicKey}&correct=${finalScore}&total=${topicQuestions.length}&time=03:45&xp=${finalScore * 10}`
    );
  }

  return (
    <main className={styles.page}>
      <StarBackground />

      {/* OUTER GAME FRAME */}
      <div className={styles.gameFrame}>

        {/* HEADER */}
        <header className={styles.header}>

          <Link href="/quant" className={styles.back}>
            ←
          </Link>

          <div className={styles.title}>
            QUANTITATIVE APTITUDE
          </div>

          <div className={styles.timer}>
            ◷ <span>00:45</span>
          </div>

        </header>

        {/* PROGRESS */}
        <div className={styles.progress}>
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className={`${styles.progressItem} ${
                index <= current ? styles.progressActive : ""
              }`}
            >
              <div className={styles.progressBar} />
              <span>{index + 1}</span>
            </div>
          ))}
        </div>

        {/* QUESTION META */}
        <div className={styles.questionMeta}>

          <div className={styles.questionNumber}>
            Question{" "}
            <strong>
              {current + 1}/10
            </strong>
          </div>

          <div className={styles.topic}>
            {topicTitle}
          </div>

          <div
            className={`${styles.difficulty} ${
              currentQuestion.difficulty === "Easy"
                ? styles.easy
                : currentQuestion.difficulty === "Hard"
                ? styles.hard
                : styles.medium
            }`}
          >
            <span className={styles.difficultyDot} />
            {currentQuestion.difficulty.toUpperCase()}
          </div>

        </div>

        {/* QUESTION AREA */}
        <section className={styles.questionSection}>

          <div className={styles.questionCard}>

            <h1>
              {currentQuestion.question}
            </h1>

            <div className={styles.options}>

              {currentQuestion.options.map(
                (option, index) => {

                  const isSelected =
                    selected === index;

                  const isAnswer =
                    index === currentQuestion.answer;

                  let optionClass =
                    styles.option;

                  if (
                    !checked &&
                    isSelected
                  ) {
                    optionClass +=
                      ` ${styles.selected}`;
                  }

                  if (
                    checked &&
                    isAnswer
                  ) {
                    optionClass +=
                      ` ${styles.correct}`;
                  }

                  if (
                    checked &&
                    isSelected &&
                    !isAnswer
                  ) {
                    optionClass +=
                      ` ${styles.wrong}`;
                  }

                  return (
                    <button
                      key={option}
                      className={optionClass}
                      disabled={checked}
                      onClick={() =>
                        !checked &&
                        setSelected(index)
                      }
                    >

                      <span
                        className={
                          styles.optionLetter
                        }
                      >
                        {String.fromCharCode(
                          65 + index
                        )}
                      </span>

                      <span>
                        {option}
                      </span>

                      {checked &&
                        isAnswer && (
                          <span
                            className={
                              styles.answerIcon
                            }
                          >
                            ✓
                          </span>
                        )}

                      {checked &&
                        isSelected &&
                        !isAnswer && (
                          <span
                            className={
                              styles.answerIcon
                            }
                          >
                            ×
                          </span>
                        )}

                    </button>
                  );
                }
              )}

            </div>

            {/* RESULT */}
            {checked && (
              <div
                className={
                  isCorrect
                    ? styles.correctMessage
                    : styles.wrongMessage
                }
              >
                <strong>
                  {isCorrect
                    ? "✓ Correct!"
                    : "× Not quite!"}
                </strong>

                <span>
                  {isCorrect
                    ? "+10 XP • Great job!"
                    : `Correct answer: ${
                        currentQuestion.options[
                          currentQuestion.answer
                        ]
                      }`}
                </span>
              </div>
            )}

          </div>

        </section>

        {/* BOTTOM CONTROLS */}
        <div className={styles.controls}>

          <button
            className={styles.previous}
            disabled={current === 0}
            onClick={previousQuestion}
          >
            ← PREVIOUS
          </button>

          {!checked ? (
            <button
              className={styles.check}
              disabled={selected === null}
              onClick={checkAnswer}
            >
              CHECK ANSWER ✓
            </button>
          ) : current === topicQuestions.length - 1 ? (
            <button
              className={styles.next}
              style={{ background: "#ffc851", color: "#07111e" }}
              onClick={submitQuiz}
            >
              SUBMIT QUIZ 🚀
            </button>
          ) : (
            <button
              className={styles.next}
              onClick={nextQuestion}
            >
              NEXT →
            </button>
          )}

        </div>

      </div>

      {/* SPACE DECORATIONS */}
      <span className={styles.star1}>✦</span>
      <span className={styles.star2}>✧</span>
      <span className={styles.star3}>✦</span>
      <span className={styles.star4}>✧</span>
      <span className={styles.star5}>✦</span>

    </main>
  );
}

export default function QuestionPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuestionContent />
    </Suspense>
  );
}