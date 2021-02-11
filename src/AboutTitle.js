import React from 'react';
import './AboutTitle.css';

export default function AboutTitle() {
    const spanStyle={
        fontSize:'21px',
        fontWeight: '100',
        color: 'white'
    }
    return (
        <h1 className="about-title">
            <span>About Me</span>
            <span style={spanStyle}><em>Here's a bit of my story</em></span>
        </h1>
    );
}