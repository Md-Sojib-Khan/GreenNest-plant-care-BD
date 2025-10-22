import React from 'react';
import { toast } from 'react-toastify';

const BookConsultation = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Successfully Booked Consultation')
        e.target.reset()
    }
    return (
        <div className="hero bg-gradient-to-br from-green-50 to-emerald-100 py-10">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-green-600">Book Consultation!</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" required />
                        <button type='submit' className="btn mt-4 text-white font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-700 hover:from-emerald-600 hover:to-green-500 shadow-md hover:shadow-lg transition-all duration-300btn border-0 text-white font-semibold px-6 py-2 rounded-full bg-gradient-to-br from-emerald-400 to-green-800 hover:brightness-110 hover:shadow-lg transition-all duration-300">Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookConsultation;