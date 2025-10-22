import React from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../Components/PlantCard';

const PlantsPage = () => {
    const data = useLoaderData()
    return (
        <div className='py-10 bg-gradient-to-br from-green-50 to-emerald-100'>
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                    Our <span className='text-green-600'>Green</span> Collection
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-5 p-2">
                    From air-purifying greens to vibrant succulents, find the perfect plant that matches your lifestyle. Let nature grow closer to you — one leaf at a time.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-11/12 mx-auto'>
                {
                    data.map(PlantData => <PlantCard PlantData={PlantData} key={PlantData.plantId}></PlantCard>)
                }
            </div>
        </div>
    );
};

export default PlantsPage;