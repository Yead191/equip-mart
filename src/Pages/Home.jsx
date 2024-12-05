import React from 'react';
import HomeBanner from '../components/HomeBanner';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
  const data = useLoaderData()
  return (
    <div>
      <HomeBanner></HomeBanner>

      <div className='my-8'>
        <h1 className='text-center font-semibold text-3xl '>Shop By Categories</h1>
        <div className='my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 p-6'>
          {
            data?.map(category => <Link to={`/category/${category.categoryName}`} key={category.categoryId} class="group relative overflow-hidden rounded-lg shadow-lg transit hover:scale-105 duration-1000 cursor-pointer">
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
    </div>
  );
};

export default Home;