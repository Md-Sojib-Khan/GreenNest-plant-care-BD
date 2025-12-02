import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { NavLink, Outlet, useLoaderData } from 'react-router';

const BlogLayouts = () => {
    const data = useLoaderData();
    return (
        <div className='bg-gradient-to-br from-green-50 to-emerald-100'>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto md:grid grid-cols-12 gap-5'>
                <div className='col-span-3'>
                    <h1 className='text-2xl font-bold my-3 text-center md:text-left'>Categorys</h1>
                    <div className='grid grid-cols-2 md:grid-cols-1 gap-3'>
                        {
                            data.map(plant => <NavLink to={`/blog/${plant.plantId}`} className='btn w-fit' key={plant.plantId}>{plant.category}</NavLink>)
                        } 
                    </div>
                </div>
                <div className='col-span-9 my-5'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BlogLayouts;