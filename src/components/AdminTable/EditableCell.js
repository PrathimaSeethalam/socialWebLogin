/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */

import React, { Component } from 'react';

export default class EditableCell extends React.Component {
    render() {
        return (
            <td>
                <input
                    type='text'
                    name={this.props.cellData.type}
                    id={this.props.cellData.id}
                    value={this.props.cellData.value}
                    onChange={this.props.onProductTableUpdate}
                />
            </td>
        );
    }
}
