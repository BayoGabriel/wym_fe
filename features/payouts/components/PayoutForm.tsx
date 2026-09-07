"use client";

import { useState } from "react";
import { App_Input } from "@/components/ui_components/app_input";
import { App_Button } from "@/components/ui_components/app_button";
import type { CreatePayoutPayload } from "@/features/payouts/api/payout_endpoints";

export type PayoutFormValues = Omit<CreatePayoutPayload, "transactionPin">;

export default function PayoutForm(props: {
  initial?: Partial<PayoutFormValues>;
  onValidated: (values: PayoutFormValues) => void;
  disabled?: boolean;
}) {
  const [amount, setAmount] = useState(props.initial?.amount ?? "");
  const [bankCode, setBankCode] = useState(props.initial?.bankCode ?? "");
  const [accountNumber, setAccountNumber] = useState(
    props.initial?.accountNumber ?? "",
  );
  const [narration, setNarration] = useState(props.initial?.narration ?? "");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!/^\d+(?:\.\d{1,8})?$/.test(amount)) next.amount = "Enter a valid amount";
    if (!bankCode || bankCode.length < 2) next.bankCode = "Enter bank code";
    if (!/^\d{10}$/.test(accountNumber)) next.accountNumber = "Enter 10-digit account";
    if (!narration || narration.length < 1 || narration.length > 120)
      next.narration = "Add a short description (1-120 chars)";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    props.onValidated({ amount, bankCode, accountNumber, narration });
  };

  return (
    <form className="flex w-full max-w-xl flex-col gap-4" onSubmit={onSubmit}>
      <App_Input
        id="amount"
        label="Amount"
        placeholder="e.g. 1500 or 1500.00"
        inputMode="decimal"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        error={errors.amount}
        disabled={props.disabled}
        required
      />

      <App_Input
        id="bankCode"
        label="Bank code"
        placeholder="e.g. 011"
        value={bankCode}
        onChange={(e) => setBankCode(e.target.value)}
        error={errors.bankCode}
        disabled={props.disabled}
        required
      />

      <App_Input
        id="accountNumber"
        label="Account number"
        placeholder="10 digits"
        inputMode="numeric"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        error={errors.accountNumber}
        disabled={props.disabled}
        required
      />

      <App_Input
        id="narration"
        label="Description"
        placeholder="What is this payout for?"
        value={narration}
        onChange={(e) => setNarration(e.target.value)}
        error={errors.narration}
        disabled={props.disabled}
        required
      />

      <p className="text-sm text-muted">
        Destination account name will be verified by the provider during submission.
      </p>

      <div className="mt-2 flex gap-3">
        <App_Button type="submit" className="w-full" loading={props.disabled} disabled={props.disabled}>
          Continue
        </App_Button>
      </div>
    </form>
  );
}
