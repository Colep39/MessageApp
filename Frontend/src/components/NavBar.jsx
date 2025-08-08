import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        // clear the use session token
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <nav className="fixed top-0 left-0 h-screen w-48 bg-black shadow-lg flex flex-col justify-between">
            <div className="p-4 space-y-2">
                <a href="/" className="block text-white text-lg px-3 py-2 rounded hover:bg-gray-700 hover:text-blue-400 transition-colors">Global</a>
                <a href="/chats" className="block text-white text-lg px-3 py-2 rounded hover:bg-gray-700 hover:text-blue-400 transition-colors">Chats</a>
                <a href="/groups" className="block text-white text-lg px-3 py-2 rounded hover:bg-gray-700 hover:text-blue-400 transition-colors">Groups</a>
            </div>
            <div className="p-4 space-y-2">
                <a href="/profile" className="block text-white text-lg px-3 py-2 rounded hover:bg-gray-700 hover:text-blue-400 transition-colors">Profile</a>
                <a href="/login" 
                onClick={handleLogout}
                className="block text-white text-lg px-3 py-2 rounded hover:bg-gray-700 hover:text-blue-400 transition-colors">
                Logout
                </a>
            </div>
        </nav>
    );
}
