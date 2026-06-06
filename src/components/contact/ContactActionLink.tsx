import { ArrowUpRight } from "lucide-react";
import { getExternalAnchorProps } from "../../utils/links";
import type { ContactAction } from "./contactActions";

type ContactActionLinkProps = {
  action: ContactAction;
};

export function ContactActionLink({ action }: ContactActionLinkProps) {
  const Icon = action.icon;

  return (
    <a
      className={action.download ? "contact-download" : undefined}
      href={action.href}
      download={action.download}
      {...getExternalAnchorProps(action.href)}
    >
      <span className="contact-link-icon">
        <Icon size={18} />
      </span>
      <span>
        <strong>{action.label}</strong>
        <small>{action.meta}</small>
      </span>
      <ArrowUpRight size={17} />
    </a>
  );
}
