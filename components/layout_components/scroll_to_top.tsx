"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Scroll_To_Top = () => {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

export default Scroll_To_Top;
