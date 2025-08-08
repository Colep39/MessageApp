import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/login');
    }

    return (
         <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Register</h1>
                <form className="space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                    Username:
                    </label>
                    <input
                    type="text"
                    id="username"
                    name="username"
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
                    required
                    className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 hover:cursor-pointer"
                    onClick={handleRegister}
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
