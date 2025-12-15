
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import ConsultationForm from './components/ConsultationForm';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

const App: React.FC = () => {
  const [isAdminPage, setIsAdminPage] = useState(window.location.hash === '#admin');

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdminPage(window.location.hash === '#admin');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isAdminPage) {
    return <AdminPanel />;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <Hero />
        <StorySection />
        <ConsultationForm />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
