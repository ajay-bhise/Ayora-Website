import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Ready to explore what AI can do for your organisation?",
  subtitle = "Let's start with a conversation about your challenges and goals.",
}: CTABannerProps) {
  return (
    <section className="py-20" style={{ background: "var(--bg-section)" }}>
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-balance">
              {title}
            </h2>
            <p className="text-base" style={{ color: "var(--fg-secondary)" }}>
              {subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
