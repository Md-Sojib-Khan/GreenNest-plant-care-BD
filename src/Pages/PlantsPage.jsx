import React from 'react';

const PlantsPage = () => {
    return (
        <div className='py-10 bg-gradient-to-br from-green-50 to-emerald-100'>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                Our <span className='text-green-600'>Green</span> Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
                From air-purifying greens to vibrant succulents, find the perfect plant that matches your lifestyle. Let nature grow closer to you — one leaf at a time.
            </p>
        </div>
    );
};

export default PlantsPage;