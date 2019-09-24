import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getSettings} from '../../Ducks/Reducers/settingsReducer';


export class MainView extends Component {
    componentDidMount(){
        
    }
    render() {
        
        console.log(this.props.name)

        return (
            <div>
                MainView
                {this.props.name}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        
        name:  reduxState.settingsReducer.name
    }
};

export default connect(mapStateToProps,{
    getSettings
})(MainView)
