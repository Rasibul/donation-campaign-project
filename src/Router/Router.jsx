import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistis from "../Pages/Statistis/Statistis";
import AllDonationCard from "../Pages/AllDonationCard/AllDonationCard";
import Error from "../Pages/ErrorPage/Error";


const creatMyRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/donationCard.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistis',
                element: <Statistis></Statistis>,
                loader: () => fetch('/donationCard.json')
            },
            {
                path: '/donationCard/:id',
                element: <AllDonationCard></AllDonationCard>,
                loader: () => fetch('/donationCard.json')
            }
        ]
    }
])

export default creatMyRouter;