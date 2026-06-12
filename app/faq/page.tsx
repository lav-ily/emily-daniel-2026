import Header from "@/app/components/Header";
import AccordionSection from "@/app/components/AccordionSection";
import styles from "@/app/components/ContentPage.module.css";

export default function FaqPage() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
        </div>

        <div className={styles.sectionsDense}>
          <AccordionSection title="What should I wear?">
            <p>
              We kindly request our guests come looking and feeling their best -
              our dress code is Formal/Formal Cocktail.
            </p>
            <p>
              M&D Farms is a beautiful outdoor garden that is composed of fields,
              prairies, gardens, woods, and ponds, which means that there will be
              some grass and other natural ground to walk on. Please keep this in
              mind when choosing footwear. We will have flip flops available for
              your comfort!
            </p>
          </AccordionSection>

          <AccordionSection title="Is the event indoors or outdoors? What will the weather be like?">
            <p>
              The ceremony will be outdoors, and the reception will be mostly
              outdoors under a tent.
            </p>
            <p>
              The weather in the Catskills will (hopefully) continue to be very
              beautiful, with temperatures in the upper 70s during the day, and
              mid-low 60s in the evening. We recommend bringing a light shawl or
              sweater for the evening.
            </p>
          </AccordionSection>

          <AccordionSection title="Are children invited?">
            <p>
              Aside from immediate family, our wedding will be for guests 18+
              only.
            </p>
          </AccordionSection>

          <AccordionSection title="Is there a hotel block allocated for the wedding?">
            <p>
              Yes there is - please see &quot;travel&quot; tab for more
              information. If you are staying at the designated hotel block,
              there will be a shuttle service picking up and dropping off guests
              from the wedding.
            </p>
          </AccordionSection>

          <AccordionSection title="Can I bring a +1?">
            <p>
              If there is an additional guest associated with your invitation, it
              will be noted in your RSVP.
            </p>
          </AccordionSection>

          <AccordionSection title="Is there parking available at the venue?">
            <p>
              Parking for the wedding will be available at the below address.
            </p>
            <p>
              <a
                href="https://share.google/Dus7A63lUp7SymVdi"
                target="_blank"
                rel="noopener noreferrer"
              >
                933 County Route 401,
                <br />
                Westerlo, NY 12193
              </a>
            </p>
            <p>
              Please arrive there between 4:15 PM and 4:30 PM to catch a
              shuttle to the venue (~2 minute ride). The ceremony will begin at
              5 PM.
            </p>
            <p>
              If you are staying at the designated hotel block, a shuttle from
              the hotel will be available. Pick-up will be at 4:30 PM and
              drop-off will take place at the end of the reception.
            </p>
          </AccordionSection>

          <AccordionSection title="Are there other events aside from the wedding for the weekend?">
            <p>
              Yes! We have welcome drinks and a casual goodbye brunch scheduled.
              Please see the &quot;itinerary&quot; tab for more info.
            </p>
          </AccordionSection>

          <AccordionSection title="Do you have suggestions for what to do in the area?">
            <p>
              The Catskills hold a special place in our hearts - it&apos;s filled
              with beautiful hiking trails, great vintage shopping and thrifting,
              amazing restaurants, and it&apos;s where we got engaged! It&apos;s
              a great place to spend the long holiday weekend - see below for
              some things to do in the area:
            </p>

            <ul className={styles.categoryList}>
              <li>
                Hikes
                <ul>
                  <li>
                    The highest peak in the Catskills, Slide Mountain (this is
                    where we got engaged!)
                  </li>
                  <li>Kaaterskill Farms</li>
                  <li>Fawn&apos;s Leap</li>
                </ul>
              </li>

              <li>
                Food
                <ul>
                  <li>Phoenicia Diner, Phoenicia (on the way up from NYC)</li>
                  <li>Finn&apos;s, Troy</li>
                  <li>Quinnie&apos;s, Hudson</li>
                  <li>Stissing House, Hudson</li>
                  <li>Casa Susanna, Hudson</li>
                  <li>Mr. Cat Brasserie, Hudson</li>
                </ul>
              </li>

              <li>
                Drinks
                <ul>
                  <li>The Maker Lounge, Hudson</li>
                  <li>BackBar, Hudson</li>
                </ul>
              </li>

              <li>
                Coffee &amp; Pastries
                <ul>
                  <li>little pecks, Troy</li>
                  <li>Greater Things Roasters, Coxsackie</li>
                  <li>Mel the Bakery, Hudson</li>
                  <li>Circles, Hudson</li>
                  <li>Rivertown Lodge, Hudson</li>
                </ul>
              </li>

              <li>
                Shopping
                <ul>
                  <li>
                    Troy Farmer&apos;s Market, Troy (Saturdays 9a-2p only)
                  </li>
                  <li>Shopping on Warren Street, Hudson</li>
                </ul>
              </li>

              <li>
                Art &amp; Museums
                <ul>
                  <li>Art Omi</li>
                  <li>Storm King</li>
                  <li>Dia Beacon</li>
                </ul>
              </li>
            </ul>
          </AccordionSection>
        </div>
      </main>
    </div>
  );
}
