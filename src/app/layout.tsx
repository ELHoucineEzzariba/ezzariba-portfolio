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
  title: "Elhoucine Ezzariba — AI Software Engineer",
  description:
    "Portfolio von Elhoucine Ezzariba — AI Software Engineer mit Fokus auf generative KI, React, Next.js, TypeScript, Python und Datenanalyse.",
  keywords: [
    "AI Software Engineer",
    "Webentwickler",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Sankt Augustin",
    "Köln/Bonn",
  ],
  openGraph: {
    title: "Elhoucine Ezzariba — AI Software Engineer",
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
