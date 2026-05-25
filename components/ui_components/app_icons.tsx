import { ComponentPropsWithoutRef } from "react";

type IconProps = ComponentPropsWithoutRef<"svg">;

export const Icon_Wallet = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 7.5A3.5 3.5 0 0 1 7.5 4H18a2 2 0 0 1 2 2v2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M4 8.5v9A2.5 2.5 0 0 0 6.5 20h11A2.5 2.5 0 0 0 20 17.5v-7A2.5 2.5 0 0 0 17.5 8h-11A2.5 2.5 0 0 0 4 10.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M16.5 13h3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const Icon_Phone = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M10 6h4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M12 18h.01"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

export const Icon_ArrowUpRight = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7 17 17 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M10 7h7v7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Icon_History = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 12a8 8 0 1 0 2.3-5.7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M4 4v4h4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7v5l3 2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Icon_Eye = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

export const Icon_EyeOff = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 4l16 16"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M9.9 9.9A3 3 0 0 0 14.1 14.1"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M6.3 6.3C3.6 8.1 2.5 12 2.5 12s3.5 7 9.5 7c1.9 0 3.6-.5 5-1.2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 16.7c2-1.8 3-4.7 3-4.7s-3.5-7-9.5-7c-.8 0-1.6.1-2.3.3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Icon_ArrowRight = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 12h14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Icon_Circle = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
