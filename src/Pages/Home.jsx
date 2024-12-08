import React, { useEffect, useRef } from 'react';
import HomeBanner from '../components/HomeBanner';
import { Link, Outlet, useLoaderData, useLocation } from 'react-router-dom';
import FeaturedProducts from '../components/FeaturedProducts';
import shop from '../shop.json'
import GirlShop from '../girlShop.json'
import Lottie from 'lottie-react';
import { Fade } from 'react-awesome-reveal';
import PaymentAndSocialSection from '../components/PaymentAndSocialSection';
import WhatWeOffer from '../components/WhatWeOffer';


const Home = () => {
  useEffect(() => {
    document.title = 'Home | EquipMart'
  }, [])
  const data = useLoaderData()
  const location = useLocation();
  const outletRef = useRef(null);

  const isMobileDevice = () => {
    return window.matchMedia('(max-width: 768px)').matches;
  };

  useEffect(() => {
    if (isMobileDevice() && location.pathname.startsWith('/category/')) {
      outletRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <div>
      <HomeBanner></HomeBanner>

      <div className='mb-12  bg-base-200 py-12'>
        {/* product */}
        {/* <div className="h-[280px] bg-[#2d248a] relative">
            
          </div> */}
        <Fade cascade damping={0.2}>
          <div className='flex justify-center items-center'>
            <h1 className='text-2xl lg:text-4xl font-bold text-center'>
              Our Featured Products</h1>
            <Lottie className='w-20 h-20' animationData={GirlShop} />
            <Lottie className='w-20 h-20' animationData={shop} />
          </div>
        </Fade>



        <div className=' bg-base-100  py-4 md:p-6 rounded-lg shadow-xl w-10/12  md:w-10/12 mx-auto my-8'>
          {/* #c4dce0 #393e6f*/}

          <FeaturedProducts data={data}></FeaturedProducts>
        </div>

      </div>

      <div className='my-8'>
        <Fade cascade damping={0.2}>

          <h1 className='text-center font-semibold text-3xl '>Shop By Categories</h1>
        </Fade>
        <div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 p-2 md:gap-6 md:p-6'>
          {data?.map(category => (
            <Link
              to={`/category/${category.categoryName}`}
              key={category.categoryId}
              className="group relative overflow-hidden rounded-lg shadow-lg transit md:hover:scale-105 duration-1000 cursor-pointer"
            >
              <img
                src={category?.categoryImage}
                alt={category?.categoryImage}
                className="w-full h-48 object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                {category.categoryName}
              </p>
            </Link>
          ))}
        </div>

        {/* Outlet Section */}
        <div className='my-8' ref={outletRef}>
          <Outlet></Outlet>
        </div>


      </div>
      <div>
        <PaymentAndSocialSection></PaymentAndSocialSection>
      </div>
      <div className='my-8'>
        <WhatWeOffer></WhatWeOffer>
      </div>
    </div>
  );
};

export default Home;