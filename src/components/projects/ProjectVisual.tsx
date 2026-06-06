import { getPublicAssetUrl } from "../../utils/assets";

type ProjectVisualProps = {
  index: number;
  imageAlt?: string;
  imageSrc?: string;
};

export function ProjectVisual({ imageAlt, imageSrc, index }: ProjectVisualProps) {
  const visualClass = `project-visual visual-${index}`;
  const normalizedImageSrc = getPublicAssetUrl(imageSrc);

  if (normalizedImageSrc) {
    return (
      <div className="project-visual project-visual-image">
        <img src={normalizedImageSrc} alt={imageAlt || "Project preview"} />
      </div>
    );
  }

  if (index === 0) {
    return (
      <div className={visualClass} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className={visualClass} aria-hidden="true">
        <i />
        <i />
        <i />
        <span />
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className={visualClass} aria-hidden="true">
        <div className="mini-metrics">
          <strong>2.34K</strong>
          <strong>98.6%</strong>
        </div>
        <svg viewBox="0 0 160 82">
          <polyline points="7,68 24,44 39,52 55,35 70,43 91,28 112,34 130,19 150,31" />
        </svg>
      </div>
    );
  }

  return (
    <div className={visualClass} aria-hidden="true">
      <code>1. Identify the data</code>
      <code>2. Ingest in raw</code>
      <code>3. Transform and validate</code>
      <code>4. Orchestrate jobs</code>
      <code>5. Store and serve</code>
      <code>6. Use in downstream tasks</code>
    </div>
  );
}
