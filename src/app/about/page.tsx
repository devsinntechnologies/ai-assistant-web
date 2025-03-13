import Hero from '@/src/components/layout/Hero';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Hero heading1="About" />
            <div className="lg:px-60 md:px-40 sm:px-20 px-10 py-10 flex text-lg flex-col space-y-8">
                <h1 className="text-2xl font-semibold">
                    Empowering Your Daily Life with AI
                </h1>
                <p>
                    At <strong>PAAI</strong>, we empower your daily life with an intelligent AI assistant designed to simplify tasks,
                    enhance travel experiences, and streamline your routine. Whether you need to find locations, book travel,
                    track deliveries, or manage secure payments, PAAI is your all-in-one solution.
                </p>
                <p>
                    Our mission is to blend innovation and convenience, giving you the freedom to focus on what truly matters.
                    With advanced AI capabilities and a user-friendly interface, we help you navigate life with ease and efficiency.
                </p>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Why Choose PAAI?</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Smart Travel Assistance:</strong> Plan, book, and manage trips effortlessly.</li>
                        <li><strong>AI-Powered Maps:</strong> Instantly discover locations, routes, and nearby attractions.</li>
                        <li><strong>Secure Payments:</strong> Handle bills in seconds with encrypted transactions.</li>
                        <li><strong>Real-Time Delivery Tracking:</strong> Stay updated on your shipments every step of the way.</li>
                        <li><strong>On-Demand Services:</strong> Quickly find and book professionals for your needs.</li>
                    </ul>
                </div>
                <h2 className="text-xl font-extrabold">
                    We are committed to continuous innovation, ensuring our AI assistant evolves with your lifestyle.
                </h2>
            </div>
        </div>
    );
};

export default Page;
