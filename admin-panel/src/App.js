import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './Auth/ForgetPassword';
import Login from './Auth/Login/login';
import SignupPage from './Auth/Signup/signup';
import Usercount from './Dashboard/usercount';
import SideNav from './Dashboard/sidebar';
import CustomNavbar from './Dashboard/navbar'; 
import User from './User/user';
import Listuser from './ListUser/Listuser';
import EditUser from './ListUser/EditUser';

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Dashboard Layout with SideNav and Navbar */}
        <Route path="/*" element={
          <div className="d-flex flex-column vh-100">
            <div className="d-flex flex-grow-1">
              <SideNav /> {/* Sidebar occupying 20% */}
              <div className="flex-grow-1 d-flex flex-column">
                <CustomNavbar /> {/* Navbar occupying 80% */}
                <div className="flex-grow-1 p-3">
                  <Routes>
                    <Route path="/dashboard" element={<Usercount />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/listuser" element={<Listuser/>} />
                    
                    <Route path="/edituser/:id" element={<EditUser />} />

                    
                   
                    
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
