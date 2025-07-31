import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Assets/Logo.png";
import CartImage from "../Assets/CartImage.svg";
import { BsCartPlus } from "react-icons/bs";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const RouteBar = [
    "/login",
    "/signup",
    "/work-with-us",
    "/buy-meals",
    "/view",
    "/work-with-us",
    "/cart",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (RouteBar.includes(location.pathname) || window.scrollY > 30) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(RouteBar.includes(location.pathname));
  }, [location.pathname]);

  return (
    <header className={`navbar ${isOpen ? "top" : "bottom"}`}>
      <div className="navbar-logo">
        <img
          src={Logo}
          alt="The London Lunchbox Company Logo"
          className="logo-img"
        />
      </div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/work-with-us">Work With Us</Link>
        <Link to ="/buy-meals">Buy Meals</Link>
        {/* <Link to ="/cart"><BsCartPlus/></Link> */}
        {/* <img src={CartImage} alt="Cart" className="cart-icon" /> */}
        <Link to="/cart" className="cart-link">
         {/* <div className="cart-icon-wrapper">
    <BsCartPlus className="cart-icon" size={24} />
    <span className="cart-badge">1</span>
  </div> */}
</Link>
      </nav>
    </header>
  );
};

export default Navbar;