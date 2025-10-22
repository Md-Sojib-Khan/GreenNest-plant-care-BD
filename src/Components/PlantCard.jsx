import React from 'react';
import { FaStar } from 'react-icons/fa';

const PlantCard = ({ PlantData }) => {
    console.log(PlantData)
    return (
        <div>
            <div className="card bg-base-100 shadow-sm p-3 hover:scale-103 transition ease-in-out">
                <figure>
                    <img
                        className='w-full h-[250px] object-cover'
                        src={PlantData.image}
                        alt="" />
                </figure>
                <div className="card-body p-0 py-3">
                    <h2 className="card-title">{PlantData.plantName}</h2>
                    <div className='flex justify-between items-center'>
                        <h3 className='font-bold'>price: ${PlantData.price}</h3>
                        <h3 className='font-bold flex gap-1 items-center'><FaStar />{PlantData.rating}</h3>
                    </div>
                    <div className="card-actions w-full">
                        <button className="btn w-full bg-gradient-to-tl from-green-500 to-green-800 text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;