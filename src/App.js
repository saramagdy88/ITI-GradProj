import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './COMPONENTS/Home/Home';
import Shelters from './COMPONENTS/Shelters/Shelters';
import Login from './COMPONENTS/Login/Login';
import Blogging from './COMPONENTS/Blogging/Blogging';
import Navbar from './COMPONENTS/NavBar/NavBar';
import Services from './COMPONENTS/Services/Services';
import User from './COMPONENTS/User/User';
import Clinc from './COMPONENTS/Clinc/Clinc';
import ClientForm from './COMPONENTS/ClientForm/ClientForm';
import UserForm from './COMPONENTS/UserForm/UserForm';

const App = () => {
  return (
    <div className="background-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogging" element={<Blogging />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/clinc" element={<Clinc />} />
        <Route path="/services/shelters" element={<Shelters />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/clientform" element={<ClientForm />} />
      </Routes>
    </div>
  );
};

export default App;
