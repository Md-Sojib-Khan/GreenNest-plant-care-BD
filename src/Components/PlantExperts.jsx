import React from 'react';
import { Star, Award, Users, BookOpen } from 'lucide-react';

const PlantExperts = () => {
    const experts = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Botanist & Plant Care Specialist",
            experience: "12+ years",
            specialty: "Tropical Plants & Bonsai",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHqLqIttLl23gIjyFfrsTWWABYn1g0MZzxg&s",
            rating: 4.9,
            students: 2500,
            courses: 15
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Horticulture Expert",
            experience: "8+ years",
            specialty: "Succulents & Indoor Gardening",
            image: "https://t3.ftcdn.net/jpg/07/06/77/88/360_F_706778876_d5tplHuLg9HysW1RwwhH3HyzsILvqysB.jpg",
            rating: 4.8,
            students: 1800,
            courses: 12
        },
        {
            id: 3,
            name: "Elena Rodriguez",
            role: "Landscape Designer",
            experience: "10+ years",
            specialty: "Air Purifying Plants & Design",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcAHw8yXGhYSjtMcRRizKk63zHTZEfiMIrA&s",
            rating: 4.9,
            students: 3200,
            courses: 18
        }
    ];

    return (
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 py-16 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Meet Our <span className='text-green-600'>Plant</span> Experts
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Learn from certified botanists and horticulture specialists with years of 
                        experience in plant care and indoor gardening.
                    </p>
                </div>

                <div data-aos="slide-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experts.map((expert) => (
                        <div 
                            key={expert.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:-translate-y-2"
                        >

                            <div className="relative overflow-hidden">
                                <img 
                                    src={expert.image} 
                                    alt={expert.name}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {expert.experience}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">
                                    {expert.name}
                                </h3>
                                <p className="text-green-600 font-medium mb-2">
                                    {expert.role}
                                </p>
                                <p className="text-gray-600 mb-4">
                                    <span className="font-semibold">Specialty:</span> {expert.specialty}
                                </p>

                                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-medium">{expert.rating}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Users className="w-4 h-4 text-blue-500" />
                                        <span className="text-sm">{expert.students.toLocaleString()}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <BookOpen className="w-4 h-4 text-purple-500" />
                                        <span className="text-sm">{expert.courses} courses</span>
                                    </div>
                                </div>

                                <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
                        <Award className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Need Personalized Plant Advice?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Our experts are here to help you choose the perfect plants for your space 
                            and provide ongoing care guidance. Schedule a free consultation today!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                                Book Consultation
                            </button>
                            <button className="border border-green-500 text-green-500 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                                Join Workshop
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantExperts;