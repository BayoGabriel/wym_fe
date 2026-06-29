"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { Use_Auth_Context } from "@/features/auth/api/auth_context";
import { App_Text } from "@/components/ui_components/app_text";
import { App_Input } from "@/components/ui_components/app_input";
import { App_Button } from "@/components/ui_components/app_button";
import {
  getMyAccountUpdateRequests,
  getMySupportTickets,
  submitAccountUpdateRequest,
  submitSupportTicket,
} from "@/features/profile/api/profile_endpoints";

export default function ProfilePage() {
  const router = useRouter();
  const { isAuthenticated, isHydrated, user } = Use_Auth_Context();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [support, setSupport] = useState({ subject: "", message: "" });
  const [isSubmittingSupport, setIsSubmittingSupport] = useState(false);

  const [recentRequests, setRecentRequests] = useState<any[]>([]);
  const [tickets, setTickets] = useState<any[]>([]);

  useEffect(() => {
    if (isHydrated && !isAuthenticated) router.replace("/auth/login");
  }, [isAuthenticated, isHydrated, router]);

  useEffect(() => {
    if (!user) return;
    setForm({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email ?? "",
      phone: user.phone ?? "",
    });
  }, [user]);

  useEffect(() => {
    const load = async () => {
      try {
        const [reqs, tix] = await Promise.all([
          getMyAccountUpdateRequests(),
          getMySupportTickets(),
        ]);
        setRecentRequests(reqs.requests);
        setTickets(tix.tickets);
      } catch {}
    };
    if (isAuthenticated) void load();
  }, [isAuthenticated]);

  const canSubmit = useMemo(() => {
    if (!user) return false;
    return (
      form.firstName !== user.firstName ||
      form.lastName !== user.lastName ||
      form.email !== (user.email ?? "") ||
      form.phone !== (user.phone ?? "")
    );
  }, [form, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setIsSubmitting(true);
    try {
      const requestedFields: any = {};
      if (form.firstName !== user?.firstName) requestedFields.firstName = form.firstName;
      if (form.lastName !== user?.lastName) requestedFields.lastName = form.lastName;
      if (form.email !== (user?.email ?? "")) requestedFields.email = form.email;
      if (form.phone !== (user?.phone ?? "")) requestedFields.phone = form.phone;
      await submitAccountUpdateRequest({ requestedFields });
      const next = await getMyAccountUpdateRequests();
      setRecentRequests(next.requests);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSupport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!support.subject || !support.message) return;
    setIsSubmittingSupport(true);
    try {
      await submitSupportTicket({ subject: support.subject, message: support.message });
      const next = await getMySupportTickets();
      setTickets(next.tickets);
      setSupport({ subject: "", message: "" });
    } finally {
      setIsSubmittingSupport(false);
    }
  };

  if (!isHydrated) return <div className="min-h-screen bg-background" />;
  if (!isAuthenticated || !user) return null;

  return (
    <main className="min-h-screen bg-background px-2 max-lg:py-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <section className="rounded-3xl border border-border bg-surface p-6">
          <App_Text variant="subtitle">Profile</App_Text>
          <form onSubmit={handleSubmit} className="mt-4 grid gap-4 sm:grid-cols-2">
            <App_Input
              id="firstName"
              label="First name"
              value={form.firstName}
              onChange={(e) => setForm((s) => ({ ...s, firstName: e.target.value }))}
            />
            <App_Input
              id="lastName"
              label="Last name"
              value={form.lastName}
              onChange={(e) => setForm((s) => ({ ...s, lastName: e.target.value }))}
            />
            <App_Input
              id="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            />
            <App_Input
              id="phone"
              label="Phone"
              value={form.phone}
              onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
            />
            <div className="sm:col-span-2 flex justify-end">
              <App_Button type="submit" disabled={!canSubmit} loading={isSubmitting}>
                Request Update
              </App_Button>
            </div>
          </form>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-6">
            <App_Text variant="subtitle">Quick Links</App_Text>
            <div className="mt-4 grid gap-3">
              <App_Button variant="outline" onClick={() => router.push("/dashboard")}>Wallets</App_Button>
              <App_Button variant="outline" onClick={() => router.push("/dashboard/transactions")}>Transaction History</App_Button>
              <App_Button variant="outline" onClick={() => router.push("/dashboard/fund")}>Fund Wallet</App_Button>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-6">
            <App_Text variant="subtitle">Contact Support</App_Text>
            <form onSubmit={handleSupport} className="mt-4 grid gap-4">
              <App_Input
                id="subject"
                label="Subject"
                value={support.subject}
                onChange={(e) => setSupport((s) => ({ ...s, subject: e.target.value }))}
              />
              <label className="flex w-full flex-col gap-2 text-sm font-medium text-secondary" htmlFor="message">
                <span>Message</span>
                <textarea
                  id="message"
                  className="min-h-28 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-secondary outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/10"
                  value={support.message}
                  onChange={(e) => setSupport((s) => ({ ...s, message: e.target.value }))}
                />
              </label>
              <div className="flex justify-end">
                <App_Button type="submit" loading={isSubmittingSupport} disabled={!support.subject || !support.message}>Send</App_Button>
              </div>
            </form>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-6">
            <App_Text variant="subtitle">Recent Update Requests</App_Text>
            <div className="mt-4 grid gap-3">
              {recentRequests.length === 0 ? (
                <App_Text variant="body" className="text-muted">No requests yet.</App_Text>
              ) : (
                recentRequests.slice(0, 5).map((r) => (
                  <div key={r.id} className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-secondary">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{r.status}</span>
                      <span className="text-muted">{new Date(r.createdAt).toLocaleString()}</span>
                    </div>
                    <pre className="mt-2 overflow-auto text-xs text-muted">{JSON.stringify(r.requestedFields, null, 2)}</pre>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-6">
            <App_Text variant="subtitle">Support Tickets</App_Text>
            <div className="mt-4 grid gap-3">
              {tickets.length === 0 ? (
                <App_Text variant="body" className="text-muted">No tickets yet.</App_Text>
              ) : (
                tickets.slice(0, 5).map((t) => (
                  <div key={t.id} className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-secondary">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{t.subject}</span>
                      <span className="text-muted">{t.status}</span>
                    </div>
                    <App_Text variant="body" className="mt-2">{t.message}</App_Text>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
