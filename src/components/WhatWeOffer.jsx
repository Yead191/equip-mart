import React from "react";
import { FaCheckCircle, FaDumbbell, FaHandsHelping, FaRobot } from "react-icons/fa";

const WhatWeOffer = () => {
    const offerings = [
        {
            icon: <FaCheckCircle className="text-red-500 text-5xl mb-4" />,
            title: "Certified Products",
            description:
                "High-quality, certified sports equipment for athletes at all levels. Ensuring the highest levels of safety, performance, and quality for our customers.",
        },
        {
            icon: <FaDumbbell className="text-red-500 text-5xl mb-4" />,
            title: "All Sports Equipment Solution",
            description:
                "Get everything you need to achieve your fitness goals with our comprehensive range of Sports & Fitness equipment solutions, from basic gear to specialized equipment.",
        },
        {
            icon: <FaHandsHelping className="text-red-500 text-5xl mb-4" />,
            title: "Comprehensive Customer Support",
            description:
                "We're here to assist you every step of the way, from providing product information to technical support and troubleshooting. Our commitment to your satisfaction is unwavering.",
        },
        {
            icon: <FaRobot className="text-red-500 text-5xl mb-4" />,
            title: "Smart Automation Manufacturing",
            description:
                "Our cutting-edge technology, such as Laser cutting, Powder Coating, Injection Molding, Rubber Compression Molding, VMC, and CNC, guarantees accuracy and productivity in all stages of the manufacturing process.",
        },
    ];

    return (
        <div className="bg-[#c4dce0] py-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">
                    What We Offer
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {offerings.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            <div className="flex justify-center">{item.icon}</div>
                            <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;
