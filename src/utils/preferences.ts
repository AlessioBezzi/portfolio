import type { Language } from "../data/portfolioContent";
import type { Theme } from "../types/ui";

export function getNextLanguage(language: Language): Language {
  return language === "it" ? "en" : "it";
}

export function getLanguageToggleLabel(language: Language) {
  return language === "it" ? "Switch to English" : "Passa all'italiano";
}

export function getNextTheme(theme: Theme): Theme {
  return theme === "light" ? "dark" : "light";
}

export function getThemeToggleLabel(theme: Theme) {
  return theme === "light" ? "Enable dark mode" : "Enable light mode";
}

export function getNextThemeName(theme: Theme) {
  return theme === "light" ? "Dark" : "Light";
}
