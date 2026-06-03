import { useState, useEffect } from "react";
import * as amplitude from "@amplitude/unified";
import styles from "@/styles/Navbar.module.scss";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#cv", label: "CV" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let current = "about";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logo}>Armando Ibarra</div>

        <div className={styles.links}>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`${styles.link} ${activeSection === href.slice(1) ? styles.active : ""}`}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="mailto:armandoh.ibarra@gmail.com"
          className={styles.connectBtn}
          onClick={() => amplitude.track("navbar_connect_clicked")}
        >
          Connect
        </a>

        <button
          className={styles.menuBtn}
          onClick={() => { setMenuOpen((v) => !v); amplitude.track("navbar_mobile_menu_toggled"); }}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`${styles.mobileLink} ${activeSection === href.slice(1) ? styles.active : ""}`}
            onClick={() => { setMenuOpen(false); amplitude.track("navbar_mobile_nav_clicked", { section: label }); }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
