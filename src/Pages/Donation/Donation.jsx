import { useEffect, useState } from "react";
import DonationsCards from "./DonationsCard/DonationsCards";

const Donation = () => {
    const [donation, setDontion] = useState([])
    const [noDonation, setEmtyDonation] = useState(false)
    const [isShow,setisShow] = useState(false)

    useEffect(() => {
        const donationCards = JSON.parse(localStorage.getItem('donation'))
        if (donationCards) {
            setDontion(donationCards)
        }
        else {
            setEmtyDonation("Donation Amount is 0")
        }
    }, [])
    return (
        <div>
            {
                noDonation ? <p className="text-5xl text-center h-screen font-bold">{noDonation}</p>
                    :
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {
                                isShow ? donation.map(card => <DonationsCards key={card.id} card={card}></DonationsCards>) :
                                donation.slice(0,4).map(card => <DonationsCards key={card.id} card={card}></DonationsCards>)
                            }
                        </div>
                        <div className="py-10">
                            <button onClick={()=> setisShow(!isShow)} className="px-5   bg-green-200 block mx-auto">{isShow ? "" : "See All"}</button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Donation;