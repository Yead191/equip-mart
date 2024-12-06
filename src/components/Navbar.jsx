import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import userImg from '../assets/user.png'

import { PiSignIn, PiSignOut } from "react-icons/pi";

import toast from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';



const Navbar = () => {
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Sign out Successful');
                navigate('/login')
            }).catch((error) => {
                toast.error(error.message);
            });
    }


    const links = <div className='lg:flex lg:gap-3 '>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/allEquipment' >All Product</NavLink></li>
        <li><NavLink to='/addEquipment' >Add Product</NavLink></li>
        <li><NavLink to='/myEquipments' >My Product</NavLink></li>

    </div >

    return (
        <div className="navbar bg-base-200 shadow-md fixed top-0 z-50 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-2xl font-bold italic">EquiSports</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}


                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className={`w-10 rounded-full hover:${user?.displayName}`} >
                            {
                                user ?
                                    <img title={user?.displayName || 'User'} className='w-10 h-10 object-cover overflow-hidden' src={user?.photoURL} alt="img" />
                                    :

                                    <img className='object-cover'
                                        alt="Tailwind CSS Navbar component"
                                        src={userImg} />
                            }


                        </div>
                       
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className='pl-3 pt-1 font-semibold text-lg'>{user?.displayName}</li>

                        <li>
                            <Link to='/profile' className="justify-between"> Profile </Link>
                        </li>
                        {

                            user && user?.email ?
                                <button onClick={() => handleSignOut()} className=" btn bg-base-100 btn-sm md:hidden"> Sign Out <PiSignOut className='text-lg' /></button>
                                :
                                <Link to='/login' className="btn btn-sm bg-base-100 md:hidden"><PiSignIn className='text-lg' /> Login</Link>
                        }
                        {/* <Link to='/login' className="btn btn-sm bg-base-100 md:hidden"><PiSignIn className='text-lg' /> Login</Link> */}


                    </ul>

                </div>
                <div className='hidden md:block'>
                    {

                        user && user?.email ?
                            <button onClick={() => handleSignOut()} className=" btn bg-base-100  "> Sign Out <PiSignOut className='text-lg' /></button>
                            :
                            <Link to='/login' className="btn bg-base-100 "><PiSignIn className='text-lg' /> Login</Link>
                    }
                            {/* <Link to='/login' className="btn bg-base-100 "><PiSignIn className='text-lg' /> Login</Link> */}


                </div>

            </div>
        </div>
    );
};

export default Navbar;