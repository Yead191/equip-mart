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
import UpdateEquipment from '../components/UpdateEquipment';
import ScrollToTop from '../components/ScrollToTop';
import ErrorPage from '../Pages/ErrorPage';
import HomeProducts from '../components/HomeProducts';

const router = createBrowserRouter([
    {
        path: '/',
        element: (<>
            <ScrollToTop></ScrollToTop>
            <Root></Root>
        </>),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('../categories.json'),
                children: [
                    {
                        path: '/category/:category',
                        element: <HomeProducts></HomeProducts>,
                        loader: ({params})=> fetch(`http://localhost:5000/category/${params.category}`)
                    }
                ]
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
                loader: () => fetch('http://localhost:5000/equipments')
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
                path: '/equipments/:id',
                element: <PrivateRoute><SingleEquipment></SingleEquipment></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/equipments/${params.id}`)
            },
            {
                path: '/updateEquipment/:id',
                element: <PrivateRoute><UpdateEquipment></UpdateEquipment></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/equipments/${params.id}`)
            }
        ]
    }
])

export default router;