"use client";
import { useEffect } from "react";
// import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";

export default function AOSInit() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return null;
}
