import Container from "@/components/ui/Container";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section
      className="pt-32 pb-16 border-b"
      style={{
        background: "var(--bg-section)",
        borderColor: "var(--border)",
      }}
    >
      <Container>
        <div className="max-w-3xl flex flex-col gap-4">
          {eyebrow && (
            <span className="text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: "var(--brand)" }}>
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "var(--fg-secondary)" }}>
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
