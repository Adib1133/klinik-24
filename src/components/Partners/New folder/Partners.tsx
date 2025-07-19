// components/Partners/Partners.tsx
import styles from './Partners.module.css';

const Partners = () => {
  const partners = [
    { name: 'KARNEN', description: 'pet hospital' },
    { name: 'CIPUTRA' },
    { name: 'Maryapoda', description: 'hospital' },
    { name: 'Sibamis Hosciels' },
  ];

  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <h2>Partner & Friend</h2>
        <div className={styles.partnerGrid}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.partnerCard}>
              <h3>{partner.name}</h3>
              {partner.description && <p>{partner.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;