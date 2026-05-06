import styles from './Footer.module.css';
import { personal } from '../data';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Designed & built by <span className={styles.accent}>{personal.name}</span> · {new Date().getFullYear()} · {personal.email}
    </footer>
  );
}
