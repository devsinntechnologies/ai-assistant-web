"use client";

import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import Features from '../components/home/Features';
import Works from '../components/home/Works';
import Testimonial from '../components/TestimonialSlider/Testimonial';
import { applySafariFixes } from '@/src/utils/Browser';

const Home = () => {
  useEffect(() => {
    applySafariFixes();
  }, []);

  return (
    <main>
      <HeroSection />
      <Works />
      <Features />
      <Testimonial />
    </main>
  );
};

export default Home;