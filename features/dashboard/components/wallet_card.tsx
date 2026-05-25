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
    () => (hidden ? "••••••" : formatMoney(currency, balance)),
    [balance, currency, hidden],
  );

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary via-secondary to-primary p-6 text-white shadow-lg sm:p-8 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]">
      <div className="absolute -right-16 -top-16 size-64 rounded-full bg-white/10 blur-3xl opacity-30" />
      <div className="absolute -left-16 -bottom-16 size-64 rounded-full bg-primary/20 blur-3xl opacity-30" />

      <div className="relative flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-white/90">
            <Icon_Wallet className="size-5" />
            <App_Text as="span" variant="caption" className="text-white/60">
              Wallet Balance
            </App_Text>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <App_Text as="span" variant="title" className="text-white">
              {formatted}
            </App_Text>
            <button
              type="button"
              onClick={() => setHidden((v) => !v)}
              className="rounded-xl bg-white/10 p-2.5 transition-all duration-200 hover:bg-white/15 active:scale-95"
              aria-label={hidden ? "Show balance" : "Hide balance"}
            >
              {hidden ? (
                <Icon_Eye className="size-5" />
              ) : (
                <Icon_EyeOff className="size-5" />
              )}
            </button>
          </div>
        </div>
        <div className="rounded-2xl bg-white/10 px-4 py-2.5 text-xs font-semibold shadow-sm">
          {currency}
        </div>
      </div>

      <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-white/10 p-5 shadow-sm backdrop-blur-sm">
          <App_Text variant="caption" className="text-white/60">
            Account Number
          </App_Text>
          <App_Text variant="subtitle" className="mt-2 text-white font-medium">
            {accountNumber || "Not available"}
          </App_Text>
        </div>
        <div className="rounded-2xl bg-white/10 p-5 shadow-sm backdrop-blur-sm">
          <App_Text variant="caption" className="text-white/60">
            Bank
          </App_Text>
          <App_Text variant="subtitle" className="mt-2 text-white font-medium">
            {bankName || "Not available"}
          </App_Text>
        </div>
      </div>

      <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
        <App_Button
          onClick={onFundWallet}
          variant="primary"
          className="bg-white text-secondary hover:bg-white/95 shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Fund Wallet
        </App_Button>
        <App_Button
          onClick={onTransfer}
          variant="outline"
          className="border-white/30 bg-white/10 text-white hover:bg-white/20 shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Transfer
        </App_Button>
      </div>
    </section>
  );
};
