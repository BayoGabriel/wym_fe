"use client";

import { useMemo, useState } from "react";
import { App_Button } from "@/components/ui_components/app_button";
import { App_Text } from "@/components/ui_components/app_text";
import {
  Icon_Eye,
  Icon_EyeOff,
  Icon_Wallet,
} from "@/components/ui_components/app_icons";

type WalletCardProps = {
  balance: number;
  currency: string;
  accountNumber: string;
  bankName: string;
  onFundWallet: () => void;
  onTransfer: () => void;
};

const formatMoney = (currency: string, amount: number) => {
  try {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
};

export const WalletCard = ({
  balance,
  currency,
  accountNumber,
  bankName,
  onFundWallet,
  onTransfer,
}: WalletCardProps) => {
  const [hidden, setHidden] = useState(false);
  const formatted = useMemo(
    () => (hidden ? "••••" : formatMoney(currency, balance)),
    [balance, currency, hidden],
  );

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 text-secondary shadow-sm sm:p-8">
      <div className="absolute inset-x-10 -top-10 h-24 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="relative flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-muted">
            <Icon_Wallet className="size-5" />
            <App_Text as="span" variant="caption">
              Available Balance
            </App_Text>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <App_Text as="span" variant="title" className="text-secondary">
              {formatted}
            </App_Text>
            <button
              type="button"
              onClick={() => setHidden((v) => !v)}
              className="rounded-xl p-2.5 hover:bg-primarySoft"
              aria-label={hidden ? "Show balance" : "Hide balance"}
            >
              {hidden ? <Icon_Eye className="size-5" /> : <Icon_EyeOff className="size-5" />}
            </button>
          </div>
        </div>
        <div className="rounded-2xl bg-primary/10 px-4 py-2.5 text-xs font-semibold text-primary">
          {currency}
        </div>
      </div>

      <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-background p-4">
          <App_Text variant="caption">Reserved account</App_Text>
          <App_Text variant="subtitle" className="mt-1">
            {bankName} • {accountNumber}
          </App_Text>
        </div>
        <div className="rounded-2xl border border-border bg-background p-4">
          <App_Text variant="caption">Status</App_Text>
          <App_Text variant="subtitle" className="mt-1">Active</App_Text>
        </div>
      </div>

      <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
        <App_Button onClick={onFundWallet} variant="primary" className="transition-all duration-200">
          Add funds
        </App_Button>
        {/* <App_Button onClick={onTransfer} variant="outline" className="transition-all duration-200">
          Transfer
        </App_Button> */}
      </div>
    </section>
  );
};