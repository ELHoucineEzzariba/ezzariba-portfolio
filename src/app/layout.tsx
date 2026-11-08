import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ezzariba.com"),
  title: "Elhoucine Ezzariba — Software & AI · Wirtschaftsinformatik",
  description:
    "Portfolio von Elhoucine Ezzariba — Wirtschaftsinformatik-Student (TH Köln) mit Fokus auf Softwareentwicklung, KI-Integration, React, Next.js, TypeScript und Python.",
  keywords: [
    "Werkstudent Softwareentwicklung",
    "Wirtschaftsinformatik",
    "Webentwickler",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Sankt Augustin",
    "Köln/Bonn",
  ],
  openGraph: {
    title: "Elhoucine Ezzariba — Software & AI · Wirtschaftsinformatik",
    description:
      "AI wird zum Produkt. Generative KI · React · Python · Datenanalyse · Live-Demos",
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
    <html lang="de" className={`${spaceGrotesk.variable} ${archivo.variable}`}>
      <body className="min-h-screen antialiased">
        <a href="#main-content" className="skip-link">Zum Hauptinhalt</a>
        {children}
      </body>
    </html>
  );
}
