import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { Counter } from "@/components/site/Counter";
import {
  ShieldCheck, MapPin, Award, Eye, Building2, TrendingUp, Sparkles,
} from "lucide-react";
import skyline from "@/assets/about-skyline.jpg";
import resImg from "@/assets/service-residential.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DLF Properties — A Legacy in Real Estate Since 1946" },
      { name: "description", content: "Inspired by a real estate legacy that began in 1946, DLF Properties focuses on premium residential, commercial and retail solutions across 15 states and 24 cities." },
      { property: "og:title", content: "About DLF Properties — Building Landmark Real Estate" },
      { property: "og:description", content: "Trust, scale and long-term value across residential, commercial and retail real estate." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <AboutHero />
      <AboutBlock />
      <ValueGrid />
      <CTASection
        eyebrow="The next chapter"
        title="Plan Your Next Property Move with Confidence"
        text="Whether you're buying your first home, expanding your business, or investing for the long term &mdash; talk to our team."
        buttonLabel="Enquire Now"
      />
    </SiteLayout>
  );
}

function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={skyline} alt="City skyline" width={1600} height={900} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="max-w-3xl text-white reveal">
          <p className="font-serif-accent italic text-sm text-gold">About DLF Properties</p>
          <span className="mt-3 inline-block gold-line" />
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05]">
            Building Landmark Real Estate Ecosystems Since 1946
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl leading-relaxed">
            DLF Properties is inspired by a legacy of real estate development, customer trust,
            quality assurance, and large-scale delivery across India.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl reveal">
          {[
            { v: <Counter to={1946} />, l: "Founded" },
            { v: <><Counter to={78} suffix="+" /> Yrs</>, l: "Experience" },
            { v: <Counter to={15} />, l: "States" },
            { v: <Counter to={24} />, l: "Cities" },
          ].map((s, i) => (
            <div key={i} className="rounded-lg bg-white/10 backdrop-blur border border-white/15 px-4 py-3">
              <div className="font-display text-2xl font-bold text-white">{s.v}</div>
              <div className="text-[11px] uppercase tracking-wider text-gold">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutBlock() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative reveal">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
            <img src={resImg} alt="DLF Properties development" width={1024} height={768} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-10 w-64 rounded-xl bg-white border border-border p-5 shadow-elevated float-slow">
            <p className="font-serif-accent italic text-xs text-royal">Legacy</p>
            <div className="mt-1 font-display text-3xl font-bold text-navy">1946</div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              From urban colony development to landmark residential, commercial and retail
              ecosystems across India.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 reveal">
          <p className="font-serif-accent italic text-sm text-royal">Our story</p>
          <span className="mt-2 inline-block gold-line" />
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy leading-tight">
            A real estate experience built around trust, scale and long-term value.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            DLF Properties represents a real estate experience built around trust, scale, and
            long-term value. Inspired by DLF's legacy since 1946, the brand focuses on premium
            residential, commercial, and retail property solutions for modern buyers, businesses,
            and investors.
          </p>
          <ul className="mt-7 space-y-4">
            {[
              { icon: Award, t: "Founded in 1946", d: "A heritage of real estate development spanning more than seven decades." },
              { icon: Building2, t: "Urban colony pioneer", d: "Began with planned urban colony development and grew into landmark townships." },
              { icon: TrendingUp, t: "Expanded into Gurugram", d: "Helped shape one of India's most prominent business and lifestyle destinations." },
              { icon: ShieldCheck, t: "Quality assurance & customer focus", d: "Decades of disciplined execution and customer-centric service." },
            ].map((p) => (
              <li key={p.t} className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-royal/10 text-royal">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display font-bold text-navy">{p.t}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{p.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const values = [
  { icon: ShieldCheck, t: "Verified Property Guidance", d: "Reliable, due-diligence backed property recommendations." },
  { icon: MapPin, t: "Location-Led Planning", d: "Every recommendation begins with location intelligence." },
  { icon: Award, t: "Quality Assurance", d: "Decades of disciplined construction and delivery standards." },
  { icon: Eye, t: "Transparent Consultation", d: "Clear pricing, paperwork and timelines &mdash; no surprises." },
  { icon: Building2, t: "Residential & Commercial Expertise", d: "Cross-segment understanding for sharper decisions." },
  { icon: Sparkles, t: "Long-Term Value Focus", d: "Properties evaluated for sustained appreciation and use." },
];

function ValueGrid() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <p className="font-serif-accent italic text-sm text-royal">Why DLF Properties</p>
          <span className="mt-2 inline-block gold-line" />
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy">Values that guide every property decision</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => (
            <div key={v.t} className="reveal group relative rounded-xl border border-border bg-white p-7 hover-lift overflow-hidden">
              <span className="pointer-events-none absolute top-0 right-0 h-14 w-14 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/70 transition-colors duration-500 rounded-tr-xl" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-14 w-14 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/70 transition-colors duration-500 rounded-bl-xl" />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-gradient-navy text-white">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: v.d }} />
            </div>
          ))}
        </div>
        <p className="mt-12 text-center reveal">
          <Link to="/contact" className="inline-flex items-center rounded-md bg-navy-deep px-6 py-3 text-sm font-semibold text-white hover:bg-navy transition">
            Talk to a property advisor
          </Link>
        </p>
      </div>
    </section>
  );
}