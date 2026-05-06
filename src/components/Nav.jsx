import styles from './Nav.module.css';
import { personal } from '../data';

const links = [
  { href: '#summary', label: 'About' },
  { href: '#experience', label: 'Work' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>{personal.name.split(' ').map(n => n[0]).join('')}_</div>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
