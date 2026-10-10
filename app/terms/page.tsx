import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing your use of the Ayora AI website.",
};

const sections = [
  {
    title: "1. Acceptance",
    body: [
      "By using this website you agree to these terms. If you do not agree, please do not use the site. The website is operated by Ayora AI (“AYORA”, “we”, “us”).",
    ],
  },
  {
    title: "2. Purpose of the site",
    body: [
      "This website provides general information about AYORA’s services. It is not an offer and does not create a client relationship. Any services we deliver are governed by a separate written agreement.",
    ],
  },
  {
    title: "3. Intellectual property",
    body: [
      "All content, logos, and design on this website are owned by AYORA or its licensors. You may view and share pages for non-commercial purposes, but you may not copy, modify, or redistribute the content without our written permission.",
    ],
  },
  {
    title: "4. Acceptable use",
    body: [
      "You agree not to misuse the website, including attempting to disrupt it, gain unauthorised access, scrape it at scale, or introduce malicious code.",
    ],
  },
  {
    title: "5. No professional advice",
    body: [
      "Content on this website, including articles, is for general information only. It is not technical, legal, or financial advice and should not be relied on as such.",
    ],
  },
  {
    title: "6. Disclaimer",
    body: [
      "To the extent permitted by law, the website is provided “as is” without warranties of any kind. We do not guarantee that it is accurate, complete, or uninterrupted.",
    ],
  },
  {
    title: "7. Limitation of liability",
    body: [
      "To the extent permitted by law, AYORA is not liable for any indirect or consequential loss arising from your use of the website.",
    ],
  },
  {
    title: "8. Third-party links",
    body: [
      "This website may link to third-party sites. We are not responsible for their content or practices.",
    ],
  },
  {
    title: "9. Governing law",
    body: [
      "These terms are governed by the laws of India. The courts in Maharashtra have exclusive jurisdiction over any dispute arising from them.",
    ],
  },
  {
    title: "10. Changes and contact",
    body: [
      "We may update these terms at any time; the “Last updated” date above shows when they last changed. Questions can be sent to contactayoraai@gmail.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="py-16" style={{ background: "var(--bg)" }}>
        <Container>
          <div
            className="max-w-2xl flex flex-col gap-8 text-sm leading-relaxed"
            style={{ color: "var(--fg-secondary)" }}
          >
            <p>Last updated: 7 October 2026</p>
            {sections.map((s) => (
              <section key={s.title} className="flex flex-col gap-2">
                <h2 className="text-base font-semibold text-foreground">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
