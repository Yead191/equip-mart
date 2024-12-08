import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterestP,
    FaYoutube,
    FaTiktok,
    FaTumblr,
    FaApplePay,
    FaPaypal,
} from "react-icons/fa";

import {
    RiVisaLine,
    RiMastercardLine,
    RiMastercardFill,
} from "react-icons/ri";
import {
    SiDiscover,
    SiGooglepay,
    SiShopify,
} from "react-icons/si";

const PaymentAndSocialSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 p-6">
            {/* Payment Section */}
            <div className=" rounded-lg bg-[#f2f7ff] shadow-lg p-6 flex flex-col items-center w-full lg:w-1/2">
                <div className="flex items-center justify-center w-full mb-6">
                    <div className="border-t border-gray-300 flex-grow"></div>
                    <h2 className="text-sm font-medium text-gray-500 px-4">
                        WE ACCEPT
                    </h2>
                    <div className="border-t border-gray-300 flex-grow"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <FaApplePay className="text-gray-800 text-4xl" />
                    <SiDiscover className="text-orange-500 text-4xl" />
                    <SiGooglepay className="text-blue-500 text-4xl" />
                    <RiMastercardFill className="text-red-500 text-4xl" />
                    <RiMastercardLine className="text-orange-500 text-4xl" />
                    <FaPaypal className="text-blue-500 text-4xl" />
                    <SiShopify className="text-purple-600 text-4xl" />
                    <RiVisaLine className="text-blue-700 text-4xl" />
                </div>
            </div>

            {/* Social Media Section */}
            <div className=" rounded-lg shadow-lg bg-[#fef4e8] p-6 flex flex-col items-center w-full lg:w-1/2">

                <div className="flex items-center justify-center w-full mb-6">
                    <div className="border-t border-gray-300 flex-grow"></div>
                    <h2 className="text-sm font-medium text-gray-500 px-4">
                        Follow Us
                    </h2>
                    <div className="border-t border-gray-300 flex-grow"></div>
                </div>

                <div className="flex justify-center gap-4">
                    <FaFacebookF className="text-blue-600 text-2xl md:text-4xl" />
                    <FaTwitter className="text-blue-400 text-2xl md:text-4xl" />
                    <FaInstagram className="text-pink-500 text-2xl md:text-4xl" />
                    <FaPinterestP className="text-red-600 text-2xl md:text-4xl" />
                    <FaYoutube className="text-red-500 text-2xl md:text-4xl" />
                    <FaTiktok className="text-black text-2xl md:text-4xl" />
                    <FaTumblr className="text-black text-2xl md:text-4xl" />

                </div>

            </div>


        </div>
    );
};

export default PaymentAndSocialSection;
