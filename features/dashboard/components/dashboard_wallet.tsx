"use client";

import { useMemo, useState } from "react";
import { App_Text } from "@/components/ui_components/app_text";
import { App_Button } from "@/components/ui_components/app_button";
import { Icon_Eye, Icon_EyeOff } from "@/components/ui_components/app_icons";

type DashboardWalletProps = {
  balance: number;
  currency: string;
  bankName: string;
  accountNumber: string;
  onFundWallet: () => void;
  onTransfer?: () => void;
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

export const Dashboard_Wallet = ({
  balance,
  currency,
  bankName,
  accountNumber,
  onFundWallet,
  onTransfer,
}: DashboardWalletProps) => {
  const [hidden, setHidden] = useState(false);
  const formatted = useMemo(
    () => (hidden ? "••••••" : formatMoney(currency, balance)),
    [balance, currency, hidden],
  );

  return (
    <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
      <div className="flex items-start justify-between">
        <div>
          <App_Text variant="caption" className="text-muted tracking-wider">
            AVAILABLE BALANCE
          </App_Text>
          <div className="mt-2 flex items-center gap-3">
            <App_Text variant="title" className="text-foreground">
              {formatted}
            </App_Text>
            <button
              type="button"
              onClick={() => setHidden((v) => !v)}
              className="rounded-lg p-2 text-secondary hover:bg-primarySoft"
              aria-label={hidden ? "Show balance" : "Hide balance"}
            >
              {hidden ? <Icon_Eye className="size-5" /> : <Icon_EyeOff className="size-5" />}
            </button>
          </div>
        </div>
        <div className="rounded-md border border-border px-2.5 py-1 text-xs font-semibold text-secondary">
          {currency}
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="min-w-0">
          <App_Text variant="caption" className="text-muted">
            {bankName}
          </App_Text>
          <div className="mt-1 flex min-w-0 items-center gap-3">
            <App_Text variant="subtitle" className="truncate">
              {accountNumber}
            </App_Text>
            <button
              type="button"
              className="rounded-md border border-border px-2.5 py-1 text-xs text-secondary hover:bg-primarySoft"
              onClick={() => navigator.clipboard?.writeText(accountNumber)}
            >
              Copy
            </button>
          </div>
        </div>
        <div className="flex gap-2 sm:justify-end">
          <App_Button onClick={onFundWallet} className="px-4">
            Fund
          </App_Button>
          {onTransfer ? (
            <App_Button variant="secondary" onClick={onTransfer} className="px-4">
              Send
            </App_Button>
          ) : null}
        </div>
      </div>
    </section>
  );
};
