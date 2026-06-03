import { useState, useEffect, useRef } from "react";
import * as amplitude from "@amplitude/unified";
import styles from "@/styles/Hero.module.scss";

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cvOpen) {
      amplitude.track("cv_dropdown_opened");
    }
  }, [cvOpen]);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setCvOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <section id="about" className={styles.section}>
      <div className={styles.avatarWrap}>
        <div className={styles.avatarRing}>
          <img
            src="/assets/profile-image.jpeg"
            alt="Armando Ibarra"
            width={160}
            height={160}
            className={styles.avatarImg}
          />
        </div>
      </div>

      <h1 className={styles.name}>Armando Isai Hernández Ibarra</h1>

      <p className={styles.tagline}>
        Computer Systems Engineer &amp; Full-Stack Developer with 3+ years
        building high-performance web applications and AI-driven QA automation
        pipelines.
      </p>

      <div className={styles.actions}>
        <a href="#github" className={styles.btnPrimary}>
          View Projects
        </a>

        <div className={styles.cvDropdownWrap} ref={dropdownRef}>
          <button
            className={`${styles.btnSecondary} ${cvOpen ? styles.open : ""}`}
            onClick={() => setCvOpen((v) => !v)}
          >
            Download CV
            <span className="material-symbols-outlined">expand_more</span>
          </button>

          {cvOpen && (
            <div className={styles.dropdown}>
              <a
                href="/assets/cv-en.pdf"
                download="cv-en.pdf"
                className={styles.dropdownItem}
                onClick={() => { setCvOpen(false); amplitude.track("cv_download_english"); }}
              >
                <span className="material-symbols-outlined">description</span>
                English
              </a>
              <a
                href="/assets/cv-es.pdf"
                download="cv-es.pdf"
                className={styles.dropdownItem}
                onClick={() => { setCvOpen(false); amplitude.track("cv_download_spanish"); }}
              >
                <span className="material-symbols-outlined">description</span>
                Spanish
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
