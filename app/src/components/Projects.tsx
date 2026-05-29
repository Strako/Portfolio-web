import styles from '@/styles/Projects.module.scss';

const PROJECTS = [
  {
    name: 'AI-Driven-UI-Specification-QA-Automation-Suite',
    description:
      'Claude Code multi-agent system: navigates live pages with Playwright MCP, auto-generates UI specs, creates E2E test cases, and executes them in the browser delivering a report with screenshot evidence.',
    tags: ['Claude Code', 'Playwright MCP', 'Node.js', 'Python', 'Shell hooks'],
  },
  {
    name: 'AI-Code-Reviewer',
    description:
      'NestJS tool with native Bitbucket webhook: when a PR is opened, automatically analyzes the code with Groq AI and posts review comments directly on the pull request.',
    tags: ['NestJS', 'TypeScript', 'Groq API', 'Bitbucket Webhooks', 'Docker', 'SonarQube'],
  },
  {
    name: 'AI-Test-Case-Generator',
    description:
      'Reads requirements from Excel, generates Gherkin (BDD) test cases with Groq AI, and automatically uploads them to Kiwi TCMS; also exports professional Word documentation.',
    tags: ['TypeScript', 'Groq API', 'Kiwi TCMS', 'Docker', 'Excel (XLSX)'],
  },
  {
    name: 'Nova-Act-Test-Runner',
    description:
      'Autonomous agents (LAMs) that execute E2E tests using natural language instructions on real interfaces.',
    tags: ['Python', 'Amazon Nova Act', 'AWS Secrets'],
  },
  {
    name: 'Simple-RAG',
    description:
      'RAG backend with NestJS: uploads PDFs, generates local embeddings with Ollama, stores them in Pinecone, and answers natural language queries using Groq API.',
    tags: ['NestJS', 'TypeScript', 'LangChain', 'Pinecone', 'Ollama', 'Groq API', 'PostgreSQL', 'Docker'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={`material-symbols-outlined ${styles.icon}`}>smart_toy</span>
          <h2 className={styles.title}>AI Projects</h2>
          <p className={styles.subtitle}>
            Building AI-powered tooling at the intersection of software quality, developer experience, and autonomous agents.
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <div key={project.name} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardName}>{project.name}</span>
                <span className={`material-symbols-outlined ${styles.cardIcon}`}>rocket_launch</span>
              </div>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
