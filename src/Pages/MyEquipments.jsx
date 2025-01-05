import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import Loading from '../components/Loading';
import EquipmentsTable from '../components/EquipmentsTable';


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


    

    return (
        <div className="">
            <div className="h-[280px] bg-[#2d248a] relative">
                <Fade cascade damping={0.2}>
                    <h1 style={{fontVariant: 'small-caps'}} className='text-3xl lg:text-4xl font-bold text-center text-white pt-8'>My Equipments</h1>
                </Fade>
            </div>



            <motion.div
                initial={{ y: '-100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.9, ease: 'easeInOut' }}
                 className="overflow-x-auto my-8 w-11/12 mx-auto relative -mt-36 bg-base-100 p-6 rounded-lg shadow-lg"
                >


                {loading ? (
                    <Loading></Loading>
                ) : myEquipment?.length > 0 ? (
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Item Name</th>
                                <th>Category</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Owner</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                myEquipment?.map((equipment, index) => <EquipmentsTable equipments={myEquipment} setEquipments={setmyEquipment} key={equipment._id} idx={index} equipment={equipment} ></EquipmentsTable>)
                            }

                        </tbody>
                    </table>

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
