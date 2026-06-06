import type { SkillGroup } from "../../data/portfolioContent";
import { getSkillIcon } from "./skillIconRegistry";

type SkillGroupCardProps = {
  group: SkillGroup;
};

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  const GroupIcon = group.icon;

  return (
    <div className="technology-step">
      <article className={`technology-column accent-${group.accent}`}>
        <div className="technology-heading">
          <span className="technology-icon" aria-hidden="true">
            <GroupIcon size={28} />
          </span>
          <h3>{group.title}</h3>
          <span className="technology-underline" aria-hidden="true" />
        </div>
        <div className="technology-items">
          {group.items.map((item) => {
            const ItemIcon = getSkillIcon(item, GroupIcon);
            return (
              <span className="technology-skill" key={item}>
                <ItemIcon size={18} aria-hidden="true" />
                <span>{item}</span>
              </span>
            );
          })}
        </div>
      </article>
    </div>
  );
}
