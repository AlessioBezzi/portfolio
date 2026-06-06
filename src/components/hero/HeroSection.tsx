import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { PortfolioContent } from "../../data/portfolioContent";
import { HeroVisual } from "./HeroVisual";

type HeroSectionProps = {
  current: PortfolioContent;
  reducedMotion: boolean;
};

export function HeroSection({ current, reducedMotion }: HeroSectionProps) {
  return (
    <section className="hero-section" id="home">
      <motion.div
        className="hero-copy"
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <p className="hero-eyebrow">{current.hero.eyebrow}</p>
        <h1>
          {current.hero.headlinePrefix.split("|").map((line) => (
            <span className="hero-title-line" key={line}>
              {line}
              <i>.</i>
            </span>
          ))}
        </h1>
        <blockquote className="hero-body">
          <p>{current.hero.body}</p>
          <cite>{current.hero.quoteAuthor}</cite>
        </blockquote>
        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            {current.hero.primaryCta}
            <ArrowRight size={18} />
          </a>
          <a className="text-button" href="#contact">
            {current.hero.secondaryCta}
            <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>

      <HeroVisual current={current} reducedMotion={reducedMotion} />
    </section>
  );
}
