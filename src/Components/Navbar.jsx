import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/plants'}>Plants</NavLink></li>
    <li><NavLink>My Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-white hover:text-black">GreenNest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white font-bold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn border-0 text-white font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-700 hover:from-emerald-600 hover:to-green-500 shadow-md hover:shadow-lg transition-all duration-300btn border-0 text-white font-semibold px-6 py-2 rounded-full bg-gradient-to-br from-emerald-400 to-green-800 hover:brightness-110 hover:shadow-lg transition-all duration-300">Login</a>
            </div>
        </div>
    );
};

export default Navbar;