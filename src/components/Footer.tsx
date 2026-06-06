import type { PortfolioContent } from "../data/portfolioContent";

type FooterProps = {
  current: PortfolioContent;
  currentYear: number;
};

export function Footer({ current, currentYear }: FooterProps) {
  return (
    <footer className="footer">
      <a className="footer-name" href="#home">
        {current.meta.name}
      </a>
      <nav aria-label="Footer navigation">
        {current.nav.map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            {item.label}
          </a>
        ))}
      </nav>
      <p>
        {"\u00A9"} {currentYear} {current.footer.rights}
      </p>
    </footer>
  );
}
