"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Flame,
  Zap,
  Menu,
  X,
  Compass,
  Calculator,
  Brain,
  Languages,
  Info,
} from "lucide-react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  streak?: number;
  xp?: number;
}

export default function Navbar({ streak = 3, xp = 280 }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: Compass },
    { label: "Quantitative", href: "/quant", icon: Calculator },
    { label: "Logical", href: "/logical", icon: Brain },
    { label: "Verbal", href: "/verbal", icon: Languages },
    { label: "About", href: "/about", icon: Info },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* BRAND WITH SATURN ICON */}
        <Link href="/" className={styles.brand} aria-label="WINK Space Home">
          <div className={styles.brandIconWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/episode1/2bb7e.png"
              alt="Wink Saturn Orbit"
              className={styles.brandIcon}
            />
          </div>
          <span className={styles.brandText}>WINK</span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className={styles.navLinks}>
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  isActive ? styles.activeLink : ""
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
                {isActive && <span className={styles.activeDot} />}
              </Link>
            );
          })}
        </div>

        {/* USER STATS & BADGES */}
        <div className={styles.userStats}>
          <div className={`${styles.statBadge} ${styles.streakBadge}`} title="Current Mission Streak">
            <Flame size={15} />
            <span>{streak} Days</span>
          </div>

          <div className={`${styles.statBadge} ${styles.xpBadge}`} title="Total Explorer XP">
            <Zap size={15} />
            <span>{xp} XP</span>
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE EXPANDED MENU */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`${styles.navLink} ${
                  isActive ? styles.activeLink : ""
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
                {isActive && <span className={styles.activeDot} />}
              </Link>
            );
          })}

          <div className={styles.mobileStats}>
            <div className={`${styles.statBadge} ${styles.streakBadge}`}>
              <Flame size={15} />
              <span>{streak} Days</span>
            </div>
            <div className={`${styles.statBadge} ${styles.xpBadge}`}>
              <Zap size={15} />
              <span>{xp} XP</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
