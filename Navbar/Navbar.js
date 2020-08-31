import React, { Component } from 'react';
import Signup from './SignUpBox';
import Login from './Login';
import Help from './Help';
import axios from 'axios';
import Error from './Error';
import './Navbar.css';
import LinkAccount from './LinkAccount';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
class Navbar extends React.Component {
    state = {
        pageName: ''
    };

    changePage = name => {
        this.setState({
            pageName: name
        });
    };

    render() {
        return (
            <div className='background'>
                <nav className='navbar navbar-expand-sm bg-danger navbar-dark'>
                    <ul className='navbar-nav'>
                        <li className='nav-item active'>
                            {/* <Link
                to="/signup"
                className="nav-link"
                // onClick={() => this.changePage("signup")}
              >
                SignUp
              </Link> */}
                        </li>
                        <li className='nav-item active'>
                            <Link to='/login' className='nav-link'>
                                Login
                            </Link>
                        </li>
                        <li className='nav-item active'>
                            <Link to='/contact' className='nav-link'>
                                Help
                            </Link>
                        </li>
                        <li className='nav-item active'>
                            <Link to='/about' className='nav-link'>
                                Home
                            </Link>
                        </li>
                    </ul>
                </nav>
                {this.renderPage()}
            </div>
        );
    }

    renderPage = () => {
        switch (this.state.pageName) {
            case 'login':
                return <Login />;
                break;
            case 'signup':
                return <Signup />;
                break;
            case 'help':
                return <Help />;
                break;

            default:
                return null;
                break;
        }
    };
}

export default Navbar;
