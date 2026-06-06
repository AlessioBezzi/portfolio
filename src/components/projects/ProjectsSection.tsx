import type { PortfolioContent } from "../../data/portfolioContent";
import { RevealSection } from "../RevealSection";
import { SectionHeading } from "../SectionHeading";
import { ProjectCard } from "./ProjectCard";

type ProjectsSectionProps = {
  current: PortfolioContent;
  reducedMotion: boolean;
};

export function ProjectsSection({ current, reducedMotion }: ProjectsSectionProps) {
  return (
    <RevealSection className="projects-section" id="projects" reducedMotion={reducedMotion}>
      <div className="work-panel">
        <SectionHeading
          eyebrow={current.projects.eyebrow}
          title={current.projects.title}
          subtitle={current.projects.subtitle}
        />
        <div className="project-grid">
          {current.projects.items.map((project, index) => (
            <ProjectCard
              index={index}
              key={project.title}
              project={project}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
