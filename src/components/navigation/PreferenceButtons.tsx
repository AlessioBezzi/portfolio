import { Globe2, Moon, Sun } from "lucide-react";
import type { Language } from "../../data/portfolioContent";
import type { Theme } from "../../types/ui";
import {
  getLanguageToggleLabel,
  getNextThemeName,
  getThemeToggleLabel,
} from "../../utils/preferences";

type ToggleButtonProps = {
  className: string;
  iconSize: number;
};

type LanguageToggleButtonProps = ToggleButtonProps & {
  language: Language;
  onToggle: () => void;
  showText?: boolean;
};

type ThemeToggleButtonProps = ToggleButtonProps & {
  onToggle: () => void;
  showText?: boolean;
  theme: Theme;
};

export function LanguageToggleButton({
  className,
  iconSize,
  language,
  onToggle,
  showText = true,
}: LanguageToggleButtonProps) {
  return (
    <button
      className={className}
      type="button"
      aria-label={getLanguageToggleLabel(language)}
      onClick={onToggle}
    >
      <Globe2 size={iconSize} />
      {showText ? <span>{language.toUpperCase()}</span> : null}
    </button>
  );
}

export function ThemeToggleButton({
  className,
  iconSize,
  onToggle,
  showText = false,
  theme,
}: ThemeToggleButtonProps) {
  return (
    <button
      className={className}
      type="button"
      aria-label={getThemeToggleLabel(theme)}
      onClick={onToggle}
    >
      {theme === "light" ? <Moon size={iconSize} /> : <Sun size={iconSize} />}
      {showText ? <span>{getNextThemeName(theme)}</span> : null}
    </button>
  );
}
