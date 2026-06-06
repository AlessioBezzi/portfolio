import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import type { PortfolioContent } from "../../data/portfolioContent";
import { AboutPortrait } from "./AboutPortrait";
import { RevealSection } from "../RevealSection";

type AboutJourneySectionProps = {
  current: PortfolioContent;
  reducedMotion: boolean;
};

export function AboutJourneySection({
  current,
  reducedMotion,
}: AboutJourneySectionProps) {
  const journeyStyle = {
    "--journey-count": Math.max(current.journey.items.length, 1),
  } as CSSProperties;

  return (
    <RevealSection
      className="about-journey-section"
      id="journey"
      reducedMotion={reducedMotion}
    >
      <motion.div
        className="about-panel"
        initial={reducedMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.32 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <AboutPortrait current={current} />
        <div className="about-copy">
          <span>{current.about.eyebrow}</span>
          <h2>{current.about.title}</h2>
          <p>{current.about.body}</p>
          <strong>{current.about.signature}</strong>
        </div>
        <div className="about-focus-grid">
          {current.about.focus.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                className={`about-focus accent-${feature.accent}`}
                key={feature.title}
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.42, delay: index * 0.05 }}
              >
                <div className="round-icon">
                  <Icon size={24} />
                </div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>

      <div className="journey-layout">
        <div className="journey-intro">
          <span>{current.journey.eyebrow}</span>
          <h2>{current.journey.title}</h2>
          <p>{current.journey.subtitle}</p>
        </div>

        <div className="journey-track" style={journeyStyle}>
          <motion.div
            className="journey-line"
            initial={reducedMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.42 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          />
          {current.journey.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`journey-step accent-${item.accent}`}
                key={`${item.year}-${item.title}`}
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.42 }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
              >
                <span className="timeline-dot" aria-hidden="true" />
                <div className="journey-card-top">
                  <div className="journey-icon" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <small>{item.year}</small>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
