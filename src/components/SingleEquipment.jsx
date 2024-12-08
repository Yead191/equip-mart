// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import toast from 'react-hot-toast';
import { FaHeart, FaStar } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { RxCross1 } from 'react-icons/rx';
import { useLoaderData } from 'react-router-dom';

const SingleEquipment = () => {
    const product = useLoaderData()
    // console.log(product);
    const {
        name,
        photo,
        category,
        description,
        price,
        rating,
        customization,
        processingTime,
        stockStatus,
        email,
        userName, } = product

    const [isCart, setIsCart] = useState(false)
    const [isWishlist, setIsWishlist] = useState(false)
    const handleCart = () => {
        toast.success('Product added to cart successfully!')
        setIsCart(true)
    }
    const handleWishList = () => {
        toast.success('Product added to Wishlist successfully!')
        setIsWishlist(true)
    }


    return (
        <div>
            <div className="h-[280px] bg-[#2d248a] relative">
                <Fade cascade damping={0.2}>
                    <h1 className='text-3xl lg:text-4xl font-bold text-center text-white pt-8'>Product Details</h1>

                </Fade>
            </div>

            <div className="md:w-8/12 md:mx-auto relative -mt-44 mb-28  mx-3">
                <div className="grid grid-cols-1 md:grid-cols-6 items-center shadow-2xl bg-white  rounded-xl p-4 ">

                    <div className="col-span-4">
                        <button
                            className='p-2 bg-red-500 rounded-2xl text-white absolute -top-3 -left-3 z-10 transition hover:scale-110'
                            onClick={() => window.history.back()}
                        >
                            <RxCross1 className='text-sm ' />
                        </button>
                        {/* img */}
                        <img
                            className="lg:h-[570px] w-full lg:w-[700px] object-cover overflow-hidden rounded-xl"
                            src={photo}
                            alt=""
                        />
                    </div>
                    <div className="col-span-2 py-8 ">
                        <Fade cascade triggerOnce delay={300}>

                            <h1 className="font-bold text-3xl lg:text-4xl">{name}</h1>
                            <div className="flex items-center gap-5 my-6">
                                {stockStatus > 0 ? (
                                    <p className="flex items-center gap-2">
                                        <GoDotFill className="text-green-500" /> In Stock ({stockStatus})
                                    </p>
                                ) : (
                                    <p className="flex items-center gap-2">
                                        <GoDotFill className="text-red-500" /> Out of Stock
                                    </p>
                                )}
                                <div className="flex items-center gap-1">
                                    <p>Rating: {rating}</p>
                                    <div className="rating rating-sm">
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-orange-400"
                                        />
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-orange-400"
                                        />
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-orange-400"
                                        />
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-orange-400"
                                            defaultChecked
                                        />
                                        <input
                                            type="radio"
                                            name="rating-6"
                                            className="mask mask-star-2 bg-orange-400"
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="my-4 flex items-center gap-4">
                                <p className="font-semibold text-lg">
                                    Price: <span className="text-2xl">৳{price}</span>
                                </p>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <p className="text-lg font-thin">
                                    <span className="font-bold">Description: </span>
                                    {description}
                                </p>
                                <p className="text-lg font-thin">
                                    <span className="font-bold">Customization: </span>
                                    {customization}
                                </p>
                                <p className="text-lg font-thin">
                                    <span className="font-bold">Delivery Time: </span>
                                    {processingTime} days
                                </p>
                                <p className="text-lg font-thin">
                                    <span className="font-bold">Category: </span>
                                    {category}
                                </p>
                                <p className="text-lg font-thin">
                                    <span className="font-bold">Product Owner: </span>
                                    {userName}
                                </p>
                            </div>

                            <div className="mt-8  flex items-center gap-4">
                                {
                                    stockStatus > 0 ?
                                        <button disabled={isCart} onClick={handleCart} className="btn bg-[#2d248a] text-white px-7">
                                            Add to Cart
                                        </button>
                                        :
                                        <button disabled className="btn bg-[#2d248a] text-white px-7 ">
                                            Out of Stock
                                        </button>
                                }
                                <button disabled={isWishlist} onClick={handleWishList} className="btn rounded-full">
                                    <FaHeart className="text-xl"></FaHeart>
                                </button>
                            </div>

                        </Fade>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default SingleEquipment;