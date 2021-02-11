import React from 'react';
import './ProjectsTitle.css';

export default function AboutTitle() {
    const spanStyle={
        fontSize:'21px',
        fontWeight: '100',
        color: 'white'
    }
    return (
        <h1 className="projects-title">
            <span>Projects Overview</span>
            <span style={spanStyle}><em>Here's what I've been up to</em></span>
        </h1>
    );
}