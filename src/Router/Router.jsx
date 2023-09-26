import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistis from "../Pages/Statistis/Statistis";
import AllDonationCard from "../Pages/AllDonationCard/AllDonationCard";


const creatMyRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch ('../../public/donationCard.json')
            },
            {
                path : '/donation',
                element:<Donation></Donation>
            },
            {
                path: '/statistis',
                element:<Statistis></Statistis>
            },
            {
                path: '/donationCard/:id',
                element: <AllDonationCard></AllDonationCard>,
                loader: () => fetch ('../../public/donationCard.json')
            }
        ]
    }
])

export default creatMyRouter;