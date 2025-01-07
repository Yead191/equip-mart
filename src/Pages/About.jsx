import { useEffect } from "react";
import { FaStar, FaProjectDiagram, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
    useEffect(() => {
        document.title = 'About | EquipMart';
    }, []);
    return (
        <div className="bg-base-100 py-16 px-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Section */}
                <div>
                    <h3 className="text-orange-500 text-lg font-bold mb-2">How It Started</h3>
                    <h1 className="text-4xl font-bold  mb-6">
                        Our Mission is to Revolutionize Cricket Gear Accessibility
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                        EquipMart was founded by passionate cricket enthusiasts, David Carter, a
                        professional player, and Emma Wilson, a sports gear specialist. Their
                        shared vision was to create a one-stop digital destination for all cricket
                        equipment needs, accessible to players of every skill level. United by
                        their love for the game and a belief in providing high-quality gear to all,
                        they embarked on a journey to build <span className="font-bold">EquipMart</span>. With relentless
                        dedication, they collaborated with experts and launched this innovative
                        platform, creating a trusted community of cricket lovers worldwide, all
                        connected by the passion for the sport.
                    </p>
                </div>

                {/* Right Section */}
                <div className="grid gap-4">
                    <img
                        src="https://i.ibb.co.com/5KWgVbH/9325ad04b7e7d035d1716e8ef6c220c8.jpg"
                        alt="About Us"
                        className="rounded-lg shadow-lg"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        {/* Stat 1 */}
                        <div className="bg-base-200 p-4 rounded-lg shadow-md flex items-center space-x-3">
                            <FaStar className="text-orange-500 text-2xl" />
                            <div>
                                <p className="text-2xl font-bold">5+</p>
                                <p className="text-gray-600">Years Experience</p>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-base-200 p-4 rounded-lg shadow-md flex items-center space-x-3">
                            <FaProjectDiagram className="text-blue-500 text-2xl" />
                            <div>
                                <p className="text-2xl font-bold">1K+</p>
                                <p className="text-gray-600">Equipment Categories</p>
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="bg-base-200 p-4 rounded-lg shadow-md flex items-center space-x-3">
                            <FaUserFriends className="text-green-500 text-2xl" />
                            <div>
                                <p className="text-2xl font-bold">10K+</p>
                                <p className="text-gray-600">Positive Reviews</p>
                            </div>
                        </div>

                        {/* Stat 4 */}
                        <div className="bg-base-200 p-4 rounded-lg shadow-md flex items-center space-x-3">
                            <FaUsers className="text-purple-500 text-2xl" />
                            <div>
                                <p className="text-2xl font-bold">50K</p>
                                <p className="text-gray-600">Trusted Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Link to={'/contact'} className="btn bg-[#2d248a] text-white">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default About;
