import { useEffect } from "react";
import type { Language } from "../data/portfolioContent";
import type { Theme } from "../types/ui";

export function useDocumentPreferences(language: Language, theme: Theme) {
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language;
  }, [theme, language]);
}
