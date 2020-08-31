import React from 'react';
import './Inputs.css';

export default function Inputs({ type, placeholder, name, id, isRequired }) {
    return (
        <div>
            <input
                className={'input-style'}
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                required={isRequired}
            />
        </div>
    );
}
