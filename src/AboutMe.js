import React from "react";
import Card from 'react-bootstrap/Card';

export default function AboutMe() {
    return (
        <div className="AboutMe">
            <h2>
                About Me
            </h2>
            <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
            <p>
                This is a little text about my background.
            </p>
            
        </div>
    )
}