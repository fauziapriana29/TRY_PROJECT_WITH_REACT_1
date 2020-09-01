import React, { Component } from 'react';
import './Navbar.css'
import img from './icon.png'

class Navbar extends Component  {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <img src={img} alt="logo" className="nav-logo"/>
                    <a className="brand-navbar" href="#">Travelink.com</a>
                    <input type="text" className="search-input form" placeholder="Search.."/>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Favorite</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar