import { useInView } from 'react-intersection-observer';
import Sectionstyles from './SectionWrapper.module.css';

export default function SectionWrapper({ id, children }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section
      id={id}
      ref={ref}
      className={`${styles.section} ${inView ? styles.visible : ''}`}
    >
      {children}
    </section>
  );
}
