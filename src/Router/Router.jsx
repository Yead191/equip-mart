import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home';
import Root from '../Root/Root';
import AddEquipment from '../Pages/AddEquipment';
import AllEquipment from '../Pages/AllEquipment';
import Register from '../Pages/Register';
import Login from '../Pages/Login';

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
                element: <AddEquipment></AddEquipment>
            },
            {
                path: '/allEquipment',
                element: <AllEquipment></AllEquipment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]) 

export default router;