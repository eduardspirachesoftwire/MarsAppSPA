import React, {useContext} from 'react';
import {TipsContext} from '../App';

export function TipCount() {
    const count = useContext(TipsContext);
    return (
        <> {count[0]} </>
    );
}