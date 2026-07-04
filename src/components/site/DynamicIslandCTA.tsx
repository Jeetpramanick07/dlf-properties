import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function DynamicIslandCTA() {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  /* Show the island only after the user scrolls past the hero (300px) */
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    handleScroll(); // check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`dynamic-island-cta ${visible ? "island-visible" : "island-hidden"}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <Link
        to="/contact"
        className="island-inner"
        aria-label="Book Property Consultation"
      >
        {/* Glow ring */}
        <span className="island-glow" />

        {/* Content */}
        <span className="island-icon">
          <Phone className="h-4 w-4" />
        </span>

        <span className={`island-label ${expanded ? "label-show" : "label-hide"}`}>
          Book Consultation
        </span>

        <span className={`island-arrow ${expanded ? "arrow-show" : "arrow-hide"}`}>
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
}
