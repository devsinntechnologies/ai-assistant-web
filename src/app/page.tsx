"use client"
import React from 'react'
import Header from '../components/layout/Header'
import FooterTop from '../components/layout/footer/FooterTop'
import HeroSection from '../components/home/HeroSection'
import FooterBottom from '../components/layout/footer/FooterBottom'
import Features from '../components/home/Features'
import Testimonial from '../components/TestimonialSlider/Testimonial'


const page = () => {
  return (
    <>
<Header/>
<HeroSection/>
<Features/>
<Testimonial/>
<FooterTop/>
<FooterBottom/>
</>
  )
}

export default page