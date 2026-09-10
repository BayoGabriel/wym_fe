"use client";

import { App_Modal } from "@/components/ui_components/app_modal";

export function BankSelectionModal(props: {
  visible: boolean;
  banks: { code: string; name: string; logo?: any }[];
  selected: { code: string; name: string } | null;
  onClose: () => void;
  onSelect: (b: { code: string; name: string; logo?: any }) => void;
}) {
  const { visible, banks, selected, onClose, onSelect } = props;
  return (
    <App_Modal open={visible} onClose={onClose} title="Select bank">
      <div className="max-h-[60vh] w-[90vw] max-w-md overflow-y-auto p-2">
        <ul className="flex flex-col divide-y">
          {banks.map((b) => (
            <li key={b.code}>
              <button
                type="button"
                onClick={() => onSelect(b)}
                className="flex w-full items-center gap-3 px-2 py-3 hover:bg-gray-50"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {b.logo ? (
                  <img
                    src={b.logo as any}
                    alt={b.name}
                    className="h-7 w-7 rounded-full"
                  />
                ) : (
                  <div className="h-7 w-7 rounded-full bg-gray-200" />
                )}
                <span className="flex-1 text-left text-sm">{b.name}</span>
                {selected?.code === b.code ? (
                  <span className="text-primary">✓</span>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </App_Modal>
  );
}
