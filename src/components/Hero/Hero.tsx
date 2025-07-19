import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1>
              <span className={styles.highlight}>Klinik 24</span> is ready to serve the public's concerns <span className={styles.highlight}>24/7</span>.
            </h1>
            <p>
              A hospital is an integral part of a social and health organization, with the function of providing comprehensive services.
            </p>
            <button className={styles.ctaButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View Services
            </button>
          </div>
          
          <div className={styles.imageSection}>
            <div className={styles.decorativeElements}>
              <div className={styles.sunBurst}></div>
              <div className={styles.dots}></div>
              <div className={styles.curvedLines}></div>
              <div className={styles.pillIcon}></div>
            </div>

            <div className={styles.doctorCircle}>
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional Doctor" 
                className={styles.doctorImage}
              />
            </div>

            <div className={styles.doctorCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7h-3V6a3 3 0 0 0-3-3H10a3 3 0 0 0-3 3v1H4a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM9 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9V6zm-4 5h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8z" fill="#4F46E5"/>
                  <path d="M12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="white"/>
                </svg>
              </div>
              <div className={styles.cardContent}>
                <h3>dr. Mr Test</h3>
                <p>Head of Hospital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;