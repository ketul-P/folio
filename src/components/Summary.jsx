import SectionWrapper from './SectionWrapper';
import sectionStyles from './SectionWrapper.module.css';
import styles from './Summary.module.css';
import { summary } from '../data';

export default function Summary() {
  return (
    <SectionWrapper id="summary">
      <div className={sectionStyles.sectionLabel}></div>
      <h2 className={sectionStyles.sectionTitle}>Who I Am</h2>
      <div className={sectionStyles.divider}></div>
      <p className={styles.text}>{summary}</p>
    </SectionWrapper>
  );
}
