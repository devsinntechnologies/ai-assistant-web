import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Login from '../Login'


const Header = () => {
  return (
    <div className='w-full md:px-28 bg-black/50 px-10 py-6'>
    <div className='flex justify-between items-center'>
      <Link href="/">
      <Image
        src="/logo-2.svg"
        alt='Logo'
        height={100}
        width={100}
      />
      </Link>
      <div>
        <ul className='sm:flex hidden gap-8 text-lg text-white items-center font-medium'>
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/contact"><li>Contact</li></Link>
        </ul>
        <div className='flex sm:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger><Menu  color='#FFFFFF'/></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem> <Link href="/">Home</Link></DropdownMenuItem>
              <DropdownMenuItem> <Link href="/about">About</Link></DropdownMenuItem>
              <DropdownMenuItem>  <Link href="/contact">Contact</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* <Login/> */}
      <div className='lg:flex hidden'></div>
    </div>
  </div>
  )
}

export default Header