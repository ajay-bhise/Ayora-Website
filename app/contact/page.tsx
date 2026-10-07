import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AYORA. We're happy to discuss your AI challenges, explore how we can help, or arrange an initial conversation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation"
        subtitle="Tell us about your challenges and goals. We'll get back to you within one business day."
      />

      <section className="py-20" style={{ background: "var(--bg)" }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: contact details */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-foreground">
                  Get in touch
                </h2>
                <div className="flex flex-col gap-4 text-sm" style={{ color: "var(--fg-secondary)" }}>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold tracking-wider uppercase"
                      style={{ color: "var(--fg-muted)" }}>
                      Email
                    </span>
                    <span>hello@ayoraai.com</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold tracking-wider uppercase"
                      style={{ color: "var(--fg-muted)" }}>
                      Location
                    </span>
                    <span>[PLACEHOLDER: City, Country]</span>
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl border p-6 flex flex-col gap-3"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border)",
                }}
              >
                <h3 className="text-sm font-semibold text-foreground">
                  What to expect
                </h3>
                <ul className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--fg-secondary)" }}>
                  {[
                    "Response within one business day",
                    "Initial 30-minute discovery call at no cost",
                    "No sales pressure — just an honest conversation",
                    "Clear next steps agreed before we proceed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"
                        style={{ color: "var(--brand)" }}>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
