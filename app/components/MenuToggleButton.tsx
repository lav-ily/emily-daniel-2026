"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import styles from "./MenuToggleButton.module.css";

interface MenuToggleButtonProps {
  open: boolean;
  onToggle: () => void;
  className?: string;
}

export default function MenuToggleButton({
  open,
  onToggle,
  className,
}: MenuToggleButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <button
      type="button"
      className={className}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onToggle}
    >
      <span className={styles.iconFrame} aria-hidden="true">
        {shouldReduceMotion ? (
          <Image
            src={open ? "/images/close-menu.svg" : "/images/hamburger-menu.svg"}
            alt=""
            width={24}
            height={24}
          />
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                className={styles.iconMotion}
                initial={{ opacity: 0, rotate: -45, scale: 0.85 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.85 }}
                transition={{
                  duration: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src="/images/close-menu.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                className={styles.iconMotion}
                initial={{ opacity: 0, rotate: 45, scale: 0.85 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -45, scale: 0.85 }}
                transition={{
                  duration: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src="/images/hamburger-menu.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </motion.span>
            )}
          </AnimatePresence>
        )}
      </span>
    </button>
  );
}
