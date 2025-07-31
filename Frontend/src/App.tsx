// src/App.tsx
import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cart from "./components/Cart";
// import './index.css';

import '@fontsource/roboto'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className= "App">
      <>
   {/* <Login/>
  <SignUp/> */}
   {/* <Router> */}
   {/* <Home/> */}
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/LogIn" element={<Login />} />
     <Route path="/SignUp" element={<SignUp />} /> 
     <Route path="/buy-meals" element={< Cart />} /> 

   </Routes>
   {/* </Router> */}
   </>
   </div>
  );
};

export default App;