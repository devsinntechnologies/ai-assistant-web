"use client";
import React from "react";
import Hero from "@/src/components/layout/Hero";

const Page = () => {
    return (
        <div>
            <Hero heading1="Privacy Policy" />
            <div className="lg:px-60 md:px-40 sm:px-20 px-10 py-10 text-lg flex flex-col space-y-6">
                <h1 className="text-2xl font-semibold">Your privacy is our priority.</h1>
                <p>
                    At <strong>PAAI</strong>, we are committed to protecting your personal information. We only collect data necessary to
                    provide and improve our services, such as location for maps, billing details for secure payments, and delivery
                    addresses for shipment tracking. Your data is encrypted and never shared with third parties without your consent.
                    By using our app, you agree to this policy, ensuring your information is handled with care and security.
                </p>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Data We Collect</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li><strong>Personal Details:</strong> Name, email, and contact information.</li>
                        <li><strong>Location Data:</strong> For navigation and travel features.</li>
                        <li><strong>Payment Information:</strong> For secure transactions (fully encrypted).</li>
                        <li><strong>Usage Analytics:</strong> To improve app performance and user experience.</li>
                    </ol>
                </div>
                <p className="font-bold">
                    You can access, update, or delete your data anytime through app settings.
                </p>
            </div>
        </div>
    );
};

export default Page;
