import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import EquipmentsTable from '../components/EquipmentsTable';
import { FaEdit, FaFile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyEquipments = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;
    console.log(email);
    const [myEquipment, setmyEquipment] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setmyEquipment(data);
                console.log(data);
            });
    }, []);

    
    const handleDeleteProduct = (_id) => {
        console.log(_id);
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

                fetch(`http://localhost:5000/equipments/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
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
                <h1 className='text-3xl lg:text-4xl font-bold text-center text-white pt-8'>My Equipments</h1>
            </div>


            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 overflow-x-auto my-8 md:w-10/12 mx-auto relative -mt-40 bg-base-100 rounded-lg px-10 py-12 shadow-xl '>


                {
                    myEquipment?.map((equipment) => (
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
                                            <Link to={`/equipments/${equipment._id}`} className='btn btn-xs text-xs text-white bg-black'><FaFile />
                                            </Link>
                                            <Link to={`/updateEquipment/${equipment?._id}`}  className='btn btn-xs text-xs'><FaEdit />
                                            </Link>
                                            <button onClick={() => handleDeleteProduct(equipment?._id)} className='btn btn-xs text-xs btn-error text-white'>X</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default MyEquipments;
