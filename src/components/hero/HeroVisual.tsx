import { type MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import type { HeroImageCard, PortfolioContent } from "../../data/portfolioContent";
import { getPublicAssetUrl } from "../../utils/assets";
import { getHeroCardMotion } from "./heroMotion";

type HeroVisualProps = {
  current: PortfolioContent;
  reducedMotion: boolean;
};

type HeroCardId = HeroImageCard["id"];

export function HeroVisual({ current, reducedMotion }: HeroVisualProps) {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const motionFor = getHeroCardMotion(activeCard, reducedMotion);
  const getImageCard = (id: HeroCardId) =>
    current.hero.imageCards.find((card) => card.id === id);

  const renderImageCard = (id: HeroCardId, className: string) => {
    const image = getImageCard(id);
    const imageSrc = getPublicAssetUrl(image?.src);

    if (!imageSrc) {
      return null;
    }

    return (
      <motion.article
        className={
          activeCard === id
            ? `showcase-card hero-image-card ${className} is-active`
            : `showcase-card hero-image-card ${className}`
        }
        data-hero-card={id}
        animate={motionFor[id].animate}
        transition={motionFor[id].transition}
      >
        <img src={imageSrc} alt={image?.alt ?? "Hero image"} />
      </motion.article>
    );
  };

  const handleHeroPointer = (event: MouseEvent<HTMLDivElement>) => {
    const cards = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>("[data-hero-card]"),
    );
    let closestId: string | null = null;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const padding = 64;
      const insideInfluence =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding &&
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding;

      if (!insideInfluence) {
        return;
      }

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);
      const id = card.dataset.heroCard;

      if (id && distance < closestDistance) {
        closestId = id;
        closestDistance = distance;
      }
    });

    setActiveCard(closestId);
  };

  return (
    <motion.div
      className={activeCard ? "hero-visual has-active-card" : "hero-visual"}
      onMouseMove={handleHeroPointer}
      onMouseLeave={() => setActiveCard(null)}
      initial={reducedMotion ? false : { opacity: 0, x: 28, rotate: -1.2 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
    >
      {renderImageCard("code", "code-essentials-card")}
      {renderImageCard("pipeline", "pipeline-card")}
      {renderImageCard("workflow", "workflow-card")}
    </motion.div>
  );
}
