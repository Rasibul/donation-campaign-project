import React from 'react';

const Card = ({ donationCard }) => {
    const { cover, description, title } = donationCard || {}
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <img src={cover} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{title}</h2>
                    <p className='text-xl text-[#0b0b0bb3] '>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
