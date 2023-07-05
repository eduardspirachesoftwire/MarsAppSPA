import React from 'react';
import '../../styles/Header.css'
import {HeaderTipButton} from "./HeaderTipButton";

export function Header() {
    return (
        <div className="Header">
            <h1>RoverPics</h1>
            <HeaderTipButton/>
        </div>
    );
}