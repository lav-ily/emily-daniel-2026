import Header from "@/app/components/Header";
import AccordionSection from "@/app/components/AccordionSection";
import styles from "@/app/components/ContentPage.module.css";

export default function AccommodationsPage() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 className={styles.pageTitle}>Accommodations</h1>
          <div className={styles.introText}>
            <p>
              Please read below for more details on how to get to the Catskills.
              Our wedding weekend is during Labor Day weekend - please book ahead
              and plan accordingly!
            </p>
          </div>
        </div>

        <div className={styles.sections}>
          <AccordionSection title="Hotel Block">
            <p>
              We have reserved a hotel block at{" "}
              <strong>
                Four Points by Sheraton Albany (3 Mount Hope Way, Albany, NY
                12202)
              </strong>{" "}
              for your ease.
            </p>

            <p>
              To book <strong>directly</strong>, visit this{" "}
              <a
                href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1758984104187&key=GRP&app=resvlink"
                target="_blank"
                rel="noopener noreferrer"
              >
                link
              </a>
              .
            </p>

            <div>
              <p>
                To reserve <strong>via phone</strong>:
              </p>
            </div>
            <ol>
              <li>
                Call <strong>(518) 949-2220</strong>
              </li>
              <li>
                Reference group name{" "}
                <strong>&quot;Shum &amp; Dornbaum Wedding&quot;</strong>{" "}
                <strong>OR</strong> use the group code <strong>SHD</strong>.
              </li>
            </ol>

            <div>
              <p>
                To reserve{" "}
                <strong>
                  via the Four Points by Sheraton website or the Marriott Bonvoy
                  app
                </strong>
                :
              </p>
            </div>
            <ol>
              <li>
                For King Rooms, use code: <strong>SHDSHDA</strong>.
              </li>
              <li>
                For Double Queen Rooms, use code: <strong>SHDSHDB</strong>.
              </li>
            </ol>

            <p>We encourage booking ahead of time!</p>
          </AccordionSection>

          <AccordionSection title="AirBnB">
            <p>
              The Catskills have beautiful AirBnB options available for booking.
              We recommend booking in these areas:
            </p>
            <ul>
              <li>Westerlo</li>
              <li>Albany</li>
              <li>Hudson</li>
              <li>Troy</li>
            </ul>
            <p>
              Or any of the surrounding towns near Westerlo. We encourage
              booking ahead of time for the best possible rate due to the holiday
              weekend!
            </p>
          </AccordionSection>

          <AccordionSection title="Additional Hotels">
            <p>
              If you would like to explore staying at a different hotel than our
              listed hotel block, we recommend any of the below:
            </p>

            <div className={styles.townGroup}>
              <p className={styles.townName}>Albany</p>
              <ul>
                <li>Renaissance Albany</li>
                <li>Morgan Statehouse Inn</li>
              </ul>
            </div>

            <div className={styles.townGroup}>
              <p className={styles.townName}>Hudson</p>
              <ul>
                <li>The Maker</li>
                <li>The Wick</li>
                <li>WM Farmer &amp; Sons Inn</li>
              </ul>
            </div>

            <div className={styles.townGroup}>
              <p className={styles.townName}>Troy</p>
              <ul>
                <li>Courtyard by Marriott Albany Troy Waterfront</li>
              </ul>
            </div>

            <div className={styles.townGroup}>
              <p className={styles.townName}>Leeds</p>
              <ul>
                <li>Camptown Catskill</li>
              </ul>
            </div>

            <p>
              We encourage booking ahead of time for the best possible rate due
              to the holiday weekend!
            </p>
          </AccordionSection>
        </div>
      </main>
    </div>
  );
}
