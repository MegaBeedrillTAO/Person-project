import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getSettings} from '../../Ducks/Reducers/settingsReducer';



export class MainView extends Component {
    constructor(){
        super();
        this.state = {
            userCommands: [],
            replies: [`Hello ${this.props.name}, type '!commands' to see a list of commands.`]
        }
    }
    render() {
        if(this.props.showRedirect) {
            this.props.getSettings();
        }
        

        return (
            
            <div className='mainView'>
               <main>
                    <section>

                    </section>
               </main>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        showRedirect: reduxState.userReducer.showRedirect,
        name:  reduxState.settingsReducer.name
    }
};

export default connect(mapStateToProps,{
    getSettings
})(MainView)
