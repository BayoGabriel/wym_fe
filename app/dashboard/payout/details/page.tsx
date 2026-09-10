"use client";

import { App_Input } from "@/components/ui_components/app_input";
import { App_Button } from "@/components/ui_components/app_button";
import { RecipientSummary } from "@/features/payouts/components/RecipientSummary";
import { useTransferDetails } from "@/features/payouts/hooks/useTransferDetails";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function PayoutDetailsPage() {
  return (
    <Suspense fallback={<div className="mx-auto w-full max-w-2xl p-4" />}>
      <PayoutDetailsInner />
    </Suspense>
  );
}

function PayoutDetailsInner() {
  const router = useRouter();
  const sp = useSearchParams();
  const bankName = sp.get("bankName") || "";
  const bankCode = sp.get("bankCode") || "";
  const accountNumber = sp.get("accountNumber") || "";
  const accountName = sp.get("accountName") || "";

  const masked = `${accountNumber.slice(0, 4)} •••• ${accountNumber.slice(-3)}`;
  const {
    amount,
    description,
    canContinue,
    setAmountFormatted,
    setDescription,
    persist,
  } = useTransferDetails();

  const onReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canContinue || !description.trim()) return;
    const p = new URLSearchParams({
      bankName,
      bankCode,
      accountNumber,
      accountName,
      amount,
      description,
    });
    router.push(`/dashboard/payout/review?${p.toString()}`);
  };

  return (
    <div className="mx-auto w-full max-w-2xl p-4">
      <h1 className="mb-2 text-2xl font-bold">Send money</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Enter the amount and confirm the recipient details.
      </p>

      <RecipientSummary
        name={accountName}
        bank={bankName}
        accountMasked={masked}
      />

      <form className="mt-4 flex flex-col gap-4" onSubmit={onReview}>
        <div>
          <label className="mb-2 block text-sm font-medium">
            Transfer amount
          </label>
          <div className="flex items-center gap-2 rounded-lg border bg-white px-4 py-3">
            <span className="text-lg font-semibold">₦</span>
            <input
              value={amount}
              onChange={(e) => setAmountFormatted(e.target.value)}
              inputMode="decimal"
              placeholder="0.00"
              className="w-full border-none p-0 outline-none focus:ring-0"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Enter the amount you want to send.
          </p>
        </div>

        <App_Input
          id="description"
          label="Description"
          placeholder="What is this transfer for?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <App_Button
          className="w-full"
          disabled={!canContinue || !description.trim()}
        >
          Review transfer
        </App_Button>
        <p className="text-center text-xs text-gray-500">
          You’ll review the transfer before it is sent.
        </p>
      </form>
    </div>
  );
}
