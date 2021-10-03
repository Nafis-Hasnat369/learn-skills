import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div className="header">
            <div className="logo">
                <img src="https://i.pinimg.com/originals/c2/a9/c9/c2a9c9621175a6f04804d0d192a787b0.png" alt="" />
            </div>
            <div>
                <nav className="nav-bar">
                    <NavLink
                        to="/home"
                        activeStyle={activeStyle}
                    >Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeStyle={activeStyle}
                    >About Us
                    </NavLink>
                    <NavLink
                        to="/services"
                        activeStyle={activeStyle}
                    >Services
                    </NavLink>
                    <NavLink
                        to="/goal"
                        activeStyle={activeStyle}
                    >Our Goals
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;