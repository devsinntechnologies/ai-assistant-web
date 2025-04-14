import React from 'react'
import Logo from '../Logo'
import Link from 'next/link'

const FooterBottom = () => {
    return (
        <div className='mt-10 w-full h-auto'>
            <div className='w-full h-[85%] py-20 lg:px-20 px-10  grid  sm:grid-cols-3 grid-cols-1 text-black'>
                <div className='flex flex-col h-full text-sm  space-y-3 lg:px-8 py-5  text-gray-500'>
                    <Logo />
                    <p>Empowering your daily tasks with AI-driven efficiency. Travel, shop, and manage everything smarter and faster.</p>
                </div>
                <div className=' text-sm py-5 h-full  w-full  md:text-center'>
                    <ul className='space-y-3 flex flex-col sm:items-center  text-black font-bold'>
                        <Link href="/"><li>Home</li></Link>
                        <Link href="/about"><li>About</li></Link>
                        <Link href="/contact"><li>Contact</li> </Link>

                    </ul>
                </div>
             
                <div className='flex flex-col h-full text-sm space-y-3 w-full py-5 sm:items-center  text-left md:text-center'>
                    <label htmlFor="" className='font-bold'>Social Media</label>
                    <ul className='space-y-3 font-bold '>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Linkedinn</li>
                    </ul>
                </div>

            </div>
            <div className='w-full h-[15%] bg-primary text-gray-400 py-3 md:flex md:flex-row flex flex-col justify-center md:justify-around items-center  text-xs'>
                <p>© 2025, PAAI. All rights reserved. </p>
                <div className='flex gap-2'>
                    <Link href="/termsAndConditions"><p> Terms and Conditions |</p></Link>
                    <Link href="/privacyPolicy"><p>Privacy Policy</p></Link>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom