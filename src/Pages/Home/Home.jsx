import { useLoaderData } from "react-router-dom";
import Banner from "../../Componenets/Header/Banner/Banner";
import DonationCards from "../../Componenets/DonationCards/DonationCards";

const Home = () => {
    const donationCards = useLoaderData();
    // console.log(donationCards)
    return (
        <div>
            <Banner></Banner>
            <DonationCards donationCards={donationCards}></DonationCards>
        </div>
    );
};

export default Home;