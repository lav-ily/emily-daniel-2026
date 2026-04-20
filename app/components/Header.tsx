import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "travel", href: "/travel" },
  { label: "accommodations", href: "/accommodations" },
  { label: "itinerary", href: "/itinerary" },
  { label: "faq", href: "/faq" },
  { label: "gallery", href: "/gallery" },
  { label: "registry", href: "/registry" },
] as const;

export default function Header() {
  return (
    <header className={styles.header}>
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
              <Link href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/rsvp" className={styles.rsvpButton}>
          rsvp
        </Link>
      </nav>

      <div className={styles.borderLine}>
        <Image
          src="/images/line-header.svg"
          alt=""
          fill
          aria-hidden="true"
        />
      </div>
    </header>
  );
}
