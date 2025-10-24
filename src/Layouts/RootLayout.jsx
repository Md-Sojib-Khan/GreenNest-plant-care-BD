import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const RootLayout = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            // easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;