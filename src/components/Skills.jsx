import SectionWrapper from './SectionWrapper';
import sectionStyles from './SectionWrapper.module.css';
import styles from './Skills.module.css';
import { skills } from '../data';

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className={sectionStyles.sectionLabel}>// 04 — Skills</div>
      <h2 className={sectionStyles.sectionTitle}>Technical Stack</h2>
      <div className={sectionStyles.divider} />
      <div className={styles.grid}>
        {skills.map((group) => (
          <div key={group.category} className={styles.card}>
            <h4 className={styles.category}>{group.category}</h4>
            <ul className={styles.list}>
              {group.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
