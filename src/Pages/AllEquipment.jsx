import React, { useContext, useEffect, useState } from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

import EquipmentsTable from '../components/EquipmentsTable';
import { Fade } from 'react-awesome-reveal';

const AllEquipment = () => {
    useEffect(()=>{
        document.title = 'AllEquipment | EquipMart'
    },[])
    const { user } = useContext(AuthContext)
    const loadedData = useLoaderData()

    const [equipments, setEquipments] = useState(loadedData)

    const [isSorted, setIsSorted] = useState(false)

    const handleSort = () => {
        const sort = [...equipments].sort((a, b) => b.price - a.price)
        setEquipments(sort)
        setIsSorted(true)

    }

    return (

        <div>
            <div className="h-[280px] bg-[#2d248a] relative">
                <Fade cascade damping={0.2}>
                    <h1 className='text-3xl lg:text-4xl font-bold text-center text-white pt-8'>All Products</h1>
                </Fade>
                <div className='flex justify-end  md:w-10/12 mx-auto'>

                    <button onClick={handleSort} className={`btn  ${isSorted ? 'active btn-wide' : 'btn-neutral'}`}>Sort By Price</button>
                </div>
            </div>
            <Fade cascade>
                <div className="overflow-x-auto my-8 w-11/12 mx-auto relative -mt-36 bg-base-100 p-6 rounded-lg shadow-lg">

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
                                equipments?.map((equipment, index) => <EquipmentsTable equipments={equipments} setEquipments={setEquipments} key={equipment._id} idx={index} equipment={equipment} ></EquipmentsTable>)
                            }

                        </tbody>
                    </table>
                    <Link to={'/addEquipment'} className='btn bg-[#2d248a] px-5 my-6 text-white hover:text-[#2d248a]'>Add Your Product </Link>
                </div>
            </Fade>
        </div>

    );
};

export default AllEquipment;