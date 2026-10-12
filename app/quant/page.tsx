"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Calculator,
  ChevronRight,
  Clock3,
  Coins,
  Dices,
  Percent,
  Scale,
  Star,
  TrendingUp,
  Boxes,
  PersonStanding,
} from "lucide-react";
import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import styles from "./quant.module.css";

const topics = [
  {
    number: 1,
    slug: "percentages",
    title: "Percentages",
    icon: Calculator,
    progress: 8,
    stars: 24,
  },
  {
    number: 2,
    slug: "profit-loss",
    title: "Profit & Loss",
    icon: Coins,
    progress: 5,
    stars: 15,
  },
  {
    number: 3,
    slug: "ratio-proportion",
    title: "Ratio & Proportion",
    icon: Scale,
    progress: 3,
    stars: 9,
  },
  {
    number: 4,
    slug: "average",
    title: "Average",
    icon: BarChart3,
    progress: 6,
    stars: 18,
  },
  {
    number: 5,
    slug: "time-work",
    title: "Time & Work",
    icon: Clock3,
    progress: 0,
    stars: 0,
  },
  {
    number: 6,
    slug: "time-distance",
    title: "Time & Distance",
    icon: PersonStanding,
    progress: 4,
    stars: 12,
  },
  {
    number: 7,
    slug: "simple-interest",
    title: "Simple Interest",
    icon: Percent,
    progress: 2,
    stars: 6,
  },
  {
    number: 8,
    slug: "compound-interest",
    title: "Compound Interest",
    icon: TrendingUp,
    progress: 0,
    stars: 0,
  },
  {
    number: 9,
    slug: "number-system",
    title: "Number System",
    icon: Boxes,
    progress: 7,
    stars: 21,
  },
  {
    number: 10,
    slug: "probability",
    title: "Probability",
    icon: Dices,
    progress: 1,
    stars: 3,
  },
];

export default function QuantPage() {
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
            EPISODE 02 • CHAPTER 01
          </span>

          <div className={styles.starBadge}>
            <Star size={15} fill="currentColor" />
            <span>{totalStars} Stars</span>
          </div>
        </div>

        {/* HERO TITLE */}
        <section className={styles.hero}>
          <p className={styles.overline}>QUANTITATIVE APTITUDE</p>
          <h1>
            Arithmetic <span>Orbit</span>
          </h1>
          <p className={styles.subtitle}>
            Choose a mathematical mission, solve targeted problems, and collect star rewards across space!
          </p>
        </section>

        {/* TOPIC GRID */}
        <section className={styles.topicGrid}>
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <Link
                key={topic.slug}
                href={`/quant/question?topic=${topic.slug}`}
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