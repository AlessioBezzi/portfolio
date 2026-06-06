import {
  ArrowUpRight,
  Send,
} from "lucide-react";
import type { PortfolioContent } from "../data/portfolioContent";
import { createMailHref } from "../utils/links";
import { ContactActionLink } from "./contact/ContactActionLink";
import { createContactActions } from "./contact/contactActions";
import { RevealSection } from "./RevealSection";

type ContactSectionProps = {
  current: PortfolioContent;
  reducedMotion: boolean;
};

export function ContactSection({ current, reducedMotion }: ContactSectionProps) {
  const emailHref = createMailHref(current.meta.email);
  const contactActions = createContactActions(current);

  return (
    <RevealSection className="contact-section" id="contact" reducedMotion={reducedMotion}>
      <div className="contact-copy">
        <span>{current.contact.eyebrow}</span>
        <h2>{current.contact.title}</h2>
        <p>{current.contact.body}</p>
        <a className="contact-primary" href={emailHref}>
          <Send size={18} />
          {current.contact.emailLabel}
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="contact-actions" aria-label="Contact links">
        {contactActions.map((action) => (
          <ContactActionLink action={action} key={action.label} />
        ))}
      </div>
    </RevealSection>
  );
}
