import { useEffect, useState } from "react";
import type { SectionId } from "../data/portfolioContent";

export function useActiveSection(sectionOrder: SectionId[]) {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const sections = sectionOrder
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id as SectionId);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.08, 0.2, 0.42],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionOrder]);

  return activeSection;
}
