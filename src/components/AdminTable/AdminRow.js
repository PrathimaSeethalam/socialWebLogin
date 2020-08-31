/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import React, { Component } from 'react';
import EditableCell from './EditableCell';

export default class AdminRow extends Component {
    onDelEvent() {
        this.props.onDelEvent(this.props.product);
    }
    render() {
        return (
            <tr className='eachRow'>
                <EditableCell
                    onProductTableUpdate={this.props.onProductTableUpdate}
                    cellData={{
                        type: 'userName',
                        value: this.props.product.userName,
                        id: this.props.product.id
                    }}
                />
                <EditableCell
                    onProductTableUpdate={this.props.onProductTableUpdate}
                    cellData={{
                        type: 'text',
                        value: this.props.product.emailId,
                        id: this.props.product.id
                    }}
                />
                <EditableCell
                    onProductTableUpdate={this.props.onProductTableUpdate}
                    cellData={{
                        type: 'text',
                        value: this.props.product.lastName,
                        id: this.props.product.id
                    }}
                />
                <EditableCell
                    onProductTableUpdate={this.props.onProductTableUpdate}
                    cellData={{
                        type: 'role',
                        value: this.props.product.role,
                        id: this.props.product.id
                    }}
                />
                <td className='del-cell'>
                    <input
                        type='button'
                        onClick={this.onDelEvent.bind(this)}
                        value='X'
                        className='del-btn'
                    />
                </td>
            </tr>
        );
    }
}
