import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { ChevronDown, CheckCircle2, Home, Building2, Store, LineChart, Users } from "lucide-react";
import resImg from "@/assets/service-residential.jpg";
import comImg from "@/assets/service-commercial.jpg";
import retImg from "@/assets/service-retail.jpg";
import invImg from "@/assets/service-investment.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Real Estate Services — Residential, Commercial, Retail & Investment | DLF Properties" },
      { name: "description", content: "Professional guidance for residential, commercial, retail and investment real estate from DLF Properties." },
      { property: "og:title", content: "Real Estate Services — DLF Properties" },
      { property: "og:description", content: "Choose the right property direction with expert guidance." },
    ],
  }),
  component: ServicesPage,
});

const blocks = [
  {
    icon: Home, img: resImg, title: "Residential Properties",
    audience: "Homebuyers, families, luxury apartment buyers, villa buyers",
    features: ["Premium apartments and homes", "Independent floors and villas", "Lifestyle-led communities", "Location-focused guidance"],
  },
  {
    icon: Building2, img: comImg, title: "Commercial Spaces",
    audience: "Businesses, startups, corporate offices, investors",
    features: ["Office spaces", "Business districts", "Scalable work environments", "Accessibility-focused planning"],
  },
  {
    icon: Store, img: retImg, title: "Retail Developments",
    audience: "Brands, retail investors, shopping destinations",
    features: ["Retail spaces", "Mixed-use environments", "Customer footfall focus", "Brand-friendly locations"],
  },
  {
    icon: LineChart, img: invImg, title: "Investment Consultation",
    audience: "Property investors, NRIs, portfolio buyers, long-term asset planners",
    features: ["Location assessment", "Property type comparison", "Long-term value planning", "Documentation support"],
  },
];

const faqs = [
  { q: "What types of properties does DLF Properties help with?", a: "Residential homes, apartments and villas; commercial offices and business districts; retail and mixed-use developments; and investment-focused real estate guidance." },
  { q: "Does the website support residential property enquiries?", a: "Yes. Share your city, preferred property type and budget, and our team will guide you through suitable residential options." },
  { q: "Can businesses enquire for commercial spaces?", a: "Absolutely. We work with startups, growing teams and large enterprises looking for scalable, accessibility-focused workplaces." },
  { q: "Is investment consultation available?", a: "Yes. We offer location assessment, asset comparison and long-term value planning for buyers, NRIs and portfolio investors." },
  { q: "How does the property enquiry process work?", a: "It typically starts with a requirement discussion, followed by property and location shortlisting, site visits, documentation guidance and booking support." },
  { q: "How can I book a consultation?", a: "Use the Enquire Now button or visit the Contact page and our team will reach out within one business day." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <Hero />
      <ServicesBlocks />
      <FAQ />
      <CTASection
        eyebrow="Right property, right direction"
        title="Need Help Choosing the Right Property?"
        text="Share your requirement and our team will guide you with the next steps."
        buttonLabel="Start Enquiry"
      />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-b from-surface/60 to-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center reveal">
        <p className="font-serif-accent italic text-sm text-royal">Our services</p>
        <span className="mt-2 inline-block gold-line" />
        <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.05]">
          Real Estate Services for Homes, Business, Retail and Investment
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Choose the right property direction with professional guidance for residential,
          commercial, retail, and investment-focused real estate requirements.
        </p>
      </div>
    </section>
  );
}

function ServicesBlocks() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-20 md:space-y-28">
        {blocks.map((b, i) => (
          <div
            key={b.title}
            className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="lg:col-span-6 reveal">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img src={b.img} alt={b.title} width={1024} height={768} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/35 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-white/95 backdrop-blur px-4 py-3">
                  <span className="flex items-center gap-2 font-display font-bold text-navy">
                    <b.icon className="h-4 w-4 text-royal" /> {b.title}
                  </span>
                  <span className="font-serif-accent italic text-xs text-muted-foreground">0{i + 1}</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 reveal">
              <p className="font-serif-accent italic text-sm text-royal">Service 0{i + 1}</p>
              <span className="mt-2 inline-block gold-line" />
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy leading-tight">{b.title}</h2>
              <div className="mt-5 flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3">
                <Users className="h-4 w-4 mt-0.5 text-royal" />
                <p className="text-sm text-navy/80"><span className="font-semibold">Suitable for:</span> {b.audience}</p>
              </div>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {b.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 rounded-md border border-border bg-white px-3 py-2.5 text-sm text-navy">
                    <CheckCircle2 className="h-4 w-4 text-royal mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Link to="/contact" className="inline-flex items-center rounded-md bg-navy-deep px-5 py-3 text-sm font-semibold text-white hover:bg-navy transition">
                  Enquire for {b.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="text-center reveal">
          <p className="font-serif-accent italic text-sm text-royal">Frequently asked</p>
          <span className="mt-2 inline-block gold-line" />
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-navy">Answers to common property questions</h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal rounded-xl border border-border bg-white overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display font-bold text-navy">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-royal transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}