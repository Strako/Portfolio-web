'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/Hero.module.scss';

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCvOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  return (
    <section id="about" className={styles.section}>
      <div className={styles.avatarWrap}>
        <div className={styles.avatarRing}>
          <Image
            src="/assets/profile-image.jpeg"
            alt="Armando Ibarra"
            width={160}
            height={160}
            className={styles.avatarImg}
            priority
          />
        </div>
        <div className={styles.badge}>
          <span className="material-symbols-outlined">verified</span>
        </div>
      </div>

      <h1 className={styles.name}>Armando Ibarra</h1>

      <p className={styles.tagline}>
        Computer Systems Engineer &amp; Full-Stack Developer with 3+ years building high-performance
        web applications and AI-driven QA automation pipelines.
      </p>

      <div className={styles.actions}>
        <a href="#github" className={styles.btnPrimary}>
          View Projects
        </a>

        <div className={styles.cvDropdownWrap} ref={dropdownRef}>
          <button
            className={`${styles.btnSecondary} ${cvOpen ? styles.open : ''}`}
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
                onClick={() => setCvOpen(false)}
              >
                <span className="material-symbols-outlined">description</span>
                English
              </a>
              <a
                href="/assets/cv-es.pdf"
                download="cv-es.pdf"
                className={styles.dropdownItem}
                onClick={() => setCvOpen(false)}
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
