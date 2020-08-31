/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */

import React, { Component } from 'react';

export default class SearchBar extends React.Component {
    handleChange() {
        this.props.onUserInput(this.refs.filterTextInput.value);
    }
    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder='Search...'
                    value={this.props.filterText}
                    ref='filterTextInput'
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }
}
