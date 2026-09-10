"use client";

import Image from "next/image";

export function BankSelector(props: { bank: { name: string; logo?: any } | null; onClick: () => void }) {
  const { bank } = props;
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="flex w-full items-center justify-between rounded-lg border bg-white px-4 py-3 text-left shadow-sm hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
        {bank?.logo ? (
          // next/image can't import require() at runtime; fall back to normal img
          // eslint-disable-next-line @next/next/no-img-element
          <img src={bank.logo as any} alt={bank.name} className="h-9 w-9 rounded-full object-cover" />
        ) : (
          <div className="h-9 w-9 rounded-full bg-gray-200" />
        )}
        <div className="flex flex-col">
          <span className="text-sm font-medium">{bank?.name ?? "Select bank"}</span>
          <span className="text-xs text-gray-500">Tap to choose</span>
        </div>
      </div>
      <span className="text-gray-400">›</span>
    </button>
  );
}
