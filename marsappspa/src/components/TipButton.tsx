import React, {useState, useEffect, createContext, useContext} from 'react';
import {TipsContext} from '../App';

export function TipButton() {
    const [clickCount, setClickCount] = useState(0);

    const context = useContext(TipsContext);

    useEffect(() => {
        setClickCount(Number(localStorage.getItem(`clickCount`)));
    }, []);

    function incrementCount() {
        localStorage.setItem(`clickCount`, String(clickCount + 1));
        context[1](clickCount + 1);
        setClickCount(clickCount + 1);
    }

    return (
        <>
            <button onClick={incrementCount}>Tip Dogecoin</button>
        </>);
}