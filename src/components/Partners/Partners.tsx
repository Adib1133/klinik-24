
import styles from './Partners.module.css';

const Partners = () => {
  const partners = [
    { 
      name: 'CarePaws Veterinary Hospital',
      logo: (
        <svg viewBox="0 0 120 80" className={styles.partnerLogo}>
          <rect x="45" y="15" width="30" height="8" fill="#e53e3e" rx="2"/>
          <rect x="55" y="5" width="10" height="30" fill="#e53e3e" rx="2"/>
          <text x="60" y="50" textAnchor="middle" fontSize="10" fill="#2d3748" fontWeight="bold">CAREPAWS</text>
          <text x="60" y="62" textAnchor="middle" fontSize="6" fill="#718096">Veterinary Hospital</text>
          <circle cx="35" cy="25" r="3" fill="#e53e3e" opacity="0.7"/>
          <circle cx="85" cy="25" r="3" fill="#e53e3e" opacity="0.7"/>
        </svg>
      )
    },
    { 
      name: 'CitraVerde Properties',
      logo: (
        <svg viewBox="0 0 120 80" className={styles.partnerLogo}>
          <ellipse cx="60" cy="30" rx="25" ry="12" fill="none" stroke="#38a169" strokeWidth="3"/>
          <ellipse cx="60" cy="30" rx="15" ry="7" fill="#38a169" opacity="0.3"/>
          <text x="60" y="52" textAnchor="middle" fontSize="12" fill="#2d3748" fontWeight="bold">CITRAVERDE</text>
          <text x="60" y="64" textAnchor="middle" fontSize="6" fill="#718096">PROPERTIES</text>
          <circle cx="60" cy="30" r="2" fill="#38a169"/>
        </svg>
      )
    },
    { 
      name: 'Hope Children\'s Medical Center',
      logo: (
        <svg viewBox="0 0 120 80" className={styles.partnerLogo}>
          <circle cx="35" cy="25" r="8" fill="#e53e3e"/>
          <path d="M32 22 L32 28 M29 25 L35 25" stroke="white" strokeWidth="2"/>
          <text x="60" y="18" textAnchor="middle" fontSize="8" fill="#2d3748" fontWeight="bold">Hope Children's</text>
          <text x="60" y="28" textAnchor="middle" fontSize="8" fill="#2d3748" fontWeight="bold">Medical Center</text>
          <text x="60" y="40" textAnchor="middle" fontSize="6" fill="#718096">Healing Hearts. Saving Children.</text>
          <path d="M50 50 Q60 45 70 50" stroke="#e53e3e" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    { 
      name: 'MayaCare Hospital Network',
      logo: (
        <svg viewBox="0 0 120 80" className={styles.partnerLogo}>
          <path d="M30 35 Q40 25 50 35 Q60 25 70 35 Q80 25 90 35" stroke="#3182ce" strokeWidth="3" fill="none"/>
          <circle cx="40" cy="32" r="2" fill="#3182ce"/>
          <circle cx="60" cy="32" r="2" fill="#3182ce"/>
          <circle cx="80" cy="32" r="2" fill="#3182ce"/>
          <text x="60" y="52" textAnchor="middle" fontSize="10" fill="#2d3748" fontWeight="bold">mayacare</text>
          <text x="60" y="63" textAnchor="middle" fontSize="7" fill="#718096">hospital network</text>
          <text x="95" y="25" fontSize="6" fill="#3182ce">®</text>
        </svg>
      )
    },
    { 
      name: 'Harmony Medical Centers',
      logo: (
        <svg viewBox="0 0 120 80" className={styles.partnerLogo}>
          <rect x="20" y="20" width="80" height="25" fill="#2b6cb0" rx="5"/>
          <text x="60" y="35" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Harmony</text>
          <rect x="85" y="20" width="15" height="25" fill="#48bb78" rx="2"/>
          <text x="92.5" y="35" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">M</text>
          <text x="60" y="58" textAnchor="middle" fontSize="8" fill="#2d3748" fontWeight="600">Medical Centers</text>
        </svg>
      )
    }
  ];

  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <h2>Partner & Friend</h2>
        <div className={styles.partnerGrid}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.partnerCard}>
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;