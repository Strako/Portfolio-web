import styles from "@/styles/TechStack.module.scss";

const TECH = [
  { icon: "data_object", label: "TypeScript" },
  { icon: "javascript", label: "React JS" },
  { icon: "terminal", label: "Next JS" },
  { icon: "device_hub", label: "Nest JS" },
  { icon: "dns", label: "Node" },
  { icon: "css", label: "Sass" },
  { icon: "all_inclusive", label: "Angular" },
  { icon: "code", label: "Python" },
  { icon: "api", label: "Postman" },
  { icon: "security", label: "Caido" },
  { icon: "bug_report", label: "Burp Suite" },
  { icon: "speed", label: "JMeter" },
  { icon: "storage", label: "PostgreSQL" },
  { icon: "psychology", label: "RAG" },
  { icon: "smart_toy", label: "Agentic Tooling" },
  { icon: "cloud", label: "AWS EC2 / ELB" },
  { icon: "lock", label: "AWS Secrets" },
  { icon: "rocket_launch", label: "Amazon Nova" },
];

export default function TechStack() {
  return (
    <section id="stack" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Technical Stack</h2>
          <p className={styles.subtitle}>
            Engineered with modern frameworks and battle-tested tooling.
          </p>
        </div>

        <div className={styles.grid}>
          {TECH.map(({ icon, label }) => (
            <div key={label} className={styles.card}>
              <span className="material-symbols-outlined">{icon}</span>
              <span className={styles.label}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
