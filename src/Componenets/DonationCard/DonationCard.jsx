import { Link } from "react-router-dom";


const DonationCard = ({ donationCard }) => {
    console.log(donationCard)
    const { id, cover, category, category_bg, card_bg, color, title } = donationCard || {}
    return (
        <Link to={`/donationCard/${id}`}>
            <div className="card card-compact  shadow-xl" style={{background:card_bg}}>
                <img src={cover} alt="Shoes" />
                <div className="card-body">
                    <span className= " p-1 w-fit rounded font-medium" style={{background : category_bg,color:color}}>
                    {category}
                    </span>
                    <h2 className=" text-md font-bold" style={{color :color}}>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default DonationCard;
