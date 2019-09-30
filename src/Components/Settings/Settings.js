import React, { Component } from 'react'
import { connect } from 'react-redux'
import {editSettings} from '../../Ducks/Reducers/settingsReducer';
import EditFields from '../MainView/Posts/EditFields';
import DeleteAccount from './DeleteAccount';
import {changePage} from '../../Ducks/Reducers/appReducer';



export class Settings extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            background_color: '',
            container_color: '',
            chat_bubble_color: '',
            language: '',
            confirmation: false,
            zipcode: 0,
            country: ''
        }
    }

    componentDidMount(){
        this.setState({
            name: this.props.name,
            background_color: this.props.background_color,
            container_color: this.props.container_color,
            chat_bubble_color: this.props.chat_bubble_color,
            language: this.props.language,
            zipcode: this.props.zipcode,
            country: this.props.country
        })
    }
    
    handleName =(e) =>{
        if (e.target.value === ''){
            this.setState({name: this.props.name})
        }
        else{
            this.setState({name: e.target.value})
        }
        
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

    handleZip = e => {
        if (e.target.value === 0 || e.target.value === ''){
            this.setState({zipcode: this.props.zipcode})
        }
        else{
            this.setState({zipcode: e.target.value})
        }
    }

    handleCountry = e => {
        if (e.target.value === ''){
            this.setState({country: this.props.country})
        }
        else{
            this.setState({country: e.target.value})
        }
    }

    saveChanges =  () =>{
        const {name, background_color, container_color, chat_bubble_color, language, zipcode, country} = this.state;
        this.props.editSettings({
            name,
            background_color,
            container_color,
            chat_bubble_color,
            language,
            user_id: this.props.user_id,
            zipcode,
            country
        });
        
        
    }
    toggleDelete = () => {
        this.setState({confirmation: !this.state.confirmation})
    }
    render() {
        return (
            <div className='settings'>
                <EditFields
                function={this.handleName}
                content={'Name:'}
                type={'normal'}
                inputType={'text'}
                />
                <EditFields
                function={this.handleBackgroundColor}
                content={'Background Color:'}
                type={'normal'}
                inputType={'text'}
                />
                <EditFields
                function={this.handleContainerColor}
                content={'Container Color:'}
                type={'normal'}
                inputType={'text'}
                />
                <EditFields
                function={this.handleChatColor}
                content={'Chat Bubble Color:'}
                type={'normal'}
                inputType={'text'}
                />
                <EditFields
                function={this.handleZip}
                content={'Zipcode'}
                type={'normal'}
                inputType={'number'}
                />
                <EditFields
                function={this.handleCountry}
                content={'Country'}
                type={'normal'}
                inputType={'text'}
                />
                <EditFields
                function={this.handleLanguage}
                content={'Language:'}
                type={'drop'}
                inputType={'text'}
                />
                <button onClick={this.saveChanges}>Save</button>
                <button onClick={this.toggleDelete}>Delete Account</button>
                {this.state.confirmation ? 
                    <>
                    <DeleteAccount
                        toggle={this.toggleDelete}
                    />
                    </>: null
                }

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
        user_id: reduxState.userReducer.user_id,
        zipcode: reduxState.settingsReducer.zipcode,
        country: reduxState.settingsReducer.country
    } 
}



export default connect(mapStateToProps,{
    editSettings,
    changePage
})(Settings)
