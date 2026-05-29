import styles from '@/styles/Experience.module.scss';

const EXPERIENCE = [
  {
    date: 'Jun 2024 — Present',
    role: 'QA Engineer / Full Stack Developer',
    company: 'DaCodes · Remote',
    side: 'left' as const,
    primary: true,
    bullets: [
      'Full stack development of a project management and quoting platform: React.js, Next.js, TypeScript; backend with NestJS, TypeORM, and MySQL; containerization with Docker.',
      'Managed deployments on AWS EC2 using PM2; configured Elastic Load Balancers and API Gateways.',
      'Security analysis with Burp Suite and Caido: HTTP traffic interception, JWT vulnerability analysis, and authentication flow verification.',
      'Stress testing with JMeter, API validation with Postman, and static code quality analysis with SonarQube.',
    ],
  },
  {
    date: 'Jan 2022 — Present',
    role: 'Quality Assurance Engineer',
    company: 'DaCodes · Remote',
    side: 'right' as const,
    primary: false,
    bullets: [
      'Executed functional and non-functional tests: manual, exploratory, regression, smoke, integration, and load testing (JMeter, DDOSIFY).',
      'Developed automated test suites with Selenium WebDriver (Java and Python) and API testing scripts with Postman and Node.js.',
      'Implemented an AI-powered QA pipeline using Claude Code agents to generate and execute E2E test cases via Playwright MCP, reducing smoke test execution time by 80%.',
    ],
  },
  {
    date: 'Sep 2023 — Dec 2023',
    role: 'Independent Frontend Developer',
    company: 'Twitter Clone (Pajarito Azul) · Personal Project',
    side: 'left' as const,
    primary: false,
    desc: 'Built a minimalist SPA with React.js and TypeScript, implementing React Hooks for dynamic state management without page reloads.',
  },
];

const EDUCATION = {
  school: 'Instituto Tecnológico de San Luis Potosí',
  degree: 'B.S. in Computer Systems Engineering · Specialization in Cybersecurity',
  date: 'Aug 2020 – Dec 2025',
};

const CERTIFICATIONS = [
  { name: 'AWS Cloud Fundamentals', issuer: 'DaCodes', date: 'Nov 2023' },
  { name: 'Python Fundamentals', issuer: 'DaCodes', date: 'Oct 2023' },
  { name: 'React JS Fundamentals', issuer: 'DaCodes', date: 'Aug 2023' },
  { name: 'Quality Assurance Certification', issuer: 'DaCodes', date: 'Dec 2022' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', date: 'Aug 2022' },
  { name: 'Cybersecurity Essentials', issuer: 'Cisco', date: 'Aug 2022' },
];

export default function Experience() {
  return (
    <section id="cv" className={styles.section}>
      <h2 className={styles.sectionTitle}>Experience</h2>

      <div className={styles.timeline}>
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className={styles.timelineEntry}>
            <div className={`${styles.dotMobile} ${exp.primary ? '' : styles.muted}`} />
            <div className={`${styles.dot} ${exp.primary ? '' : styles.muted}`} />

            {exp.side === 'left' ? (
              <>
                <div className={styles.left}>
                  <div className={styles.date}>{exp.date}</div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <div className={styles.company}>{exp.company}</div>
                  {exp.desc && <p className={styles.desc}>{exp.desc}</p>}
                  {exp.bullets && (
                    <ul className={styles.bullets}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} className={styles.bullet}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div style={{ flex: 1 }} />
              </>
            ) : (
              <>
                <div style={{ flex: 1 }} />
                <div className={styles.right}>
                  <div className={styles.date}>{exp.date}</div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <div className={styles.company}>{exp.company}</div>
                  {exp.bullets && (
                    <ul className={styles.bullets}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} className={styles.bullet}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Education */}
      <div className={styles.eduSection}>
        <h3 className={styles.subTitle}>Education</h3>
        <div className={styles.eduCard}>
          <div className={styles.eduHeader}>
            <span className={`material-symbols-outlined ${styles.eduIcon}`}>school</span>
            <div>
              <div className={styles.eduSchool}>{EDUCATION.school}</div>
              <div className={styles.eduDegree}>{EDUCATION.degree}</div>
            </div>
          </div>
          <div className={styles.eduDate}>{EDUCATION.date}</div>
        </div>
      </div>

      {/* Certifications */}
      <div className={styles.certSection}>
        <h3 className={styles.subTitle}>Certifications</h3>
        <div className={styles.certGrid}>
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className={styles.certCard}>
              <div className={styles.certName}>{cert.name}</div>
              <div className={styles.certMeta}>
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
