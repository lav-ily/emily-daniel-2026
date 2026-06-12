"use client";

import { usePathname } from "next/navigation";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return <footer className={styles.footer} aria-hidden="true" />;
}
