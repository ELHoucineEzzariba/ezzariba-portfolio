import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ezzariba.com"),
  title: "Elhoucine Ezzariba — Frontend-Entwickler",
  description:
    "Portfolio von Elhoucine Ezzariba — Frontend-Entwickler mit Fokus auf React, Next.js, TypeScript. Echtzeit-Apps, KI-Dashboards und moderne Web-Erlebnisse.",
  keywords: [
    "Frontend Developer",
    "Webentwickler",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Köln",
  ],
  openGraph: {
    title: "Elhoucine Ezzariba — Frontend-Entwickler",
    description:
      "Ich baue Web-Erlebnisse, die Recruiter merken. React · Next.js · TypeScript",
    type: "website",
    locale: "de_DE",
    url: "https://ezzariba.com",
    siteName: "Ezzariba Portfolio",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
