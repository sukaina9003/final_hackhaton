import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import { TaskProvider } from './context/TaskContext';

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const location = useLocation(); // ✅ Safe ab

  return (
    <div className="container">
      <TaskProvider>
       
        {location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/register' && <Navbar />}
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <Footer />
      </TaskProvider>
    </div>
  );
}

export default App;
