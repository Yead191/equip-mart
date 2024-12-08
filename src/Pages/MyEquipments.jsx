import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

import { FaEdit, FaFile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import Loading from '../components/Loading';


const MyEquipments = () => {

    useEffect(() => {
        document.title = 'MyEquipments | EquipMart'
    }, [])
    const { user } = useContext(AuthContext);
    const email = user.email;
    const [loading, setLoading] = useState(true)

    const [myEquipment, setmyEquipment] = useState([]);


    useEffect(() => {
        setLoading(true)
        fetch(`https://equi-sports-server-six.vercel.app/user?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setmyEquipment(data);
                setLoading(false)

            });
    }, []);


    const handleDeleteProduct = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://equi-sports-server-six.vercel.app/equipments/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                        const remaining = myEquipment.filter(equ => equ._id !== _id)
                        setmyEquipment(remaining)

                    })

            }
        });

    }

    return (
        <div className="">
            <div className="h-[280px] bg-[#2d248a] relative">
                <Fade cascade damping={0.2}>
                    <h1 className='text-3xl lg:text-4xl font-bold text-center text-white pt-8'>My Equipments</h1>
                </Fade>
            </div>



            <motion.div
                initial={{ y: '-100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.9, ease: 'easeInOut' }}
                className=' grid grid-cols-1 md:grid-cols-3 gap-8 overflow-x-auto my-8 w-11/12 md:w-10/12 mx-auto relative -mt-40 bg-base-100 rounded-lg px-5 md:px-10 py-12 shadow-xl '>


                {loading ? (
                    <Loading></Loading>
                ) : myEquipment?.length > 0 ? (
                    myEquipment.map((equipment) => (
                        <div key={equipment._id}>
                            <div className="flex flex-col items-center justify-center w-full mx-auto transition hover:scale-105 duration-700">
                                <div className="w-full h-72 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                                    <img className='w-full h-full object-cover overflow-hidden rounded-lg' src={equipment.photo} alt={equipment.name} />
                                </div>
                                <div className="w-3/4 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-8/12 dark:bg-gray-800">
                                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{equipment.name}</h3>
                                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                        <span className="font-bold text-gray-800 dark:text-gray-200">৳{equipment.price}</span>
                                        <div className="flex items-center gap-1">
                                            <Link to={`/equipments/${equipment._id}`} className='btn btn-xs text-xs text-white bg-black'><FaFile /></Link>
                                            <Link to={`/updateEquipment/${equipment._id}`} className='btn btn-xs text-xs'><FaEdit /></Link>
                                            <button onClick={() => handleDeleteProduct(equipment._id)} className='btn btn-xs text-xs btn-error text-white'>X</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-3">
                        <p className='text-red-400 font-semibold text-xl'>You don't have any Product! Please Add to see your Products.</p>
                        <Link to={'/addEquipment'} className='btn bg-[#2d248a] text-white my-2 btn-wide'>Add Product</Link>
                    </div>
                )}



            </motion.div>
            <div className='md:w-10/12 mx-auto p-2'>
                <Link to={'/addEquipment'} className={`btn bg-[#2d248a] px-5 my-6 text-white hover:text-[#2d248a] ${myEquipment?.length > 0 ? '' : 'hidden'}`}>Add more Product </Link>
            </div>


        </div>
    );
};

export default MyEquipments;
