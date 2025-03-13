import React from 'react'
import Logo from './Logo'
import Login from '../Login'

const Header = () => {
  return (
    <div className='w-full md:px-28  px-10  py-6   '>
        <div className='flex justify-between items-center'>
        <Logo/>
        <div >
            <ul className='sm:flex hidden gap-5 '>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
       <Login/>
        </div>
    </div>
  )
}

export default Header