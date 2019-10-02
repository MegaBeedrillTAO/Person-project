import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getSettings} from '../../Ducks/Reducers/settingsReducer';
import Commands from './Posts/Commands';
import {builtIn} from '../builtInCommands';
import textToSpeech from './textToSpeech';
import Axios from 'axios';




export class MainView extends Component {
    constructor(){
        super();
        this.state = {
            posts: [{content: 'Type !commands to see all commands.', type:'reply'}],
            reply: '',
            input: '',
            temp: '',
            condition: '',
            joke: ''
        }
    }

    componentDidMount () {
       Axios.get('https://official-joke-api.appspot.com/jokes/random')
       .then(response => this.setState({joke: response.data.setup + ' ' + response.data.punchline}))
    }

    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    submitCommand = () => {
        this.setState({
            posts: [...this.state.posts,
                {content: this.state.input,
                type: 'command'}
            ],
            wait: true
        }, this.createReply)
        
    }
    getTranslate = async (text, target) =>{
       return await Axios.post('/translate', {
            text: text,
            target: target
        }).then(response => response.data)
    }
    getJoke = async () => {
        return await Axios.get('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.data.setup + ' ' + response.data.punchline)
    }
    getWeather = async () =>{
         await Axios.get('/weather').then(response => this.setState({temp: response.data.main.temp, condition: response.data.weather[0].description}))
    }
    getCurrentSettings = async () =>{
        return await Axios.get('/settings/current').then(response => response.data);
    }
    createReply = async () => {

        switch(this.state.input){
            case '!hello':{
                let greeting = builtIn[3].content + this.props.name;
                const translate = await this.getTranslate(greeting, this.props.language);
                textToSpeech(translate);
                this.setState({
                    posts: [
                        ...this.state.posts,
                        {content: translate, type: 'reply'}
                    ],
                    input: ''
                })
                break;
            }
            case '!joke':{
                let joke = await this.getJoke();
                const translate = await this.getTranslate(joke, this.props.language);
                textToSpeech(translate);
                this.setState({
                    posts: [
                        ...this.state.posts,
                        {content: translate, type: 'reply'}
                    ],
                    input: ''
                })
                break;
            }
            case '!commands':{
                textToSpeech(builtIn[0].content);
                this.setState({
                    posts: [
                        ...this.state.posts,
                        {content: builtIn[0].content, type: 'reply'}
                    ],
                    input: ''
                })
                break;
            }
            case '!introduce': {
                const translate = await this.getTranslate(builtIn[4].content, this.props.language);
                textToSpeech(translate);
                this.setState({
                    posts: [
                        ...this.state.posts,
                        {content: translate, type: 'reply'}
                    ],
                    input: ''
                })
                break;
            }
            case '!weather': {
                await this.getWeather();
                const weather = `The current temperature is ${this.state.temp} degrees and the forecast is ${this.state.condition}.`
                const translate = await this.getTranslate(weather, this.props.language);
                textToSpeech(translate);
                this.setState({
                    posts: [
                        ...this.state.posts,
                        {content: translate, type: 'reply'}
                    ],
                    input: ''
                })
                break;
            }
            case '!settings': {
                const settings = await this.getCurrentSettings();
                let content = `Your settings: username is ${settings.username}, name you wish to be addressed by is ${settings.name}, your colors are ${settings.background_color}, ${settings.container_color}, and ${settings.chat_bubble_color}. Location is ${settings.zipcode}, ${settings.country}.`;
                const translate = await this.getTranslate(content, this.props.language);
                textToSpeech(translate);
                this.setState({
                    posts: [
                        ...this.state.posts,
                        {content: translate, type: 'reply'}
                    ],
                    input: ''
                })
                break;
            }
            
            default:
                const translate = await this.getTranslate("I don't know that command", this.props.language);
                textToSpeech(translate);
                this.setState({
                    posts: [
                        ...this.state.posts,
                        {content: translate, type: 'reply'}
                    ],
                    input: ''
                })

        }
  }
    
    render() {
        
        if(this.props.showRedirect) {
            this.props.getSettings();
        }
         
        const content = this.state.posts.map((el, i) => (
            
            <Commands
                key={i}
                content={el.content}
                color= {this.props.chat_bubble_color}
                type={el.type}
            />
            
            
        ))
        
        return (

            <div className='mainView'>
                <div className='left-side'>
                    <h2>Command Descriptions</h2>
                    <ul>
                        <li>!commands: Gives a list of all commands.</li>
                        <li>!hello: Greets you with the name you wish to be addressed by.</li>
                        <li>!introduce: The app introduces itself.</li>
                        <li>!joke: The app tells a joke.</li>
                        <li>!weather: Gives the weather based on current location settings.</li>
                        <li>!settings: Lists you current settings.</li>
                    </ul>
                </div>
               <main>
                   
                    <section className='display' style={{border: `20px ${this.props.container_color} solid`, backgroundColor: `${this.props.background_color}` }} >
                        {content}
                    </section>
                   
                    
                    <section className='inputArea'>
                        <input onChange={this.handleInput} value={this.state.input}/>
                        <button onClick={this.submitCommand}>Submit</button>
                        
                    </section>
                    
               </main>
                <div className='right-side'>
                    <p>
                    Welcome, {this.props.name}. My commands are listed to the side or you can type !commands to see the list in my display.
                    I hope your experience with me is an enjoyable one. 
                    </p>
                    <p>
                        Here is a joke to start things off: 
                    </p>
                    {this.state.joke}
                </div>
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
