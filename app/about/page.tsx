"use client";

import Link from "next/link";
import { Rocket, Brain, Target, Award, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <StarBackground />
      <Navbar streak={3} xp={280} />

      <div className={styles.container}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.overline}>
            <Sparkles size={14} /> WINK SPACE EXPLORATION ACADEMY
          </div>
          <h1>
            How Wink <span>Works</span> 🪐
          </h1>
          <p>
            Wink is a space-themed, episode-based aptitude learning platform designed
            to help you master problem-solving skills through gamified micro-quizzes,
            unlocking cosmic chapters as your intellect evolves.
          </p>
        </section>

        {/* GRID OF FEATURES */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIconPill}>
              <Rocket size={24} />
            </div>
            <h3>Chapter Episodes</h3>
            <p>
              Travel through space chapters covering Quantitative Arithmetic Orbit, 
              Logical Puzzle Nebula, and Verbal Linguistics Galaxy with structured topic paths.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIconPill}>
              <Target size={24} />
            </div>
            <h3>Targeted Mission Quizzes</h3>
            <p>
              Solve 10 targeted problems grouped by topic with instant validation, 
              difficulty badges (Easy, Medium, Hard), and step-by-step answer feedback.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIconPill}>
              <Award size={24} />
            </div>
            <h3>XP & Cosmic Rewards</h3>
            <p>
              Earn +10 XP for every victorious answer, collect star ratings for mastered topics, 
              and build consistency streaks to ascend Explorer ranks.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIconPill}>
              <Brain size={24} />
            </div>
            <h3>Performance Telemetry</h3>
            <p>
              Analyze your problem-solving accuracy and difficulty breakdowns on dedicated mission 
              debrief screens, pinpointing growth areas across every sector.
            </p>
          </div>
        </div>

        {/* PHILOSOPHY / LORE BANNER */}
        <div className={styles.loreBanner}>
          <div className={styles.loreTagline}>THINK . PLAY . WIN</div>
          <p className={styles.loreDesc}>
            Aptitude is not about dull drills. In the Wink universe, every problem is an 
            exploratory challenge, every correct calculation propels your spaceship, and 
            consistency transforms learners into commanders.
          </p>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <Link href="/dashboard" className={styles.primaryBtn}>
            LAUNCH LEARNING DASHBOARD 🚀
          </Link>
        </div>
      </div>
    </main>
  );
}
