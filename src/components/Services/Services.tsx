
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      title: '24-Hour Pharmacy',
      description: 'A shop that prepares and sells medicines based on doctors\' prescriptions and also trades medical supplies.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="8" width="16" height="12" rx="2" fill="#8B5CF6"/>
          <rect x="8" y="4" width="8" height="6" rx="1" fill="#8B5CF6"/>
          <path d="M12 11v4M10 13h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      bgColor: '#F3F0FF'
    },
    {
      title: 'Medical Check Up',
      description: 'A shop that prepares and sells medicines based on doctors\' prescriptions and also trades medical supplies.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#10B981"/>
          <path d="M9 11l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: '#E6F7F0'
    },
    {
      title: 'Professional Doctor',
      description: 'A shop that prepares and sells medicines based on doctors\' prescriptions and also trades medical supplies.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 21v-3a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v3" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="13" cy="8" r="3" fill="#3B82F6"/>
          <path d="M16 8l2 2 4-4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgColor: '#EBF4FF'
    },
  ];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>List of Services</h2>
          <p className={styles.subtitle}>
            A hospital is an integral part of a social and health organization, 
            serving the function of providing comprehensive (holistic) care.
          </p>
        </div>
        
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div 
                className={styles.iconWrapper} 
                style={{ backgroundColor: service.bgColor }}
              >
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <button className={styles.reservasiButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488" fill="white"/>
                </svg>
                Reservasi
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;