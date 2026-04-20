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
                <li>6 PM — 9 PM</li>
              </ul>
            </div>

            <div className={styles.detailBlock}>
              <p className={styles.detailLabel}>Where:</p>
              <ul>
                <li>
                  <a
                    href="https://www.google.com/maps/dir//Ryan's+Wake,+403+River+St+%23+1,+Troy,+NY+12180"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ryan&apos;s Wake
                  </a>
                  <ul>
                    <li>03 River St # 1, Troy, NY 12180</li>
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
