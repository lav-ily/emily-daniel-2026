import Header from "@/app/components/Header";
import AccordionSection from "@/app/components/AccordionSection";
import styles from "@/app/components/ContentPage.module.css";

export default function ItineraryPage() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 className={styles.pageTitle}>Itinerary</h1>
          <div className={styles.introText}>
            <p>
              Our wedding will be held at <strong>M&D Farm</strong> in Westerlo,
              New York on <strong>Saturday, September 5th, 2026</strong>.
            </p>
          </div>
        </div>

        <div className={styles.sections}>
          <AccordionSection
            title={<>Friday, September 4th, 2026 &bull; Welcome Party</>}
          >
            <p>
              If you&apos;re in town early, swing by for a drink and small
              bites!
            </p>

            <div className={styles.detailBlock}>
              <p className={styles.detailLabel}>When:</p>
              <ul>
                <li>5 PM — 9 PM</li>
              </ul>
            </div>

            <div className={styles.detailBlock}>
              <p className={styles.detailLabel}>Where:</p>
              <ul>
                <li>
                  <a
                    href="https://www.google.com/maps/dir//Ilium+Brewing+Co,+410+Fulton+St,+Troy,+NY+12180/@40.744528,-73.9934208,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89de0f013d844537:0x7c67a923811cc4b6!2m2!1d-73.6882307!2d42.7324347?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ilium Brewing Co.
                  </a>
                  <ul>
                    <li>410 Fulton St, Troy, NY 12180</li>
                  </ul>
                </li>
              </ul>
            </div>
          </AccordionSection>

          <AccordionSection
            title={
              <>
                Saturday, September 5th, 2026 &bull; Wedding Ceremony &amp;
                Reception
              </>
            }
          >
            <div className={styles.detailBlock}>
              <p className={styles.detailLabel}>When:</p>
              <ul>
                <li>4:30 PM — 11 PM</li>
              </ul>
            </div>

            <div className={styles.detailBlock}>
              <p className={styles.detailLabel}>Where:</p>
              <ul>
                <li>
                  <a
                    href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KVUY06Ot2t2JMWhUKxA_Zer9&daddr=364+NY-143,+Westerlo,+NY+12193"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    M&amp;D Farm
                  </a>
                  <ul>
                    <li>364 NY-143, Westerlo, NY 12193</li>
                  </ul>
                </li>
              </ul>
            </div>
          </AccordionSection>

          <AccordionSection
            title={
              <>Sunday, September 6th, 2026 &bull; Goodbye Brunch</>
            }
          >
            <p>
              Debrief on the night&apos;s debauchery over french toast and
              coffee at this local diner.
            </p>

            <div className={styles.detailBlock}>
              <p className={styles.detailLabel}>When:</p>
              <ul>
                <li>11 AM — 1 PM</li>
              </ul>
            </div>

            <div className={styles.detailBlock}>
              <p className={styles.detailLabel}>Where:</p>
              <ul>
                <li>
                  <a
                    href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KWP6JwQhD96JMVurdqf8LPcY&daddr=1809+5th+Ave,+Troy,+NY+12180"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Naughter&apos;s
                  </a>
                  <ul>
                    <li>1809 5th Ave, Troy, NY 12180</li>
                  </ul>
                </li>
              </ul>
            </div>
          </AccordionSection>
        </div>
      </main>
    </div>
  );
}
