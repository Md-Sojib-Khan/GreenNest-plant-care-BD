import React from 'react';
import { useLoaderData, useParams, Link } from 'react-router';

const BlogDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const plantData = data.find(plant => {
        return plant.plantId === parseInt(id) ||
            plant.plantId === id ||
            plant.plantId.toString() === id;
    });

    if (!plantData) {
        return (
            <div className='text-center py-16'>
                <h2 className='text-2xl font-bold text-red-600'>Plant not found!</h2>
                <Link to='/blog' className='text-emerald-600 hover:underline mt-4 inline-block'>
                    ← Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className=''>
            {/* Back Button */}
            <Link
                to='/blog'
                className='inline-flex items-center text-emerald-600 hover:text-emerald-800 mb-6'
            >
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
                </svg>
                Back to Blog
            </Link>

            {/* Article Header */}
            <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-8'>
                <div className='relative h-64 md:h-80 overflow-hidden'>
                    <img
                        src={plantData.image}
                        alt={plantData.plantName}
                        className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                    <div className='absolute bottom-6 left-6 right-6 text-white'>
                        <div className='flex flex-wrap gap-2 mb-3'>
                            <span className='bg-emerald-600 text-white px-3 py-1 rounded-full text-sm'>
                                {plantData.category}
                            </span>
                            <span className='bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm'>
                                Care Level: {plantData.careLevel}
                            </span>
                            <span className='bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm'>
                                ⭐ {plantData.rating}/5.0
                            </span>
                        </div>
                        <h1 className='text-3xl md:text-4xl font-bold'>{plantData.plantName}</h1>
                    </div>
                </div>

                {/* Article Info */}
                <div className='p-6 border-b'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <div>
                            <p className='text-gray-600'>Provider</p>
                            <p className='font-semibold text-emerald-700'>{plantData.providerName}</p>
                        </div>
                        <div className='text-right'>
                            <p className='text-gray-600'>Price</p>
                            <p className='text-2xl font-bold text-emerald-600'>${plantData.price}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Article Content */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {/* Article Content */}
                <div className='lg:col-span-2'>
                    <div className='bg-white rounded-xl shadow-lg p-6 mb-6'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-4'>About {plantData.plantName}</h2>
                        <div className='prose max-w-none'>
                            <p className='text-gray-700 mb-4'>{plantData.description}</p>
                            <div className='border-l-4 border-emerald-500 pl-4 my-6'>
                                <h3 className='font-bold text-lg text-emerald-700 mb-2'>Quick Facts</h3>
                                <ul className='space-y-2'>
                                    <li className='flex items-center'>
                                        <span className='text-emerald-500 mr-2'>✓</span>
                                        <span>Care Level: <strong>{plantData.careLevel}</strong></span>
                                    </li>
                                    <li className='flex items-center'>
                                        <span className='text-emerald-500 mr-2'>✓</span>
                                        <span>Category: <strong>{plantData.category}</strong></span>
                                    </li>
                                    <li className='flex items-center'>
                                        <span className='text-emerald-500 mr-2'>✓</span>
                                        <span>Available Stock: <strong>{plantData.availableStock}</strong> units</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className='lg:col-span-1'>
                    {/* Care Tips */}
                    <div className='bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg p-6 text-white mb-6'>
                        <h3 className='text-xl font-bold mb-4'>Care Tips</h3>
                        <ul className='space-y-3'>
                            <li className='flex items-start'>
                                <span className='text-2xl mr-2'>💧</span>
                                <span>Water when top soil is dry</span>
                            </li>
                            <li className='flex items-start'>
                                <span className='text-2xl mr-2'>☀️</span>
                                <span>{plantData.careLevel === 'Easy' ? 'Low to medium light' : 'Bright indirect light'}</span>
                            </li>
                            <li className='flex items-start'>
                                <span className='text-2xl mr-2'>🌡️</span>
                                <span>Keep at 18-24°C (64-75°F)</span>
                            </li>
                            <li className='flex items-start'>
                                <span className='text-2xl mr-2'>🌱</span>
                                <span>Fertilize monthly in growing season</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <div className='bg-white rounded-xl shadow-lg p-6'>
                <h2 className='text-2xl font-bold text-gray-800 mb-6'>Detailed Plant Information</h2>
                <div className='prose max-w-none'>
                    <p className='text-gray-700 leading-relaxed whitespace-pre-line'>
                        {plantData.blogData}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;