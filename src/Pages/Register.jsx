import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    useEffect(() => {
        document.title = 'Register | EquipMart'
    }, [])

    const [showPass, setShowPass] = useState(false)

    const [errorMsg, setErrorMsg] = useState('')

    const location = useLocation()
    const navigate = useNavigate()
    const { SignUp, updateUser, setUser, signInWithGoogle } = useContext(AuthContext) || {}


    const handleLoginWithGoogle = () => {
        signInWithGoogle()
            .then(res => {
                // console.log(res.user)
                navigate(location?.state ? location.state : '/')
                toast.success(`Successfully logged in as: ${res.user.displayName}`)

            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const handleSignUp = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        setErrorMsg('')


        //handle password
        if (password.length < 6) {
            setErrorMsg('Password should be 6 character or more')
            return
        }
        const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/

        if (!regPassword.test(password)) {
            setErrorMsg('Password should contain 1 uppercase, 1 lowercase and a special character')
            return

        }





        SignUp(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setUser(user)
                updateUser({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        navigate(location?.state ? location.state : '/')
                        toast.success(`Successfully Registered as: ${user.displayName}`)



                    })
                    .catch((error) => toast.error(error.message))
                // console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage);
                // ..
            });


        // console.log(name, photo, email, password);


    }

    return (
        <motion.div
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col lg:flex-row shadow-lg rounded-lg bg-white max-w-4xl w-full">
                {/* Left Section */}
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 lg:w-1/2 flex flex-col justify-center items-center rounded-l-lg radius5xl">
                    <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                    <p className="mb-6 text-center">
                        Enter your personal details to use all of the site's features.
                    </p>
                    <Link to='/login' className="bg-white text-purple-700 hover:bg-gray-200 px-6 py-2 rounded-xl font-medium transition">
                        SIGN IN
                    </Link>
                </div>

                {/* Right Section */}
                <div className="p-8 lg:w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Create Account</h2>
                    <div className="flex gap-3 mb-6">
                        <button onClick={handleLoginWithGoogle} className="bg-gray-200 hover:bg-gray-300 rounded-xl px-5 h-10 flex  gap-3 items-center justify-center">
                            <FcGoogle /> Sign in With Google
                        </button>
                    </div>
                    <form onSubmit={handleSignUp} className='w-full'>
                        <input
                            name='name'
                            type="text"
                            placeholder="Name"
                            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            required />
                        <input
                            name='photo'
                            type="text"
                            placeholder="Photo URL"
                            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            required />
                        <input
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
                        {
                            errorMsg && <p className='text-red-600 text-center mb-1'>{errorMsg}</p>
                        }
                        <div className='flex justify-center items-center'>

                            <button className="bg-purple-600  text-white hover:bg-purple-700 px-6 py-2 rounded-lg font-medium transition">
                                SIGN UP
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </motion.div>
    );
};

export default Register;