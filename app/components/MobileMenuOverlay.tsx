"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, type ReactNode } from "react";

interface MobileMenuOverlayProps {
  open: boolean;
  className?: string;
  children: ReactNode;
}

export default function MobileMenuOverlay({
  open,
  className,
  children,
}: MobileMenuOverlayProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (shouldReduceMotion) {
    return open ? <div className={className}>{children}</div> : null;
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={className}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{
            opacity: { duration: 0.35, ease: "easeOut" },
            y: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
