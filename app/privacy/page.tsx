import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16" style={{ background: "var(--bg)" }}>
        <Container>
          <div className="max-w-2xl text-sm leading-relaxed" style={{ color: "var(--fg-secondary)" }}>
            <p>[PLACEHOLDER: Privacy policy content to be added.]</p>
          </div>
        </Container>
      </section>
    </>
  );
}
