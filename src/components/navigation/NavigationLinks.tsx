import type { NavItem, SectionId } from "../../data/portfolioContent";

type NavigationLinksProps = {
  activeSection: SectionId;
  className: string;
  items: NavItem[];
  onNavigate: () => void;
};

export function NavigationLinks({
  activeSection,
  className,
  items,
  onNavigate,
}: NavigationLinksProps) {
  return (
    <>
      {items.map((item) => (
        <a
          className={item.id === activeSection ? `${className} active` : className}
          href={`#${item.id}`}
          key={item.id}
          onClick={onNavigate}
        >
          {item.label}
        </a>
      ))}
    </>
  );
}
