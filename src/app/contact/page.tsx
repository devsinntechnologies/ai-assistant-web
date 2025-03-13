"use client"
import React from 'react'
import Hero from '@/src/components/layout/Hero';



const page = () => {
    return (
        <div>
            <Hero heading1="Contact" />
            <div className="lg:px-60 md:px-40 sm:px-20 px-10 py-10 flex text-lg flex-col">
                <h2 className="text-3xl font-bold mb-4 text-left">We’d love to hear from you!  Whether you have questions, feedback, or need assistance, our team is here to help.</h2>
                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <span className="text-lg font-bold">Email: <a href="mailto:support@paai.com" className=" font-light hover:underline">support@paai.com</a></span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="text-lg font-bold">Phone: <a href="tel:+11234567890" className="font-light hover:underline">+1 (123) 456-7890</a></span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <h1 className='font-bold'>Address:<span className="text-lg font-light"> 123 AI Street, Tech City, TX 75001</span></h1>
                    </div>
                    <div className="flex items-center space-x-3">
                        <h1 className='font-bold'>Support Hours:<span className="text-lg font-light"> Monday - (Add remaining info here)</span></h1>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default page