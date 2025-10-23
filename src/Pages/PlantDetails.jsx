import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import BookConsultation from '../Components/BookConsultation';

const PlantDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();

    const plantData = data.find(plant => {
        return plant.plantId === parseInt(id) ||
            plant.plantId === id ||
            plant.plantId.toString() === id;
    });
    console.log(plantData)
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm grid grid-cols-2 py-10 px-15 bg-gradient-to-br from-green-50 to-emerald-100">
                <figure>
                    <img
                        src={plantData.image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold bg-gradient-to-l from-green-400 to-green-950 bg-clip-text text-transparent">{plantData.plantName}</h2>
                    <div className='flex items-center gap-1 font-semibold'>
                        <h3>Category:</h3>
                        <h3>{plantData.category}</h3>
                    </div>
                    <div className='flex items-center gap-1 font-semibold '>
                        <h3>Price:</h3>
                        <h3>${plantData.price}</h3>
                    </div>
                    <div className='flex items-center gap-1 font-semibold '>
                        <h3>Rating:</h3>
                        <h3>{plantData.rating}</h3>
                    </div>
                    <div className='flex items-center gap-1 font-semibold'>
                        <h3>CareLevel:</h3>
                        <h3>{plantData.careLevel}</h3>
                    </div>
                    <div className='flex items-center gap-1 font-semibold border-b border-gray-400 pb-2'>
                        <h3>Available Stock:</h3>
                        <h3>{plantData.availableStock}</h3>
                    </div>
                    <h2 className='font-bold'>Description</h2>
                    <p className='border-b border-gray-400'>{plantData.description}</p>
                </div>
            </div>
            <BookConsultation></BookConsultation>
        </div>
    );
};

export default PlantDetails;