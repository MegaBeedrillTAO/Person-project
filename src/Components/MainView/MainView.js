import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getSettings} from '../../Ducks/Reducers/settingsReducer';
import Commands from './Posts/Commands';
import Replies from './Posts/Replies';



export class MainView extends Component {
    constructor(){
        super();
        this.state = {
            userCommands: [],
            replies: [],
            builtInCommands: ['!commands', '!joke', '!weather'],
            input: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        if(this.props.showRedirect) {
            this.props.getSettings();
        }
        

        return (

            <div className='mainView'>
               <main>
                    <section className='display' style={{border: `20px ${this.props.container_color} solid`, backgroundColor: `${this.props.background_color}` }} >

                    </section>
                    <section className='inputArea'>
                        <input onChange={this.handleInput}/>
                        <button>Submit</button>
                    </section>
               </main>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        showRedirect: reduxState.userReducer.showRedirect,
        name: reduxState.settingsReducer.name,
        background_color: reduxState.settingsReducer.background_color,
        container_color: reduxState.settingsReducer.container_color,
        chat_bubble_color: reduxState.settingsReducer.chat_bubble_color,
        language: reduxState.settingsReducer.language
    }
};

export default connect(mapStateToProps,{
    getSettings
})(MainView)
