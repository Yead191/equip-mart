import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home';
import Root from '../Root/Root';
import AddEquipment from '../Pages/AddEquipment';
import AllEquipment from '../Pages/AllEquipment';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import PrivateRoute from '../Routes/PrivateRoute';
import MyEquipments from '../Pages/MyEquipments';
import SingleEquipment from '../components/SingleEquipment';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addEquipment',
                element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
            },
            {
                path: '/myEquipments',
                element: <PrivateRoute><MyEquipments></MyEquipments></PrivateRoute>
            },
            {
                path: '/allEquipment',
                element: <AllEquipment></AllEquipment>,
                loader: ()=> fetch('http://localhost:5000/equipments')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/equipments/:id',
                element: <SingleEquipment></SingleEquipment>,
                loader: ({params})=> fetch(`http://localhost:5000/equipments/${params.id}`)
            }
        ]
    }
]) 

export default router;