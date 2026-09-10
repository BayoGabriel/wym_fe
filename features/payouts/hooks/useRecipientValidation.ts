"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { authenticatedRequest } from "@/features/auth/api/auth_endpoints";
import { getBanks, validateAccount, type BankListItem } from "@/features/payouts/api/payout_endpoints";
import { Bank_Icons } from "@/constants/bank_icons";

export type Bank = { code: string; name: string; logo?: any };

function findIconByName(name: string): any | null {
  const lower = name.toLowerCase();
  const hit = (Bank_Icons as any[]).find((b) => b?.name?.toLowerCase().includes(lower));
  return hit?.icon ?? null;
}

export function useRecipientValidation() {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [bank, setBank] = useState<Bank | null>(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [accountName, setAccountName] = useState("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load banks from backend; map icons locally
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await getBanks(authenticatedRequest);
        if (cancelled) return;
        const mapped: Bank[] = (res.banks || []).map((b: BankListItem) => ({
          code: b.code,
          name: b.name,
          logo: findIconByName(b.name),
        }));
        setBanks(mapped);
      } catch {
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const canContinue = useMemo(
    () => !!bank && /^\d{10}$/.test(accountNumber) && !!accountName && !verifying && !error,
    [bank, accountNumber, accountName, verifying, error],
  );

  const selectBank = useCallback((b: Bank) => {
    setBank(b);
    setError(null);
    setAccountName("");
  }, []);

  const updateAccountNumber = useCallback((v: string) => {
    const digits = v.replace(/[^\d]/g, "").slice(0, 10);
    setAccountNumber(digits);
    setError(null);
  }, []);

  // Debounced validation
  useEffect(() => {
    if (!bank || accountNumber.length !== 10) {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      setVerifying(false);
      setAccountName("");
      return;
    }
    setVerifying(true);
    setError(null);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await validateAccount(authenticatedRequest, {
          bankCode: bank.code,
          accountNumber,
        });
        setAccountName(res.accountName || "");
        setError(null);
      } catch (e: any) {
        setAccountName("");
        setError(e?.message || "Unable to validate account");
      } finally {
        setVerifying(false);
      }
    }, 500);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [bank, accountNumber]);

  return { banks, bank, accountNumber, verifying, error, accountName, canContinue, selectBank, updateAccountNumber };
}
