"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";

const episodeOne = "/assets/episode1";

type ArtProps = {
  src: string;
  alt?: string;
  className?: string;
  style: CSSProperties;
};

function Art({ src, alt = "", className = "", style }: ArtProps) {
  const [error, setError] = useState(false);
  if (error) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      className={`scene-art ${className}`}
      draggable="false"
      src={src}
      style={style}
      onError={() => setError(true)}
    />
  );
}

function Brand() {
  return (
    <Link href="/" className="brand" aria-label="WINK Home">
      <Art
        className="brand-orbit"
        src={`${episodeOne}/2bb7e.png`}
        style={{ left: "20%", top: "-45%", width: "50%", height: "auto" }}
      />
      <span>WINK</span>
    </Link>
  );
}

const stars = [
  { left: "25%", top: "15%", kind: "dot" },
  { left: "15.5%", top: "24%", kind: "dot" },
  { left: "33.5%", top: "32%", kind: "dot" },
  { left: "25.2%", top: "53.5%", kind: "spark" },
  { left: "39.5%", top: "67.5%", kind: "dot" },
  { left: "47.5%", top: "24%", kind: "dot" },
  { left: "59%", top: "26.5%", kind: "dot" },
  { left: "70.5%", top: "31.5%", kind: "spark" },
  { left: "82.5%", top: "14%", kind: "dot" },
  { left: "84.2%", top: "46.5%", kind: "spark" },
  { left: "87.5%", top: "28%", kind: "dot" },
  { left: "68.8%", top: "71.8%", kind: "dot" },
  { left: "49%", top: "81.5%", kind: "spark" },
] as const;

function StarField() {
  return (
    <div className="star-field" aria-hidden="true">
      {stars.map((s, index) => (
        <i
          key={index}
          className={`star star-${s.kind} anim-twinkle`}
          style={{ left: s.left, top: s.top, animationDelay: `${(index % 4) * 0.8}s` }}
        />
      ))}
      <i className="star star-gold anim-twinkle" style={{ left: "41.2%", top: "13.5%", animationDelay: "0.5s" }} />
      <i className="star star-gold anim-twinkle" style={{ left: "56.5%", top: "22.5%", animationDelay: "1.2s" }} />
      <i className="star star-gold anim-twinkle" style={{ left: "72.2%", top: "49.5%", animationDelay: "1.8s" }} />
      <i className="star star-gold anim-twinkle" style={{ left: "62.5%", top: "61.8%", animationDelay: "2.3s" }} />
      <i className="star star-gold large anim-twinkle" style={{ left: "47.2%", top: "70.5%", animationDelay: "0.2s" }} />
      <i className="star star-gold anim-twinkle" style={{ left: "25%", top: "43.5%", animationDelay: "1.5s" }} />
    </div>
  );
}

function EpisodeOne() {
  return (
    <section className="episode episode-one" aria-label="Wink — Home">
      {/* Top corner indicators */}
      <span className="top-episode-tag">EPISODE-1</span>
      <span className="top-code-tag">&lt;/&gt;</span>

      <StarField />
      <Brand />

      {/* Small italic quote text upper left */}
      <p className="small-dreams">
        small
        <br />
        Question
        <br />
        Big Dreams
      </p>

      {/* Central hero content */}
      <div className="home-title">
        <Art
          className="home-orbit-center anim-float"
          src={`${episodeOne}/2bb7e.png`}
          style={{ position: "relative", zIndex: 1 }}
        />
        <h1>WINK</h1>
        <p>THINK . PLAY . WIN</p>
        <div className="hero-actions">
          <Link href="/about" className="btn-know">
            KNOW ABOUT
          </Link>
          <Link href="/dashboard" className="btn-start">
            START PRACTICE 🚀
          </Link>
        </div>
      </div>

      {/* Background artwork elements mapped to PNG assets in episode1 */}
      {/* Shooting star / meteor upper left */}
      <Art
        src={`${episodeOne}/lingthing astroied.png`}
        style={{ left: "22%", top: "11%", width: "16%", height: "auto" }}
      />

      {/* Floating asteroid left near cliff */}
      <Art
        className="anim-float"
        src={`${episodeOne}/black small rock.png`}
        style={{ left: "2.8%", top: "37%", width: "4%", height: "auto" }}
      />

      {/* Floating asteroid bottom center */}
      <Art
        className="anim-float"
        src={`${episodeOne}/black small rock.png`}
        style={{ left: "54%", top: "81%", width: "3.5%", height: "auto", animationDelay: "1.5s" }}
      />

      {/* Rocket upper right center */}
      <Art
        className="anim-float-rocket"
        src={`${episodeOne}/rocket.png`}
        style={{ left: "62%", top: "25%", width: "9.5%", height: "auto" }}
      />

      {/* Light blue cratered moon top right */}
      <Art
        className="anim-float"
        src={`${episodeOne}/moon.png`}
        style={{ left: "73%", top: "6.5%", width: "9%", height: "auto", animationDelay: "2s" }}
      />

      {/* Purple planet with ring middle right */}
      <Art
        className="anim-float"
        src={`${episodeOne}/purple ring  planet.png`}
        style={{ left: "81.5%", top: "44%", width: "14%", height: "auto", animationDelay: "0.7s" }}
      />

      {/* Small blue cratered moon lower right */}
      <Art
        className="anim-float"
        src={`${episodeOne}/blue moon.png`}
        style={{ left: "70.5%", top: "61%", width: "6%", height: "auto", animationDelay: "2.5s" }}
      />

      {/* Rocky cliff platform bottom left */}
      <Art
        className="home-rock"
        src={`${episodeOne}/cc231.png`}
        style={{ left: "0", bottom: "0", width: "53.5%", height: "auto" }}
      />

      {/* Sitting astronaut on cliff edge */}
      <Art
        src={`${episodeOne}/c6045.png`}
        style={{ left: "20.5%", bottom: "24.5%", width: "9.5%", height: "auto" }}
      />

      {/* Flag on cliff */}
      <Art
        src={`${episodeOne}/3a2dc.png`}
        style={{ left: "8.5%", bottom: "33.5%", width: "9.5%", height: "auto" }}
      />

      {/* Earth with clouds bottom right */}
      <Art
        src={`${episodeOne}/3e040.png`}
        style={{ right: "0", bottom: "0", width: "44.5%", height: "auto" }}
      />
    </section>
  );
}

export default function App() {
  return (
    <main>
      <EpisodeOne />
    </main>
  );
}

