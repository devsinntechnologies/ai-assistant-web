import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='w-full md:px-28  px-10  py-6   '>
        <div className='flex justify-between items-center'>
        <Logo/>
        <div >
            <ul className='sm:flex hidden gap-5 '>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
        </div>
        <button className='px-6 py-2 bg-primary text-white rounded-lg'>
            Login
        </button>
        </div>
    </div>
  )
}

export default Header