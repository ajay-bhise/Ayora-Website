import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CTABanner from "@/components/shared/CTABanner";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "AYORA's thinking on enterprise AI, generative AI, intelligent automation, and AI strategy - practical perspectives for technology and business leaders.",
};

const placeholderPosts = [
  {
    slug: "enterprise-genai-production-checklist",
    title: "The Enterprise GenAI Production Checklist",
    summary:
      "What separates a successful enterprise AI deployment from a proof of concept that never ships. A practical checklist for technology leaders.",
    category: "Generative AI",
    readMinutes: 8,
    publishedAt: "2026-09-15",
  },
  {
    slug: "agentic-ai-enterprise-reality",
    title: "Agentic AI in the Enterprise: Hype vs. Reality",
    summary:
      "AI agents are generating significant excitement. Here's an honest assessment of where they create genuine value today - and where the limitations still matter.",
    category: "AI Agents",
    readMinutes: 10,
    publishedAt: "2026-09-02",
  },
  {
    slug: "rag-graphrag-choosing-right-approach",
    title: "RAG vs GraphRAG: Choosing the Right Approach",
    summary:
      "A technical and practical guide to retrieval-augmented generation - when standard RAG is sufficient and when graph-based retrieval adds real value.",
    category: "Architecture",
    readMinutes: 12,
    publishedAt: "2026-08-20",
  },
  {
    slug: "microsoft-copilot-deployment-lessons",
    title: "Five Lessons from Enterprise Copilot Deployments",
    summary:
      "What we've learned deploying Microsoft Copilot across enterprise clients - the configuration decisions that matter, the adoption challenges, and the quick wins.",
    category: "Microsoft AI",
    readMinutes: 7,
    publishedAt: "2026-08-05",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical thinking on enterprise AI"
        subtitle="Perspectives from AYORA's delivery work - for technology leaders navigating AI adoption."
      />

      <section className="py-20" style={{ background: "var(--bg)" }}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {placeholderPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col gap-4 rounded-xl border p-6"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex items-center gap-3">
                  <Badge variant="brand">{post.category}</Badge>
                  <span className="text-xs" style={{ color: "var(--fg-muted)" }}>
                    {post.readMinutes} min read
                  </span>
                </div>

                <h2 className="text-base font-semibold text-foreground leading-snug">
                  {post.title}
                </h2>

                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--fg-secondary)" }}>
                  {post.summary}
                </p>

                <div className="flex items-center justify-between mt-auto pt-2">
                  <time className="text-xs" style={{ color: "var(--fg-muted)" }}
                    dateTime={post.publishedAt}>
                    {post.publishedAt}
                  </time>
                  <span className="text-sm font-semibold flex items-center gap-1.5"
                    style={{ color: "var(--brand)" }}>
                    Read
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm text-center" style={{ color: "var(--fg-muted)" }}>
            More articles are being published regularly. Check back soon.
          </p>
        </Container>
      </section>

      <CTABanner
        title="Have a topic you'd like us to cover?"
        subtitle="Send us your question or suggestion and we'll consider it for a future piece."
      />
    </>
  );
}
