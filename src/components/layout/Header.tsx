"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <div className='w-full fixed md:px-28 bg-black/70 px-10 py-5 z-50'>
      <div className='flex justify-between items-center'>
        <Link href="/" passHref legacyBehavior>
          <a className='inline-block'>
            <Image
              src="/logo-2.svg"
              alt='Logo'
              height={100}
              width={100}
              priority
            />
          </a>
        </Link>
        
        <div>
          {/* Desktop Navigation */}
          <nav className='sm:flex hidden gap-8 text-lg text-white items-center font-medium'>
            <Link href="/" passHref legacyBehavior>
              <a className='hover:text-gray-300 transition-colors'>Home</a>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <a className='hover:text-gray-300 transition-colors'>About</a>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <a className='hover:text-gray-300 transition-colors'>Contact</a>
            </Link>
          </nav>
          
          {/* Mobile Navigation */}
          <div className='flex sm:hidden'>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Menu color='#FFFFFF' />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='min-w-[120px]'>
                <DropdownMenuItem className='cursor-pointer'>
                  <Link href="/" passHref legacyBehavior>
                    <a className='w-full'>Home</a>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'>
                  <Link href="/about" passHref legacyBehavior>
                    <a className='w-full'>About</a>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'>
                  <Link href="/contact" passHref legacyBehavior>
                    <a className='w-full'>Contact</a>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className='lg:flex hidden'></div>
      </div>
    </div>
  );
};

export default Header;