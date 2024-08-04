import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import CodingWork from './components/CodingWork';
import Photographs from './components/Photographs';
import AdminPanel from './components/AdminPanel';
import SignIn from './components/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file here


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coding-work" element={<CodingWork />} />
          <Route path="/photographs" element={<Photographs />} />
          <Route path="/sign-in" element={<SignIn onSignIn={handleSignIn} />} />
          <Route
            path="/admin"
            element={isAuthenticated ? <AdminPanel /> : <Navigate to="/sign-in" />}
          />
        </Routes>
        <Footer className="footer" /> {/* Add the "footer" class here */}
      </div>
    </Router>
  );
}

export default App;
