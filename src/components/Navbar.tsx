import React from 'react'

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo center">To do list</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About us</a></li>
                </ul>
            </div>
        </nav>
    )
}