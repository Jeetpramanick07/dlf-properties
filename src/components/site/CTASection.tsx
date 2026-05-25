import { Link } from "@tanstack/react-router";
import ctaImg from "@/assets/cta-skyline.jpg";

export function CTASection({
  eyebrow = "Get in touch",
  title,
  text,
  buttonLabel,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  buttonLabel: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-navy" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${ctaImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 py-24 md:py-28 text-center reveal">
        <p className="font-serif-accent text-sm italic text-gold tracking-wide">{eyebrow}</p>
        <span className="block mx-auto mt-3 gold-line" />
        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto leading-[1.1]">
          {title}
        </h2>
        <p className="mt-5 text-white/75 max-w-2xl mx-auto leading-relaxed">{text}</p>
        <Link
          to="/contact"
          className="mt-9 inline-flex items-center rounded-md bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-elevated transition hover:-translate-y-0.5"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}