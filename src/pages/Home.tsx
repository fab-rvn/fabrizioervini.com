import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Sidebar from '../components/Sidebar';
import Work from '../components/Work';
import { aboutSection } from '../data/aboutSection';
import { blogSection } from '../data/blogSection';
import useNavbar from '../utils/useNavbar';

const Home = () => {
  const [isOpen, toggleNavbar] = useNavbar();

  return (
    <>
      <Sidebar isOpen={isOpen as boolean} toggleNavbar={toggleNavbar} />
      <Navbar toggleNavbar={toggleNavbar} />
      <Hero />
      <Section {...aboutSection} />
      <Work />
      <Section {...blogSection} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
