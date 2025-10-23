import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import userImg from '../assets/user.png'
import { toast } from "react-toastify";

const ProfilePage = () => {
    const { user, updateUser, setLoading } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [displayName, setDisplayName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateUser({ displayName, photoURL });
            toast.success("Profile updated successfully!");
            setShowModal(false);
            window.location.reload();
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-green-200 flex flex-col items-center justify-center p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
                <img
                    src={user?.photoURL || userImg} alt="Profile"
                    className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-green-400"
                />
                <h2 className="text-2xl font-bold text-gray-800">
                    {user?.displayName || "User Name Not Set"}
                </h2>
                <p className="text-gray-600 mt-2">{user?.email}</p>

                <button
                    onClick={() => setShowModal(true)}
                    className="mt-6 bg-gradient-to-r from-green-400 to-emerald-600 text-white py-2 px-5 rounded-lg hover:scale-105 transition-transform shadow-md"
                >
                    Update Profile
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-xl w-80 shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                            Update Profile
                        </h3>

                        <form onSubmit={handleUpdate} className="space-y-3">
                            <div>
                                <label className="block text-left text-sm text-gray-600">Display Name</label>
                                <input
                                    type="text"
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                    placeholder="Enter name"
                                />
                            </div>

                            <div>
                                <label className="block text-left text-sm text-gray-600">Photo URL</label>
                                <input
                                    type="text"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                                    placeholder="Enter photo URL"
                                />
                            </div>

                            <div className="flex justify-between mt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
