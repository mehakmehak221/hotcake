"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type FormEvent } from "react";

import { Reveal } from "@/components/motion/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { CALENDLY_URL, submitContactForm, type SubmissionError } from "@/lib/site";
import { easeOut, theme } from "@/lib/theme";

type FormState = {
  name: string;
  companyName: string;
  email: string;
  mobile: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  companyName: "",
  email: "",
  mobile: "",
  message: "",
};

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-violet-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-[border-color,box-shadow] placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200/80";

export function ContactSection() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [banner, setBanner] = useState<string | null>(null);

  const update = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status === "error") setStatus("idle");
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.companyName.trim()) next.companyName = "Company name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.mobile.trim()) next.mobile = "Mobile number is required";
    else if (!/^[0-9+\s()-]{7,15}$/.test(form.mobile.trim()))
      next.mobile = "Enter a valid mobile number";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setBanner(null);

    try {
      await submitContactForm({
        name: form.name.trim(),
        companyName: form.companyName.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        message: form.message.trim(),
      });
      setStatus("success");
      setForm(initialForm);
      setBanner("Thank you. We received your message and will respond shortly.");
    } catch (err) {
      setStatus("error");
      const apiErr = err as SubmissionError;
      if (apiErr.errors) {
        setErrors(apiErr.errors as Partial<Record<keyof FormState, string>>);
      }
      setBanner(apiErr.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-violet-100 px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #faf5ff 100%)" }}
    >
      <motion.div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <motion.div>
            <SectionBadge>Contact</SectionBadge>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tell us about your <span className="hc-gradient-text">project</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Share your requirements and our team will follow up. Prefer a live conversation? Book a
              30-minute strategy session on Calendly.
            </p>

            <motion.a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? undefined : { scale: 1.02, y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="btn-primary-shine mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(109,40,217,0.55)]"
              style={{ background: `linear-gradient(135deg, ${theme.purple}, ${theme.purpleDark})` }}
            >
              Book a 30-min call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>

            <p className="mt-6 text-sm text-gray-500">
              Or email us at{" "}
              <a href="mailto:business@maxtron.ai" className="font-medium text-violet-700 hover:underline">
                business@maxtron.ai
              </a>
            </p>
          </motion.div>

          <motion.div
            className="hc-card overflow-hidden p-6 sm:p-8"
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
            whileHover={reduce ? undefined : { boxShadow: "var(--hc-shadow-lg)", y: -4 }}
          >
            {status === "success" ? (
              <motion.div
                className="flex min-h-[320px] flex-col items-center justify-center text-center"
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full text-white"
                  style={{ background: `linear-gradient(135deg, ${theme.purple}, ${theme.purpleDark})` }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">Message sent</h3>
                <p className="mt-2 max-w-sm text-sm text-gray-600">{banner}</p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setBanner(null);
                  }}
                  className="mt-6 text-sm font-semibold text-violet-700 hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update("name")(e.target.value)}
                      className={inputClass}
                      placeholder="John Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                  </Field>
                  <Field id="companyName" label="Company" error={errors.companyName}>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      autoComplete="organization"
                      value={form.companyName}
                      onChange={(e) => update("companyName")(e.target.value)}
                      className={inputClass}
                      placeholder="Acme Corp"
                      aria-invalid={!!errors.companyName}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="email" label="Work email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update("email")(e.target.value)}
                      className={inputClass}
                      placeholder="john@company.com"
                      aria-invalid={!!errors.email}
                    />
                  </Field>
                  <Field id="mobile" label="Mobile" error={errors.mobile}>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      autoComplete="tel"
                      value={form.mobile}
                      onChange={(e) => update("mobile")(e.target.value)}
                      className={inputClass}
                      placeholder="9876543210"
                      aria-invalid={!!errors.mobile}
                    />
                  </Field>
                </div>

                <Field id="message" label="Message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message")(e.target.value)}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your goals, timeline, and which Maxtron products you are interested in."
                    aria-invalid={!!errors.message}
                  />
                </Field>

                {banner && status === "error" && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                    {banner}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={status === "loading" || reduce ? undefined : { scale: 1.01 }}
                  whileTap={status === "loading" || reduce ? undefined : { scale: 0.99 }}
                  className="btn-primary-shine flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
                  style={{
                    background: `linear-gradient(135deg, ${theme.purple}, ${theme.purpleDark})`,
                    boxShadow: "0 6px 20px -6px rgba(109,40,217,0.5)",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    "Send message"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </Reveal>
      </motion.div>
    </section>
  );
}
