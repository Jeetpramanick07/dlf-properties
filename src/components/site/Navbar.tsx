import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Building2 } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav border-b border-border/60 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-18 md:h-20 flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-navy text-white shadow-card">
            <Building2 className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight text-navy">
              DLF <span className="text-gold">Properties</span>
            </span>
            <span className="font-serif-accent text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Est. 1946
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-2 text-sm font-medium text-navy/80 hover:text-navy transition-colors"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-[2px] bg-gradient-gold transition-transform origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-navy-deep px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-navy hover:shadow-elevated hover:-translate-y-0.5"
          >
            Enquire Now
          </Link>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-md px-3 py-3 text-sm font-medium text-navy hover:bg-surface"
                activeProps={{ className: "bg-surface" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-navy-deep px-5 py-3 text-sm font-semibold text-white"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}