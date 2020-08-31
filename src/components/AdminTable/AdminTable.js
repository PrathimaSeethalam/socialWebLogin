import React, { Component } from 'react';
import AdminRow from './AdminRow';

export default class AdminTable extends Component {
    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        var product = this.props.products.map(function(product) {
            if (product.userName.indexOf(filterText) === -1) {
                return;
            }
            return (
                <AdminRow
                    onProductTableUpdate={onProductTableUpdate}
                    product={product}
                    onDelEvent={rowDel.bind(this)}
                    key={product.id}
                />
            );
        });
        return (
            <div>
                <button
                    type='button'
                    onClick={this.props.onRowAdd}
                    className='btn btn-success pull-right'
                >
                    Add
                </button>

                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th style={{ color: 'white' }}> User Name</th>
                            <th style={{ color: 'white' }}>Email Id</th>
                            <th style={{ color: 'white' }}>last name</th>
                            <th style={{ color: 'white' }}>Role</th>
                            <th style={{ color: 'white' }}>Delete</th>
                        </tr>
                    </thead>

                    <tbody>{product}</tbody>
                </table>
            </div>
        );
    }
}
