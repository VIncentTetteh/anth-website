"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Our Team" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/delivery-governance", label: "Delivery & Governance" },
  { href: "/partnership", label: "Partnership" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <div className="page-shell text-sm text-slate-200">
      <header className="border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
        <nav className="content-shell flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-[0_0_40px_rgba(248,250,252,0.45)]">
              <span className="text-xs font-semibold text-slate-950">ANTH</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-medium tracking-[0.24em] text-amber-200/90 uppercase">
                The ANTH
              </span>
              <span className="text-sm font-semibold text-slate-50">
                Ananse Ntentan Technology Hub
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-slate-800/80 bg-slate-950/60 px-1.5 py-1 text-[11px] lg:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "rounded-full px-3 py-1.5 transition-colors " +
                    (isActive
                      ? "bg-amber-400 text-slate-950 shadow-[0_0_28px_rgba(251,191,36,0.6)]"
                      : "text-slate-200/80 hover:bg-slate-800/70")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      <main className="content-shell pb-10 pt-6 lg:pt-10">{children}</main>

      <footer className="border-t border-slate-800/60 bg-slate-950/80">
        <div className="content-shell flex flex-col justify-between gap-4 py-4 text-[11px] text-slate-400/80 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} The ANTH (Ananse Ntentan Technology Hub). All
            rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>Delivering engineering innovation across a connected world.</span>
            <span className="hidden sm:inline">◆</span>
            <span>Crafted with precision in Ghana.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
