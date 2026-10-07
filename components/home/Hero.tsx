import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(124,58,237,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Corner glow — top left */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Corner glow — bottom right, faint */}
      <div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase"
          style={{
            borderColor: "var(--brand-glow)",
            background: "var(--brand-dim)",
            color: "var(--brand)",
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "var(--brand)" }}
          />
          Enterprise AI Consulting
        </span>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight"
          style={{ color: "var(--fg)" }}>
          Enterprise AI,{" "}
          <span style={{ color: "var(--brand)" }}>Engineered</span>{" "}
          to Perform.
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl leading-relaxed max-w-2xl"
          style={{ color: "var(--fg-secondary)" }}>
          AYORA partners with forward-thinking organizations to design, build, and
          scale generative AI, intelligent automation, and AI-native applications
          that deliver measurable business impact.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Button href="/services" variant="primary" size="lg">
            Explore Our Services
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
          <Button href="/case-studies" variant="secondary" size="lg">
            View Case Studies
          </Button>
        </div>

        {/* Trust line */}
        <p className="text-xs mt-4" style={{ color: "var(--fg-muted)" }}>
          Trusted by organizations across financial services, professional services, and operations
        </p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
