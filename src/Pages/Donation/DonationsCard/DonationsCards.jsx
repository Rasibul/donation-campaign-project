const DonationsCards = ({ card }) => {
    const {  cover, category, donate_amount, category_bg, card_bg, color, title, button_bg } = card || {}
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row" style={{ background: card_bg }}>

                <img src={cover} alt="Movie" />
                <div className="card-body">
                    <span className=" p-1 w-fit rounded font-medium" style={{background : category_bg,color:color}}>
                        {category}
                    </span>
                    <h2 className="font-bold">{title}</h2>
                    <p className="" style={{color: color }}>$ {donate_amount}</p>
                    <div className="card-actions justify-start" >
                        <button className="btn text-white" style={{background:button_bg}} > View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationsCards;