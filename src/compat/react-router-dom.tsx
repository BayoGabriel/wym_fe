"use client";
import NextLink from "next/link";
import React from "react";

type ShimLinkProps = Omit<React.ComponentProps<typeof NextLink>, "href"> & {
  to?: string;
  href?: string;
  children?: React.ReactNode;
};

export const Link: React.FC<ShimLinkProps> = ({ to, href, ...props }) => {
  const finalHref = href ?? to ?? "#";
  return <NextLink href={finalHref} {...props} />;
};

export default {} as any;
