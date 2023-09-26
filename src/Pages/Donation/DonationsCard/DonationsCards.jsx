

const DonationsCards = ({ card }) => {
    const { id, cover, category, donate_amount, category_bg, card_bg, text_color, title } = card || {}
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                    <img src={cover} alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p>{title}</p>
                    <p>$ {donate_amount}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationsCards;