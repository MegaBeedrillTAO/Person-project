import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import {loginUser, registerUser} from '../../Ducks/Reducers/userReducer.js';

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
    }

    handleRegister = () => {
        const{username, password} = this.state;
        this.props.registerUser({username, password});
    }
    
    render() {
        if(this.props.user_id){
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
                    <input name='password' onChange={this.handleInput}/>
                </section>
                <section>
                    <button onClick={this.handleLogin}>Login</button>
                    <button onClick={this.handleRegister}>Register</button>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    user_id: reduxState.userReducer.user_id
})



export default connect(mapStateToProps,{
    loginUser,
    registerUser
})(Login)
