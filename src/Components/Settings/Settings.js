import React, { Component } from 'react'
import { connect } from 'react-redux'
import {editSettings} from '../../Ducks/Reducers/settingsReducer'

export class Settings extends Component {
    render() {
        return (
            <div className='settings'>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        name: reduxState.settingsReducer.name,
        background_color: reduxState.settingsReducer.background_color,
        container_color: reduxState.settingsReducer.container_color,
        chat_bubble_color: reduxState.settingsReducer.chat_bubble_color,
        language: reduxState.settingsReducer.language,
        user_id: reduxState.userReducer.user_id
    } 
}



export default connect(mapStateToProps,{
    editSettings
})(Settings)
