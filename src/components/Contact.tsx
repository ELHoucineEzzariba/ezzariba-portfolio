"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Download, Mail } from "lucide-react";
import { SITE, translations, type Language } from "@/data/site";

type ContactProps = {
  lang: Language;
};

export function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;

  return (
    <section id="contact" className="relative py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="contact-panel mx-auto max-w-5xl overflow-hidden p-10 sm:p-14"
        >
          <span className="section-tag">{t.tag}</span>
          <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight sm:text-6xl">
            {t.title}
          </h2>
          <p className="mt-5 max-w-2xl text-zinc-400">{t.subtitle}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={`mailto:${SITE.email}`} className="btn-primary">
              <Mail size={18} />
              {t.email}
            </a>
            <a href={SITE.cvUrl} download className="btn-secondary"><Download size={18} />{t.cv}</a>
          </div>

          {(SITE.githubUrl || SITE.linkedinUrl) && (
            <div className="mt-8 flex items-center gap-4">
              {SITE.githubUrl && (
                <a
                  href={SITE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Code2 size={17} /> GitHub
                </a>
              )}
              {SITE.linkedinUrl && (
                <a
                  href={SITE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <BriefcaseBusiness size={17} /> LinkedIn
                </a>
              )}
            </div>
          )}

          <p className="mt-8 text-sm text-zinc-500">{SITE.email}</p>
        </motion.div>
      </div>
    </section>
  );
}
