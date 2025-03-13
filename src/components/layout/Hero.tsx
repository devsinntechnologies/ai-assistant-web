// @ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type ReusableComponentProps = {
  heading1?: string;
};

const Hero: React.FC<ReusableComponentProps> = ({ heading1 }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="static w-full h-[300px] flex items-center justify-center overflow-hidden">
      {isClient && (
        <Image
          src="/header/banner.svg"
          alt="banner"
          width={1920} 
          height={400} 
          className="absolute top-[-50px] w-full h-[400px] object-cover z-[-10]" 
        />
      )}
      <div />
      <div className="text-center text-white text-5xl md:text-6xl lg:text-7xl font-bold z-10">
        {heading1}
      </div>
    </div>
  );
};

export default Hero;
