import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistis from "../Pages/Statistis/Statistis";


const creatMyRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path : '/donation',
                element:<Donation></Donation>
            },
            {
                path: '/statistis',
                element:<Statistis></Statistis>
            }
        ]
    }
])

export default creatMyRouter;