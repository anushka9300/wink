"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Boxes,
  Brain,
  ChevronRight,
  CircleDot,
  Compass,
  GitBranch,
  Grid3X3,
  ListOrdered,
  Network,
  Puzzle,
  Star,
} from "lucide-react";
import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import styles from "./logical.module.css";

const topics = [
  {
    number: 1,
    slug: "analogy",
    title: "Analogy",
    icon: Brain,
    progress: 8,
    stars: 24,
  },
  {
    number: 2,
    slug: "classification",
    title: "Classification",
    icon: Boxes,
    progress: 5,
    stars: 15,
  },
  {
    number: 3,
    slug: "number-alphabet-series",
    title: "Number & Alphabet Series",
    icon: ListOrdered,
    progress: 3,
    stars: 9,
  },
  {
    number: 4,
    slug: "coding-decoding",
    title: "Coding-Decoding",
    icon: GitBranch,
    progress: 6,
    stars: 18,
  },
  {
    number: 5,
    slug: "blood-relations",
    title: "Blood Relations",
    icon: Network,
    progress: 0,
    stars: 0,
  },
  {
    number: 6,
    slug: "direction-sense",
    title: "Direction Sense",
    icon: Compass,
    progress: 4,
    stars: 12,
  },
  {
    number: 7,
    slug: "ranking-order",
    title: "Ranking & Order",
    icon: ListOrdered,
    progress: 2,
    stars: 6,
  },
  {
    number: 8,
    slug: "syllogism",
    title: "Syllogism",
    icon: CircleDot,
    progress: 0,
    stars: 0,
  },
  {
    number: 9,
    slug: "seating-arrangement",
    title: "Seating Arrangement",
    icon: Grid3X3,
    progress: 7,
    stars: 21,
  },
  {
    number: 10,
    slug: "logical-puzzles",
    title: "Logical Puzzles",
    icon: Puzzle,
    progress: 1,
    stars: 3,
  },
];

export default function LogicalPage() {
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
            EPISODE 03 • CHAPTER 02
          </span>

          <div className={styles.starBadge}>
            <Star size={15} fill="currentColor" />
            <span>{totalStars} Stars</span>
          </div>
        </div>

        {/* HERO TITLE */}
        <section className={styles.hero}>
          <p className={styles.overline}>LOGICAL REASONING</p>
          <h1>
            Puzzle <span>Nebula</span>
          </h1>
          <p className={styles.subtitle}>
            Unlock patterns, deduce relationships, and navigate analytical enigmas across the logical cosmos!
          </p>
        </section>

        {/* TOPIC GRID */}
        <section className={styles.topicGrid}>
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <Link
                key={topic.slug}
                href={`/logical/question?topic=${topic.slug}`}
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