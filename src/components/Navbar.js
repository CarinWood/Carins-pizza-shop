import React, { useState } from 'react'
import Logo from "../assets/pizzaLogo.png";
import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);

    const toggleNavbar = () => {
            setShowLinks(!showLinks);
    }

    return (
        <div className="navbar">
            <div className="left-side" >
                <p className="logo-text">Carin's Pizza Shop</p>
                <img src={Logo} />
            </div>
            <div className="hidden-links" id={showLinks ? 'open' : 'close'}>
                <Link to="/" className="hidden-link">Home</Link>
                <Link to="/menu" className="hidden-link">Menu</Link>
                <Link to="/about" className="hidden-link">About</Link>
                <Link to="/contact" className="hidden-link">Contact</Link>
            </div>

            <div className="right-side">
                <Link to="/" className="link">Home</Link>
                <Link to="/menu" className="link">Menu</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>
            <FaBars onClick={toggleNavbar} className="menu-bar"/>
        </div>
    )
}

export default Navbar
