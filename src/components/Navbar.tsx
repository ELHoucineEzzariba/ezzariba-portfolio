"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SITE, translations, type Language } from "@/data/site";
import { cn } from "@/lib/utils";

type NavbarProps = {
  lang: Language;
  onLangChange: (lang: Language) => void;
};

const navLinks = [
  { key: "about" as const, href: "#about" },
  { key: "featured" as const, href: "#featured" },
  { key: "projects" as const, href: "#projects" },
  { key: "skills" as const, href: "#skills" },
  { key: "contact" as const, href: "#contact" },
];

export function Navbar({ lang, onLangChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-[#06060b]/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "py-5"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight"
        >
          {SITE.shortName}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {t[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex rounded-full border border-white/10 p-0.5 text-xs">
            {(["de", "en"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => onLangChange(l)}
                className={cn(
                  "rounded-full px-3 py-1 uppercase transition-all",
                  lang === l
                    ? "bg-white/10 text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <a href="#contact" className="btn-primary hidden text-sm sm:inline-flex">
            {lang === "de" ? "Kontakt" : "Contact"}
          </a>

          <button
            className="rounded-lg p-2 text-zinc-400 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/5 bg-[#06060b]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5"
                >
                  {t[link.key]}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
