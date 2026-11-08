"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE, translations, type Language } from "@/data/site";

type FooterProps = {
  lang: Language;
};

export function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 py-14 md:grid-cols-[1.25fr_.75fr] md:items-end">
          <div>
            <p className="footer-kicker">{lang === "de" ? "Offen für neue Aufgaben" : "Open to new opportunities"}</p>
            <a href={`mailto:${SITE.email}`} className="footer-email">
              {SITE.email}<ArrowUpRight size={24} aria-hidden="true" />
            </a>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#aeb8cc]">
              {lang === "de" ? "AI Engineering, Softwareentwicklung und Datenanalyse – mit Sitz in Sankt Augustin, verfügbar im Raum Köln/Bonn und remote." : "AI engineering, software development and data analytics — based in Sankt Augustin, available around Cologne/Bonn and remotely."}
            </p>
          </div>
          <nav aria-label={lang === "de" ? "Footer-Navigation" : "Footer navigation"} className="footer-nav">
            <a href={SITE.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={SITE.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <Link href="/impressum">{lang === "de" ? "Impressum" : "Legal notice"}</Link>
            <Link href="/datenschutz">{lang === "de" ? "Datenschutz" : "Privacy"}</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>{SITE.name} · {SITE.role}</p>
          <p>{t.footer}</p>
          <p>© {new Date().getFullYear()} · {SITE.location}</p>
        </div>
      </div>
    </footer>
  );
}
