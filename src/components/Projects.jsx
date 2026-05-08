import SectionWrapper from './SectionWrapper';
import sectionStyles from './SectionWrapper.module.css';
import Tag from './Tag';
import styles from './Projects.module.css';
import { projects } from '../data';

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      
      <h2 className={sectionStyles.sectionTitle}>Projects</h2>

      <div className={styles.grid}>
        {projects.map((proj) => (
          <div key={proj.title} className={styles.card}>
            
            <div className={styles.title}>{proj.title}</div>
            <p className={styles.desc}>{proj.description}</p>
            <div className={styles.tags}>
              {proj.tags.map(t => <Tag key={t} label={t} />)}
            </div>
            <div className={styles.links}>
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  ↗ GitHub
                </a>
              )}
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  ↗ Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
