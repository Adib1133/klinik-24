import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
	  
        <div className={styles.logo}>
          <span className={styles.logoText}>Klinik 24.</span>
          <div className={styles.logoIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#home" className={styles.navLink}>Home</a>
            </li>
            <li className={styles.navItem}>
              <a href="#doctors" className={styles.navLink}>Doctors</a>
            </li>
            <li className={styles.navItem}>
              <a href="#about" className={styles.navLink}>About</a>
            </li>
          </ul>
          
          <a href="#auth" className={styles.authButton}>
            <svg className={styles.authIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H11V21H5V19H13V21H11V23H19C20.11 23 21 22.11 21 21V9M12 8C14.67 8 16.85 10.07 17 12.72V15.28C16.85 17.93 14.67 20 12 20C9.33 20 7.15 17.93 7 15.28V12.72C7.15 10.07 9.33 8 12 8Z"/>
            </svg>
            Register/Login
          </a>
        </nav>

        <button 
          className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
          <span className={styles.menuLine}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;