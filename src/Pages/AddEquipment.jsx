import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const AddEquipment = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate('/')


    const handleSubmit = e => {
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

        const equipmentDetails = {
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
        // console.log(equipmentDetails);
        fetch('http://localhost:5000/equipments', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(equipmentDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Item has been added!",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset()
                navigate('/allEquipment')
            })
    }


    return (
        <div>
            <div className="md:w-10/12 mx-auto bg-[#F4F3F0] shadow rounded-lg  p-16 my-16">
                <Link to={'/'} className="text-blue-500 font-semibold mb-4">
                    &larr; Back to home
                </Link>
                <h2 className="text-3xl font-bold  text-center mb-8">Add New Item</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="block text-sm font-medium mb-2">Item Name</label>
                        <input
                            type="text"
                            name="name"
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
                            placeholder='Enter Product Image URL'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Category</label>
                        <select
                            name="category"
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
                            placeholder='Enter Product Price'
                            className="w-full border rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Rating</label>
                        <select
                            name="rating"
                            className="w-full border rounded-lg p-2"
                            required
                        >
                            <option value="" disabled selected>Select Rating</option>
                            {Array.from({ length: 10 }, (_, i) => (
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
                            placeholder='Customization'
                            className="w-full border rounded-lg p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Processing Time</label>
                        <input
                            type="text"
                            name="processingTime"
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
                            value={user.email}
                            readOnly
                            className="w-full border rounded-lg p-2 bg-gray-200"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">User Name</label>
                        <input
                            type="text"
                            value={user.displayName}
                            name='userName'
                            readOnly
                            className="w-full border rounded-lg p-2 bg-gray-200"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2 flex mt-3">
                        <button
                            type="submit"
                            className="w-8/12 mx-auto  bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Add Item
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddEquipment;

//