import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
        <div className="navbar-expand-lg sticky-top navbar-light bg-light">
        <nav className="navbar topnav">
            <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
                <li className="nav-item active">
                <Link to="/" id="active">Home</Link>
                </li>
                <li>
                <Link to="/activities">View Local Activities</Link>
                </li>
                <li>
                <Link to="/authors">Meet the Authors</Link>
                </li>
                <li>
                <Link to="/suggestions">Suggestion Box</Link>
                </li>
            </ul>
          </nav>
          </div>
        </>
    )
}

export default Navbar;