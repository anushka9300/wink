"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import StarBackground from "../../components/StarBackground";
import styles from "./question.module.css";

const questions = {
  analogy: [
    {
      question: "Book is to Reading as Fork is to:",
      options: ["Writing", "Eating", "Cooking", "Drawing"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Bird is to Nest as Lion is to:",
      options: ["Den", "Cage", "Stable", "Burrow"],
      answer: 0,
      difficulty: "Easy",
    },
    {
      question: "Doctor is to Hospital as Teacher is to:",
      options: ["Office", "School", "Market", "Court"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Puppy is to Dog as Kitten is to:",
      options: ["Tiger", "Cat", "Lion", "Cow"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Eye is to See as Ear is to:",
      options: ["Speak", "Touch", "Hear", "Smell"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "Fish is to Water as Bird is to:",
      options: ["Ground", "Air", "Tree", "Nest"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Clock is to Time as Thermometer is to:",
      options: ["Heat", "Temperature", "Weather", "Pressure"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Odometer is to Distance as Speedometer is to:",
      options: ["Time", "Speed", "Fuel", "Weight"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "Island is to Ocean as Oasis is to:",
      options: ["Forest", "Desert", "Mountain", "River"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "Inch is to Foot as Ounce is to:",
      options: ["Gram", "Pound", "Kilogram", "Ton"],
      answer: 1,
      difficulty: "Hard",
    },
  ],

  classification: [
    {
      question: "Find the odd one out.",
      options: ["Apple", "Mango", "Banana", "Carrot"],
      answer: 3,
      difficulty: "Easy",
    },
    {
      question: "Find the odd one out.",
      options: ["Dog", "Cat", "Cow", "Rose"],
      answer: 3,
      difficulty: "Easy",
    },
    {
      question: "Find the odd one out.",
      options: ["Red", "Blue", "Green", "Table"],
      answer: 3,
      difficulty: "Easy",
    },
    {
      question: "Find the odd one out.",
      options: ["Square", "Circle", "Triangle", "Apple"],
      answer: 3,
      difficulty: "Medium",
    },
    {
      question: "Find the odd one out.",
      options: ["January", "March", "Monday", "April"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "Find the odd one out.",
      options: ["2", "4", "6", "9"],
      answer: 3,
      difficulty: "Medium",
    },
    {
      question: "Find the odd one out.",
      options: ["Delhi", "Mumbai", "Kolkata", "Nepal"],
      answer: 3,
      difficulty: "Medium",
    },
    {
      question: "Find the odd one out.",
      options: ["16", "25", "36", "50"],
      answer: 3,
      difficulty: "Hard",
    },
    {
      question: "Find the odd one out.",
      options: ["Mercury", "Venus", "Earth", "Moon"],
      answer: 3,
      difficulty: "Hard",
    },
    {
      question: "Find the odd one out.",
      options: ["121", "144", "169", "180"],
      answer: 3,
      difficulty: "Hard",
    },
  ],

  "number-alphabet-series": [
    {
      question: "Find the next number: 2, 4, 6, 8, ?",
      options: ["9", "10", "11", "12"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Find the next number: 5, 10, 15, 20, ?",
      options: ["22", "24", "25", "30"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question: "Find the next letter: A, C, E, G, ?",
      options: ["H", "I", "J", "K"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Find the next number: 3, 6, 12, 24, ?",
      options: ["36", "42", "48", "50"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "Find the next number: 1, 4, 9, 16, ?",
      options: ["20", "24", "25", "30"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "Find the next letter: B, E, H, K, ?",
      options: ["M", "N", "O", "P"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Find the next number: 2, 6, 12, 20, ?",
      options: ["28", "30", "32", "36"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Find the next number: 1, 3, 7, 15, ?",
      options: ["25", "29", "31", "35"],
      answer: 2,
      difficulty: "Hard",
    },
    {
      question: "Find the next number: 4, 9, 19, 39, ?",
      options: ["69", "79", "89", "99"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "Find the next letter: A, D, H, M, ?",
      options: ["R", "S", "T", "U"],
      answer: 1,
      difficulty: "Hard",
    },
  ],

  "coding-decoding": [
    {
      question: "If CAT is coded as DBU, how is DOG coded?",
      options: ["EPH", "EOG", "FPH", "DPG"],
      answer: 0,
      difficulty: "Easy",
    },
    {
      question: "If A = 1, B = 2, C = 3, what is the value of CAB?",
      options: ["5", "6", "7", "8"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "If PEN is coded as QFO, how is BOOK coded?",
      options: ["CPPL", "CPQM", "CQQM", "BPPL"],
      answer: 0,
      difficulty: "Easy",
    },
    {
      question: "If DOG = 26 using letter values, what is CAT?",
      options: ["21", "24", "26", "27"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "If SUN is written as TVO, how is MOON written?",
      options: ["NPPO", "NPPM", "MPPO", "NOPO"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "If DELHI is coded as EFMIJ, how is INDIA coded?",
      options: ["JOEJB", "JODJB", "JOEJA", "HMCJZ"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "If ROAD is coded as URDG, what is the coding pattern?",
      options: ["+1", "+2", "+3", "-1"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "If MANGO is coded as OCPIQ, how is APPLE coded?",
      options: ["CRRNG", "CQQNG", "BRRMG", "DSSOH"],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question: "If TABLE is coded as GZYOV, what is the code for CHAIR?",
      options: ["XSZRI", "XSZIR", "XSAIR", "WSZRI"],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question: "If COMPUTER is coded by shifting each letter +2, what is the code for LOGIC?",
      options: ["NQIKE", "NQIKE", "NQGKE", "MPHJD"],
      answer: 0,
      difficulty: "Hard",
    },
  ],

  "blood-relations": [
    {
      question: "My mother's brother is my:",
      options: ["Father", "Uncle", "Brother", "Cousin"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "My father's sister is my:",
      options: ["Aunt", "Mother", "Cousin", "Sister"],
      answer: 0,
      difficulty: "Easy",
    },
    {
      question: "My mother's mother is my:",
      options: ["Aunt", "Grandmother", "Sister", "Cousin"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "A is the brother of B. B is the sister of C. How is A related to C?",
      options: ["Brother", "Sister", "Father", "Uncle"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "P is the father of Q. Q is the mother of R. How is P related to R?",
      options: ["Father", "Uncle", "Grandfather", "Brother"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "X is the sister of Y. Y is the father of Z. How is X related to Z?",
      options: ["Mother", "Aunt", "Sister", "Cousin"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "A is the son of B. B is the daughter of C. How is C related to A?",
      options: ["Father", "Grandparent", "Uncle", "Brother"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "M is the brother of N. N is the mother of O. How is M related to O?",
      options: ["Father", "Uncle", "Brother", "Grandfather"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "R is the daughter of S. S is the brother of T. How is T related to R?",
      options: ["Uncle/Aunt", "Father", "Brother", "Mother"],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question: "A is the father of B. C is the mother of A. D is the brother of C. How is D related to B?",
      options: ["Uncle", "Grandfather", "Father", "Brother"],
      answer: 0,
      difficulty: "Hard",
    },
  ],

  "direction-sense": [
    {
      question: "A person walks 5 km north. In which direction is he from the starting point?",
      options: ["South", "North", "East", "West"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "If you face North and turn right, which direction do you face?",
      options: ["West", "South", "East", "North"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question: "If you face East and turn left, which direction do you face?",
      options: ["North", "South", "West", "East"],
      answer: 0,
      difficulty: "Easy",
    },
    {
      question: "A walks 5 km north and then 5 km east. In which direction is he from the start?",
      options: ["North", "East", "North-East", "South-East"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "A walks 10 km south and then 10 km west. Direction from start?",
      options: ["North-East", "South-West", "South-East", "North-West"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Facing South, if you turn left, which direction do you face?",
      options: ["East", "West", "North", "South"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "A walks 3 km east, then 4 km north. What is the shortest distance from start?",
      options: ["5 km", "6 km", "7 km", "4 km"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "A walks 8 km north, 6 km east, then 8 km south. Where is he from start?",
      options: ["6 km East", "6 km West", "8 km North", "8 km South"],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question: "A walks 5 km east, 5 km south, 5 km west. Direction from start?",
      options: ["North", "South", "East", "West"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "A walks 10 km north, 10 km east, 10 km south, then 10 km west. Where is he?",
      options: ["10 km North", "10 km East", "Starting point", "10 km South"],
      answer: 2,
      difficulty: "Hard",
    },
  ],

  "ranking-order": [
    {
      question: "In a class of 30 students, Ravi is 5th from the top. What is his rank from bottom?",
      options: ["24", "25", "26", "27"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question: "A person is 7th from the left and 4th from the right. How many people are there?",
      options: ["9", "10", "11", "12"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "If Amit is 10th from top in a class of 40, what is his rank from bottom?",
      options: ["30", "31", "32", "33"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Ravi is 8th from left and 12th from right. Total people?",
      options: ["18", "19", "20", "21"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "In a queue of 50, A is 15th from front. What is his position from back?",
      options: ["34", "35", "36", "37"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "P is 12th from top and 18th from bottom. Total students?",
      options: ["28", "29", "30", "31"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "A is 6th from left and B is 9th from right. If 4 people are between them, total people?",
      options: ["18", "19", "20", "21"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "In a row of 60, A is 17th from left and B is 21st from right. How many are between them?",
      options: ["21", "22", "23", "24"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "A is 13th from left. B is 17th from right. If 10 people are between them, total people?",
      options: ["39", "40", "41", "42"],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question: "In a row, P is 15th from left and Q is 12th from right. If 8 people are between them, total people?",
      options: ["34", "35", "36", "37"],
      answer: 1,
      difficulty: "Hard",
    },
  ],

  syllogism: [
    {
      question: "All cats are animals. All animals need food. Therefore:",
      options: [
        "All cats need food",
        "No cats need food",
        "Some cats are not animals",
        "None",
      ],
      answer: 0,
      difficulty: "Easy",
    },
    {
      question: "All roses are flowers. Which conclusion follows?",
      options: [
        "All flowers are roses",
        "Some roses are flowers",
        "No roses are flowers",
        "None",
      ],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "All books are papers. All papers are white. Therefore:",
      options: [
        "All books are white",
        "No books are white",
        "Some books are black",
        "None",
      ],
      answer: 0,
      difficulty: "Easy",
    },
    {
      question: "Some boys are players. All players are athletes. Therefore:",
      options: [
        "Some boys are athletes",
        "All boys are athletes",
        "No boys are athletes",
        "None",
      ],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "All doctors are educated. Some educated people are writers. Which is definitely true?",
      options: [
        "All doctors are writers",
        "Some doctors are writers",
        "All doctors are educated",
        "No doctors are educated",
      ],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "No birds are mammals. All sparrows are birds. Therefore:",
      options: [
        "No sparrows are mammals",
        "All mammals are sparrows",
        "Some sparrows are mammals",
        "None",
      ],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "All A are B. No B are C. Therefore:",
      options: [
        "No A are C",
        "All C are A",
        "Some A are C",
        "All B are A",
      ],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "Some A are B. All B are C. Therefore:",
      options: [
        "Some A are C",
        "All A are C",
        "No A are C",
        "None",
      ],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question: "No engineers are artists. Some artists are writers. Which conclusion follows?",
      options: [
        "Some writers are not engineers",
        "All writers are engineers",
        "Some engineers are artists",
        "None",
      ],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question: "All P are Q. Some Q are R. Which conclusion is definitely true?",
      options: [
        "Some P are R",
        "All Q are P",
        "All P are Q",
        "No P are R",
      ],
      answer: 2,
      difficulty: "Hard",
    },
  ],

  "seating-arrangement": [
    {
      question: "A, B and C sit in a row. A is left of B and B is left of C. Who sits in the middle?",
      options: ["A", "B", "C", "Cannot say"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "P sits between Q and R. Who is in the middle?",
      options: ["P", "Q", "R", "None"],
      answer: 0,
      difficulty: "Easy",
    },
    {
      question: "A is left of B. B is left of C. Who is rightmost?",
      options: ["A", "B", "C", "Cannot say"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question: "Five people A, B, C, D, E sit in a row. A is at one end and E at the other. Who can be in the middle?",
      options: ["A", "E", "C", "None"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "P is immediately right of Q. R is immediately right of P. Who is between Q and R?",
      options: ["P", "Q", "R", "None"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "A, B, C, D sit in a row. A is left of B, C is right of B, D is right of C. Who is second?",
      options: ["A", "B", "C", "D"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Six people sit in a row. P is third from left. Q is second from right. Who is between P and Q?",
      options: ["One person", "Two people", "Three people", "None"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "Seven people sit in a row. A is fourth from left. B is second from right. How many people are between them?",
      options: ["0", "1", "2", "3"],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question: "Eight people sit in a row. P is third from left and Q is third from right. How many people are between them?",
      options: ["1", "2", "3", "4"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "Ten people sit in a row. A is fifth from left and B is fourth from right. How many people are between them?",
      options: ["1", "2", "3", "4"],
      answer: 1,
      difficulty: "Hard",
    },
  ],

  "logical-puzzles": [
    {
      question: "If Monday is the first day, what day is the third day?",
      options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "A clock shows 3:00. What is the angle between the hands?",
      options: ["60°", "90°", "120°", "180°"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "If today is Monday, what day will it be after 3 days?",
      options: ["Wednesday", "Thursday", "Friday", "Saturday"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "A is taller than B. B is taller than C. Who is shortest?",
      options: ["A", "B", "C", "Cannot say"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "Five boxes are arranged by weight. A is heavier than B but lighter than C. Which is heaviest among A, B and C?",
      options: ["A", "B", "C", "Cannot say"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "If all squares are rectangles and some rectangles are blue, which is definitely true?",
      options: [
        "All squares are blue",
        "All squares are rectangles",
        "No rectangles are blue",
        "Some squares are blue",
      ],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "A man has 3 daughters. Each daughter has one brother. How many children are there?",
      options: ["3", "4", "5", "6"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "A farmer has 17 sheep. All but 9 die. How many remain?",
      options: ["8", "9", "10", "17"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "Two fathers and two sons went fishing and caught 3 fish. Each got one fish. How is this possible?",
      options: [
        "One fish was shared",
        "They were three people: grandfather, father and son",
        "One person caught two fish",
        "Impossible",
      ],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "A room has four corners. One cat sits in each corner. Each cat sees three cats. How many cats are there?",
      options: ["3", "4", "8", "12"],
      answer: 1,
      difficulty: "Hard",
    },
  ],
};

const topicTitles = {
  analogy: "Analogy",
  classification: "Classification",
  "number-alphabet-series": "Number & Alphabet Series",
  "coding-decoding": "Coding-Decoding",
  "blood-relations": "Blood Relations",
  "direction-sense": "Direction Sense",
  "ranking-order": "Ranking & Order",
  syllogism: "Syllogism",
  "seating-arrangement": "Seating Arrangement",
  "logical-puzzles": "Logical Puzzles",
};

function QuestionContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const topicParam =
    searchParams.get("topic") || "analogy";

  const topicKey = (
    topicParam in questions
      ? topicParam
      : "analogy"
  ) as keyof typeof questions;

  const topicQuestions = questions[topicKey];

  const topicTitle =
    topicTitles[
      topicKey as keyof typeof topicTitles
    ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] =
    useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion =
    topicQuestions[current];

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
    if (
      current <
      topicQuestions.length - 1
    ) {
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
      `/result?subject=logical&topic=${topicKey}&correct=${finalScore}&total=${topicQuestions.length}&time=04:12&xp=${finalScore * 10}`
    );
  }

  return (
    <main className={styles.page}>
      <StarBackground />
      <div className={styles.gameFrame}>

        <header className={styles.header}>
          <Link
            href="/logical"
            className={styles.back}
          >
            ←
          </Link>

          <div className={styles.title}>
            LOGICAL APTITUDE
          </div>

          <div className={styles.timer}>
            ◷ <span>00:45</span>
          </div>
        </header>

        <div className={styles.progress}>
          {Array.from({ length: 10 }).map(
            (_, index) => (
              <div
                key={index}
                className={`${styles.progressItem} ${
                  index <= current
                    ? styles.progressActive
                    : ""
                }`}
              >
                <div
                  className={
                    styles.progressBar
                  }
                />

                <span>
                  {index + 1}
                </span>
              </div>
            )
          )}
        </div>

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
              currentQuestion.difficulty ===
              "Easy"
                ? styles.easy
                : currentQuestion.difficulty ===
                  "Hard"
                ? styles.hard
                : styles.medium
            }`}
          >
            <span
              className={
                styles.difficultyDot
              }
            />

            {currentQuestion.difficulty.toUpperCase()}
          </div>

        </div>

        <section
          className={styles.questionSection}
        >
          <div
            className={styles.questionCard}
          >

            <h1>
              {currentQuestion.question}
            </h1>

            <div className={styles.options}>

              {currentQuestion.options.map(
                (option, index) => {

                  const isSelected =
                    selected === index;

                  const isAnswer =
                    index ===
                    currentQuestion.answer;

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
              disabled={
                selected === null
              }
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

      <span className={styles.star1}>
        ✦
      </span>

      <span className={styles.star2}>
        ✧
      </span>

      <span className={styles.star3}>
        ✦
      </span>

      <span className={styles.star4}>
        ✧
      </span>

      <span className={styles.star5}>
        ✦
      </span>

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