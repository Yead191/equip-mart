import React, { useEffect, useState } from "react";
import { FaFile } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function FeaturedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/feature')
            .then(res => res.json())
            .then(data => {

                setProducts(data);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000, 
        autoplaySpeed: 2000, 
        cssEase: "ease-in-out",
        pauseOnHover: true, 
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                },
            },
        ],

    };
    

    return (
        <div className="slider-container my-6">
            <Slider {...settings}>
                {products?.map((equipment) => (
                    <div key={equipment._id} className="px-3"> {/* Add padding for gaps */}
                        <div className="flex flex-col items-center justify-center w-full mx-auto transition duration-700">
                            <div className="w-full h-72 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                                <img
                                    className="w-full h-full object-cover overflow-hidden rounded-lg"
                                    src={equipment.photo}
                                    alt=""
                                />
                            </div>

                            <div className="w-3/4 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-6/12 dark:bg-gray-800">
                                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                                    {equipment.name}
                                </h3>

                                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                    <span className="font-bold text-gray-800 dark:text-gray-200">
                                        ৳{equipment.price}
                                    </span>

                                    <div className="flex items-center gap-1">
                                        <Link
                                            to={`/equipments/${equipment._id}`}
                                            className="btn btn-xs text-xs text-white bg-black hover:text-black"
                                        >
                                            <FaFile /> View More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default FeaturedProducts;
