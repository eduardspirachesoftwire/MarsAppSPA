import React from 'react';
import doge from '../resources/doge.png'
import {TipButton} from "./TipButton";

export function Description() {
    return (
        <div>
            <h1> Welcome to RoverPics! </h1>
            <img src={doge} alt="doge" />
            <p>This website has one purpose: Mars pics (Elon approves)</p>
            <p>Click a rover type to start!</p>
            <p>Press the button to tip: <TipButton/></p>
        </div>
    );
}