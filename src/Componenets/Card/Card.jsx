import swal from "sweetalert";

const Card = ({ donationCard }) => {

    const { id, cover, description, donate_amount, title,button_bg  } = donationCard || {}

    const handelToAddDonation = () => {
        const addTODonationCards = []
        const donationCards = JSON.parse(localStorage.getItem('donation'))

        if(!donationCards){
            addTODonationCards.push(donationCard)
            localStorage.setItem('donation',JSON.stringify(addTODonationCards))
            swal("Thank You For Your Donation");
        }
        else{
            addTODonationCards.push(... donationCards,donationCard)
            localStorage.setItem('donation',JSON.stringify(addTODonationCards))
            swal("Thank You For Your Donation");
        }
    }
    return (
        <div>
            <div className='relative '>
                <img className="w-full " src={cover} alt="Shoes" />
                <div className='flex items-end'>
                    <div className='w-full h-[150px] absolute bg-[#0b0b0b80]   '>
                        <button onClick={handelToAddDonation} className="btn btn-secondary  ml-4 mt-4" style={{ background: button_bg }}>Donation ${donate_amount}</button>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <h2 className=" text-xl font-bold py-2">{title}</h2>
                <p className='text-xl text-[#0b0b0bb3] '>{description}</p>
            </div>
        </div>
    );
};

export default Card;
