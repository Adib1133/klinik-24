import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import Services from './components/Services/Services';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={styles.app}>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero />
        <Partners />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;