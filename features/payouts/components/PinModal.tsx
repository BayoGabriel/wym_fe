"use client";

import Modal from "@/src/components/modal";
import { App_Button } from "@/components/ui_components/app_button";
import PinInput from "@/components/ui_components/pin_input";
import { useEffect, useState } from "react";

export default function PinModal(props: {
  open: boolean;
  onClose: () => void;
  onSubmit: (pin: string) => Promise<void> | void;
  isBusy?: boolean;
  error?: string | null;
}) {
  const [pin, setPin] = useState("");

  useEffect(() => {
    if (!props.open) setPin("");
  }, [props.open]);

  return (
    <Modal isOpen={props.open} onClose={props.onClose} modalContentStyle="p-6 gap-5 w-[520px] max-w-[95vw]">
      <h3 className="text-xl font-semibold text-secondary">Enter transaction PIN</h3>
      <p className="text-sm text-muted">Please enter your 4 digit PIN to authorize this payout.</p>
      <div className="py-2">
        <PinInput onChange={setPin} onComplete={setPin} />
      </div>
      {props.error ? (
        <div className="rounded-xl border border-error/30 bg-red-50 p-3 text-sm text-error">
          {props.error}
        </div>
      ) : null}
      <div className="flex w-full gap-3">
        <App_Button variant="outline" onClick={props.onClose} disabled={props.isBusy}>Cancel</App_Button>
        <App_Button onClick={() => props.onSubmit(pin)} disabled={pin.length !== 4} loading={props.isBusy}>
          Authorize payout
        </App_Button>
      </div>
    </Modal>
  );
}
