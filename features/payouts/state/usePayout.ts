"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { authenticatedRequest } from "@/features/auth/api/auth_endpoints";
import {
  CreatePayoutPayload,
  CreatePayoutResponse,
  getPayoutStatusByReference,
  createPayout,
  PayoutStatusResponse,
} from "@/features/payouts/api/payout_endpoints";

export type PayoutPhase =
  | "idle"
  | "verifyingAccount" // backend does name enquiry internally; kept for UI semantics
  | "confirm"
  | "pin"
  | "submitting"
  | "processing"
  | "success"
  | "failed";

export type PayoutState = {
  phase: PayoutPhase;
  error: string | null;
  reference: string | null;
  lastStatus: PayoutStatusResponse | null;
  isBusy: boolean;
};

export function usePayout() {
  const [state, setState] = useState<PayoutState>({
    phase: "idle",
    error: null,
    reference: null,
    lastStatus: null,
    isBusy: false,
  });
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopPolling = useCallback(() => {
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }
  }, []);

  const startPolling = useCallback(async (reference: string) => {
    stopPolling();
    setState((s) => ({ ...s, phase: "processing", isBusy: true }));
    pollingRef.current = setInterval(async () => {
      try {
        const status = await getPayoutStatusByReference(authenticatedRequest, reference);
        setState((s) => ({ ...s, lastStatus: status }));
        if (["SUCCESS", "FAILED", "REVERSED", "EXPIRED"].includes(status.status)) {
          stopPolling();
          setState((s) => ({
            ...s,
            phase: status.status === "SUCCESS" ? "success" : "failed",
            isBusy: false,
          }));
        }
      } catch (e) {
        // swallow transient polling errors but expose once we stop
      }
    }, 4000);
  }, [stopPolling]);

  const submit = useCallback(
    async (payload: CreatePayoutPayload) => {
      if (state.isBusy) return { ok: false as const, error: "Please wait..." };
      setState((s) => ({ ...s, isBusy: true, error: null }));
      try {
        const res: CreatePayoutResponse = await createPayout(authenticatedRequest, payload);
        setState((s) => ({ ...s, reference: res.reference }));
        await startPolling(res.reference);
        return { ok: true as const, reference: res.reference };
      } catch (err: any) {
        const msg = err?.message ?? "Failed to submit payout";
        setState((s) => ({ ...s, error: msg, isBusy: false, phase: "failed" }));
        return { ok: false as const, error: msg };
      }
    },
    [state.isBusy, startPolling],
  );

  const reset = useCallback(() => {
    stopPolling();
    setState({ phase: "idle", error: null, reference: null, lastStatus: null, isBusy: false });
  }, [stopPolling]);

  return useMemo(
    () => ({ state, submit, reset, startPolling, stopPolling }),
    [reset, startPolling, state, stopPolling, submit],
  );
}
