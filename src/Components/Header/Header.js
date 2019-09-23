import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom';
import {logoutUser} from '../../Ducks/Reducers/userReducer';
import {changePage} from '../../Ducks/Reducers/appReducer';

export class Header extends Component {
    constructor(){
        super();
        this.state ={

        }
    }
    
    goToSettings = () =>{
        this.props.changePage('/Settings');
        return <Redirect to='/Settings'/>
    }

    goToMain = () => {
        this.props.changePage('/Main');
        // <Redirect to='/Main'/>
    }

    logout = () =>{
        this.props.changePage('/');
        this.props.logoutUser();
        //return <Redirect to='/'/>
    }
    
    render() { 
        // if (this.props.page === '/Settings'){
        //     return <Redirect to='/Settings'/>
        // }
        // console.log('hit')

        


        return (
            <div className='header'>
                {this.props.page === '/Settings' 
                ? <Redirect to='/Settings' />
                : null}
                {
                    this.props.page === '/' ? 
                    <h1>Assistant</h1> :
                    
                    this.props.page === '/Main' ? 
                    <section><button onClick={this.logout}>Logout</button> <h2>Assistant</h2> <button onClick={this.goToSettings}>&#9881;</button></section> :
                    
                    this.props.page === '/Settings' ? 
                    <main><h2>Assistant</h2> <button onClick={this.goToMain}>&#8592;</button> </main> : 
                    null
        
                }
                
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    page: reduxState.appReducer.currentPage
})



export default connect(mapStateToProps,{
    logoutUser,
    changePage
})(Header)

