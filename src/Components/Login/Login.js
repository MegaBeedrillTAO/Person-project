import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import {loginUser, registerUser} from '../../Ducks/Reducers/userReducer.js';
import {changePage} from '../../Ducks/Reducers/appReducer';
import {getSettings} from '../../Ducks/Reducers/settingsReducer';


export class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value})
     }

    handleLogin = () => {
        const{username, password} = this.state;
        this.props.loginUser({username, password});
        this.props.changePage('/Main');
    }

    handleRegister = () => {
        const{username, password} = this.state;
        this.props.registerUser({username, password});
        this.props.changePage('/Main');
    }
    
    render() {
        if(this.props.user_id && this.props.showRedirect){
           return <Redirect to='/Main'/>
        }
        return (
            <div className = 'login'>
                <section>
                    <p>Username:</p>
                    <input name='username' onChange={this.handleInput}/>
                </section>
                <section>
                    <p>Password:</p>
                    <input type='password' name='password' onChange={this.handleInput}/>
                </section>
                <section className='login-buttons'>
                    <button onClick={this.handleLogin}>Login</button>
                    <button onClick={this.handleRegister}>Register</button>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    user_id: reduxState.userReducer.user_id,
    showRedirect: reduxState.userReducer.showRedirect
})



export default connect(mapStateToProps,{
    loginUser,
    registerUser,
    changePage,
    getSettings
})(Login)
