import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../Components/PlantCard';

const PlantsPage = () => {
    const data = useLoaderData()
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("all");

    const filteredPlants = data
        .filter(plant =>
            plant.plantName.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sort === "high") return b.rating - a.rating;
            if (sort === "low") return a.rating - b.rating;
            return 0;
        });
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
            <div className="flex justify-between gap-4 mb-8 flex-wrap w-11/12 mx-auto">
                <input
                    type="text"
                    placeholder="Search plants..."
                    className="p-3 border rounded-lg min-w-[200px]"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="p-3 border rounded-lg"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="all">Sort By Ratings</option>
                    <option value="high">High to Low</option>
                    <option value="low">Low to High</option>
                </select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-11/12 mx-auto'>
                {
                    filteredPlants.map(PlantData => <PlantCard PlantData={PlantData} key={PlantData.plantId}></PlantCard>)
                }
            </div>
        </div>
    );
};

export default PlantsPage;