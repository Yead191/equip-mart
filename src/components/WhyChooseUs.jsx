import React from "react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
    const features = [
        {
            icon: "🎖️",
            title: "Superior Quality Products",
            description:
                "Our EquipMart is designed using premium-grade materials and advanced manufacturing techniques, ensuring you get durable, long-lasting products that enhance your performance in every game.",
        },
        {
            icon: "🛍️",
            title: "Wide Range of Choices",
            description:
                "Explore a comprehensive collection of sports equipment tailored for athletes at every level, from beginners taking their first steps to seasoned professionals aiming for peak performance.",
        },
        {
            icon: "💰",
            title: "Competitive Pricing",
            description:
                "We believe top-notch sports equipment should be accessible to all, which is why we offer high-performance products at competitive prices, giving you the best value for your money.",
        },
        {
            icon: "🚚",
            title: "Fast & Reliable Shipping",
            description:
                "Enjoy fast, secure, and hassle-free shipping that ensures your gear reaches you in pristine condition, so you can focus on your game without unnecessary delays.",
        },
        {
            icon: "🤝",
            title: "Trusted by Athletes",
            description:
                "Join thousands of satisfied athletes who rely on us for their sports essentials. Our reputation for quality and trust has made us a preferred partner for athletes worldwide.",
        },
        {
            icon: "📞",
            title: "Exceptional Customer Support",
            description:
                "Our dedicated customer support team is always ready to assist you with product inquiries, orders, or any concerns, ensuring a seamless shopping experience every step of the way.",
        },
    ];

    return (
        <section className="bg-blue-50 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold ">
                        Why <span className="text-blue-600">Choose Us</span>?
                    </h2>
                    <p className=" mt-4">
                        Discover unparalleled dedication to quality and performance. We go
                        beyond expectations to deliver exceptional products and services
                        tailored to elevate your game.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-base-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold ">
                                {feature.title}
                            </h3>
                            <p className=" mt-2">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link to={'/allEquipment'} className="btn btn-primary bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                        Explore Our Collection
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
