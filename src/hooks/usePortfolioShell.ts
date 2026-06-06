import { useCallback, useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { sectionOrder } from "../constants/sections";
import { content, type Language } from "../data/portfolioContent";
import type { Theme } from "../types/ui";
import { getNextLanguage, getNextTheme } from "../utils/preferences";
import { useActiveSection } from "./useActiveSection";
import { useDocumentPreferences } from "./useDocumentPreferences";
import { useHeaderCollapse } from "./useHeaderCollapse";
import { useMediaQuery } from "./useMediaQuery";

export function usePortfolioShell() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = Boolean(useReducedMotion());
  const current = content[language];
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const activeSection = useActiveSection(sectionOrder);
  const { headerCollapsed, headerExpanded, setHeaderExpanded } = useHeaderCollapse();
  const mobileMenuMode = useMediaQuery("(max-width: 900px)");

  useDocumentPreferences(language, theme);

  useEffect(() => {
    if (!mobileMenuMode) {
      setMenuOpen(false);
    }
  }, [mobileMenuMode]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setHeaderExpanded(false);
  }, [setHeaderExpanded]);

  const openNavigation = useCallback(() => {
    if (mobileMenuMode) {
      setMenuOpen(true);
      setHeaderExpanded(false);
      return;
    }

    setHeaderExpanded(true);
  }, [mobileMenuMode, setHeaderExpanded]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((open) => !open);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(getNextLanguage);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(getNextTheme);
  }, []);

  return {
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
  };
}
