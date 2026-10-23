import { PageHeader } from "@/components/terminal/PageHeader";
import { contact, socials } from "@/lib/content";

export default function ContactPage() {
  return (
    <div className="pb-16 pt-14 md:pb-24 md:pt-20">
      <PageHeader title="联系" hint="contact" />
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-fg md:text-xl">{contact.heading}</h3>
        <p className="text-[15px] leading-relaxed text-fg/85">{contact.sub}</p>
        <ul className="space-y-1.5 pt-2 text-[15px]">
          {socials.map((s) => {
            const external = s.href.startsWith("http");
            return (
              <li key={s.label} className="flex items-baseline gap-3">
                <span className="w-16 shrink-0 text-sm text-muted">{s.label}</span>
                <a
                  href={s.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group text-accent underline-offset-4 transition-colors hover:underline"
                >
                  {s.handle}
                  {external && (
                    <span
                      aria-hidden
                      className="ml-1 text-xs text-muted transition-colors group-hover:text-accent"
                    >
                      ↗
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
