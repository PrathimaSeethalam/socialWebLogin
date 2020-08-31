import React, { Component } from 'react';
import AdminTable from '../../components/AdminTable/AdminTable';
import SearchBar from '../../components/AdminTable/SearchBar';
import Button from '../../components/Button/Button';

export default class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);

        //  this.state.products = [];
        this.state = {};
        this.state.filterText = '';
        this.state.products = [
            {
                id: 1,
                role: 'capsules user',
                emailId: 'hii@yahoo.com',
                lastName: 'fghjk',
                userName: 'user1'
            },
            {
                id: 2,
                role: 'history user',
                emailId: 'rtyu@gmail.com',
                lastName: 'fghjk',
                userName: 'user2'
            },
            {
                id: 3,
                role: 'roadster user',
                emailId: 'fghj@gmail.com',
                lastName: 'fghjk',
                userName: 'user3'
            },
            {
                id: 4,
                role: 'rockets user',
                emailId: 'fghj@gmail.com',
                lastName: 'fghjk',
                userName: 'user4'
            },
            {
                id: 5,
                role: 'capsules user',
                emailId: 'fghj@gmail.com',
                lastName: 'fghjk',
                userName: 'user5'
            },
            {
                id: 6,
                role: 'capsules user',
                emailId: 'fghj@gmail.com',
                lastName: 'fghjk',
                userName: 'user6'
            }
        ];
    }
    handleUserInput(filterText) {
        this.setState({ filterText: filterText });
    }
    handleRowDel(product) {
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
    }

    handleAddEvent(evt) {
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(
            36
        );
        var product = {
            id: id,
            userName: '',
            emailId: '',
            role: '',
            lastName: 0
            // delete: ''
        };
        this.state.products.push(product);
        this.setState(this.state.products);
    }

    handleProductTable(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var products = this.state.products.slice();
        var newProducts = products.map(function(product) {
            for (var key in product) {
                if (key == item.name && product.id == item.id) {
                    product[key] = item.value;
                }
            }
            return product;
        });
        this.setState({ products: newProducts });
        //  console.log(this.state.products);
    }
    _logout = () => {
        console.log('logout');
        this.props.history.replace('/');
    };
    render() {
        return (
            <div>
                <h1 style={{ color: 'white' }}>
                    Add or edit/delete a user as an admin
                </h1>
                <Button
                    type='button'
                    className='btn btn-outline-primary'
                    buttonName={'Logout'}
                    style={{
                        backgroundColor: 'rgb(51, 122, 183)',
                        // marginRight: '680px',
                        marginTop: '-56px',
                        marginLeft: '1339px'
                    }}
                    onClick={this._logout}
                ></Button>
                <SearchBar
                    filterText={this.state.filterText}
                    onUserInput={this.handleUserInput.bind(this)}
                />
                <AdminTable
                    onProductTableUpdate={this.handleProductTable.bind(this)}
                    onRowAdd={this.handleAddEvent.bind(this)}
                    onRowDel={this.handleRowDel.bind(this)}
                    products={this.state.products}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
}
