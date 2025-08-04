import React from 'react';
import './App.css'
import NavBar from './components/NavBar.jsx';
import { Routes, Route } from 'react-router-dom';
import Global from './pages/Global.jsx';
import Chats from './pages/Chats.jsx';
import Groups from './pages/Groups.jsx';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';


function App() {
  

  return (
    <>
      <NavBar />
      <div className="ml-48 p-6 flex-1 bg-gray-900 min-h-screen">
        <Routes>
          <Route path="/" element={<Global />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
