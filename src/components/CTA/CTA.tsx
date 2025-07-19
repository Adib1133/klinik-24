import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img 
              src="https://as1.ftcdn.net/v2/jpg/06/44/82/58/1000_F_644825870_e7QpQXUh8hFbl94vStE8hvfQ7oYcVhgR.jpg" 
              alt="Modern medical clinic building" 
              className={styles.hospitalImage}
            />
            <div className={styles.qualityBadge}>
              <div className={styles.badgeIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className={styles.badgeContent}>
                <span className={styles.badgeTitle}>Quality over Quantity</span>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFD700">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.contentSection}>
          <h2 className={styles.title}>The best care from medical experts.</h2>
          <p className={styles.description}>
            A hospital is an integral part of a social and health organization, functioning to provide comprehensive (holistic) services.
          </p>
          <button className={styles.ctaButton}>
            <svg className={styles.buttonIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.89-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm-5 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
            </svg>
            Reservasi
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;