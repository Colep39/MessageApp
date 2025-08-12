import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '', 
        firstname: '',
        lastname: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:4000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                navigate('/login');
            } else {
                const data = await res.json();
                alert(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        }
    }

    return (
         <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Register</h1>
                <form className="space-y-4" onSubmit={handleRegister}>
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                    Username:
                    </label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password:
                    </label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-300">
                    First Name:
                    </label>
                    <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-300">
                    Last Name:
                    </label>
                    <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 hover:cursor-pointer"
                >
                    Sign Up
                </button>
                </form>
                <p className="mt-4 text-sm text-gray-400 text-center">
                    Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login Here</a>
                </p>
            </div>
        </div>
    );
}
