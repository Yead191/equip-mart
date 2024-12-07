import React, { useEffect } from 'react';
import HomeBanner from '../components/HomeBanner';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import FeaturedProducts from '../components/FeaturedProducts';
import shop from '../shop.json'
import GirlShop from '../girlShop.json'
import Lottie from 'lottie-react';
import { Fade } from 'react-awesome-reveal';
import PaymentAndSocialSection from '../components/PaymentAndSocialSection';
import WhatWeOffer from '../components/WhatWeOffer';


const Home = () => {
  useEffect(() => {
    document.title = 'Home | EquiSports'
  }, [])
  const data = useLoaderData()
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
          {
            data?.map(category => <Link to={`/category/${category.categoryName}`} key={category.categoryId} class="group relative overflow-hidden rounded-lg shadow-lg transit md:hover:scale-105 duration-1000 cursor-pointer">
              <img
                src={category?.categoryImage}
                alt={category?.categoryImage}
                class="w-full h-48 object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p class="absolute bottom-4 left-4 text-white text-lg font-semibold">{category.categoryName}</p>
            </Link>)
          }

        </div>

        <div className='my-8'>
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