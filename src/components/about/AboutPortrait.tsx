import type { PortfolioContent } from "../../data/portfolioContent";

type AboutPortraitProps = {
  current: PortfolioContent;
};

export function AboutPortrait({ current }: AboutPortraitProps) {
  const initials = current.meta.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="about-photo">
      {current.meta.portraitSrc ? (
        <img src={current.meta.portraitSrc} alt={current.meta.name} />
      ) : (
        <div className="photo-fallback" role="img" aria-label={current.meta.name}>
          <span>{initials}</span>
          <i />
        </div>
      )}
    </div>
  );
}
