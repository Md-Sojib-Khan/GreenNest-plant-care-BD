import React from 'react';
import plantCare1 from '../assets/plantCare1.jpg'
import plantCare2 from '../assets/plantCare2.jpg'
import plantCare3 from '../assets/plantCare3.jpg'
import plantCare4 from '../assets/plantCare4.webp'

const PlantCare = () => {
    return (
        <div className='my-10 w-11/12 mx-auto'>
            <h1 className='font-bold text-4xl text-center bg-gradient-to-l from-green-400 to-green-950 bg-clip-text text-transparent mb-5'>Plant Care Tips</h1>
            <div className='flex flex-col md:flex-row items-center gap-5'>
                <div className='flex flex-col items-center md:flex-row gap-5'>
                    <img className='rounded-2xl h-[250px] md:w-[300px] w-full object-cover' src={plantCare1} alt="" />
                    <img className='rounded-2xl h-[250px] md:w-[300px] w-full object-cover' src={plantCare2} alt="" />
                </div>
                <div className='flex-1'>
                    <h1 className='text-2xl font-bold'>Light & Placement</h1>
                    <p className='mb-5'>Most indoor plants thrive in bright, indirect light. Avoid placing them in harsh direct sunlight, which can scorch leaves. Rotate your pots every few weeks so all sides get equal light exposure.</p>
                    <h1 className='text-2xl font-bold'>Watering Wisely</h1>
                    <p>Overwatering is one of the most common mistakes. Always check the top inch of soil — if it feels dry, it’s time to water. Use room-temperature water and let excess drain out to prevent root rot.</p>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row items-center gap-5 mt-5'>
                <div className='flex-1'>
                    <h1 className='text-2xl font-bold'>Soil & Repotting</h1>
                    <p className='mb-5'>Use a well-draining soil mix suitable for your plant type. Repot every 12–18 months to refresh nutrients and allow room for growth. Choose a pot with drainage holes for healthy roots.</p>
                    <h1 className='text-2xl font-bold'>Cleaning & Maintenance</h1>
                    <p>Dust can block sunlight and slow photosynthesis. Gently wipe leaves with a damp cloth once a week. Trim yellow or dead leaves to encourage new, healthy growth..</p>
                </div>
                <div className='flex flex-col items-center md:flex-row gap-5'>
                    <img className='rounded-2xl h-[250px] md:w-[300px] w-full object-cover' src={plantCare3} alt="" />
                    <img className='rounded-2xl h-[250px] md:w-[300px] w-full object-cover' src={plantCare4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PlantCare;