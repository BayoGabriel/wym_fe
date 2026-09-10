"use client";

import { App_Modal } from "@/components/ui_components/app_modal";
import PinInput from "@/components/ui_components/pin_input";
import { App_Button } from "@/components/ui_components/app_button";

export function TransactionPinModal(props: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  pin: string;
  setPin: (v: string) => void;
  loading?: boolean;
  error?: string | null;
  title?: string;
  description?: string;
  confirmText?: string;
}) {
  const {
    open,
    onClose,
    onConfirm,
    pin,
    setPin,
    loading,
    error,
    title,
    description,
    confirmText,
  } = props;
  return (
    <App_Modal
      open={open}
      onClose={onClose}
      title={title ?? "Authorize transfer"}
      footer={
        <>
          <App_Button variant="outline" onClick={onClose}>
            Cancel
          </App_Button>
          <App_Button
            onClick={onConfirm}
            disabled={(pin?.length ?? 0) < 4}
            loading={!!loading}
          >
            {confirmText ?? "Authorize"}
          </App_Button>
        </>
      }
    >
      {description ? (
        <p className="text-sm text-gray-600">{description}</p>
      ) : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <PinInput
        length={4}
        onChange={setPin}
        onComplete={setPin}
        disabled={!!loading}
      />
    </App_Modal>
  );
}
