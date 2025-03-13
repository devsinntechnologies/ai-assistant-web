"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const HeroSection = () => {
  return (
    <div className='static w-full z-1 h-[580px]'>
      <Image
        src="/header/banner.svg"
        height={1400}
        alt='banner'
        width={640}
        className='w-full h-[660px]  absolute top-0 left-0 object-cover z-[-10] rotate-0'
      />
      <div className='relative w-full items-center lg:px-[360px] md:px-40 sm:px-20 px-5 text-center  flex flex-col justify-center text-white space-y-5 h-full '>
        <h1 className='sm:text-5xl text-2xl font-extrabold'>Your Smart AI Assistant for Travel and Beyond</h1>
        <p className='text-sm lg:px-20 sm:px-10'>Experience the power of AI to simplify your daily tasks whether it's booking travel or managing your logistics.</p>
        <div className='gap-5 flex w-full items-center mt-5 justify-center'>
          <Link href="https://play.google.com/store/apps?hl=en&pli=1">
            <Image
              src={"/header/google-play.png"}
              alt='google play'
              height={100}
              width={100}
              className='lg:h-[86px] sm:h-[46px] sm:w-[140px] h-[36px] w-[110px] md:h-[66px] md:w-[200px] lg:w-[260px]'
            />
          </Link>
          <Link href="https://www.apple.com/app-store/">
            <Image
              src={"/header/app-store.png"}
              alt='App Store'
              height={100}
              width={100}
              className='lg:h-[86px] sm:h-[46px] sm:w-[140px] h-[36px] w-[110px] md:h-[66px] md:w-[200px] lg:w-[260px]'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection