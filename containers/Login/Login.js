import React, { Component } from 'react';
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';
import i18Strings from '../../constants/i18Strings';
import Constants from '../../constants/Constants';
import userServices from '../../services/userServices';
import {
    addUserData,
    userName,
    userPassword,
    userRole
} from '../../store/actions/AddUserRoleActions';

import { connect } from 'react-redux';

import './Login.css';

class Login extends Component {
    _getUserEmail = event => {
        console.log('inside user email');
        event.preventDefault();
        this.props.userName(event.target.value);
    };
    _getUserPassword = event => {
        console.log('inside user email');
        event.preventDefault();
        this.props.userPassword(event.target.value);
    };
    _getUserRole = event => {
        console.log('inside user email');
        event.preventDefault();
        this.props.userRole(event.target.value);
    };
    login_admin = () => {
        return userServices
            .saveAdmin()
            .then(response => {
                // console.log(response, 'response');

                if (
                    response &&
                    response.status === Constants.HTTP_STATUS_OK_SUCCESS
                ) {
                    console.log(response, 'response 200');
                    this.props.history.replace('/viewAdminDashboard');
                }
            })

            .catch(error => {
                console.log(
                    'srror catch block',
                    error,
                    error.response,
                    error.response.data,
                    error.response.data.statusMessage,
                    error.response.data.errorInfo[0].errorMessage,
                    error.response.status
                );
                // if (error.response && error.response.status == 400) {
                //     this.setState({
                //         isError: true
                //     });
            });
    };
    login_user = () => {
        return userServices
            .saveUser()
            .then(response => {
                // console.log(response, 'response');

                if (
                    response &&
                    response.status === Constants.HTTP_STATUS_OK_SUCCESS
                ) {
                    console.log(response, 'response 200');
                    this.props.history.replace('/viewUserDashboard');
                }
            })

            .catch(error => {
                console.log(
                    'srror catch block',
                    error,
                    error.response,
                    error.response.data,
                    error.response.data.statusMessage,
                    error.response.data.errorInfo[0].errorMessage,
                    error.response.status
                );
                // if (error.response && error.response.status == 400) {
                //     this.setState({
                //         isError: true
                //     });
            });
    };
    render() {
        // let labels = [
        //     {
        //         id: 'Email',
        //         Name: 'Email Id:',
        //         type: 'text',
        //         text: 'email',
        //         placeholder: 'Enter Email'
        //     },
        //     {
        //         id: 'Password',
        //         Name: 'Password:',
        //         type: 'password',
        //         text: 'password',
        //         placeholder: 'Enter password'
        //     },
        //     {
        //         id: 'Repeat_Password',
        //         Name: 'Repeat Password:',
        //         type: 'password',
        //         text: 'repeat password',
        //         placeholder: 'Enter password again to verify'
        //     },
        //     {
        //         id: 'Role',
        //         Name: 'Role:',
        //         type: 'text',
        //         text: 'role',
        //         placeholder: 'Enter your role'
        //     }
        // ];

        return (
            <div>
                <form action='/viewUserDashboard'>
                    {/* <form> */}
                    <div className='container'>
                        <h1 style={{ color: 'black' }}>{i18Strings.header}</h1>
                        {/* <Button
                            type='button'
                            className='btn btn-outline-primary'
                            buttonName={i18Strings.add_user}
                            style={{
                                backgroundColor: 'green',
                                marginRight: '1000px'
                            }}
                        />
                        <Button
                            type='button'
                            className='btn btn-outline-primary'
                            buttonName={i18Strings.admin_login}
                            style={{
                                backgroundColor: 'green',
                                // marginRight: '680px',
                                marginTop: '-56px',
                                marginLeft: '147px'
                            }}
                        /> */}
                        <p>{i18Strings.header_msg}</p>
                        <hr />
                        {/* {labels.map((label, index) => {
                            return (
                                <Label
                                    labelName={label.Name}
                                    type={label.type}
                                    text={label.text}
                                    placeholder={label.placeholder}
                                    name={label.Name}
                                    id={label.id}
                                    isRequired={true}
                                />
                            );
                        })} */}
                        <Label labelName={'Email Id :'}>
                            <input
                                style={{ color: 'black' }}
                                type={'text'}
                                placeholder={'enter email id'}
                                name={'email'}
                                id={'email'}
                                isRequired={true}
                                onChange={this._getUserEmail}
                            />
                        </Label>

                        <Label labelName={'Password :'}>
                            <input
                                style={{ color: 'black' }}
                                type={'password'}
                                text={'pass'}
                                placeholder={'Enter password'}
                                name={'psw'}
                                id={'psw'}
                                isRequired={true}
                                onChange={this._getUserPassword}
                            />
                        </Label>
                        <Label labelName={'Repeat Password :'}>
                            <input
                                style={{ color: 'black' }}
                                type={'password'}
                                text={'pass-repeat'}
                                placeholder={'Enter password again to confirm'}
                                name={'psw-rpt'}
                                id={'rpt-pass'}
                                isRequired={true}
                                onChange={this._getUserRole}
                            />
                        </Label>
                        <Label labelName={'Role:'}>
                            <input
                                style={{ color: 'black' }}
                                type={'text'}
                                text={'pass-repeat'}
                                placeholder={'Enter user role'}
                                name={'psw-rpt'}
                                id={'rpt-pass'}
                                isRequired={true}
                                onChange={this._getUserRole}
                            />
                        </Label>
                        <hr />
                        <p style={{ color: 'black' }}>
                            {i18Strings.msg}{' '}
                            <a href='#'>{i18Strings.terms_Privacy}</a>.
                        </p>
                        <Button
                            buttonName={Constants.login_user}
                            className='registerbtn'
                            onClick={this.login_user}
                        />
                        <Button
                            buttonName={Constants.login_admin}
                            className='registerbtn'
                            onClick={this.login_admin}
                        />
                    </div>
                    <div className='container signin'>
                        <p style={{ color: 'black' }}>
                            {i18Strings.account_exists_msg}{' '}
                            <a href='#'>{i18Strings.Sign_in}</a>.
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    addUser: state.addUser
});

const mapDispatchToProps = dispatch => {
    return {
        addUserData: (key, value) => dispatch(addUserData(key, value)),
        userName: name => dispatch(userName(name)),
        userPassword: name => dispatch(userPassword(name)),
        userRole: name => dispatch(userRole(name))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
