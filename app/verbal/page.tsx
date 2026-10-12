"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  ChevronRight,
  FileText,
  Languages,
  MessageSquare,
  Quote,
  SpellCheck,
  Star,
  Text,
  WholeWord,
} from "lucide-react";
import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import styles from "./verbal.module.css";

const topics = [
  {
    number: 1,
    slug: "vocabulary",
    title: "Vocabulary",
    icon: Languages,
    progress: 8,
    stars: 24,
  },
  {
    number: 2,
    slug: "synonyms-antonyms",
    title: "Synonyms & Antonyms",
    icon: WholeWord,
    progress: 5,
    stars: 15,
  },
  {
    number: 3,
    slug: "sentence-completion",
    title: "Sentence Completion",
    icon: CheckCircle,
    progress: 3,
    stars: 9,
  },
  {
    number: 4,
    slug: "spotting-errors",
    title: "Spotting Errors",
    icon: SpellCheck,
    progress: 6,
    stars: 18,
  },
  {
    number: 5,
    slug: "sentence-correction",
    title: "Sentence Correction",
    icon: FileText,
    progress: 0,
    stars: 0,
  },
  {
    number: 6,
    slug: "para-jumbles",
    title: "Para Jumbles",
    icon: Text,
    progress: 4,
    stars: 12,
  },
  {
    number: 7,
    slug: "reading-comprehension",
    title: "Reading Comprehension",
    icon: BookOpen,
    progress: 2,
    stars: 6,
  },
  {
    number: 8,
    slug: "idioms-phrases",
    title: "Idioms & Phrases",
    icon: Quote,
    progress: 0,
    stars: 0,
  },
  {
    number: 9,
    slug: "one-word-substitution",
    title: "One Word Substitution",
    icon: MessageSquare,
    progress: 7,
    stars: 21,
  },
  {
    number: 10,
    slug: "grammar-usage",
    title: "Grammar & Usage",
    icon: Languages,
    progress: 1,
    stars: 3,
  },
];

export default function VerbalPage() {
  const totalStars = topics.reduce((acc, t) => acc + t.stars, 0);

  return (
    <main className={styles.page}>
      <StarBackground />
      <Navbar streak={3} xp={280} />

      <div className={styles.container}>
        {/* TOP SUB-NAV BAR */}
        <div className={styles.topBar}>
          <Link href="/dashboard" className={styles.backButton}>
            <ArrowLeft size={16} />
            <span>Mission Control</span>
          </Link>

          <span className={styles.episodeBadge}>
            EPISODE 04 • CHAPTER 03
          </span>

          <div className={styles.starBadge}>
            <Star size={15} fill="currentColor" />
            <span>{totalStars} Stars</span>
          </div>
        </div>

        {/* HERO TITLE */}
        <section className={styles.hero}>
          <p className={styles.overline}>VERBAL ABILITY</p>
          <h1>
            Linguistics <span>Galaxy</span>
          </h1>
          <p className={styles.subtitle}>
            Explore vocabulary constellations, master verbal syntax, and elevate reading comprehension!
          </p>
        </section>

        {/* TOPIC GRID */}
        <section className={styles.topicGrid}>
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <Link
                key={topic.slug}
                href={`/verbal/question?topic=${topic.slug}`}
                className={`${styles.topicCard} ${
                  topic.number === 1 ? styles.activeCard : ""
                }`}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconContainer}>
                    <Icon size={24} />
                  </div>
                  <div className={styles.arrow}>
                    <ChevronRight size={18} />
                  </div>
                </div>

                <h2>
                  {topic.number}. {topic.title}
                </h2>

                <div>
                  <div className={styles.cardInfo}>
                    <span>{topic.progress}/10 Questions</span>
                    <div className={styles.cardStars}>
                      <Star size={12} fill="currentColor" />
                      <span>{topic.stars}</span>
                    </div>
                  </div>

                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressBar}
                      style={{ width: `${topic.progress * 10}%` }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </section>

        {/* BOTTOM ACCENT */}
        <div className={styles.bottomDots}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </main>
  );
}