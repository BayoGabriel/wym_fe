"use client";

import { useState } from "react";
import Image from "next/image";

import Nav_Bar from "@/src/components/layout/Nav_bar";
import { registerForTraining } from "@/features/training/api/training.api";
import { getApiErrorMessage } from "@/features/auth/api/auth_endpoints";
import { FooterImage, GlobalBg } from "@/src/assets";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  api?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
const nigerianPhoneRegex = /^(?:\+234|0)\d{10}$/;

const AIWorkflowAutomationPage = () => {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [registeredParticipant, setRegisteredParticipant] =
    useState<FormState | null>(null);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = "Full name is required";
    } else if (form.fullName.trim().length < 3) {
      nextErrors.fullName = "Full name must be at least 3 characters";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    } else if (!nigerianPhoneRegex.test(form.phone.trim())) {
      nextErrors.phone = "Enter a valid Nigerian phone number";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined, api: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setSubmitting(true);
      setErrors({});
      const payload = {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
      };
      const { registration } = await registerForTraining(payload);
      setRegisteredParticipant({
        fullName: registration.fullName,
        email: registration.email,
        phone: registration.phone,
      });
      setRegistrationComplete(true);
    } catch (err) {
      setErrors({ api: getApiErrorMessage(err) });
    } finally {
      setSubmitting(false);
    }
  };

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText("5156085485");
    } catch {
      // ignore
    }
  };

  const scrollToDetails = () => {
    const el = document.getElementById("program-details");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToForm = () => {
    const el = document.getElementById("registration-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Nav_Bar
        bgColor="bg-transparent"
        linkColor="text-white"
        linkDColor="text-black"
        getStartedBtn="bg-white text-black"
        iconColor="text-white"
        disableScrollStyleChange
      />

      <section className="relative overflow-hidden pb-24 pt-16 md:pt-24">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/30 via-sky-500/20 to-transparent blur-3xl" />
          <div className="absolute -right-40 top-40 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/20 to-transparent blur-3xl" />
          <Image
            src={GlobalBg}
            alt="AI workflow background"
            className="absolute inset-x-0 bottom-0 w-full opacity-20"
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center md:px-6 lg:px-8">
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center rounded-full bg-slate-900/60 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/40">
              Wymnet Training Program · 5 – 12 September · Abuja · Hybrid
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Learn{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                AI Workflow Automation
              </span>{" "}
              from Industry Professionals
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Master how to design intelligent workflows, apply modern AI tools
              like ChatGPT and AI agents, and automate real business processes.
              Build production-ready systems that increase productivity, reduce
              manual work, and create leverage in any organization.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToForm}
                className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Register Now
              </button>
              <button
                onClick={scrollToDetails}
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                View Program Details
              </button>
            </div>
            <div className="mt-4 grid gap-3 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm">
              <div>
                <p className="font-medium text-slate-100">Organizer</p>
                <p>Wymnet</p>
              </div>
              <div>
                <p className="font-medium text-slate-100">Mode</p>
                <p>
                  Hybrid · Physical (Novare Mall, Wuse, Abuja) + Live Online
                </p>
              </div>
              <div>
                <p className="font-medium text-slate-100">Investment</p>
                <p className="text-emerald-300 font-semibold">₦300,000</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mx-auto max-w-md rounded-3xl bg-slate-900/70 p-6 shadow-2xl shadow-emerald-500/20 ring-1 ring-slate-800 backdrop-blur">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                AI WORKFLOW AUTOMATION
              </p>
              <p className="mt-2 text-sm text-slate-200">
                7-day intensive, hybrid training designed for professionals,
                founders and teams who want to build real AI automation systems.
              </p>
              <div className="mt-6 space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Date</span>
                  <span className="font-medium text-slate-100">
                    5 – 12 September
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Location</span>
                  <span className="text-right">Novare Mall, Wuse, Abuja</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Mode</span>
                  <span className="text-right">
                    Hybrid: Onsite + Live Online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Certificate</span>
                  <span className="text-right">
                    International · Issued in Canada
                  </span>
                </div>
                <div className="mt-4 rounded-2xl bg-slate-900/80 p-4 ring-1 ring-slate-700">
                  <p className="text-xs font-medium text-slate-200">
                    Seats are extremely limited.
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Secure your spot now and join a curated group of ambitious
                    builders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="bg-slate-950/80 py-16" id="program-details">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Why Attend this Program?
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                Go beyond theory. You&apos;ll work through real automation
                challenges with guidance from practitioners who build AI systems
                every day.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "Practical, hands-on training",
              "Hybrid learning experience",
              "International certificate",
              "Industry instructors",
              "Real-world AI automation projects",
              "High-value networking opportunities",
            ].map((item) => (
              <div
                key={item}
                className="group rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950/80 p-[1px] shadow-lg shadow-black/40"
              >
                <div className="flex h-full flex-col rounded-2xl bg-slate-950/80 p-5 transition group-hover:bg-slate-900/80">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/30">
                    <span className="text-lg">✓</span>
                  </div>
                  <p className="text-sm font-medium text-slate-50">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You&apos;ll Learn */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                What You&apos;ll Learn
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                A curated curriculum focused on real-world AI automation,
                productivity systems and no-code tooling so you can ship
                immediately.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "AI Workflow Design",
              "ChatGPT for Business",
              "Automation with AI",
              "AI Agents",
              "Prompt Engineering",
              "Business Process Automation",
              "Productivity Systems",
              "AI Tools Integration",
              "No-code Automation",
              "Building AI Solutions",
            ].map((topic) => (
              <div
                key={topic}
                className="rounded-2xl bg-slate-950/80 p-[1px] ring-1 ring-slate-800/80"
              >
                <div className="flex h-full flex-col rounded-2xl bg-gradient-to-b from-slate-950 to-slate-950/60 p-5">
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30">
                    <span className="text-sm">⚡</span>
                  </div>
                  <p className="text-sm font-medium text-slate-50">{topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Info + Payment Card + Form */}
      <section className="bg-slate-950/95 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          {/* Program Info + Payment */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Program Information
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-950/80 p-4 ring-1 ring-slate-800">
                  <p className="text-xs font-medium text-slate-300">Date</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">
                    5 September – 12 September
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950/80 p-4 ring-1 ring-slate-800">
                  <p className="text-xs font-medium text-slate-300">Venue</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">
                    Novare Mall, Wuse, Abuja
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950/80 p-4 ring-1 ring-slate-800">
                  <p className="text-xs font-medium text-slate-300">Format</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">
                    Hybrid (Physical + Live Online Sessions)
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Some sessions will be held onsite, others will be conducted
                    online.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950/80 p-4 ring-1 ring-slate-800">
                  <p className="text-xs font-medium text-slate-300">
                    Certificate
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">
                    International Certificate issued in Canada
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Card */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold tracking-tight">
                Payment Details
              </h3>
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 shadow-xl shadow-emerald-500/20 ring-1 ring-slate-800">
                <div className="relative p-6">
                  <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-emerald-500/15 blur-3xl" />
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                    AI WORKFLOW AUTOMATION
                  </p>
                  <p className="mt-3 text-xs text-slate-300">Price</p>
                  <p className="text-3xl font-semibold text-emerald-300">
                    ₦50,000
                  </p>

                  <div className="mt-4 grid gap-3 text-xs text-slate-200">
                    <div className="flex items-center justify-between">
                      <span>Bank</span>
                      <span className="font-medium">Moniepoint</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Account Name</span>
                      <span className="font-medium text-right">
                        Wymnet Data Solutions
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p>Account Number</p>
                        <p className="font-mono text-sm font-semibold tracking-wide">
                          5156085485
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={copyAccountNumber}
                        className="rounded-full border border-emerald-400/60 px-3 py-1.5 text-xs font-medium text-emerald-100 transition hover:bg-emerald-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                  <p className="mt-4 text-[11px] leading-relaxed text-emerald-200/90">
                    After payment, take a screenshot of your registration
                    confirmation and payment receipt, then send both to the
                    Wymnet support team for verification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form + FAQ */}
          <div className="space-y-10">
            {registrationComplete && registeredParticipant ? (
              <div className="rounded-3xl bg-slate-950/80 p-6 shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-500/40">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Registration Successful
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Thank you for registering for the{" "}
                  <span className="font-semibold">AI Workflow Automation</span>{" "}
                  training program.
                </p>
                <div className="mt-4 space-y-2 rounded-2xl bg-slate-900/80 p-4 text-sm text-slate-100">
                  <div className="flex justify-between gap-4">
                    <span className="font-medium">Name</span>
                    <span className="text-right">
                      {registeredParticipant.fullName}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="font-medium">Email</span>
                    <span className="text-right break-all">
                      {registeredParticipant.email}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="font-medium">Phone</span>
                    <span className="text-right">
                      {registeredParticipant.phone}
                    </span>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50/90 p-4 text-xs leading-relaxed text-amber-900">
                  <p className="font-semibold">Important:</p>
                  <p className="mt-1">
                    Please screenshot this confirmation together with your
                    payment receipt and send both to the Wymnet support team for
                    payment confirmation.
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl bg-slate-950/80 p-6 shadow-lg shadow-black/40 ring-1 ring-slate-800">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Register for AI Workflow Automation
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Fill in your details to reserve a seat. You&apos;ll see a
                  confirmation screen with your information immediately after
                  registration.
                </p>

                <form
                  className="mt-6 space-y-4"
                  onSubmit={handleSubmit}
                  noValidate
                  id="registration-form"
                >
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-medium text-slate-200"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={form.fullName}
                      onChange={handleChange("fullName")}
                      className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white shadow-sm outline-none transition placeholder:text-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                      placeholder="Jane Doe"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-slate-200"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange("email")}
                      className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white shadow-sm outline-none transition placeholder:text-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium text-slate-200"
                    >
                      Phone Number (Nigeria)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange("phone")}
                      className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white shadow-sm outline-none transition placeholder:text-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                      placeholder="0803XXXXXXX or +234803XXXXXXX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {errors.api && (
                    <p className="text-xs text-red-400">{errors.api}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {submitting ? "Submitting..." : "Submit Registration"}
                  </button>

                  <p className="mt-2 text-[11px] text-slate-400">
                    By registering, you consent to be contacted by the Wymnet
                    team with program details and updates.
                  </p>
                </form>
              </div>
            )}

            {/* FAQ */}
            <div className="rounded-3xl bg-slate-950/80 p-6 ring-1 ring-slate-800">
              <h3 className="text-lg font-semibold tracking-tight">
                Frequently Asked Questions
              </h3>
              <div className="mt-4 space-y-4 text-sm text-slate-200">
                <div>
                  <p className="font-medium">Who can attend?</p>
                  <p className="mt-1 text-slate-300">
                    Product managers, founders, operations leaders, engineers,
                    analysts, creators and anyone who wants to design and deploy
                    AI-powered workflows in real businesses.
                  </p>
                </div>
                <div>
                  <p className="font-medium">Do I need coding experience?</p>
                  <p className="mt-1 text-slate-300">
                    No. The program is designed to be accessible. We use a mix
                    of no-code tools, AI platforms and light scripting.
                    Technical participants can go deeper, but coding is not a
                    requirement.
                  </p>
                </div>
                <div>
                  <p className="font-medium">Will sessions be recorded?</p>
                  <p className="mt-1 text-slate-300">
                    Yes. Live sessions will be recorded and made available to
                    participants for a limited time, so you can review key
                    concepts and implementations.
                  </p>
                </div>
                <div>
                  <p className="font-medium">
                    How do I receive my certificate?
                  </p>
                  <p className="mt-1 text-slate-300">
                    After completing the program requirements, you will receive
                    a digital certificate issued from Canada. You can showcase
                    it on LinkedIn and in your professional portfolio.
                  </p>
                </div>
                <div>
                  <p className="font-medium">
                    Is the certificate international?
                  </p>
                  <p className="mt-1 text-slate-300">
                    Yes. The certificate is issued in Canada and is
                    internationally recognized, making it valuable for both
                    local and global opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-14">
        <div className="pointer-events-none absolute inset-x-0 -top-24 flex justify-center opacity-40">
          <Image src={FooterImage} alt="AI pattern" className="max-w-5xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to build the AI systems your team has been talking about?
          </h2>
          <p className="mt-3 text-sm text-slate-200 sm:text-base">
            Spaces are limited to keep the experience highly interactive.
            Reserve your seat now and spend 7 days building automation that
            actually ships.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIWorkflowAutomationPage;
