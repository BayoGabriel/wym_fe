"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { usePayout } from "@/features/payouts/state/usePayout";

export default function PayoutSuccessPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const amount = sp.get("amount") || "";
  const bankName = sp.get("bankName") || "";
  const accountNumber = sp.get("accountNumber") || "";
  const accountName = sp.get("accountName") || "";

  const { state } = usePayout();

  const status: "SUCCESS" | "PENDING" | "FAILED" | "UNKNOWN" = useMemo(() => {
    if (state.phase === "success") return "SUCCESS";
    if (state.phase === "failed") return "FAILED";
    if (state.phase === "processing") return "PENDING";
    return "UNKNOWN";
  }, [state.phase]);

  const isSuccess = status === "SUCCESS";
  const isFailed = status === "FAILED" || status === "UNKNOWN";
  const isPending = status === "PENDING";

  const title = isSuccess ? "Transfer successful" : isFailed ? "Transfer failed" : "Processing transfer";
  const subtitle = isSuccess
    ? "The money is on its way to the recipient."
    : isFailed
    ? "We couldn't complete this transfer. No funds were deducted, or any debit will be reversed."
    : "Your transfer is being processed. This usually takes a few seconds.";

  const formattedAmount = amount
    ? `₦${Number(String(amount).replace(/,/g, "")).toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    : null;

  const now = new Date();
  const dateLabel = now.toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" });
  const timeLabel = now.toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="mx-auto w-full max-w-2xl p-4">
      <h1 className="mb-4 text-2xl font-bold">Transfer status</h1>

      <div className="mb-6 rounded-2xl border bg-white p-6 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4" style={{ borderColor: isSuccess ? "#16a34a" : isFailed ? "#dc2626" : "#f59e0b" }}>
          {isPending ? (
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          ) : isFailed ? (
            <span className="text-2xl text-red-600">×</span>
          ) : (
            <span className="text-2xl text-emerald-600">✓</span>
          )}
        </div>
        <div className="mb-1 text-xl font-semibold">{title}</div>
        <div className="mb-3 text-sm text-gray-600">{subtitle}</div>
        {formattedAmount ? <div className="text-2xl font-bold">{formattedAmount}</div> : null}
        {isPending ? (
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-700">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" /> Awaiting confirmation
          </div>
        ) : null}
      </div>

      <div className="rounded-2xl border bg-white p-4 shadow-sm">
        <div className="mb-3 text-sm font-semibold">Transaction details</div>
        <DetailRow label="Recipient" value={accountName || "—"} />
        <Divider />
        <DetailRow label="Bank" value={bankName} />
        <Divider />
        <DetailRow label="Account" value={accountNumber} />
        <Divider />
        <DetailRow label="Date" value={`${dateLabel} · ${timeLabel}`} />
      </div>

      <div className="mt-6 flex gap-3">
        {isFailed ? (
          <button className="rounded-lg border px-4 py-2" onClick={() => router.replace("/dashboard/payout/details?" + new URLSearchParams({ bankName, accountNumber, accountName }).toString())}>Try again</button>
        ) : null}
        <button className="rounded-lg bg-primary px-4 py-2 text-white" onClick={() => router.replace("/dashboard")}>{isFailed ? "Back to home" : "Done"}</button>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="max-w-[60%] truncate text-right">{value}</span>
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-gray-100" />;
}
