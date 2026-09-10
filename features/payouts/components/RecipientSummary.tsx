"use client";

export function RecipientSummary(props: { name?: string; bank: string; accountMasked: string }) {
  const { name, bank, accountMasked } = props;
  const initial = (name || "?").charAt(0).toUpperCase();
  return (
    <div className="my-3 flex items-center gap-3 rounded-lg border bg-white p-3 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">
        {initial}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{name || "Recipient"}</span>
        <span className="text-xs text-gray-500">{bank} · {accountMasked}</span>
      </div>
    </div>
  );
}
