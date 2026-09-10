"use client";

import { useCallback, useMemo, useState } from "react";

export function useTransferDetails(initial?: { amount?: string; description?: string }) {
  const [amount, setAmount] = useState(initial?.amount ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");

  const setAmountFormatted = useCallback((raw: string) => {
    const digits = raw.replace(/[^\d.]/g, "");
    setAmount(digits);
  }, []);

  const canContinue = useMemo(() => !!amount && Number(amount) > 0, [amount]);

  const persist = useCallback(() => {
    // page-level state will handle persistence between steps via URL/search or context
    return { amount, description };
  }, [amount, description]);

  return { amount, description, canContinue, setAmountFormatted, setDescription, persist };
}
