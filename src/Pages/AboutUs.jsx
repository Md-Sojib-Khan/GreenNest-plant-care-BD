import React from "react";
import { motion } from "framer-motion";
import { Heart, Leaf, Sparkles, Users } from "lucide-react";

export default function AboutUs() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center py-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-green-700 mb-6 text-center"
                >
                    About GreenNest
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl text-gray-700 text-lg leading-7 text-center mb-12"
                >
                    GreenNest Plant Care BD is your trusted companion for growing, caring, and
                    maintaining healthy plants. Our mission is to make plant care easy and
                    enjoyable for everyone — from beginners to plant experts. With modern
                    tools, care guides, and a friendly community, GreenNest brings nature
                    closer to your daily life.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-lg p-6 text-center"
                    >
                        <h2 className="text-2xl font-semibold text-green-600 mb-3">Our Vision</h2>
                        <p className="text-gray-600">
                            To build a greener Bangladesh by inspiring people to care for plants and
                            create sustainable indoor and outdoor environments.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-white rounded-2xl shadow-lg p-6 text-center"
                    >
                        <h2 className="text-2xl font-semibold text-green-600 mb-3">Our Mission</h2>
                        <p className="text-gray-600">
                            We provide plant care tips, disease solutions, watering reminders,
                            product recommendations, and expert advice — all in one platform.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl shadow-lg p-6 text-center"
                    >
                        <h2 className="text-2xl font-semibold text-green-600 mb-3">Why Choose Us?</h2>
                        <p className="text-gray-600">
                            Easy-to-use interface, trusted plant guides, real-time support, and a
                            growing plant-lover community make GreenNest your perfect plant care
                            partner.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="max-w-4xl bg-green-100 mt-16 p-8 rounded-2xl shadow-md"
                >
                    <h2 className="text-3xl font-semibold text-green-700 mb-4 text-center">
                        Our Commitment
                    </h2>
                    <p className="text-gray-700 text-lg leading-7 text-center">
                        At GreenNest, we believe every plant has a story, and every plant lover
                        deserves guidance. We are committed to delivering the best plant care
                        experience with accurate tips, modern features, and continuous updates.
                    </p>
                </motion.div>
            </div>
            {/* New Sections */}

            <div className=" w-11/12 mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white rounded-2xl shadow-lg p-8"
                >
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">What We Offer</h2>
                    <ul className="text-gray-700 space-y-3 text-lg">
                        <li>🌱 Personalized plant care instructions</li>
                        <li>🪴 Plant disease detection & treatment tips</li>
                        <li>💧 Watering and fertilizer reminders</li>
                        <li>📸 Plant identification using image upload</li>
                        <li>🛒 Recommended plant-care product list</li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-lg p-8"
                >
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">Who We Help</h2>
                    <p className="text-gray-700 text-lg leading-7">
                        GreenNest supports plant lovers of all levels — whether you are just
                        starting your plant journey or already have a mini jungle at home.
                        Our platform helps:
                    </p>
                    <ul className="text-gray-700 space-y-2 mt-4 text-lg">
                        <li>• Beginners learning step-by-step plant care</li>
                        <li>• Busy people who forget watering schedules</li>
                        <li>• Gardeners dealing with plant diseases</li>
                        <li>• Indoor plant enthusiasts decorating their rooms</li>
                    </ul>
                </motion.div>
            </div>
            {/* Core Values - Simple Grid */}
            <div className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <Leaf className="w-5 h-5 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Sustainability</h3>
                            </div>
                            <p className="text-gray-600">Eco-friendly plant care methods that respect our planet.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <Users className="w-5 h-5 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Community</h3>
                            </div>
                            <p className="text-gray-600">Supportive network where plant lovers grow together.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Wellness</h3>
                            </div>
                            <p className="text-gray-600">Promoting mental peace through plant care therapy.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Education</h3>
                            </div>
                            <p className="text-gray-600">Empowering with simple, practical plant care knowledge.</p>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-11/12 mx-auto bg-green-200 my-20 p-10 rounded-2xl shadow-lg"
            >
                <h2 className="text-3xl font-semibold text-green-800 mb-3 text-center">
                    Our Story
                </h2>
                <p className="text-gray-800 text-lg leading-8 text-center">
                    GreenNest started with a simple dream — to make plant care easy and
                    enjoyable for everyone in Bangladesh. Many people love plants but don't
                    know how to care for them properly. We created GreenNest to solve this
                    problem with technology, guidance, and community support. Today, we are
                    proud to help thousands of plant lovers grow healthier and happier
                    plants.
                </p>
            </motion.div>
            {/* </div> */}
        </>
    );
}
