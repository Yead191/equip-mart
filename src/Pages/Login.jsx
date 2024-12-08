import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Login = () => {

    useEffect(() => {
        document.title = 'Login | EquiSports'
    }, [])

    const location = useLocation()
    const { login, signInWithGoogle, } = useContext(AuthContext)

    const navigate = useNavigate()
    const emailRef = useRef()

    const [showPass, setShowPass] = useState(false)



    const handleLoginWithGoogle = () => {
        signInWithGoogle()
            .then(res => {
                toast.success(`Successfully logged in as: ${res.user.displayName}`)
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                toast.error(error.message);
            })
    }


    const handleLogin = e => {
        e.preventDefault()

        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')


        login(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate(location?.state ? location.state : '/')
                toast.success(`Successfully logged in as: ${user.displayName}`)
                // ...
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage);
            });

    }
    return (
        <motion.div
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col lg:flex-row shadow-lg rounded-lg bg-white max-w-4xl w-full">
                {/* Left Section */}
                <div className="p-8 lg:w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Sign In</h2>
                    <div className="flex gap-3 mb-6">
                        <button onClick={handleLoginWithGoogle} className="bg-gray-200 hover:bg-gray-300 rounded-xl px-5 h-10 flex  gap-3 items-center justify-center">
                            <FcGoogle /> Sign in With Google
                        </button>

                    </div>
                    <form onSubmit={handleLogin} className='w-full'>
                        <input
                            ref={emailRef}
                            name='email'
                            type="email"
                            placeholder="Email"
                            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            required />
                        <div className="relative w-full mb-4">
                            <input
                                type={showPass ? 'text' : 'password'}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                                placeholder="Password"
                                name="password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass(!showPass)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                            >
                                {showPass ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>



                        <div className='flex items-center justify-center'>

                            <button className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-2 rounded-xl font-medium transition hover:scale-110">
                                SIGN IN
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Section */}
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 lg:w-1/2 flex flex-col justify-center items-center rounded-r-lg roundedLogin">
                    <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
                    <p className="mb-6 text-center">
                        Register with your personal details to use all of the site's features.
                    </p>
                    <Link to='/register' className="bg-white text-purple-700 hover:bg-gray-200 px-6 py-2 rounded-xl font-medium transition hover:scale-110">
                        SIGN UP
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Login;