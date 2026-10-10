import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ayora AI collects, uses, and protects personal information submitted through this website.",
};

const sections = [
  {
    title: "1. Who we are",
    body: [
      "Ayora AI (“AYORA”, “we”, “us”) is an enterprise AI and technology consulting company based in Maharashtra, India. This policy explains how we handle personal information collected through this website. You can contact us at contactayoraai@gmail.com.",
    ],
  },
  {
    title: "2. Information we collect",
    body: [
      "Information you give us: when you contact us, we receive your name, email address, company name, and the contents of your message. The contact form opens your email application, so your message is sent by your own email provider and reaches us as a normal email.",
      "Information collected automatically: our hosting provider may keep standard server logs (such as IP address, browser type, pages requested, and timestamps) for security and operational purposes.",
    ],
  },
  {
    title: "3. How we use information",
    body: [
      "We use your information to respond to your enquiries, to discuss and deliver our services, to keep the website secure, and to meet legal obligations. We do not sell your personal information.",
    ],
  },
  {
    title: "4. Sharing",
    body: [
      "We share information only with service providers that help us operate the website and our business (for example hosting and email providers), and where required by law. These providers may only use it to provide services to us.",
    ],
  },
  {
    title: "5. Retention",
    body: [
      "We keep enquiry correspondence only as long as needed to respond to you, manage any resulting relationship, and meet legal or accounting requirements.",
    ],
  },
  {
    title: "6. Cookies",
    body: [
      "This website does not use advertising or analytics cookies. If this changes, we will update this policy and, where required, ask for your consent.",
    ],
  },
  {
    title: "7. Your rights",
    body: [
      "Under applicable law, including India’s Digital Personal Data Protection Act, 2023, you may have the right to access, correct, or erase your personal data and to withdraw consent. To exercise these rights, email us at contactayoraai@gmail.com. If you are outside India, you may have additional rights under your local data protection law.",
    ],
  },
  {
    title: "8. Security",
    body: [
      "We use reasonable technical and organisational measures to protect personal information. No method of transmission over the internet is completely secure.",
    ],
  },
  {
    title: "9. Third-party links",
    body: [
      "This website may link to third-party sites. We are not responsible for their privacy practices.",
    ],
  },
  {
    title: "10. Changes",
    body: [
      "We may update this policy from time to time. The “Last updated” date above shows when it last changed.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
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
