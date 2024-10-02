import React, { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { useVerifyToken } from '../utils/VerifyRole';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const url = import.meta.env.VITE_BACKEND_URL;

const Settings = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [profilePictureBase64, setProfilePictureBase64] = useState(null);
    const { id, username } = useVerifyToken();
    const navigate = useNavigate();

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (file && allowedTypes.includes(file.type)) {
            setProfilePicture(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePictureBase64(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a valid image file (JPG or PNG)');
            window.location.reload();
            setProfilePicture(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!profilePictureBase64) {
            alert('Please upload a profile picture before submitting');
            return;
        }
        try {
            const { data } = await axios.put(
                `${url}/update-user-profile`,
                {
                    name: name,
                    email: email,
                    profilePicture: profilePictureBase64,
                }
            );
            if (data) {
                Swal.fire({
                    title: "Profile updated successfully",
                    text: data.message,
                    icon: "success",
                });
                navigate("/")
            }
        } catch (error) {
            Swal.fire({
                title: "Profile not updated",
                text: data.message,
                icon: "error",
            });
            navigate("/")
        }
    };

    const handleDelete = () => {
        setProfilePicture(null);
        setProfilePictureBase64(null);
        window.location.reload();
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Settings</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="profilePicture">
                        Profile Picture
                    </label>
                    <input
                        type="file"
                        id="profilePicture"
                        onChange={handleProfilePictureChange}
                        className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
                    />
                    <div className="flex justify-center items-center">
                        {profilePicture && (
                            <img
                                src={profilePicture ? URL.createObjectURL(profilePicture) : ''}
                                alt="Profile Preview"
                                className="mt-4 w-24 h-24 rounded-full object-cover"
                            />
                        )}
                    </div>
                    <div className="flex justify-end items-end text-red-500 text-2xl hover:text-red-600" onClick={handleDelete}>
                        <MdDelete />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-2 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="Provide your name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="Provide your email"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition duration-300"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};
export default Settings;
