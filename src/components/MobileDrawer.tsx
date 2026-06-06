import { Download, X } from "lucide-react";
import type { Language, PortfolioContent, SectionId } from "../data/portfolioContent";
import type { Theme } from "../types/ui";
import { BrandMark } from "./BrandMark";
import { NavigationLinks } from "./navigation/NavigationLinks";
import {
  LanguageToggleButton,
  ThemeToggleButton,
} from "./navigation/PreferenceButtons";

type MobileDrawerProps = {
  activeSection: SectionId;
  current: PortfolioContent;
  language: Language;
  menuOpen: boolean;
  onCloseMenu: () => void;
  onLanguageToggle: () => void;
  onThemeToggle: () => void;
  theme: Theme;
};

export function MobileDrawer({
  activeSection,
  current,
  language,
  menuOpen,
  onCloseMenu,
  onLanguageToggle,
  onThemeToggle,
  theme,
}: MobileDrawerProps) {
  return (
    <>
      <button
        className={menuOpen ? "mobile-menu-backdrop open" : "mobile-menu-backdrop"}
        type="button"
        aria-label="Close menu"
        onClick={onCloseMenu}
      />
      <aside
        className={menuOpen ? "mobile-panel open" : "mobile-panel"}
        aria-hidden={!menuOpen}
        aria-label="Mobile navigation"
      >
        <div className="mobile-panel-heading">
          <BrandMark />
          <strong>{current.meta.name}</strong>
          <button
            className="mobile-close-button"
            type="button"
            aria-label="Close menu"
            onClick={onCloseMenu}
          >
            <X size={22} />
          </button>
        </div>
        <NavigationLinks
          activeSection={activeSection}
          className="mobile-link"
          items={current.nav}
          onNavigate={onCloseMenu}
        />
        <div className="mobile-panel-actions">
          <LanguageToggleButton
            className="mobile-action-button"
            iconSize={17}
            language={language}
            onToggle={onLanguageToggle}
          />
          <ThemeToggleButton
            className="mobile-action-button"
            iconSize={17}
            onToggle={onThemeToggle}
            showText
            theme={theme}
          />
          <a className="mobile-action-button" href={current.meta.cvHref} download>
            <Download size={17} />
            <span>{current.contact.cvLabel}</span>
          </a>
        </div>
      </aside>
    </>
  );
}
