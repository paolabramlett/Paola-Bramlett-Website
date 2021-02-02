import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const navStyle ={
        color: 'white'
    }
    return (
        <div>
            <nav>
                <Link  style={navStyle} to="/">
                <h3>
                    Paola Bramlett
                </h3>
                </Link>
                <ul className="nav-links">
                    <Link style={navStyle} to="/AboutMe">
                        <li>
                            About Me
                        </li>
                    </Link>
                    <Link style={navStyle} to="/Skills">
                        <li>
                            Skills
                        </li>
                    </Link>
                    <Link style={navStyle} to="/Contact">
                        <li>
                            Contact Me
                        </li>
                    </Link>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Navbar
