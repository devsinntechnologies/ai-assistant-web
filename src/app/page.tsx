"use client"
import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Features from '../components/home/Features'
import Works from '../components/home/Works'
import Testimonial from '../components/TestimonialSlider/Testimonial'


const page = () => {
  return (
    <>
<HeroSection/>
<Works/>
<Features/>
<Testimonial/>
</>
  )
}

export default page