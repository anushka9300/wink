"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import StarBackground from "../../components/StarBackground";
import styles from "./question.module.css";

const questions = {
  vocabulary: [
    {
      question: "Choose the word closest in meaning to 'Rapid'.",
      options: ["Slow", "Fast", "Weak", "Late"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Choose the word closest in meaning to 'Happy'.",
      options: ["Sad", "Angry", "Joyful", "Tired"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question: "Choose the word closest in meaning to 'Brave'.",
      options: ["Cowardly", "Courageous", "Weak", "Quiet"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Choose the word opposite in meaning to 'Ancient'.",
      options: ["Old", "Modern", "Historic", "Past"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Choose the word closest in meaning to 'Abundant'.",
      options: ["Rare", "Plenty", "Empty", "Small"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Choose the word closest in meaning to 'Fragile'.",
      options: ["Strong", "Delicate", "Heavy", "Hard"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Choose the word closest in meaning to 'Reluctant'.",
      options: ["Unwilling", "Excited", "Ready", "Happy"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "Choose the word closest in meaning to 'Meticulous'.",
      options: ["Careless", "Very careful", "Lazy", "Quick"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "Choose the word closest in meaning to 'Obsolete'.",
      options: ["Modern", "Useful", "Outdated", "Popular"],
      answer: 2,
      difficulty: "Hard",
    },
    {
      question: "Choose the word closest in meaning to 'Benevolent'.",
      options: ["Cruel", "Kind", "Angry", "Selfish"],
      answer: 1,
      difficulty: "Hard",
    },
  ],

  "synonyms-antonyms": [
    {
      question: "Synonym of 'Begin' is:",
      options: ["End", "Start", "Stop", "Close"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Antonym of 'Hot' is:",
      options: ["Warm", "Cold", "Heat", "Boiling"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Synonym of 'Big' is:",
      options: ["Tiny", "Large", "Short", "Thin"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Antonym of 'Victory' is:",
      options: ["Success", "Win", "Defeat", "Prize"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "Synonym of 'Honest' is:",
      options: ["Truthful", "Rude", "Clever", "Proud"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "Antonym of 'Expand' is:",
      options: ["Increase", "Grow", "Contract", "Extend"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "Synonym of 'Difficult' is:",
      options: ["Easy", "Hard", "Simple", "Light"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Antonym of 'Generous' is:",
      options: ["Kind", "Helpful", "Selfish", "Friendly"],
      answer: 2,
      difficulty: "Hard",
    },
    {
      question: "Synonym of 'Eloquent' is:",
      options: ["Expressive", "Silent", "Confused", "Weak"],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question: "Antonym of 'Optimistic' is:",
      options: ["Positive", "Hopeful", "Pessimistic", "Cheerful"],
      answer: 2,
      difficulty: "Hard",
    },
  ],

  "sentence-completion": [
    {
      question: "She _____ to college every day.",
      options: ["go", "goes", "going", "gone"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "He is _____ honest man.",
      options: ["a", "an", "the", "no article"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "They _____ playing cricket.",
      options: ["is", "am", "are", "was"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question: "If I had money, I _____ buy a car.",
      options: ["will", "would", "shall", "can"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "The train _____ before we reached the station.",
      options: ["left", "has left", "had left", "leaves"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "Neither Ravi nor his friends _____ present.",
      options: ["was", "were", "is", "has"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "She has been working here _____ 2022.",
      options: ["for", "since", "from", "at"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Had I known about the problem, I _____ helped you.",
      options: ["will have", "would have", "would", "shall"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "No sooner did he arrive _____ it started raining.",
      options: ["when", "than", "then", "that"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "Hardly had the match started _____ the rain began.",
      options: ["than", "when", "then", "that"],
      answer: 1,
      difficulty: "Hard",
    },
  ],

  "spotting-errors": [
    {
      question: "Find the error: He go to school every day.",
      options: ["He", "go", "school", "No error"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Find the error: She are my best friend.",
      options: ["She", "are", "best", "No error"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Find the error: I has completed my work.",
      options: ["I", "has", "completed", "No error"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Find the error: Each of the boys have a book.",
      options: ["Each", "boys", "have", "No error"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "Find the error: She is senior than me.",
      options: ["She", "senior", "than", "No error"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "Find the error: He is good in mathematics.",
      options: ["He", "good", "in", "No error"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "Find the error: Neither of them are ready.",
      options: ["Neither", "them", "are", "No error"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "Find the error: One of my friend lives in Delhi.",
      options: ["One", "my", "friend", "No error"],
      answer: 2,
      difficulty: "Hard",
    },
    {
      question: "Find the error: The news are very surprising.",
      options: ["The", "news", "are", "No error"],
      answer: 2,
      difficulty: "Hard",
    },
    {
      question: "Find the error: He insisted to go there.",
      options: ["He", "insisted", "to go", "No error"],
      answer: 2,
      difficulty: "Hard",
    },
  ],

  "sentence-correction": [
    {
      question: "Choose the correct sentence.",
      options: [
        "He don't like tea.",
        "He doesn't likes tea.",
        "He doesn't like tea.",
        "He not like tea.",
      ],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question: "Choose the correct sentence.",
      options: [
        "She have a car.",
        "She has a car.",
        "She having a car.",
        "She had has a car.",
      ],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Choose the correct sentence.",
      options: [
        "I am going to market.",
        "I am going to the market.",
        "I going to market.",
        "I am go to market.",
      ],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Choose the correct sentence.",
      options: [
        "He is senior than me.",
        "He is senior to me.",
        "He is senior from me.",
        "He senior than me.",
      ],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Choose the correct sentence.",
      options: [
        "She is good in English.",
        "She is good at English.",
        "She good at English.",
        "She is good on English.",
      ],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Choose the correct sentence.",
      options: [
        "I prefer tea than coffee.",
        "I prefer tea to coffee.",
        "I prefer tea from coffee.",
        "I prefer tea over than coffee.",
      ],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Choose the correct sentence.",
      options: [
        "He discussed about the issue.",
        "He discussed the issue.",
        "He discussed on the issue.",
        "He was discussed the issue.",
      ],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Choose the correct sentence.",
      options: [
        "Scarcely had he arrived when the phone rang.",
        "Scarcely he arrived when the phone rang.",
        "Scarcely had he arrived than the phone rang.",
        "Scarcely he had arrived when the phone rang.",
      ],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question: "Choose the correct sentence.",
      options: [
        "No sooner he arrived than it rained.",
        "No sooner did he arrive than it rained.",
        "No sooner did he arrived than it rained.",
        "No sooner he did arrive than it rained.",
      ],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "Choose the correct sentence.",
      options: [
        "He is one of the best player.",
        "He is one of the best players.",
        "He is one of best players.",
        "He one of the best players.",
      ],
      answer: 1,
      difficulty: "Hard",
    },
  ],

  "para-jumbles": [
    {
      question: "Arrange: A. He went to the market. B. He bought vegetables. C. He returned home.",
      options: ["A-B-C", "B-A-C", "C-A-B", "A-C-B"],
      answer: 0,
      difficulty: "Easy",
    },
    {
      question: "Arrange: A. She woke up. B. She brushed her teeth. C. She had breakfast.",
      options: ["A-B-C", "B-A-C", "C-B-A", "A-C-B"],
      answer: 0,
      difficulty: "Easy",
    },
    {
      question: "Arrange: A. It started raining. B. We opened our umbrellas. C. We continued walking.",
      options: ["A-B-C", "B-A-C", "C-B-A", "A-C-B"],
      answer: 0,
      difficulty: "Easy",
    },
    {
      question: "Arrange: A. He studied hard. B. He appeared for the exam. C. He passed with good marks.",
      options: ["A-B-C", "B-C-A", "C-A-B", "A-C-B"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "Arrange: A. The alarm rang. B. He woke up. C. He got ready for college.",
      options: ["A-B-C", "B-A-C", "C-B-A", "A-C-B"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "Arrange: A. The teacher entered. B. Students became silent. C. The class began.",
      options: ["A-B-C", "B-A-C", "C-A-B", "A-C-B"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "Arrange: A. He saved money. B. He bought a laptop. C. He needed it for college.",
      options: ["C-A-B", "A-C-B", "B-A-C", "C-B-A"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "Arrange: A. The rain stopped. B. The match resumed. C. The players returned to the field.",
      options: ["A-C-B", "C-A-B", "B-C-A", "A-B-C"],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question: "Arrange: A. He found the solution. B. He understood the problem. C. He worked on it for hours.",
      options: ["B-C-A", "A-B-C", "C-B-A", "B-A-C"],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question: "Arrange: A. The company interviewed him. B. He applied for the job. C. He received an offer.",
      options: ["B-A-C", "A-B-C", "C-B-A", "B-C-A"],
      answer: 0,
      difficulty: "Hard",
    },
  ],

  "reading-comprehension": [
    {
      question: "Passage: Trees provide oxygen and help maintain ecological balance. What do trees provide?",
      options: ["Water", "Oxygen", "Gold", "Food only"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Passage: Regular exercise improves physical fitness. What improves fitness?",
      options: ["Sleep only", "Exercise", "Television", "Stress"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Passage: Books are a source of knowledge. What are books a source of?",
      options: ["Noise", "Knowledge", "Money", "Travel"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Passage: Water conservation is important because freshwater is limited. Why conserve water?",
      options: [
        "Freshwater is unlimited",
        "Freshwater is limited",
        "Water is expensive",
        "Water is heavy",
      ],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Passage: Technology has made communication faster. What has technology improved?",
      options: ["Communication speed", "Weather", "Roads", "Food"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "Passage: Reading daily improves vocabulary and comprehension. What improves vocabulary?",
      options: ["Daily reading", "Sleeping", "Running", "Watching TV"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "Passage: Planning helps people manage time effectively. What does planning improve?",
      options: ["Time management", "Weather", "Health only", "Traffic"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "Passage: Renewable energy sources can reduce dependence on fossil fuels. What can renewable energy reduce?",
      options: [
        "Dependence on fossil fuels",
        "Sunlight",
        "Rainfall",
        "Oxygen",
      ],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question: "Passage: Critical thinking involves evaluating information before accepting it. What does critical thinking involve?",
      options: [
        "Ignoring information",
        "Evaluating information",
        "Memorizing everything",
        "Avoiding questions",
      ],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "Passage: Effective teamwork requires communication, trust and cooperation. Which is NOT mentioned?",
      options: ["Trust", "Communication", "Cooperation", "Competition"],
      answer: 3,
      difficulty: "Hard",
    },
  ],

  "idioms-phrases": [
    {
      question: "What does 'Break the ice' mean?",
      options: [
        "Break something",
        "Start a conversation",
        "Feel cold",
        "End a meeting",
      ],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "What does 'A piece of cake' mean?",
      options: ["Very difficult", "Very easy", "Very expensive", "Very sweet"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "What does 'Once in a blue moon' mean?",
      options: ["Very often", "Rarely", "Every day", "Never"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "What does 'Hit the nail on the head' mean?",
      options: [
        "Make a mistake",
        "Say exactly the right thing",
        "Work hard",
        "Get angry",
      ],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "What does 'Under the weather' mean?",
      options: ["Feeling ill", "Feeling happy", "Travelling", "Working"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "What does 'Spill the beans' mean?",
      options: ["Cook food", "Reveal a secret", "Make a mess", "Waste time"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "What does 'Cost an arm and a leg' mean?",
      options: ["Very cheap", "Very expensive", "Free", "Dangerous"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "What does 'Beat around the bush' mean?",
      options: [
        "Avoid the main point",
        "Speak directly",
        "Work quickly",
        "Tell the truth",
      ],
      answer: 0,
      difficulty: "Hard",
    },
    {
      question: "What does 'Bite the bullet' mean?",
      options: [
        "Avoid responsibility",
        "Face a difficult situation",
        "Celebrate",
        "Run away",
      ],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "What does 'Burn the midnight oil' mean?",
      options: [
        "Sleep early",
        "Work late at night",
        "Waste electricity",
        "Travel at night",
      ],
      answer: 1,
      difficulty: "Hard",
    },
  ],

  "one-word-substitution": [
    {
      question: "One who cannot read or write is called:",
      options: ["Scholar", "Illiterate", "Author", "Poet"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "A place where books are kept is called:",
      options: ["Laboratory", "Library", "Museum", "Gallery"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "One who writes poems is called:",
      options: ["Poet", "Editor", "Actor", "Painter"],
      answer: 0,
      difficulty: "Easy",
    },
    {
      question: "A person who loves mankind is called:",
      options: ["Misanthrope", "Philanthropist", "Criminal", "Pessimist"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "A government by the people is called:",
      options: ["Monarchy", "Democracy", "Dictatorship", "Anarchy"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "A person who knows many languages is called:",
      options: ["Linguist", "Monolingual", "Novice", "Poet"],
      answer: 0,
      difficulty: "Medium",
    },
    {
      question: "A person who hates mankind is called:",
      options: ["Philanthropist", "Misanthrope", "Optimist", "Scholar"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "A speech delivered without preparation is called:",
      options: ["Written", "Extempore", "Formal", "Private"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "A person who studies birds is called:",
      options: ["Botanist", "Ornithologist", "Geologist", "Zoologist"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "A person who looks at the bright side of life is called:",
      options: ["Pessimist", "Optimist", "Realist", "Critic"],
      answer: 1,
      difficulty: "Hard",
    },
  ],

  "grammar-usage": [
    {
      question: "Choose the correct form: She _____ a student.",
      options: ["am", "is", "are", "be"],
      answer: 1,
      difficulty: "Easy",
    },
    {
      question: "Choose the correct form: They _____ playing football.",
      options: ["is", "am", "are", "was"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question: "Choose the correct form: He _____ to school yesterday.",
      options: ["go", "goes", "went", "going"],
      answer: 2,
      difficulty: "Easy",
    },
    {
      question: "Choose the correct preposition: He is good _____ mathematics.",
      options: ["in", "at", "on", "for"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Choose the correct preposition: She is interested _____ music.",
      options: ["on", "at", "in", "for"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "Choose the correct article: He is _____ MBA graduate.",
      options: ["a", "an", "the", "no article"],
      answer: 1,
      difficulty: "Medium",
    },
    {
      question: "Choose the correct form: Neither of the answers _____ correct.",
      options: ["are", "were", "is", "have"],
      answer: 2,
      difficulty: "Medium",
    },
    {
      question: "Choose the correct form: Each of the students _____ a laptop.",
      options: ["have", "has", "having", "are"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "Choose the correct form: The quality of these products _____ improved.",
      options: ["have", "has", "are", "were"],
      answer: 1,
      difficulty: "Hard",
    },
    {
      question: "Choose the correct form: If I _____ you, I would accept the offer.",
      options: ["am", "was", "were", "be"],
      answer: 2,
      difficulty: "Hard",
    },
  ],
};

const topicTitles = {
  vocabulary: "Vocabulary",
  "synonyms-antonyms": "Synonyms & Antonyms",
  "sentence-completion": "Sentence Completion",
  "spotting-errors": "Spotting Errors",
  "sentence-correction": "Sentence Correction",
  "para-jumbles": "Para Jumbles",
  "reading-comprehension": "Reading Comprehension",
  "idioms-phrases": "Idioms & Phrases",
  "one-word-substitution": "One Word Substitution",
  "grammar-usage": "Grammar & Usage",
};

function QuestionContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const topicParam =
    searchParams.get("topic") || "vocabulary";

  const topicKey = (
    topicParam in questions
      ? topicParam
      : "vocabulary"
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
      `/result?subject=verbal&topic=${topicKey}&correct=${finalScore}&total=${topicQuestions.length}&time=05:20&xp=${finalScore * 10}`
    );
  }

  return (
    <main className={styles.page}>
      <StarBackground />

      <div className={styles.gameFrame}>

        <header className={styles.header}>

          <Link
            href="/verbal"
            className={styles.back}
          >
            ←
          </Link>

          <div className={styles.title}>
            VERBAL APTITUDE
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