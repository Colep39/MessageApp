import React from 'react';
import './App.css'
import NavBar from './components/NavBar.jsx';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Global from './pages/Global.jsx';
import Chats from './pages/Chats.jsx';
import Groups from './pages/Groups.jsx';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';


function App() {
  

  return (
    <>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute><Global /></ProtectedRoute>} />
          <Route path="/chats" element={<ProtectedRoute><Chats /></ProtectedRoute>} />
          <Route path="/groups" element={<ProtectedRoute><Groups /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
    </>
  )
}

export default App
