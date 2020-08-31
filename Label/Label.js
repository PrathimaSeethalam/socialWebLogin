/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
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
