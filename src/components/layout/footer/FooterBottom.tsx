import React from 'react'
import Logo from '../Logo'

const FooterBottom = () => {
  return (
    <div className='mt-10 w-full h-auto'>
<div className='w-full h-[85%] py-20 lg:px-20 px-10  grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 text-black'>
    <div className='flex flex-col h-full text-sm  space-y-3 lg:px-8 py-5  text-gray-500'>
        <Logo/>
        <p>Empowering your daily tasks with AI-driven efficiency. Travel, shop, and manage everything smarter and faster.</p>
    </div>
    <div className='flex flex-col space-y-3 text-sm py-5 h-full  w-full items-center  md:text-center'>
        <label htmlFor="" className='font-bold'>Home</label>
        <ul className='space-y-3 text-gray-500'>
            <li>Overview</li>
            <li>Features</li>
            <li>How It Works</li> 
            <li>Testimonials</li>
           
        </ul>
    </div>
    <div className='flex flex-col space-y-3 text-sm h-full py-5  w-full items-center  text-left md:text-center'>
        <label htmlFor="" className='font-bold'>About us</label>
        <ul className='space-y-3 text-gray-500'>
            <li>Our Story</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Contact Us</li>
        </ul>
    </div>
    <div className='flex flex-col h-full text-sm space-y-3 w-full py-5 items-center  text-left md:text-center'>
        <label htmlFor="" className='font-bold'>Resources</label>
        <ul className='space-y-3 text-gray-500'>
            <li>Help Center</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Case Studies</li>
        </ul>
    </div>
    <div className='flex flex-col h-full text-sm space-y-3 w-full py-5 items-center  text-left md:text-center'>
        <label htmlFor="" className='font-bold'>Social</label>
        <ul className='space-y-3 text-gray-500'>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedinn</li>
        </ul>
    </div>

</div>
        <div className='w-full h-[15%] bg-primary py-3 md:flex md:flex-row flex flex-col justify-center md:justify-around items-center text-white text-xs'>
<p>© 2024, PAAI. All rights reserved. </p>
<p> Terms and Conditions | Privacy Policy</p>
        </div>
    </div>
  )
}

export default FooterBottom