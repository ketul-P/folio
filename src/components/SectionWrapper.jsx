import { useInView } from 'react-intersection-observer';
import sectionStyles from './SectionWrapper.module.css';

export default function SectionWrapper({ id, children }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section
      id={id}
      ref={ref}
      className={`${sectionStyles.section} ${inView ? sectionStyles.visible : ''}`}
    >
      {children}
    </section>
  );
}
