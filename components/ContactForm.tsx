"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SITE } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "Indoor Window Cleaning",
  "Outdoor Window Cleaning",
  "Both Indoor & Outdoor",
  "Other",
];

export default function ContactForm({
  id = "quote",
  variant = "default",
  showHeading = true,
}: {
  id?: string;
  variant?: "default" | "compact" | "inline";
  showHeading?: boolean;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData): Record<string, string> {
    const e: Record<string, string> = {};
    if (!data.get("name")?.toString().trim()) e.name = "Name is required.";
    if (!data.get("phone")?.toString().trim()) e.phone = "Phone is required.";
    if (!data.get("email")?.toString().trim()) e.email = "Email is required.";
    if (!data.get("service")?.toString().trim()) e.service = "Please select a service.";
    return e;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const err = validate(data);
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    setErrors({});
    setSubmitError(null);
    setStatus("submitting");

    const name = data.get("name")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const phone = data.get("phone")?.toString().trim() ?? "";
    const address = data.get("address")?.toString().trim() ?? "";
    const service = data.get("service")?.toString().trim() ?? "";
    const message = data.get("message")?.toString().trim() ?? "";

    try {
      /**
       * Web3Forms free tier only accepts browser POSTs. The key must be
       * NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (set in Vercel + redeploy — not WEB3FORMS_ACCESS_KEY alone).
       */
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
      if (!accessKey) {
        console.error(
          "[ContactForm] Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY. Add it in Vercel → Environment Variables and redeploy."
        );
        setStatus("error");
        setSubmitError(
          `Online quotes aren’t connected yet. Please call ${SITE.phone} or email ${SITE.email}. (Deploy needs NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel.)`
        );
        return;
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Quote request — ${service}`,
          name,
          email,
          phone,
          address,
          service,
          message,
        }),
      });
      const json = (await res.json()) as {
        success?: boolean;
        message?: string;
        body?: { message?: string };
      };
      if (json.success === true) {
        setStatus("success");
        router.push("/thank-you");
        return;
      }
      const apiMsg = json.body?.message ?? json.message ?? "Submission rejected";
      console.error("[Web3Forms]", json);
      setStatus("error");
      setSubmitError(`${apiMsg} If this keeps happening, call ${SITE.phone}.`);
    } catch {
      setStatus("error");
      setSubmitError(`Something went wrong. Please call ${SITE.phone} or try again.`);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-neutral-100 p-6 text-center text-primary-dark">
        <p className="font-semibold">Thank you! We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  const isCompact = variant === "compact";
  const isInline = variant === "inline";

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={
        isInline
          ? "space-y-3"
          : isCompact
            ? "space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            : "space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-lg md:p-8"
      }
      noValidate
    >
      {showHeading && (
        <h3 className="text-xl font-semibold text-slate-800">
          Get Your Free Quote
        </h3>
      )}
      <div className={isInline ? "grid grid-cols-1 gap-3 sm:grid-cols-2" : "space-y-4"}>
        <div>
          <label htmlFor="form-name" className="mb-1 block text-sm font-medium text-slate-700">
            Name *
          </label>
          <input
            id="form-name"
            type="text"
            name="name"
            required
            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-slate-900 focus:border-secondary-light focus:outline-none focus:ring-1 focus:ring-secondary-light"
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-sm text-accent">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="form-phone" className="mb-1 block text-sm font-medium text-slate-700">
            Phone *
          </label>
          <input
            id="form-phone"
            type="tel"
            name="phone"
            required
            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-slate-900 focus:border-secondary-light focus:outline-none focus:ring-1 focus:ring-secondary-light"
            placeholder="(480) 737-0850"
          />
          {errors.phone && <p className="mt-1 text-sm text-accent">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="form-email" className="mb-1 block text-sm font-medium text-slate-700">
            Email *
          </label>
          <input
            id="form-email"
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-slate-900 focus:border-secondary-light focus:outline-none focus:ring-1 focus:ring-secondary-light"
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-accent">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="form-address" className="mb-1 block text-sm font-medium text-slate-700">
            Service Location / Address
          </label>
          <input
            id="form-address"
            type="text"
            name="address"
            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-slate-900 focus:border-secondary-light focus:outline-none focus:ring-1 focus:ring-secondary-light"
            placeholder="Queen Creek, AZ or your address"
          />
        </div>
        <div className={isInline ? "sm:col-span-2" : ""}>
          <label htmlFor="form-service" className="mb-1 block text-sm font-medium text-slate-700">
            Service Needed *
          </label>
          <select
            id="form-service"
            name="service"
            required
            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-slate-900 focus:border-secondary-light focus:outline-none focus:ring-1 focus:ring-secondary-light"
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-sm text-accent">{errors.service}</p>}
        </div>
        <div className={isInline ? "sm:col-span-2" : ""}>
          <label htmlFor="form-message" className="mb-1 block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id="form-message"
            name="message"
            rows={isCompact ? 2 : 3}
            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-slate-900 focus:border-secondary-light focus:outline-none focus:ring-1 focus:ring-secondary-light"
            placeholder="Any details about your windows or schedule..."
          />
        </div>
      </div>
      {status === "error" && (
        <p className="text-sm text-accent">
          {submitError ?? `Something went wrong. Please try again or call ${SITE.phone}.`}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-accent px-4 py-3 font-semibold text-white transition hover:bg-accent-hover disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      >
        {status === "submitting" ? "Sending..." : "Get Free Quote Now"}
      </button>
    </form>
  );
}
