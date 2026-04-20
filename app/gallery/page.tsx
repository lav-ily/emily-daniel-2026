import Image from "next/image";
import Header from "@/app/components/Header";
import styles from "./page.module.css";
import contentStyles from "@/app/components/ContentPage.module.css";

interface FramedPhotoProps {
  photo: string;
  frame: string;
  alt: string;
  containerClass: string;
  photoClass: string;
  frameClass: string;
}

function FramedPhoto({
  photo,
  frame,
  alt,
  containerClass,
  photoClass,
  frameClass,
}: FramedPhotoProps) {
  return (
    <div className={containerClass}>
      <div className={photoClass}>
        <Image src={photo} alt={alt} fill style={{ objectFit: "cover" }} />
      </div>
      <div className={frameClass}>
        <Image src={frame} alt="" fill style={{ objectFit: "contain" }} aria-hidden="true" />
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className={contentStyles.page}>
      <Header />

      <main className={contentStyles.main}>
        <div className={contentStyles.intro}>
          <h1 className={contentStyles.pageTitle}>Gallery</h1>
          <div className={contentStyles.introText}>
            <p>
              Our wedding will be held at <strong>M&D Farm</strong> in Westerlo,
              New York on <strong>Saturday, September 5th, 2026</strong>.
            </p>
            <p>Take a walk down memory lane with us!</p>
          </div>
        </div>

        <div className={styles.gallery}>
          {/* 1: Silver horizontal frame */}
          <FramedPhoto
            photo="/images/gallery/photo-1.png"
            frame="/images/gallery/frame-silver-h.png"
            alt="Emily and Daniel together"
            containerClass={styles.frameSilverH}
            photoClass={styles.photoInSilverH}
            frameClass={styles.frameOverlay}
          />

          {/* 2: Gold square frame */}
          <FramedPhoto
            photo="/images/gallery/photo-2.png"
            frame="/images/gallery/frame-gold-square.png"
            alt="Emily and Daniel"
            containerClass={styles.frameGoldSquare}
            photoClass={styles.photoInGoldSquare}
            frameClass={styles.frameOverlay}
          />

          {/* 3: Gold oval frame */}
          <FramedPhoto
            photo="/images/gallery/photo-3.png"
            frame="/images/gallery/frame-gold-oval.png"
            alt="Emily and Daniel"
            containerClass={styles.frameGoldOval}
            photoClass={styles.photoInGoldOval}
            frameClass={styles.frameOverlay}
          />

          {/* 4: Silver vertical (rotated) frame */}
          <FramedPhoto
            photo="/images/gallery/photo-4.png"
            frame="/images/gallery/frame-silver-h.png"
            alt="Emily and Daniel"
            containerClass={styles.frameSilverV}
            photoClass={styles.photoInSilverV}
            frameClass={`${styles.frameOverlay} ${styles.frameRotated}`}
          />

          {/* 5: Gold oval frame */}
          <FramedPhoto
            photo="/images/gallery/photo-5.png"
            frame="/images/gallery/frame-gold-oval.png"
            alt="Emily and Daniel"
            containerClass={styles.frameGoldOval}
            photoClass={styles.photoInGoldOval}
            frameClass={styles.frameOverlay}
          />

          {/* 6: Gold square frame */}
          <FramedPhoto
            photo="/images/gallery/photo-2.png"
            frame="/images/gallery/frame-gold-square.png"
            alt="Emily and Daniel"
            containerClass={styles.frameGoldSquare}
            photoClass={styles.photoInGoldSquare}
            frameClass={styles.frameOverlay}
          />

          {/* 7: Gold oval-2 frame */}
          <FramedPhoto
            photo="/images/gallery/photo-6.png"
            frame="/images/gallery/frame-gold-oval-2.png"
            alt="Emily and Daniel"
            containerClass={styles.frameGoldOval2}
            photoClass={styles.photoInGoldOval2}
            frameClass={styles.frameOverlay}
          />

          {/* 9: Silver vertical (rotated) frame */}
          <FramedPhoto
            photo="/images/gallery/photo-7.png"
            frame="/images/gallery/frame-silver-h.png"
            alt="Emily and Daniel"
            containerClass={styles.frameSilverV}
            photoClass={styles.photoInSilverV}
            frameClass={`${styles.frameOverlay} ${styles.frameRotated}`}
          />
        </div>
      </main>
    </div>
  );
}
