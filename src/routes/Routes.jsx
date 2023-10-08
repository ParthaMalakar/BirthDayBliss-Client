import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./privateRoute";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Profile from "../pages/Profile/Profile";
import Career from "../pages/Career/Career";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
                loader: () => fetch('/services.json')
            },
            {
                path: '/login',
                element: <Login></Login>, 
               
            },
            {
                path: '/register',
                element: <Registration></Registration>, 
               
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>, 
               
            },
            {
                path: '/contact',
                element: <Contact></Contact>, 
               
            },
            {
                path: '/Gallery',
                element:<PrivateRoute><Gallery></Gallery></PrivateRoute>, 
               
            },
            {
                path: '/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>, 
               
            },
            {
                path: '/career',
                element:<PrivateRoute><Career></Career></PrivateRoute>, 
               
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>, 
                loader: () => fetch('/services.json')
            }
        ]
    }    
]);

export default router;