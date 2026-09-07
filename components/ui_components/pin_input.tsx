"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  length?: number; // default 4
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
};

export default function PinInput({
  length = 4,
  onChange,
  onComplete,
  disabled,
}: Props) {
  const [values, setValues] = useState<string[]>(
    Array.from({ length }, () => ""),
  );
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    const v = values.join("");
    onChange?.(v);
    if (v.length === length) onComplete?.(v);
  }, [length, onChange, onComplete, values]);

  const handleChange = (idx: number, next: string) => {
    if (disabled) return;
    const onlyDigits = next.replace(/\D/g, "");
    if (!onlyDigits) return;
    setValues((prev) => {
      const arr = [...prev];
      // If user pasted more than 1 digit, distribute
      if (onlyDigits.length > 1) {
        for (let i = 0; i < onlyDigits.length && idx + i < length; i++) {
          arr[idx + i] = onlyDigits[i] ?? "";
        }
        const target = Math.min(idx + onlyDigits.length, length - 1);
        setTimeout(() => inputs.current[target]?.focus(), 0);
      } else {
        arr[idx] = onlyDigits;
        if (idx < length - 1)
          setTimeout(() => inputs.current[idx + 1]?.focus(), 0);
      }
      return arr;
    });
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    const idx = Number((e.currentTarget as any).dataset.index);
    if (e.key === "Backspace") {
      e.preventDefault();
      setValues((prev) => {
        const arr = [...prev];
        if (arr[idx]) {
          arr[idx] = "";
          return arr;
        }
        if (idx > 0) setTimeout(() => inputs.current[idx - 1]?.focus(), 0);
        arr[Math.max(idx - 1, 0)] = "";
        return arr;
      });
    } else if (e.key === "ArrowLeft" && idx > 0) {
      e.preventDefault();
      inputs.current[idx - 1]?.focus();
    } else if (e.key === "ArrowRight" && idx < length - 1) {
      e.preventDefault();
      inputs.current[idx + 1]?.focus();
    }
  };

  const boxes = useMemo(() => {
    return values.map((v, i) => (
      <input
        key={i}
        type="password"
        inputMode="numeric"
        autoComplete="one-time-code"
        pattern="\\d*"
        maxLength={length}
        className="h-12 w-12 rounded-xl border border-border bg-surface text-center text-lg tracking-widest text-secondary outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
        value={v}
        onChange={(e) => handleChange(i, e.target.value)}
        onKeyDown={handleKeyDown}
        data-index={i}
        ref={(el) => {
          inputs.current[i] = el;
        }}
        disabled={disabled}
        aria-label={`Digit ${i + 1}`}
      />
    ));
  }, [disabled, handleKeyDown, length, values]);

  return (
    <div
      className="flex items-center justify-center gap-3"
      role="group"
      aria-label="Enter PIN"
    >
      {boxes}
    </div>
  );
}
