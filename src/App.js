/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import React from 'react';
import Login from './containers/Login/Login';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    {/* <img src={logo} className='App-logo' alt='logo' />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className='App-link'
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Learn React
                    </a> */}
                    <Login />
                </header>
            </div>
        );
    }
}

export default App;
