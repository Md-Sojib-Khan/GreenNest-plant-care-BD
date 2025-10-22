import React from 'react';
import Hero from '../Components/Hero';
import { useLoaderData } from 'react-router';
import IndorPlants from '../Components/IndorPlants';
import PlantCare from '../Components/PlantCare';
import PlantExperts from '../Components/PlantExperts';

const HomePage = () => {
    const data = useLoaderData();
    return (
        <div className='bg-gradient-to-br from-green-50 to-emerald-100'>
            <Hero></Hero>
            <IndorPlants data={data}></IndorPlants>
            <PlantCare></PlantCare>
            <PlantExperts></PlantExperts>
        </div>
    );
};

export default HomePage;