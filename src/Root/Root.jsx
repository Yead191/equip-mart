import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='h-[68px]'>
                {/* nav */}
                <Navbar></Navbar>
            </div>
            <div className='flex-grow'>
                {/* outlet */}
                <Outlet></Outlet>
            </div>
            <div>
                {/* footer */}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;