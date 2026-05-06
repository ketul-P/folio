import SectionWrapper from './SectionWrapper';
import sectionStyles from './SectionWrapper.module.css';
import Tag from './Tag';
import styles from './Education.module.css';
import { education } from '../data';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className={sectionStyles.sectionTitle}>Academic Background</h2>
      {education.map((edu, i) => (
        <div key={i} className={styles.item}>

          <div className={styles.date}>{edu.date}</div>

          //logo div
          <div className={styles.Tag}></div>

          <div>
            <div className={styles.degree}>{edu.degree}</div>
            <div className={styles.school}>{edu.school} · {edu.location}</div>
            
            //generate tags
            {edu.tags.length > 0 && (
              <div className={styles.tags}>
                {edu.tags.map(t => <Tag key={t} label={t} />)}
              </div>
            )}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}
