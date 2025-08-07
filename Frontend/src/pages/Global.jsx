import React from 'react';
import NavBar from '../components/NavBar.jsx';


export default function Global(){
    return (
        <>
        <NavBar />
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-gray-700">Welcome to the Global Page</h1>
            <p className="text-lg text-gray-700">This is a placeholder for global content.</p>
        </div>
        </>
    );
}