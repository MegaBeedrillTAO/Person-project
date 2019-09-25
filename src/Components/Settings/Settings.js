import React, { Component } from 'react'
import { connect } from 'react-redux'
import {editSettings} from '../../Ducks/Reducers/settingsReducer';
import EditFields from '../MainView/Posts/EditFields';

export class Settings extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            background_color: '',
            container_color: '',
            chat_bubble_color: '',
            language: ''
        }
    }
    
    handleName =(e) =>{
        this.setState({name: e.target.value})
        
    }
    handleBackgroundColor =e =>{
        if (this.checkColor(e.target.value.toLowerCase())){
            this.setState({background_color: e.target.value.toLowerCase()})
        }
        else{
            this.setState({background_color: this.props.background_color})
        }
    }
    handleContainerColor = e => {
        if (this.checkColor(e.target.value.toLowerCase())){
            this.setState({container_color: e.target.value.toLowerCase()})
        }
        else{
            this.setState({container_color: this.props.container_color})
        }
    }
    handleChatColor = e =>{
        if (this.checkColor(e.target.value.toLowerCase())){
            this.setState({chat_bubble_color: e.target.value.toLowerCase()})
        }
        else{
            this.setState({chat_bubble_color: this.props.chat_bubble_color})
        }
    }
    handleLanguage = e => {
        this.setState({language: e.target.value})
    }
    checkColor = color => {
        let s = new Option().style;
        s.color = color;
        return s.color === color;
    }
    render() {
        return (
            <div className='settings'>
                <EditFields
                function={this.handleName}
                content={'Name:'}
                />
                <EditFields
                function={this.handleBackgroundColor}
                content={'Background Color:'}
                />
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
