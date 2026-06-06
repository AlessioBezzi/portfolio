import {
  Download,
  Github,
  Linkedin,
  type LucideIcon,
} from "lucide-react";
import type { PortfolioContent } from "../../data/portfolioContent";
import { getPublicAssetUrl } from "../../utils/assets";

export type ContactAction = {
  download?: boolean;
  href: string;
  icon: LucideIcon;
  label: string;
  meta: string;
};

export function createContactActions(current: PortfolioContent): ContactAction[] {
  return [
    {
      href: current.meta.github,
      icon: Github,
      label: current.contact.githubLabel,
      meta: "github.com/AlessioBezzi",
    },
    {
      href: current.meta.linkedin,
      icon: Linkedin,
      label: current.contact.linkedinLabel,
      meta: "linkedin.com/in/alessio-bezzi",
    },
    {
      download: true,
      href: getPublicAssetUrl(current.meta.cvHref),
      icon: Download,
      label: current.contact.cvLabel,
      meta: "PDF",
    },
  ];
}
