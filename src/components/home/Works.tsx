import React from "react";
import { MessageCircle, Cpu, CheckCircle, Bell } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Start a chat",
    description:
      "Simply type your query or use voice input to ask anything. Our AI assistant understands and responds instantly.",
    icon: <MessageCircle className="text-primary" size={32} />,
  },
  {
    id: "02",
    title: "Get Smart Responses",
    description:
      "Receive instant and accurate answers, suggestions, or solutions based on your needs—whether it's booking, reminders, or general inquiries.",
    icon: <Cpu className="text-primary" size={32} />,
  },
  {
    id: "03",
    title: "Take Action",
    description:
      "From setting reminders to finding services or making transactions, execute tasks effortlessly with a single tap.",
    icon: <CheckCircle className="text-primary" size={32} />,
  },
  {
    id: "04",
    title: "Stay Updated",
    description:
      "Get real-time updates, reminders, and notifications to keep track of your tasks and activities.",
    icon: <Bell className="text-primary" size={32} />,
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-[#FBF1FF] py-12 sm:px-6 px-2">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          How Our AI Assistant Works
        </h2>
        <p className="mt-2 text-gray-600">
          "Just ask, and our AI chatbot takes care of the rest. From booking trips and setting reminders to paying bills and finding services, everything is quick, smart, and effortless—saving you time and effort."
        </p>
      </div>
      <div className="relative max-w-2xl mx-auto mt-12">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 transform -translate-x-1" />
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-center mb-10 relative ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-1/2 sm:px-12 px-6">
              <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md border border-gray-300">
                {step.icon}
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center">
                <span className="text-sm font-semibold">{step.id}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;