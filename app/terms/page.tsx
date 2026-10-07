import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="py-16" style={{ background: "var(--bg)" }}>
        <Container>
          <div className="max-w-2xl text-sm leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
            <p>[PLACEHOLDER: Terms of use content to be added.]</p>
          </div>
        </Container>
      </section>
    </>
  );
}
