"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenuOverlay from "@/app/components/MobileMenuOverlay";
import MenuToggleButton from "@/app/components/MenuToggleButton";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "travel", href: "/travel" },
  { label: "accommodations", href: "/accommodations" },
  { label: "itinerary", href: "/itinerary" },
  { label: "faq", href: "/faq" },
  { label: "gallery", href: "/gallery" },
  { label: "registry", href: "https://www.zola.com/wedding/emily-daniel-2026/registry", external: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`${styles.header} ${menuOpen ? styles.headerMenuOpen : ""}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/bunnies.png"
            alt="Emily & Daniel"
            width={72}
            height={72}
          />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <a href="https://www.zola.com/wedding/emily-daniel-2026" target="_blank" rel="noopener noreferrer" className={styles.rsvpButton}>
            rsvp
          </a>
        </nav>

        <MenuToggleButton
          open={menuOpen}
          onToggle={() => setMenuOpen((open) => !open)}
          className={styles.hamburger}
        />

        <div className={styles.borderLine}>
          <Image
            src="/images/line-header.svg"
            alt=""
            fill
            aria-hidden="true"
          />
        </div>
      </header>

      <MobileMenuOverlay open={menuOpen} className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <Link href="/" className={styles.mobileMenuLogo}>
              <Image
                src="/images/bunnies.png"
                alt="Emily & Daniel"
                width={50}
                height={50}
              />
            </Link>
            <div className={styles.borderLine}>
              <Image
                src="/images/line-header.svg"
                alt=""
                fill
                aria-hidden="true"
              />
            </div>
          </div>

          <nav className={styles.mobileMenuNav}>
            <ul className={styles.mobileMenuLinks}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mobileMenuLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={styles.mobileMenuLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="https://www.zola.com/wedding/emily-daniel-2026"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileMenuRsvp}
              onClick={() => setMenuOpen(false)}
            >
              rsvp
            </a>
          </nav>
      </MobileMenuOverlay>
    </>
  );
}
