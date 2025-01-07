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
import ContactUs from '../Pages/ContactUs';
import About from '../Pages/About';

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
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/category/:category',
                        element: <HomeProducts></HomeProducts>,
                        loader: ({ params }) => fetch(`https://equi-sports-server-six.vercel.app/category/${params.category}`)
                    }
                ]
            },
            {
                path: '/addEquipment',
                element: (<>

                    <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
                </>)
            },
            {
                path: '/myEquipments',
                element: <PrivateRoute><MyEquipments></MyEquipments></PrivateRoute>
            },
            {
                path: '/allEquipment',
                element: <AllEquipment></AllEquipment>,
                loader: () => fetch('https://equi-sports-server-six.vercel.app/equipments')
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
                element: (<>

                    <SingleEquipment></SingleEquipment>
                </>),
                loader: ({ params }) => fetch(`https://equi-sports-server-six.vercel.app/equipments/${params.id}`)
            },
            {
                path: '/updateEquipment/:id',
                element: (<>
                    <ScrollToTop></ScrollToTop>
                    <PrivateRoute><UpdateEquipment></UpdateEquipment></PrivateRoute>
                </>),
                loader: ({ params }) => fetch(`https://equi-sports-server-six.vercel.app/equipments/${params.id}`)
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    }
])

export default router;