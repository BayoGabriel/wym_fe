"use client";

import { ReactNode, useEffect } from "react";

type AppModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  footer?: ReactNode;
};

export function App_Modal({ open, onClose, title, children, footer }: AppModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div
        role="dialog"
        aria-modal
        className="relative z-10 w-full max-w-md rounded-3xl border border-border bg-surface p-6 shadow-2xl"
      >
        {title ? <h3 className="mb-3 text-lg font-semibold text-foreground">{title}</h3> : null}
        <div className="space-y-4">{children}</div>
        {footer ? <div className="mt-5 flex items-center justify-end gap-3">{footer}</div> : null}
      </div>
    </div>
  );
}
