import React, {useState, useEffect} from 'react';

export function HeaderTipButton() {
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        setClickCount(Number(localStorage.getItem(`clickCount`)));
    }, []);

    function incrementCount() {
        localStorage.setItem(`clickCount`, String(clickCount + 1));
        setClickCount(clickCount + 1);
    }

    return (
        <>
            <button onClick={incrementCount} className="donate-button">Tip Dogecoin</button>
        </>);
}