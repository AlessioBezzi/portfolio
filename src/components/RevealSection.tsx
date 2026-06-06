import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { SectionId } from "../data/portfolioContent";

type RevealSectionProps = {
  children: ReactNode;
  className: string;
  id: SectionId;
  reducedMotion: boolean;
};

export function RevealSection({
  children,
  className,
  id,
  reducedMotion,
}: RevealSectionProps) {
  return (
    <motion.section
      className={`section-shell ${className}`}
      id={id}
      initial={reducedMotion ? false : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.58, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
