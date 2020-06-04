import React from 'react';
import './Greeting.css';

const Greeting = () => {
    return (
        <div className="card-container">
            <div className="front side">
                <div className="content">
                <h3>Happy 1st Birthday Dear Aavya</h3>
                <p>Wish you a very very Happy Birthday.</p>
                </div>
            </div>
            <div className="back side">
                <div className="content">
                <h3>Enjoy your day!</h3>
                </div>
            </div>
        </div>
    )
};

export default Greeting;