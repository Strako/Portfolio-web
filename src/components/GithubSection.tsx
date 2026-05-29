import { useState, useEffect } from 'react';
import styles from '@/styles/GithubSection.module.scss';

interface PinnedRepo {
  author: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
}

export default function GithubSection() {
  const [repos, setRepos] = useState<PinnedRepo[]>([]);

  useEffect(() => {
    fetch('https://pinned.berrysauce.dev/get/Strako')
      .then((res) => (res.ok ? res.json() : []))
      .catch(() => [])
      .then(setRepos);
  }, []);

  return (
    <section id="github" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.bgGrid} />

        <span className={`material-symbols-outlined ${styles.icon}`}>hub</span>
        <h2 className={styles.title}>Open Source &amp; Activity</h2>
        <p className={styles.subtitle}>
          Constantly contributing to the ecosystem and building tools for developers. Explore my
          latest repositories and contribution history.
        </p>

        <div className={styles.actions}>
          <a
            href="https://github.com/Strako"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            <span className="material-symbols-outlined">terminal</span>
            View GitHub Profile
          </a>
          <a
            href="https://github.com/Strako?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            <span className="material-symbols-outlined">visibility</span>
            Browse Repositories
          </a>
        </div>

        {repos.length > 0 ? (
          <div className={styles.reposGrid}>
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/${repo.author}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoCard}
              >
                <div className={styles.repoHeader}>
                  <span className={styles.repoName}>{repo.name}</span>
                  <div className={styles.repoMeta}>
                    <span className="material-symbols-outlined">star</span>
                    <span>{repo.stars}</span>
                  </div>
                </div>
                {repo.description && (
                  <p className={styles.repoDesc}>{repo.description}</p>
                )}
                <div className={styles.repoFooter}>
                  {repo.language && (
                    <>
                      <div className={styles.langDot} />
                      <span className={styles.lang}>{repo.language}</span>
                    </>
                  )}
                  {repo.forks > 0 && (
                    <div className={styles.forks}>
                      <span className="material-symbols-outlined">fork_right</span>
                      <span>{repo.forks}</span>
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className={styles.error}>Could not load pinned repositories at this time.</p>
        )}
      </div>
    </section>
  );
}
