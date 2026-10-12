"use client";

import Link from "next/link";
import {
  Trophy,
  Target,
  Zap,
  Flame,
  ChevronRight,
  Sparkles,
  BookOpen,
  Calculator,
  Brain,
  Languages,
} from "lucide-react";
import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  // Structured progress metrics
  const stats = {
    questionsAttempted: 24,
    correctAnswers: 19,
    accuracy: 79,
    streakDays: 3,
  };

  const continueTopic = {
    title: "Percentages",
    subject: "Quantitative Aptitude",
    progress: "6 / 10 Questions",
    link: "/quant/question?topic=percentages",
  };

  const recentActivities = [
    {
      id: 1,
      text: "Completed Logical Analogy Quiz",
      score: "8/10 Correct (+80 XP)",
      time: "2 hours ago",
    },
    {
      id: 2,
      text: "Practiced Percentages Questions",
      score: "6/10 Completed",
      time: "Yesterday",
    },
    {
      id: 3,
      text: "Completed Vocabulary Quiz",
      score: "9/10 Correct (+90 XP)",
      time: "2 days ago",
    },
  ];

  return (
    <main className={styles.page}>
      <StarBackground />
      <Navbar streak={stats.streakDays} xp={280} />

      <div className={styles.container}>
        {/* WELCOME HERO */}
        <section className={styles.welcomeCard}>
          <div className={styles.welcomeContent}>
            <div className={styles.overline}>
              <span>✦</span> SPACE MISSION CONTROL • SECTOR 01
            </div>
            <h1>Welcome back, Explorer 🚀</h1>
            <p>
              Continue your aptitude journey and sharpen your problem-solving skills across cosmic chapters.
            </p>
          </div>

          <div className={styles.welcomeProgress}>
            <div className={styles.rankTitle}>
              <span>Cadet Explorer</span>
              <span className={styles.rankXp}>Level 3</span>
            </div>
            <div className={styles.rankBarTrack}>
              <div className={styles.rankBarFill} style={{ width: "56%" }} />
            </div>
            <p className={styles.rankSubtitle}>280 / 500 XP to Commander</p>
          </div>
        </section>

        {/* PROGRESS OVERVIEW */}
        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.iconTarget}`}>
              <Target size={26} />
            </div>
            <div className={styles.statContent}>
              <h4>Attempted</h4>
              <p>{stats.questionsAttempted}</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.iconTrophy}`}>
              <Trophy size={26} />
            </div>
            <div className={styles.statContent}>
              <h4>Correct</h4>
              <p>{stats.correctAnswers}</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.iconZap}`}>
              <Zap size={26} />
            </div>
            <div className={styles.statContent}>
              <h4>Accuracy</h4>
              <p>{stats.accuracy}%</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.iconFlame}`}>
              <Flame size={26} />
            </div>
            <div className={styles.statContent}>
              <h4>Streak</h4>
              <p>{stats.streakDays} Days</p>
            </div>
          </div>
        </section>

        {/* SUBJECT SELECTION */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <BookOpen size={24} color="#ffc94a" /> Practice Subjects
          </h2>
          <span className={styles.sectionBadge}>3 CHAPTERS AVAILABLE</span>
        </div>

        <section className={styles.subjectsGrid}>
          {/* QUANT */}
          <div className={styles.subjectCard}>
            <div className={styles.subjectTop}>
              <span className={styles.subjectBadge}>CHAPTER 01</span>
              <div className={styles.subjectIconPill}>
                <Calculator size={22} />
              </div>
            </div>
            <h3>Quantitative Aptitude</h3>
            <p>
              Master mathematical problem solving, percentages, profit & loss, ratio proportions, and numerical agility.
            </p>
            <div className={styles.subjectMeta}>
              <span>8 / 10 Mastered</span>
              <span>⭐ 24 Stars</span>
            </div>
            <div className={styles.subjectProgressTrack}>
              <div className={styles.subjectProgressBar} style={{ width: "80%" }} />
            </div>
            <Link href="/quant" className={styles.startPracticeBtn}>
              Launch Chapter 🚀 <ChevronRight size={18} />
            </Link>
          </div>

          {/* LOGICAL */}
          <div className={styles.subjectCard}>
            <div className={styles.subjectTop}>
              <span className={styles.subjectBadge}>CHAPTER 02</span>
              <div className={styles.subjectIconPill}>
                <Brain size={22} />
              </div>
            </div>
            <h3>Logical Reasoning</h3>
            <p>
              Strengthen deductive patterns, sequence series, analogies, syllogisms, and spatial puzzle comprehension.
            </p>
            <div className={styles.subjectMeta}>
              <span>5 / 10 Mastered</span>
              <span>⭐ 15 Stars</span>
            </div>
            <div className={styles.subjectProgressTrack}>
              <div className={styles.subjectProgressBar} style={{ width: "50%" }} />
            </div>
            <Link href="/logical" className={styles.startPracticeBtn}>
              Launch Chapter 🚀 <ChevronRight size={18} />
            </Link>
          </div>

          {/* VERBAL */}
          <div className={styles.subjectCard}>
            <div className={styles.subjectTop}>
              <span className={styles.subjectBadge}>CHAPTER 03</span>
              <div className={styles.subjectIconPill}>
                <Languages size={22} />
              </div>
            </div>
            <h3>Verbal Ability</h3>
            <p>
              Enhance vocabulary fluency, synonyms/antonyms, sentence correction, and critical reading comprehension.
            </p>
            <div className={styles.subjectMeta}>
              <span>6 / 10 Mastered</span>
              <span>⭐ 18 Stars</span>
            </div>
            <div className={styles.subjectProgressTrack}>
              <div className={styles.subjectProgressBar} style={{ width: "60%" }} />
            </div>
            <Link href="/verbal" className={styles.startPracticeBtn}>
              Launch Chapter 🚀 <ChevronRight size={18} />
            </Link>
          </div>
        </section>

        {/* TWO COLUMN LOWER SECTION */}
        <div className={styles.twoCol}>
          {/* CONTINUE LEARNING */}
          <div className={styles.panel}>
            <h3 className={styles.sectionTitle} style={{ fontSize: "20px", marginBottom: "8px" }}>
              <Sparkles size={22} color="#ffc94a" /> Continue Learning
            </h3>
            <div className={styles.continueBox}>
              <div className={styles.continueInfo}>
                <h4>{continueTopic.title}</h4>
                <p>{continueTopic.subject} • {continueTopic.progress}</p>
              </div>
              <Link href={continueTopic.link} className={styles.continueBtn}>
                Resume Mission →
              </Link>
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className={styles.panel}>
            <h3 className={styles.sectionTitle} style={{ fontSize: "20px", marginBottom: "8px" }}>
              <Trophy size={22} color="#ffc94a" /> Recent Missions Log
            </h3>
            <div className={styles.activityList}>
              {recentActivities.map((act) => (
                <div key={act.id} className={styles.activityItem}>
                  <span className={styles.starIcon}>✦</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600 }}>{act.text}</div>
                    <div style={{ fontSize: "12px", color: "var(--cosmic-blue, #55b8ff)" }}>{act.score}</div>
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted, #6b829d)" }}>{act.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
