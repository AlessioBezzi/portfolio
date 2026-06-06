import type { PortfolioContent } from "../data/portfolioContent";
import { RevealSection } from "./RevealSection";
import { SectionHeading } from "./SectionHeading";
import { SkillGroupCard } from "./skills/SkillGroupCard";

type SkillsSectionProps = {
  current: PortfolioContent;
  reducedMotion: boolean;
};

export function SkillsSection({ current, reducedMotion }: SkillsSectionProps) {
  return (
    <RevealSection className="skills-section" id="skills" reducedMotion={reducedMotion}>
      <div className="skills-only-panel">
        <div className="skills-title">
          <SectionHeading
            eyebrow={current.skills.eyebrow}
            title={current.skills.title}
            subtitle={current.skills.subtitle}
          />
        </div>
        <div className="technology-columns">
          {current.skills.groups.map((group) => (
            <SkillGroupCard group={group} key={group.title} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
