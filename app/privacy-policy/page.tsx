import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Queen Creek Window Cleaning. How we collect and use your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-slate-500">Last updated: March 2024</p>

      <div className="prose prose-slate mt-8 max-w-none text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">Introduction</h2>
        <p className="mt-2">
          Queen Creek Window Cleaning (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website or request our services.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">Information We Collect</h2>
        <p className="mt-2">
          We may collect information you provide when you fill out a contact form, request a quote, or call us. This may include your name, phone number, email address, service address, and any message or details you submit. We may also collect information automatically when you visit our website, such as your IP address, browser type, and pages visited.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">How We Use Your Information</h2>
        <p className="mt-2">
          We use your information to respond to your inquiries, provide quotes, schedule and perform window cleaning services, and communicate with you about our services. We may also use it to improve our website and services. Service requests may be fulfilled by our network of trusted local professionals, including Arizona Window Washing Pros.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">Sharing of Information</h2>
        <p className="mt-2">
          We do not sell your personal information. We may share your information with service providers who assist us in operating our business (e.g., scheduling, communication) or when required by law.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">Security</h2>
        <p className="mt-2">
          We take reasonable steps to protect your information from unauthorized access or disclosure. However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">Your Choices</h2>
        <p className="mt-2">
          You may contact us to update or correct your information or to request that we delete your information, subject to applicable law.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-slate-900">Contact Us</h2>
        <p className="mt-2">
          If you have questions about this Privacy Policy, please contact us through our website or by phone.
        </p>
      </div>
    </section>
  );
}
