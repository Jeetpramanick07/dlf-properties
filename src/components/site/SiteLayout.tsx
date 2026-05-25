import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useReveal } from "./useReveal";

export function SiteLayout({ children }: { children: ReactNode }) {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}