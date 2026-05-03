import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeChatWidget from './components/ResumeChatWidget';
// import ScrollToTop from './components/ScrollToTop';
import ScrollProgressBar from './components/ScrollProgressBar';
import CustomCursor from './components/CustomCursor';

function App() {
  // Set dark theme as default
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.remove('theme-light', 'theme-dark');
    document.documentElement.classList.add(saved === 'light' ? 'theme-light' : 'theme-dark');
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ResumeChatWidget />
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default App;
