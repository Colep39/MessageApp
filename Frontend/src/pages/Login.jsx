import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Login(){
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: '', password: ''});

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:4000/api/users/login', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });
        const data = await res.json();
        console.log(data);
        navigate('/'); // redirect to the home page after successful login
    }

    return (
        <>
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-white">Login</h1>
            <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
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
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                    className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 hover:cursor-pointer"
                >
                Login
                </button>
            </form>
                <p className="mt-4 text-sm text-gray-400 text-center">
                    Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register Here</a>
                </p>
            </div>
        </div>
        </>
    );
}