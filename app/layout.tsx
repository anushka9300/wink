import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "WINK — Space Gamified Aptitude Learning",
  description: "Think. Play. Win. Embark on a space-themed aptitude journey across Quantitative, Logical, and Verbal cosmic chapters.",
  keywords: ["Aptitude", "Gamified Learning", "Space Theme", "Quantitative Aptitude", "Logical Reasoning", "Verbal Ability"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#071321] text-[#FDF4E5]">
        {children}
      </body>
    </html>
  );
}

