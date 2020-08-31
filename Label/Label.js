import React from 'react';
import Inputs from '../Inputs/Inputs';

export default function Label({
    labelName,
    type,
    placeholder,
    id,
    name,
    isRequired,
    children
}) {
    return (
        <div>
            <label style={{ color: 'black' }}>
                <b>{labelName}</b>
            </label>
            {children}
        </div>
    );
}
