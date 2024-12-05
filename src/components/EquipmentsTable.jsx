import React, { useContext } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaFile } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const EquipmentsTable = ({ equipment, idx }) => {
    const { user } = useContext(AuthContext)
    const {_id, category, email, price, name, stockStatus, userName } = equipment

    return (

        <tr className="hover">
            <th>{idx + 1}</th>
            <td>{name}</td>
            <td>{category}</td>
            <td>{stockStatus}</td>
            <td>{price}</td>
            <td>{userName}</td>
            <td className='flex gap-3'>
                <Link to={`/equipments/${_id}`} className='btn btn-sm rounded-md flex justify-center items-center gap-2 cursor-pointer'>
                    <FaFile className=''></FaFile>
                </Link>
                {
                    user && user?.email === email ? 
                    <div className='flex items-center gap-3'>
                        <button className='btn btn-sm'><FaEdit />
                        </button>
                        <button onClick={() => handleDeleteUser(user?._id)} className='btn btn-sm btn-error text-white'>X</button>
                    </div>
                    :
                    <div></div>
                }

            </td>
        </tr>

    );
};

export default EquipmentsTable;