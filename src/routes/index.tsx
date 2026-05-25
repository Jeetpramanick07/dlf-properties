import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Building2, Home, Store, LineChart, ShieldCheck, MapPin,
  Award, Users, CheckCircle2, Search, FileCheck, KeyRound, Sparkles,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { CTASection } from "@/components/site/CTASection";
import heroImg from "@/assets/hero-residence.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DLF Properties — Premium Residential, Commercial & Retail Real Estate" },
      { name: "description", content: "Find landmark residential, commercial, retail and investment real estate solutions backed by 78+ years of trusted execution across 15 states and 24 cities." },
      { property: "og:title", content: "DLF Properties — Landmark Spaces Built for Modern Living" },
      { property: "og:description", content: "Premium real estate solutions across India. Residential, commercial, retail and investment consultation by DLF Properties." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Trust />
      <Services />
      <Process />
      <CTASection
        eyebrow="Move forward with clarity"
        title="Looking for the Right Property Opportunity?"
        text="Connect with DLF Properties for residential, commercial, retail, or investment-focused real estate guidance."
        buttonLabel="Book Property Consultation"
      />
    </SiteLayout>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-surface/40 to-white">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-royal/10 blur-3xl" />
      <div className="absolute top-40 -left-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-6 reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-medium text-navy">
            <span className="h-1.5 w-1.5 rounded-full bg-royal" />
            <span className="font-serif-accent italic text-muted-foreground">Since 1946 · Trusted Real Estate Legacy</span>
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-[3.8rem] font-bold leading-[1.05] text-navy">
            Find <span className="relative inline-block">
              <span className="relative z-10">Landmark Spaces</span>
              <span className="absolute left-0 right-0 bottom-1 h-3 bg-gold/35 -z-0" />
            </span> Built for Modern Living and Growth
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            DLF Properties brings together residential, commercial, and retail real estate
            solutions backed by decades of development experience, trusted execution, and
            customer-centric service.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-navy-deep px-6 py-3.5 text-sm font-semibold text-white shadow-card hover:bg-navy hover:-translate-y-0.5 transition">
              Enquire Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy hover:border-gold hover:text-navy transition">
              Explore Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
            {[
              { k: "78+ Yrs", v: "Experience" },
              { k: "15", v: "States" },
              { k: "24", v: "Cities" },
              { k: "32.63 Mn", v: "Sq M Delivered" },
            ].map((t) => (
              <div key={t.v} className="rounded-md border border-border bg-white/70 px-3 py-2.5 backdrop-blur-sm">
                <div className="text-base font-bold text-navy">{t.k}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{t.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-6 relative reveal">
          <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={heroImg}
              alt="Premium residential development"
              width={1280}
              height={1280}
              className="absolute inset-0 h-full w-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
            {/* Tag chips */}
            <div className="absolute top-5 left-5 flex flex-wrap gap-2">
              {["Residential", "Commercial", "Retail"].map((t) => (
                <span key={t} className="rounded-full bg-white/85 backdrop-blur px-3 py-1 text-[11px] font-medium text-navy">{t}</span>
              ))}
            </div>
            {/* Floating price card */}
            <div className="absolute top-1/3 -left-4 md:-left-8 w-56 rounded-xl bg-white p-4 shadow-elevated border border-border float-slow">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-royal" /> Gurugram, NCR
              </div>
              <div className="mt-2 font-display text-lg font-bold text-navy">The Crest Residence</div>
              <div className="mt-1 text-xs text-muted-foreground">3 & 4 BHK · Sky Lounges</div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-serif-accent italic text-xs text-muted-foreground">Starting at</span>
                <span className="text-base font-bold text-navy">₹ 4.2 Cr+</span>
              </div>
            </div>
            {/* Consultation card */}
            <div className="absolute bottom-5 right-5 w-60 rounded-xl bg-gradient-navy p-4 text-white shadow-elevated">
              <div className="flex items-center gap-2 text-xs text-gold">
                <Sparkles className="h-3.5 w-3.5" /> Property Consultation
              </div>
              <p className="mt-2 text-sm leading-snug">
                Speak with a senior advisor and shortlist locations matched to your goals.
              </p>
              <Link to="/contact" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold">
                Book now <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search lead card */}
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 -mt-6 md:-mt-10 pb-16 reveal">
        <div className="rounded-2xl border border-border bg-white shadow-elevated overflow-hidden">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-3 bg-gradient-navy p-6 text-white flex flex-col justify-between">
              <div>
                <p className="font-serif-accent italic text-xs text-gold">Find your space</p>
                <h3 className="mt-2 font-display text-xl font-bold leading-tight">Property Search & Enquiry</h3>
                <p className="mt-2 text-xs text-white/70">Tell us what you're looking for &mdash; our team responds within one business day.</p>
              </div>
              <span className="mt-6 inline-block gold-line" />
            </div>
            <div className="lg:col-span-9 p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <Field label="Property Type">
                <select className="w-full bg-transparent text-sm font-medium text-navy outline-none">
                  <option>Residential</option><option>Commercial</option><option>Retail</option><option>Investment</option>
                </select>
              </Field>
              <Field label="Preferred City">
                <select className="w-full bg-transparent text-sm font-medium text-navy outline-none">
                  <option>Gurugram</option><option>New Delhi</option><option>Chennai</option><option>Chandigarh</option><option>Other</option>
                </select>
              </Field>
              <Field label="Budget Range">
                <select className="w-full bg-transparent text-sm font-medium text-navy outline-none">
                  <option>₹ 50L – 1 Cr</option><option>₹ 1 – 3 Cr</option><option>₹ 3 – 7 Cr</option><option>₹ 7 Cr+</option>
                </select>
              </Field>
              <Link to="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-navy-deep px-5 text-sm font-semibold text-white hover:bg-navy transition">
                <Search className="h-4 w-4" /> Enquire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{label}</span>
      <div className="mt-2 h-11 rounded-md border border-border bg-surface px-3 flex items-center">
        {children}
      </div>
    </label>
  );
}

/* ---------------- TRUST ---------------- */
function Trust() {
  const stats = [
    { icon: Award, value: <Counter to={78} suffix="+" />, label: "Years of sustained growth & innovation" },
    { icon: Building2, value: <><Counter to={32.63} decimals={2} /> Mn</>, label: "Sq M of real estate delivered" },
    { icon: MapPin, value: <Counter to={15} />, label: "States across India" },
    { icon: MapPin, value: <Counter to={24} />, label: "Cities of active presence" },
    { icon: ShieldCheck, value: "3", label: "Residential, commercial & retail expertise" },
    { icon: Users, value: "Trusted", label: "Customer-centric service excellence" },
  ];
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <p className="font-serif-accent italic text-sm text-royal">Trusted at scale</p>
          <span className="mt-2 inline-block gold-line" />
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy">A legacy measured in decades, delivered in landmarks</h2>
          <p className="mt-3 text-muted-foreground">Built on values of trust, transparency, and quality assurance &mdash; year after year.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <div key={i} className="reveal group rounded-xl bg-white border border-border p-7 hover-lift relative overflow-hidden">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-gold scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-royal/10 text-royal">
                  <s.icon className="h-5 w-5" />
                </span>
                <div className="font-display text-3xl font-bold text-navy">{s.value}</div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
import resImg from "@/assets/service-residential.jpg";
import comImg from "@/assets/service-commercial.jpg";
import retImg from "@/assets/service-retail.jpg";
import invImg from "@/assets/service-investment.jpg";

const services = [
  {
    icon: Home, img: resImg, title: "Residential Properties",
    desc: "Premium homes, apartments, independent floors, villas, and integrated communities designed for modern urban living.",
    points: ["Premium apartments & villas", "Integrated communities", "Lifestyle-led planning"],
  },
  {
    icon: Building2, img: comImg, title: "Commercial Spaces",
    desc: "Business-ready office spaces and commercial ecosystems built around accessibility, scale, and long-term growth.",
    points: ["Grade-A office spaces", "Business districts", "Scalable workplaces"],
  },
  {
    icon: Store, img: retImg, title: "Retail Developments",
    desc: "Retail destinations and mixed-use environments designed to support brands, footfall, and customer experience.",
    points: ["Retail destinations", "Mixed-use environments", "Brand-friendly locations"],
  },
  {
    icon: LineChart, img: invImg, title: "Investment Consultation",
    desc: "Guidance for buyers and investors looking for location advantage, asset value, and long-term real estate potential.",
    points: ["Location assessment", "Asset value planning", "Documentation support"],
  },
];

function Services() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div className="max-w-xl">
            <p className="font-serif-accent italic text-sm text-royal">What we do</p>
            <span className="mt-2 inline-block gold-line" />
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy">Real estate solutions for every chapter</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-royal">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((s) => (
            <article key={s.title} className="reveal group rounded-xl overflow-hidden border border-border bg-white card-glow hover-lift">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img src={s.img} alt={s.title} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <span className="absolute top-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/95 text-navy">
                  <s.icon className="h-4 w-4" />
                </span>
                <h3 className="absolute bottom-3 left-4 right-4 font-display text-lg font-bold text-white">{s.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-navy/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-royal mt-0.5 shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-royal">
                  Know More <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
const steps = [
  { icon: Users, t: "Requirement Discussion", d: "We start with your goals, lifestyle and timeline." },
  { icon: Home, t: "Property Type Selection", d: "Choose between residential, commercial, retail or investment." },
  { icon: MapPin, t: "Location Shortlisting", d: "Curated locations matched to your priorities." },
  { icon: Search, t: "Site Visit / Virtual Tour", d: "Explore in person or remotely with our team." },
  { icon: FileCheck, t: "Documentation Guidance", d: "Clear, transparent and compliant paperwork support." },
  { icon: KeyRound, t: "Booking & Handover Support", d: "End-to-end assistance until you receive your keys." },
];

function Process() {
  return (
    <section className="relative bg-surface py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 hidden lg:block h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <p className="font-serif-accent italic text-sm text-royal">Property roadmap</p>
          <span className="mt-2 inline-block gold-line" />
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy">A guided journey from enquiry to handover</h2>
          <p className="mt-3 text-muted-foreground">A clear, structured process built around your real estate decision.</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.t}
              className={`reveal relative rounded-xl border border-border bg-white p-7 hover-lift ${i % 2 ? "lg:translate-y-8" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-bold text-navy/10 leading-none">0{i + 1}</span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-gradient-navy text-white">
                  <s.icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              <span className="mt-5 block gold-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
