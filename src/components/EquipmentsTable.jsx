import React, { useContext } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaFile } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const EquipmentsTable = ({ equipment, idx , equipments , setEquipments}) => {
    const { user } = useContext(AuthContext)
    const {_id, category, email, price, name, stockStatus, userName } = equipment

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

                fetch(`http://localhost:5000/equipments/${_id}`, {
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
                        const remaining = equipments.filter(equ => equ._id !== _id)
                        setEquipments(remaining)

                    })

            }
        });

    }

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
                        <Link to={`/updateEquipment/${_id}`} className='btn btn-sm'><FaEdit />
                        </Link>
                        <button onClick={() => handleDeleteProduct(_id)} className='btn btn-sm btn-error text-white'>X</button>
                    </div>
                    :
                    <div></div>
                }

            </td>
        </tr>

    );
};

export default EquipmentsTable;