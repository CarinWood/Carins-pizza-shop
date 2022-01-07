import React from 'react';
import '../styles/home.css';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="home">
            <div className="container">
                
                <h1>First Class Pizzas</h1>
                <p>We have the ultimate pizza for your taste</p>
                <Link to="/menu">
                <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
