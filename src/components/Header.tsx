import {
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import type { Language, PortfolioContent, SectionId } from "../data/portfolioContent";
import type { Theme } from "../types/ui";
import { BrandMark } from "./BrandMark";
import { NavigationLinks } from "./navigation/NavigationLinks";
import {
  LanguageToggleButton,
  ThemeToggleButton,
} from "./navigation/PreferenceButtons";

type HeaderProps = {
  activeSection: SectionId;
  current: PortfolioContent;
  headerCollapsed: boolean;
  headerExpanded: boolean;
  language: Language;
  mobileMenuMode: boolean;
  menuOpen: boolean;
  onCloseMenu: () => void;
  onLanguageToggle: () => void;
  onMenuToggle: () => void;
  onOpenHeader: () => void;
  onThemeToggle: () => void;
  theme: Theme;
};

export function Header({
  activeSection,
  current,
  headerCollapsed,
  headerExpanded,
  language,
  mobileMenuMode,
  menuOpen,
  onCloseMenu,
  onLanguageToggle,
  onMenuToggle,
  onOpenHeader,
  onThemeToggle,
  theme,
}: HeaderProps) {
  const isCompactHeader = headerCollapsed && !headerExpanded;
  const showCompactHeader = mobileMenuMode || isCompactHeader;

  return (
    <header
      className={
        showCompactHeader
          ? "topbar topbar-compact"
          : headerCollapsed
            ? "topbar floating-open"
            : "topbar"
      }
    >
      {showCompactHeader ? (
        <button
          className="header-symbol"
          type="button"
          aria-label={mobileMenuMode ? "Open menu" : "Open navigation"}
          onClick={onOpenHeader}
        >
          <BrandMark />
        </button>
      ) : (
        <>
          <a className="brand" href="#home" aria-label={`${current.meta.name} home`}>
            <BrandMark />
            <span>{current.meta.name}</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <NavigationLinks
              activeSection={activeSection}
              className="nav-link"
              items={current.nav}
              onNavigate={onCloseMenu}
            />
          </nav>

          <div className="topbar-actions">
            <LanguageToggleButton
              className="utility-button"
              iconSize={16}
              language={language}
              onToggle={onLanguageToggle}
            />
            <ThemeToggleButton
              className="utility-button icon-only"
              iconSize={16}
              onToggle={onThemeToggle}
              theme={theme}
            />
            <a className="download-button" href={current.meta.cvHref} download>
              <span>{current.contact.cvLabel}</span>
              <ArrowRight size={17} />
            </a>
            <button
              className="menu-button"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={onMenuToggle}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </>
      )}
    </header>
  );
}
