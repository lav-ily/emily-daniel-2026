"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const NAV_ITEMS = [
  { label: "travel", href: "/travel" },
  { label: "accommodations", href: "/accommodations" },
  { label: "itinerary", href: "/itinerary" },
  { label: "faq", href: "/faq" },
  { label: "gallery", href: "/gallery" },
  { label: "registry", href: "/registry" },
] as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={styles.home}>
      <div className={styles.background}>
        <Image
          src="/images/flowers-bg.png"
          alt="Soft blurred flower petals"
          width={2731}
          height={4096}
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.darkOverlay} />
      </div>

      <div className={styles.textureOverlay}>
        <Image
          src="/images/paper-texture.png"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.heroContent}>
        <Image
          src="/images/bunnies.png"
          alt="Two bunnies — one black, one white — representing Emily and Daniel"
          width={301}
          height={301}
          className={styles.bunnies}
          priority
        />
        <h1 className={styles.title}>Emily &amp; Daniel</h1>
        <p className={styles.date}>05 September 2026</p>
        <p className={styles.location}>Westerlo, NY</p>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <ul className={styles.navLinks}>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="https://www.zola.com/wedding/emily-daniel-2026" target="_blank" rel="noopener noreferrer" className={styles.rsvpButton}>
            rsvp
          </a>
        </div>
        <button
          className={styles.hamburger}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Image
            src="/images/hamburger-menu.svg"
            alt=""
            width={24}
            height={24}
            aria-hidden="true"
          />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <Link href="/" className={styles.mobileMenuLogo}>
              <Image
                src="/images/bunnies.png"
                alt="Emily & Daniel"
                width={50}
                height={50}
              />
            </Link>
            <button
              className={styles.closeButton}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/images/close-menu.svg"
                alt=""
                width={24}
                height={24}
                aria-hidden="true"
              />
            </button>
            <div className={styles.mobileMenuBorder}>
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
                  <Link
                    href={item.href}
                    className={styles.mobileMenuLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
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
        </div>
      )}
    </main>
  );
}
