import React from 'react';
import './HomeTitle.css';

export default function HomeTitle() {
    const spanStyle={
        fontSize:'21px',
        fontWeight: 'lighter',
        color: 'white'
    }
    return (
        <h1 className="home-title">
            <span>Paola Bramlett</span>
            <span style={spanStyle}><em>- Web Developer and Content Creator</em></span>
        </h1>
    );
}