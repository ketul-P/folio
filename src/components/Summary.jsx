import SectionWrapper from './SectionWrapper';
import sectionStyles from './SectionWrapper.module.css';
import own from './Summary.module.css';
import { summary } from '../data';

export default function Summary() {
  return (
    <SectionWrapper id="summary">
      <div className={styles.sectionLabel}></div>
      <h2 className={styles.sectionTitle}>Who I Am</h2>
      <div className={sectionStyles.divider}></div>
      <p className={own.text}>{summary}</p>
    </SectionWrapper>
  );
}
