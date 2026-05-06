import styles from './Hero.module.css';
import { personal } from '../data';

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function Hero() {
  const [first, ...rest] = personal.name.split(' ');
  const last = rest.join(' ');

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {personal.available && (
          <div className={styles.tag}>Available for Opportunities</div>
        )}
        <h1 className={styles.name}>
          {first}<br />
          <span>{last}.</span>
        </h1>
        <p className={styles.sub}>{personal.tagline}</p>
        <div className={styles.buttons}>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            <LinkedInIcon /> LinkedIn
          </a>
          <a href={`mailto:${personal.email}`} className={styles.btnOutline}>
            <EmailIcon /> {personal.email}
          </a>
        </div>
      </div>
    </section>
  );
}
