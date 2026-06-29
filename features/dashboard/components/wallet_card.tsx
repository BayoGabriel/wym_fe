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
    <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#2452bc] to-[#4a5a7d] p-6 text-surface shadow-sm sm:p-8">
      <div className="relative flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-gray-300">
            <Icon_Wallet className="size-5" />
            <App_Text as="span" variant="caption" className="text-gray-400">
              Available Balance
            </App_Text>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <App_Text as="span" variant="title" className="text-surface">
              {formatted}
            </App_Text>
            <button
              type="button"
              onClick={() => setHidden((v) => !v)}
              className="rounded-xl p-2.5 "
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
        <div className="rounded-2xl px-4 py-2.5 text-xs font-semibold">
          {currency}
        </div>
      </div>

      <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
        <App_Button
          onClick={onFundWallet}
          variant="outline"
          className="transition-all duration-200"
        >
          Add funds
        </App_Button>
      </div>
    </section>
  );
};
