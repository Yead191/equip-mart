import React, { useContext, useState } from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

import EquipmentsTable from '../components/EquipmentsTable';

const AllEquipment = () => {
    const { user } = useContext(AuthContext)
    const loadedData = useLoaderData()

    const [equipments, setEquipments] = useState(loadedData)

    return (

        <div>
            <div className="h-[280px] bg-[#2d248a] relative">
                <h1 className='text-3xl lg:text-4xl font-bold text-center text-white pt-8'>All Products</h1>
            </div>
            <div className="overflow-x-auto my-8 w-11/12 mx-auto relative -mt-40 bg-base-100 p-6 rounded-lg shadow-lg">

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
        </div>

    );
};

export default AllEquipment;