import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaFile } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const HomeProducts = () => {
    const { category } = useParams()
    const data = useLoaderData()
    // console.log(data);
    return (
        <div>
            <div className="h-[280px] bg-[#2d248a] relative">
                <Fade cascade damping={0.2}>
                    <h1 className='text-3xl lg:text-4xl font-bold text-center text-white pt-8'>{category}</h1>

                </Fade>
            </div>
            <div className='w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 shadow-lg relative -mt-40 bg-base-100 rounded-lg'>
                {
                    data?.length > 0 ?
                        data?.map((equipment) => (
                            <div key={equipment._id}>
                                <div class="flex flex-col items-center justify-center w-full  mx-auto transition hover:scale-105 duration-700 ">
                                    <div class="w-full h-72 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" >
                                        <img className='w-full h-full object-cover overflow-hidden rounded-lg' src={equipment.photo} alt="" />
                                    </div>

                                    <div class="w-3/4 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-8/12 dark:bg-gray-800">
                                        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{equipment.name}</h3>

                                        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                            <span class="font-bold text-gray-800 dark:text-gray-200">৳{equipment.price}</span>

                                            <div className='flex items-center gap-1'>
                                                <Link to={`/equipments/${equipment._id}`} className='btn btn-xs text-xs text-white bg-black hover:text-black'><FaFile />
                                                    View More</Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <p className='text-red-400 font-semibold text-xl'>No data found in this category!</p>

                }
            </div>
        </div>
    );
};

export default HomeProducts;