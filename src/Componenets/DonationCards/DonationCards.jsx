import DonationCard from "../DonationCard/DonationCard";

const DonationCards = ({donationCards}) => {
    console.log(donationCards)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5   ">
                {
                    donationCards ?.map(donationCard => <DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default DonationCards;