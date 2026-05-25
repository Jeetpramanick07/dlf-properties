import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Building2, Home, Phone, MapPin, Mail, Send, CheckCircle2, Compass } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DLF Properties — Connect with a Property Consultant" },
      { name: "description", content: "Share your preferred city, property type, budget and timeline. Our property consultants will guide you with the next steps." },
      { property: "og:title", content: "Contact DLF Properties" },
      { property: "og:description", content: "Connect with a property consultant for residential, commercial, retail and investment guidance." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <Hero />
      <ContactBlock />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy text-white">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-royal/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-28 text-center reveal">
        <p className="font-serif-accent italic text-sm text-gold">Get in touch</p>
        <span className="mt-3 inline-block gold-line" />
        <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05] max-w-4xl mx-auto">
          Connect with a Property Consultant
        </h1>
        <p className="mt-5 text-white/75 max-w-2xl mx-auto leading-relaxed">
          Share your preferred city, property type, budget, and timeline. Our team will help
          you move forward with clarity.
        </p>
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 reveal">
          <LeadForm />
        </div>
        <aside className="lg:col-span-5 space-y-5 reveal">
          <InfoCard icon={Compass} title="Property Enquiry" text="General property enquiries across residential, commercial and retail." line="enquiry@dlfproperties.example" />
          <InfoCard icon={Home} title="Residential Consultation" text="Apartments, villas, independent floors and integrated communities." line="residential@dlfproperties.example" />
          <InfoCard icon={Building2} title="Commercial Consultation" text="Office spaces, business districts and scalable workplaces." line="commercial@dlfproperties.example" />
          <InfoCard icon={MapPin} title="Visit / Site Tour Assistance" text="Schedule a guided site visit or virtual tour with our team." line="+91 1800 000 000" />

          <div className="rounded-xl overflow-hidden border border-border shadow-card">
            <div className="aspect-[16/9] bg-gradient-to-br from-navy via-navy-deep to-royal relative">
              <div className="absolute inset-0 opacity-25" style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent 0 24px, oklch(1 0 0 / 0.15) 24px 25px), repeating-linear-gradient(90deg, transparent 0 24px, oklch(1 0 0 / 0.15) 24px 25px)",
              }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-8 w-8 mx-auto text-gold" />
                  <p className="mt-2 font-display text-lg font-bold">DLF Corporate Office</p>
                  <p className="text-xs text-white/70 mt-1">Gurugram, Haryana, India</p>
                </div>
              </div>
            </div>
            <div className="bg-white px-5 py-4 text-xs text-muted-foreground flex items-center justify-between">
              <span>Mon &ndash; Sat · 10:00 AM – 7:00 PM</span>
              <span className="font-serif-accent italic text-royal">Visit by appointment</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, text, line }: { icon: typeof Phone; title: string; text: string; line: string }) {
  return (
    <div className="group rounded-xl border border-border bg-white p-5 hover-lift relative overflow-hidden">
      <span className="pointer-events-none absolute top-0 right-0 h-12 w-12 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/70 transition-colors duration-500 rounded-tr-xl" />
      <div className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-gradient-navy text-white">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display font-bold text-navy">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{text}</p>
          <p className="mt-2 text-sm font-semibold text-royal">{line}</p>
        </div>
      </div>
    </div>
  );
}

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-white p-10 text-center shadow-card">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-royal/10 text-royal">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-navy">Thank you for reaching out</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          A property consultant from DLF Properties will get in touch with you within one business day.
        </p>
        <button onClick={() => setSubmitted(false)} className="mt-6 inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-navy hover:bg-surface">
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-white p-7 md:p-9 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-serif-accent italic text-sm text-royal">Enquiry form</p>
          <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-navy">Share your property requirement</h2>
        </div>
        <span className="hidden md:inline-flex h-12 w-12 items-center justify-center rounded-md bg-gradient-gold text-navy">
          <Send className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-7 grid sm:grid-cols-2 gap-5">
        <Input label="Full Name" placeholder="Your full name" required />
        <Input label="Phone Number" type="tel" placeholder="+91 9xxxx xxxxx" required />
        <Input label="Email Address" type="email" placeholder="you@example.com" required />
        <Input label="Preferred City" placeholder="Gurugram, Delhi NCR…" />
        <Select label="Property Type" options={["Residential", "Commercial", "Retail", "Investment"]} />
        <Select label="Budget Range" options={["₹ 50L – 1 Cr", "₹ 1 – 3 Cr", "₹ 3 – 7 Cr", "₹ 7 Cr+"]} />
        <Select label="Buying Purpose" options={["End Use", "Investment", "Business Requirement", "Leasing / Renting"]} className="sm:col-span-2" />
        <Textarea label="Message" placeholder="Tell us about your requirement, timeline and any specific preferences…" className="sm:col-span-2" />
      </div>
      <button type="submit" className="mt-7 inline-flex items-center gap-2 rounded-md bg-navy-deep px-7 py-3.5 text-sm font-semibold text-white shadow-card hover:bg-navy hover:-translate-y-0.5 transition">
        Submit Enquiry <Send className="h-4 w-4" />
      </button>
      <p className="mt-4 text-xs text-muted-foreground">By submitting, you agree to be contacted by a DLF Properties consultant about your enquiry.</p>
    </form>
  );
}

function Input({ label, className = "", ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <input {...rest} className="mt-2 h-12 w-full rounded-md border border-border bg-surface px-4 text-sm text-navy outline-none focus:border-royal focus:bg-white transition" />
    </label>
  );
}
function Textarea({ label, className = "", ...rest }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <textarea rows={4} {...rest} className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-navy outline-none focus:border-royal focus:bg-white transition resize-none" />
    </label>
  );
}
function Select({ label, options, className = "" }: { label: string; options: string[]; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <select className="mt-2 h-12 w-full rounded-md border border-border bg-surface px-4 text-sm text-navy outline-none focus:border-royal focus:bg-white transition">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}