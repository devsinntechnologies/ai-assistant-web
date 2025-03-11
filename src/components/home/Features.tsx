"use client";
import Image from "next/image";
import { featuresData } from "@/src/data/featuresData"; // Ensure correct import

const Features = () => {
    return (
        <section className="flex flex-col w-full h-auto items-center justify-center gap-12 px-6 lg:px-40 py-10">
            <h1 className="w-full text-center md:text-5xl text-2xl font-extrabold">
                Explore the Smart Features <br /> of Our AI Assistant
            </h1>
            {featuresData.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col h-auto w-full md:flex-row items-center lg:gap-28 md:gap-12 gap-2 
                        ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                    <div className="relative w-[30%] flex rounded-3xl flex items-center justify-end">
                        <Image
                            src={item.image}
                            alt={item.heading}
                            height={300}
                            width={300}
                            className="object-cover"
                        />
                    </div>
                    <div className="md:w-[70%] w-full  flex flex-col md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">{item.heading}</h2>
                        <p className="text-sm text-gray-600 mt-2">{item.paragraph}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};
export default Features;
