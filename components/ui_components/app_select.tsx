"use client";

import { ReactNode, useEffect, useId, useRef, useState } from "react";

type Option = { label: string; value: string };

export function App_Select(props: {
  id?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  getIcon?: (value: string) => ReactNode;
}) {
  const {
    id,
    label,
    value,
    onChange,
    options,
    placeholder = "Select...",
    disabled,
    className = "",
    getIcon,
  } = props;

  const internalId = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const selected = options.find((o) => o.value === value) ?? null;

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const toggle = () => {
    if (disabled) return;
    setOpen((s) => !s);
  };

  const handleSelect = (v: string) => {
    onChange(v);
    setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className={["w-full", className].filter(Boolean).join(" ")}
    >
      {label ? (
        <label
          htmlFor={id ?? internalId}
          className="mb-2 block text-sm font-medium text-secondary"
        >
          {label}
        </label>
      ) : null}
      <button
        id={id ?? internalId}
        type="button"
        onClick={toggle}
        disabled={disabled}
        className="flex h-12 w-full items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 text-left text-sm text-secondary outline-none transition focus:ring-4 focus:ring-primary/10 hover:shadow-sm active:scale-[0.99] disabled:cursor-not-allowed"
      >
        <span className="flex min-w-0 items-center gap-2 truncate">
          {selected && getIcon ? (
            <span className="inline-flex size-5 items-center justify-center">
              {getIcon(selected.value)}
            </span>
          ) : null}
          <span className="truncate">
            {selected ? (
              selected.label
            ) : (
              <span className="text-muted">{placeholder}</span>
            )}
          </span>
        </span>
        <svg
          className={[
            "size-5 transition-transform",
            open ? "rotate-180" : "rotate-0",
          ].join(" ")}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M5 7l5 6 5-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="relative z-10" aria-hidden={!open}>
        <div
          className={[
            "absolute mt-2 w-full origin-top rounded-xl border border-border bg-surface shadow-xl ring-1 ring-black/5 transition transform duration-150 ease-out",
            open
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none",
          ].join(" ")}
        >
          <ul className="max-h-64 overflow-auto py-2">
            {options.map((opt) => (
              <li key={opt.value}>
                <button
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className={[
                    "flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition outline-none focus:bg-primary/10",
                    value === opt.value
                      ? "bg-primary/5 text-primary"
                      : "hover:bg-primarySoft",
                  ].join(" ")}
                >
                  {getIcon ? (
                    <span className="inline-flex size-5 items-center justify-center">
                      {getIcon(opt.value)}
                    </span>
                  ) : null}
                  <span className="truncate">{opt.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
