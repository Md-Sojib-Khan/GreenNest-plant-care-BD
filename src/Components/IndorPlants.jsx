import React from 'react';
import PlantCard from './PlantCard';

const IndorPlants = ({ data }) => {
    const sliceData = data.slice(0, 6)
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='font-bold text-4xl text-center bg-gradient-to-l from-green-400 to-green-950 bg-clip-text text-transparent mb-3'>Top Rated Indoor Plants</h1>
            <p className=" text-gray-600 max-w-2xl mx-auto text-center font-medium mb-5">
                Discover our most loved plants by gardening enthusiasts. These top-rated varieties
                have earned their spot for their beauty, resilience, and air-purifying qualities.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    sliceData.map(PlantData => <PlantCard PlantData={PlantData} key={PlantData.plantId}></PlantCard>)
                }
            </div>
        </div>
    );
};

export default IndorPlants;