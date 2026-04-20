"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import styles from "./page.module.css";

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

function AccordionSection({ title, children, defaultOpen = true }: AccordionSectionProps) {
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

export default function TravelPage() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 className={styles.pageTitle}>Travel</h1>
          <div className={styles.introText}>
            <p>
              Our wedding will be held at <strong>M&D Farm</strong> in Westerlo,
              New York on{" "}
              <strong>Saturday, September 5th, 2026</strong>.
            </p>
            <p>
              Westerlo is in the Catskills, New York and is easily accessible
              from the NYC area by <strong>car, bus, or train</strong>.
            </p>
          </div>
        </div>

        <div className={styles.sections}>
          <AccordionSection
            title={
              <>
                Travel <strong>By Car</strong>
              </>
            }
          >
            <p>
              M&D Farms is about 150 miles from New York City,{" "}
              <strong>
                approximately a 3 hour drive from New York City
              </strong>
              . Parking is available at the wedding venue, albeit limited, so we
              recommend carpooling where possible. Please leave ample time for
              travel, as our wedding is taking place on Labor Day weekend.
            </p>
            <p>
              You can rent a car from the following suggested sites or one of
              your choice. We encourage booking ahead of time for the best
              possible rate due to the holiday weekend!
            </p>
            <ul>
              <li>
                <a
                  href="https://turo.com/us/en/search?age=30&country=US&defaultZoomLevel=11&deliveryLocationType=city&endDate=09/07/2026&endTime=10:00&flexibleType=NOT_FLEXIBLE&isMapSearch=false&itemsPerPage=200&latitude=40.7127753&location=New%20York,%20NY,%20USA&locationType=CITY&longitude=-74.0059728&monthlyEndDate=06/28/2026&monthlyStartDate=03/28/2026&pickupType=ALL&placeId=ChIJOwg_06VPwokRYv534QaPC8g&region=NY&searchDurationType=DAILY&sortType=RELEVANCE&startDate=09/04/2026&startTime=10:00"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Turo
                </a>
              </li>
              <li>
                <a
                  href="https://www.hertz.com/us/en/book/vehicles?CDP=2278478&age=25&ddate=2026-09-08T12:00:00&did=NYCS25&dtime=12:00&ownershipType=CORPORATE&pCountryCode=US&pdate=2026-09-04T12:00:00&pid=NYCS25&ptime=12:00&travelType=LEISURE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hertz
                </a>
              </li>
              <li>
                <a
                  href="https://www.enterprise.com/en/reserve.html#map_pickup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enterprise
                </a>
              </li>
            </ul>
          </AccordionSection>

          <AccordionSection
            title={
              <>
                Travel <strong>By Bus/Train</strong>
              </>
            }
          >
            <p>
              For travel from NYC by bus, there are plenty of options. Consider
              booking through Greyhound or Megabus.
            </p>
            <ul>
              <li>Megabus</li>
              <li>Greyhound</li>
            </ul>
            <p>
              Also consider a scenic train ride along the Hudson via Amtrak to
              Albany.
            </p>
            <ul>
              <li>Amtrak</li>
            </ul>
            <p>
              We encourage booking ahead of time for the best possible rate due
              to the holiday weekend!
            </p>
          </AccordionSection>

          <AccordionSection
            title={
              <>
                Travel <strong>By Plane</strong>
              </>
            }
          >
            <p>
              You can book round-trip flights into Albany (ALB) or New York City
              (JFK/LGA/EWR); you will need to arrange for connecting
              transportation into Westerlo. The closest airport to the venue is
              Albany International Airport (ALB),{" "}
              <strong>
                which is 42 minutes away from M&D Farms
              </strong>
              . We encourage booking ahead of time for the best possible rate due
              to the holiday weekend!
            </p>
          </AccordionSection>
        </div>
      </main>
    </div>
  );
}
