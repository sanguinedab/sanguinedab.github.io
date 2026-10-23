"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";
import type { Profile } from "@/lib/types";

export function Sidebar({
  open,
  collapsed,
  onClose,
  profile,
}: {
  open: boolean;
  collapsed: boolean;
  onClose: () => void;
  profile: Profile;
}) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside className={`sidebar ${open ? "is-open" : ""} ${collapsed ? "collapsed" : ""}`}>
      <div className="border-b border-line px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="glow flex h-11 w-11 items-center justify-center rounded border border-line bg-panel text-lg font-bold text-accent">
            {profile.monogram}
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-fg">{profile.nameEn}</div>
            <div className="truncate text-xs text-muted">~/{profile.handle}</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4">
        <p className="px-2 pb-2 text-[11px] uppercase tracking-widest text-green/70">
          // modules
        </p>
        <ul className="space-y-0.5">
          {nav.map((n) => {
            const active = isActive(n.href);
            const label = n.href === "/" ? `Hi ${profile.name}` : n.label;
            return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={onClose}
                  className={`flex w-full items-center justify-between rounded px-2.5 py-2 text-left text-sm transition-colors ${
                    active
                      ? "bg-raised text-accent"
                      : "text-fg/75 hover:bg-raised hover:text-fg"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className={`text-xs ${active ? "text-accent" : "text-muted"}`}
                    >
                      {active ? "▸" : "›"}
                    </span>
                    {label}
                  </span>
                  <span className="text-[11px] text-muted">{n.hint}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-line px-5 py-4 text-[11px] text-muted">
        <p className="truncate">{profile.email}</p>
        <p className="mt-1 text-green/70">build v1.0 · stable</p>
      </div>
    </aside>
  );
}
