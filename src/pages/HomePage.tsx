import React from 'react';
import HeroSection from '../components/HeroSection';
import BentoFeatures from '../components/BentoFeatures';
import InstallGuide from '../components/InstallGuide';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BentoFeatures />
      <InstallGuide />
      <Testimonials />
    </>
  );
}