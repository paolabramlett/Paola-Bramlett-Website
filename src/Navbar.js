import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const navStyle ={
        color: 'white'
    }

    const h3Style = {
        color: 'white'
    }
    return (
        <div>
            <nav>
                <Link  style={navStyle} to="/">
                <h3 style={h3Style}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                    </svg>
                    {""} Paola Bramlett
                </h3>
                </Link>
                <ul className="nav-links">
                    <Link style={navStyle} to="/AboutMe">
                        <li>
                            About
                        </li>
                    </Link>
                    <Link style={navStyle} to="/Skills">
                        <li>
                            Skills
                        </li>
                    </Link>
                    <Link style={navStyle} to="/Contact">
                        <li>
                            Contact
                        </li>
                    </Link>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Navbar
