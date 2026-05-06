import SectionWrapper from './SectionWrapper';
import sectionStyles from './SectionWrapper.module.css';
import Tag from './Tag';
import styles from './Experience.module.css';
import { experience } from '../data';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className={sectionStyles.sectionTitle}>Work History</h2>
      <div className={sectionStyles.divider} />
      {experience.map((exp, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.date}>{exp.date}</div>
          <div>
            <div className={styles.role}>{exp.role}</div>
            <div className={styles.company}>{exp.company}  ·  {exp.type}</div>
            <p className={styles.desc}>{exp.description}</p>
            <div className={styles.tags}>
              {exp.tags.map(t => <Tag key={t} label={t} />)}
            </div>
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}
