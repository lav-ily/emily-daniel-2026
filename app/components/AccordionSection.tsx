"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ContentPage.module.css";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="9"
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
    >
      <path
        d="M0.75 8.25L8 0.75L15.25 8.25"
        stroke="#956074"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface AccordionSectionProps {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function AccordionSection({
  title,
  children,
  defaultOpen = true,
}: AccordionSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className={styles.accordion}>
      <button
        className={styles.accordionHeader}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={styles.accordionTitle}>{title}</span>
        <ChevronIcon open={open} />
      </button>

      <div className={styles.sectionLine}>
        <Image src="/images/line-section.svg" alt="" fill aria-hidden="true" />
      </div>

      {open && <div className={styles.accordionBody}>{children}</div>}
    </section>
  );
}
