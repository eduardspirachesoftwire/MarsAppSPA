import React from 'react';
import doge from '../resources/doge.png'
import "../styles/Description.css"

export function Description() {
    return (
        <div className="description">
            <h1> Welcome to RoverPics! </h1>
            <img src={doge} alt="doge" className="image"/>
            <p>This website has one purpose: Mars pics</p>
        </div>
    );
}