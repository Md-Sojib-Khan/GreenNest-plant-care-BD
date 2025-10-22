import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-gradient-to-tl from-green-900 to-green-700 text-white'>
            <footer className=" py-10 w-11/12 mx-auto md:flex justify-between">
                <aside className='md:w-1/3 mb-5'>
                    <div className='flex items-center gap-1'>
                        <h1 className='font-bold text-2xl text-white'>GreenNest</h1>
                    </div>
                    <p>
                        GreenNest brings nature's serenity into your living space. We're passionate about helping you create greener, healthier homes through our carefully curated collection of indoor plants. From air-purifying varieties to low-maintenance succulents, we provide everything you need to transform your space into a natural oasis.
                    </p>
                </aside>
                <div className='flex justify-around mb-5 lg:space-x-28 md:space-x-14'>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                </div>
                <div className='flex justify-around lg:space-x-28 md:space-x-14'>
                    <nav className='flex flex-col gap-2'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <div className='flex flex-col gap-2'>
                        <h6 className="footer-title">Connect</h6>
                        <a className="link link-hover flex items-center gap-1"><FaGithub />GitHub</a>
                        <a className="link link-hover flex items-center gap-1"><FaTwitter />Twitter</a>
                        <a className="link link-hover flex items-center gap-1"><FaLinkedin />LinkedIn</a>
                        <a className="link link-hover flex items-center gap-1"><FaYoutube />YouTube</a>
                    </div>
                </div>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center p-4 border-t border-gray-500">
                <aside>
                    <p>Copyright © 2025 GreenNest. All rights reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;