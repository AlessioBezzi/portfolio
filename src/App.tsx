import { ChevronUp } from "lucide-react";
import { usePortfolioShell } from "./hooks/usePortfolioShell";
import { AboutJourneySection } from "./components/about/AboutJourneySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/hero/HeroSection";
import { MobileDrawer } from "./components/MobileDrawer";
import { ProjectsSection } from "./components/projects/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";

function App() {
  const {
    activeSection,
    closeMenu,
    current,
    currentYear,
    headerCollapsed,
    headerExpanded,
    language,
    menuOpen,
    mobileMenuMode,
    openNavigation,
    reducedMotion,
    theme,
    toggleLanguage,
    toggleMenu,
    toggleTheme,
  } = usePortfolioShell();

  return (
    <div className="site-shell">
      <Header
        activeSection={activeSection}
        current={current}
        headerCollapsed={headerCollapsed}
        headerExpanded={headerExpanded}
        language={language}
        mobileMenuMode={mobileMenuMode}
        menuOpen={menuOpen}
        onCloseMenu={closeMenu}
        onLanguageToggle={toggleLanguage}
        onMenuToggle={toggleMenu}
        onOpenHeader={openNavigation}
        onThemeToggle={toggleTheme}
        theme={theme}
      />
      <MobileDrawer
        activeSection={activeSection}
        current={current}
        language={language}
        menuOpen={menuOpen}
        onCloseMenu={closeMenu}
        onLanguageToggle={toggleLanguage}
        onThemeToggle={toggleTheme}
        theme={theme}
      />
      <main>
        <HeroSection current={current} reducedMotion={reducedMotion} />
        <AboutJourneySection current={current} reducedMotion={reducedMotion} />
        <ProjectsSection current={current} reducedMotion={reducedMotion} />
        <SkillsSection current={current} reducedMotion={reducedMotion} />
        <ContactSection current={current} reducedMotion={reducedMotion} />
      </main>

      <Footer current={current} currentYear={currentYear} />

      <a className="back-to-top" href="#home" aria-label="Back to top">
        <ChevronUp size={22} />
      </a>
    </div>
  );
}

export default App;
