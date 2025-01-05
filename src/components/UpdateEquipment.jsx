import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Fade } from 'react-awesome-reveal';

const UpdateEquipment = () => {
    useEffect(() => {
        document.title = 'UpdateEquipment | EquipMart'
    }, [])
    const { user } = useContext(AuthContext)
    // const [disable, setDisable] = useState(false)
    const navigate = useNavigate()
    const data = useLoaderData()
    const {
        _id,
        name,
        photo,
        category,
        description,
        price,
        rating,
        customization,
        processingTime,
        stockStatus,
        email,
        userName, } = data


    const isDisabled = email !== user.email


    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const category = form.category.value
        const description = form.description.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const processingTime = form.processingTime.value
        const stockStatus = form.stockStatus.value
        const email = form.email.value
        const userName = form.userName.value
        const updateDetails = {
            name,
            photo,
            category,
            description,
            price,
            rating,
            customization,
            processingTime,
            stockStatus,
            email,
            userName,
        }

        fetch(`https://equi-sports-server-six.vercel.app/equipments/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDetails)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated successfully!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                    navigate('/myEquipments')

                }
            })


    }
    return (
        <div>
            <div className="h-[280px] bg-[#2d248a] relative">
                <Fade cascade damping={0.2}>

                    <h2 className="text-3xl lg:text-4xl font-bold text-center text-white pt-8">Update {name} </h2>
                </Fade>
            </div>
            <motion.div
                initial={{ y: '-100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="w-11/12 md:w-10/12 mx-auto bg-[#F4F3F0] shadow rounded-lg py-8 px-3 md:p-16 my-16 relative -mt-40">
                <button onClick={() => window.history.back()} className="text-blue-500 font-semibold mb-4">
                    &larr; Go Back
                </button>

                <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="block text-sm font-medium mb-2">Item Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={name}
                            placeholder='Enter Item Name'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Image URL</label>
                        <input
                            type="text"
                            name="photo"
                            defaultValue={photo}
                            placeholder='Enter Product Image URL'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Category</label>
                        <select
                            name="category"
                            defaultValue={category}
                            className="w-full border rounded-lg p-2"
                            required
                        >
                            <option value="" disabled selected>
                                Select Category
                            </option>
                            <option>Bats</option>
                            <option>Kit Bags</option>
                            <option>Helmets</option>
                            <option>Caps</option>
                            <option>Balls</option>
                            <option>Shoes</option>
                            <option>Accessories</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                            name="description"
                            defaultValue={description}
                            placeholder='Enter Product Description'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Price</label>
                        <input
                            type="number"
                            name="price"
                            defaultValue={price}
                            placeholder='Enter Product Price'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Rating</label>
                        <select
                            name="rating"
                            defaultValue={rating}
                            className="w-full border rounded-lg p-2"
                            required
                        >
                            <option value="" disabled selected>Select Rating</option>
                            {Array.from({ length: 5 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Customization</label>
                        <input
                            type="text"
                            name="customization"
                            defaultValue={customization}
                            placeholder='Customization'
                            className="w-full border rounded-lg p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Processing Time</label>
                        <input
                            type="text"
                            name="processingTime"
                            defaultValue={processingTime}
                            placeholder='Enter processing time in days!'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Stock Status</label>
                        <input
                            type="number"
                            name="stockStatus"
                            defaultValue={stockStatus}
                            placeholder='How many stock available?'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">User Email</label>
                        <input
                            type="email"
                            name='email'
                            value={email}
                            readOnly
                            className="w-full border rounded-lg p-2 bg-gray-200"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">User Name</label>
                        <input
                            type="text"
                            value={userName}
                            name='userName'
                            readOnly
                            className="w-full border rounded-lg p-2 bg-gray-200"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2 flex mt-3">
                        <button
                            type="submit"
                            disabled={isDisabled}
                            className={`w-8/12 mx-auto py-2 px-4 rounded-lg font-medium ${isDisabled
                                ? 'bg-gray-400 '
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                                }`}
                        >
                            {
                                isDisabled ?
                                    <p>Haha! Nice Try, but u don't have permission! </p>
                                    :
                                    <p>Update Item </p>

                            }
                        </button>
                    </div>
                </form>
            </motion.div>

        </div>
    );
};

export default UpdateEquipment;