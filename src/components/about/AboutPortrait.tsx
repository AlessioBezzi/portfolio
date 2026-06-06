import type { PortfolioContent } from "../../data/portfolioContent";
import { getPublicAssetUrl } from "../../utils/assets";

type AboutPortraitProps = {
  current: PortfolioContent;
};

export function AboutPortrait({ current }: AboutPortraitProps) {
  const portraitSrc = getPublicAssetUrl(current.meta.portraitSrc);
  const initials = current.meta.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="about-photo">
      {portraitSrc ? (
        <img src={portraitSrc} alt={current.meta.name} />
      ) : (
        <div className="photo-fallback" role="img" aria-label={current.meta.name}>
          <span>{initials}</span>
          <i />
        </div>
      )}
    </div>
  );
}
