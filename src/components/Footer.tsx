"use client";

import { SITE, translations, type Language } from "@/data/site";

type FooterProps = {
  lang: Language;
};

export function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="font-[family-name:var(--font-syne)] text-sm font-semibold">
          {SITE.name}
          <span className="text-accent">.</span>
        </div>
        <p className="text-xs text-zinc-600">{t.footer}</p>
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} · {SITE.location}
        </p>
      </div>
    </footer>
  );
}
