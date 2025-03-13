"use client";
import React from "react";
import Hero from "@/src/components/layout/Hero";

const Page = () => {
    return (
        <div>
            <Hero heading1="Terms and Conditions" />
            <div className="lg:px-60 md:px-40 sm:px-20 px-10 py-10 text-lg flex flex-col space-y-4">
                <h1 className="text-2xl font-semibold">By using PAAI, you agree to the following terms:</h1>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Use of Service:</strong> PAAI provides AI-powered assistance for travel, payments, and logistics. You must use the app responsibly and for lawful purposes only.</li>
                    <li><strong>Account Security:</strong> You are responsible for safeguarding your account credentials and agree to notify us immediately of any unauthorized access.</li>
                    <li><strong>Data Usage:</strong> We collect minimal data to deliver personalized services, as outlined in our Privacy Policy.</li>
                    <li><strong>Liability:</strong> While we strive for accuracy and reliability, PAAI is not liable for indirect damages or service interruptions.</li>
                    <li><strong>Service Availability:</strong> We aim for 99.9% uptime, but occasional maintenance or technical issues may cause brief downtime.</li>
                    <li><strong>Updates & Changes:</strong> We may update these terms, and continued use of the app implies acceptance of the revised conditions.</li>
                </ul>
                <h1 className="font-bold">For any questions or concerns, please contact us at support@paai.com.</h1>
            </div>
        </div>
    );
};

export default Page;
