"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Skills } from "@/components/Skills";
import { Process } from "@/components/Process";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import type { Language } from "@/data/site";

export default function Home() {
  const [lang, setLang] = useState<Language>("de");

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Navbar lang={lang} onLangChange={setLang} />
      <main id="main-content">
        <Hero lang={lang} />
        <About lang={lang} />
        <FeaturedProjects lang={lang} />
        <Skills lang={lang} />
        <Process lang={lang} />
        <Resume lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
