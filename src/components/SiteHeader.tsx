import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";

const links = [
  { to: "/", label: "Головна" },
  { to: "/products", label: "Продукція" },
  { to: "/cooperation", label: "Співпраця" },
  { to: "/contacts", label: "Контакти" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoMark}
            alt="Піддони.dp"
            width={44}
            height={44}
            className="w-11 h-11 object-contain drop-shadow-[0_2px_8px_rgba(201,168,76,0.35)]"
          />
          <div className="leading-tight">
            <div className="font-display text-lg text-foreground tracking-wide">
              Піддони<span className="italic-display">.dp</span>
            </div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              Premium · Dnipro
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors relative pb-1"
              activeProps={{
                className:
                  "text-xs tracking-[0.25em] uppercase text-[var(--gold)] relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[var(--gold)]",
              }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contacts"
            className="hidden sm:inline-flex items-center justify-center px-6 py-3 border border-[var(--gold)]/40 text-[var(--gold)] text-xs tracking-[0.25em] uppercase hover:bg-[var(--gold)] hover:text-primary-foreground transition-all"
          >
            Замовити
          </Link>
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.25em] uppercase text-muted-foreground hover:text-[var(--gold)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
