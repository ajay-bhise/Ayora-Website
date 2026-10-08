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
    setError("");

    const subject = `Enquiry from ${form.name}${form.company ? ` (${form.company})` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "-"}`,
      "",
      "Message:",
      form.message,
    ].join("\r\n");

    window.location.href = `mailto:contactayoraai@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
      <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
        This opens your email app with your message pre-filled. Press Send there to deliver it.
      </p>
    </form>
  );
}
