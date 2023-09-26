import { Link } from "react-router-dom";


const DonationCard = ({ donationCard }) => {
    console.log(donationCard)
    const { id, cover, category, category_bg, card_bg, text_color, title } = donationCard || {}
    return (
        <Link to={`/donationCard/${id}`}>
            <div className="card card-compact  shadow-xl">
                <img src={cover} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <div className="card-actions justify-end">
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default DonationCard;
