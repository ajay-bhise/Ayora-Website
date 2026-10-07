import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function HomeCTA() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Subtle glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-[600px] h-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div
          className="mx-auto max-w-3xl rounded-2xl border px-8 py-14 sm:px-16 text-center flex flex-col items-center gap-6"
          style={{
            background: "var(--bg-surface)",
            borderColor: "var(--border-mid)",
          }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase"
            style={{
              borderColor: "var(--brand-glow)",
              background: "var(--brand-dim)",
              color: "var(--brand)",
            }}
          >
            Ready to get started?
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance leading-snug">
            Let&apos;s build your AI roadmap together
          </h2>

          <p className="text-base leading-relaxed max-w-xl" style={{ color: "var(--fg-secondary)" }}>
            Whether you have a specific use case in mind or are exploring where AI can create the most value, we&apos;d like to have that conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
