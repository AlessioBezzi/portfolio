import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../../data/portfolioContent";
import {
  getExternalAnchorProps,
  normalizeOptionalUrl,
} from "../../utils/links";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  index: number;
  project: Project;
  reducedMotion: boolean;
};

export function ProjectCard({ index, project, reducedMotion }: ProjectCardProps) {
  const githubHref = normalizeOptionalUrl(project.githubHref);

  return (
    <motion.article
      className={`project-card accent-${project.accent}`}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.34 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <ProjectVisual
        imageAlt={project.imageAlt || `${project.title} preview`}
        imageSrc={project.imageSrc}
        index={index}
      />
      <div className="project-content">
        <h3>{project.title}</h3>
        <div className="tech-line">Tech: {project.tags.join(", ")}</div>
        <p>{project.description}</p>
      </div>
      {githubHref ? (
        <a
          className="card-link"
          href={githubHref}
          {...getExternalAnchorProps(githubHref)}
          aria-label={`${project.title} GitHub project`}
        >
          <ArrowRight size={18} />
        </a>
      ) : null}
    </motion.article>
  );
}
