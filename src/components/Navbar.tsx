import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo center">To do list</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About us</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}