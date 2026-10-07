"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    // TODO: Wire up to a form submission service (e.g. Formspree, Resend, or custom API route)
    setSubmitted(true);
    setError("");
  }

  const inputClass = `
    w-full rounded-lg border px-4 py-3 text-sm outline-none
    transition-colors duration-150
    focus:border-brand
  `;

  const inputStyle = {
    background: "var(--bg-surface)",
    borderColor: "var(--border)",
    color: "var(--fg)",
  };

  if (submitted) {
    return (
      <div
        className="rounded-xl border p-8 flex flex-col gap-4 text-center"
        style={{
          background: "var(--bg-surface)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="mx-auto flex items-center justify-center w-12 h-12 rounded-full"
          style={{ background: "var(--brand-dim)" }}
        >
          <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor"
            style={{ color: "var(--brand)" }}>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground">Message received</h3>
        <p className="text-sm" style={{ color: "var(--fg-secondary)" }}>
          Thank you for reaching out. We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium"
            style={{ color: "var(--fg-secondary)" }}>
            Name <span style={{ color: "var(--brand)" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            style={inputStyle}
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium"
            style={{ color: "var(--fg-secondary)" }}>
            Email <span style={{ color: "var(--brand)" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            style={inputStyle}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-xs font-medium"
          style={{ color: "var(--fg-secondary)" }}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={handleChange}
          className={inputClass}
          style={inputStyle}
          placeholder="Your organisation"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium"
          style={{ color: "var(--fg-secondary)" }}>
          How can we help? <span style={{ color: "var(--brand)" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Tell us about your challenge or goal..."
        />
      </div>

      {error && (
        <p className="text-sm" style={{ color: "#F87171" }}>
          {error}
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
