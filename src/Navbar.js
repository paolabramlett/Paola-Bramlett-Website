import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const navStyle ={
        color: 'white'
    }
    return (
        <div>
            <nav>
                <h3>
                    PB
                </h3>
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
