import styles from '@/styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>Armando Ibarra</div>

        <div className={styles.links}>
          <a
            href="https://github.com/Strako"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/armando-isai-hern%C3%A1ndez-ibarra/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Strako/Portfolio-web"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Source
          </a>
        </div>
      </div>
    </footer>
  );
}
