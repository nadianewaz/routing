import React from 'react';
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (   
        <>
          <div className="logo-menu">
            <div className="logo">
                <a href="#">
                    <img src="./img/logo.png" alt="" />
                </a>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/details">details</Link></li>
                        
                    </ul>
                </nav>
            </div>
        </div>





            
        </>
    );
};

export default Nav;