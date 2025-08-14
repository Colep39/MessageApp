import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';


export default function Global(){
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // fetching messages from the server
        // temporary dummy data
        setMessages([
        {
            id: 1,
            username: "john_doe",
            content: "Hello everyone!",
            pfp: "/message-app-pfp.jpg",
            createdAt: "2025-08-13T12:00:00Z"
        },
        {
            id: 2,
            username: "jane_smith",
            content: "Hey John!",
            pfp: "/message-app-pfp.jpg",
            createdAt: "2025-08-13T12:01:00Z"
        }
        ]);
    }, []);

    const handleSendMessage = () => {
        if (!newMessage.trim()) return;
        // Later we'll POST to backend here
        setMessages(prev => [
        ...prev,
        {
            id: Date.now(),
            username: "current_user",
            content: newMessage,
            pfp: "/default-profile.jpg",
            createdAt: new Date().toISOString()
        }
        ]);
        setNewMessage("");
    }


    return (
        <>
        <NavBar />
        <div className="flex flex-col h-screen ml-48 bg-gray-100">
        
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map(msg => (
                <div key={msg.id} className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow-sm">
                <img
                    src={msg.pfp}
                    alt={msg.username}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                    <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-900">{msg.username}</span>
                    <span className="text-xs text-gray-500">
                        {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    </div>
                    <p className="text-gray-800">{msg.content}</p>
                </div>
                </div>
            ))}
            </div>

            {/* Input */}
            <div className="border-t bg-white p-4 flex items-center space-x-3 shadow-inner">
            <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 border text-gray-900 border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition hover:cursor-pointer"
            >
                Send
            </button>
            </div>
        </div>
        </>
    );
}