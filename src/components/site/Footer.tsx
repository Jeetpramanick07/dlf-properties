import { Link } from "@tanstack/react-router";
import { Building2, Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-gold text-navy">
              <Building2 className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight">
              DLF <span className="text-gold">Properties</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            A real estate experience built around trust, scale, and long-term value &mdash;
            inspired by a legacy that began in 1946.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center rounded-md border border-gold/60 px-5 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold hover:text-navy"
          >
            Book Property Consultation
          </Link>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">Navigate</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>Residential Properties</li>
            <li>Commercial Spaces</li>
            <li>Retail Developments</li>
            <li>Investment Consultation</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">Connect</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5" /> Gurugram, Haryana, India</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold mt-0.5" /> +91 1800 000 000</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-gold mt-0.5" /> hello@dlfproperties.example</li>
          </ul>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 transition hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>&copy; {new Date().getFullYear()} DLF Properties. All rights reserved.</p>
          <p className="font-serif-accent italic">Landmark spaces. Trusted execution. Long-term value.</p>
        </div>
      </div>
    </footer>
  );
}