"use client";
import Image from "next/image";
import { featuresData } from "@/src/data/featuresData"; 

const Features = () => {
    return (
        <section className="flex flex-col w-full h-auto items-center justify-center gap-12 sm:px-16 px-8 md:px-24 lg:px-60 py-10">
            <h1 className="w-full text-center md:text-4xl sm:text-3xl text-xl font-bold sm:font-extrabold">
                Explore the Smart Features <br /> of Our AI Assistant
            </h1>
            {featuresData.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col h-auto w-full md:flex-row items-center lg:gap-12 md:gap-6 gap-6 
                        ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                    <div className="relative w-full md:w-auto flex rounded-3xl items-center justify-center min-w-[150px]">
                        <Image
                            src={item.image}
                            alt={item.heading}
                            height={300}
                            width={300}
                            className="object-cover max-w-xs w-auto h-auto"
                        />
                    </div>
                    <div 
                     key={index}
                     className={`md:w-[70%] w-full   text-center md:text-left 
                         ${index % 2 === 0 ? "md:flex md:justify-end" : "md:flex md:justify-start"}`}>
                        <div 
                        className="md:w-[80%] lg:w-[50%] flex flex-col ">
                        <h2 className="sm:text-2xl text-lg font-bold text-gray-800">{item.heading}</h2>
                        <p className="text-sm text-gray-600 mt-2">{item.paragraph}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Features;
