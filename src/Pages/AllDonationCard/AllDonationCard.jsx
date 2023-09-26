import  { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../../Componenets/Card/Card';

const AllDonationCard = () => {


    const [donationCard, setDontionCard] = useState();

    const { id } = useParams();

    const donationCards = useLoaderData();

    useEffect(() => {
        const findDonationCard = donationCards?.find(donationCard => donationCard.id === id)
        setDontionCard(findDonationCard)
    }, [id, donationCards])


    return (
        <div>
            <Card donationCard={donationCard}></Card>

        </div>
    );
};

export default AllDonationCard;